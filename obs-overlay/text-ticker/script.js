const victory_messages = [
    "{victor} throws their hands in the air and yells BINGO! Leaving {loser} alone and bingoless. Well done {members}!",
    "{victor} has proven themselves the alpha grandma after a fist fight with {loser}. {members} flex their bingo wings in dominance!",
    "{loser} tripped and fell in a cane duel against {victor}. {members} are the last seniors standing!",
    "{victor} and {loser} drag raced their wheelchairs. {members} fortunately brought motorized wheelchairs and won. Good job {victor}!",
    "{victor} crimped the hose on {loser}'s CPAP machine. {loser} is eliminated from play. Victory Royal for {members}!"
];

const scrollingText = document.getElementsByClassName("text")[0];
const textBox = document.getElementsByClassName("box")[0];
const alphaNameBox = document.getElementsByClassName("teamAlphaName")[0];
const alphaScoreBox = document.getElementsByClassName("teamAlphaScore")[0];
const bravoNameBox = document.getElementsByClassName("teamBravoName")[0];
const bravoScoreBox = document.getElementsByClassName("teamBravoScore")[0];

var targetMatchId;
var tournamentId;

var queuedMessages = [];

var tournament;

var animInterval = null;
var animFrame = 0;
var animStage = 0;
var animCurrentText = "";
var animTextWidth;
const stage1Length = 50;
const stage2Length = 3000;
const stage3Length = 50;
function animate(){
    if (animStage == 0){
        //Open
        if (animFrame == 0){
            animTextWidth = measureText(animCurrentText) + 2000;
            scrollingText.style.right = "-1800px";
        }

        textBox.style.bottom = ((animFrame / stage1Length * 200) - 200).toString() + "px";
        textBox.style.width = (animFrame / stage1Length * 1450).toString() + "px";
        textBox.style.height = (animFrame / stage1Length * 100).toString() + "px";

        if (animFrame == stage1Length){
            animFrame = 0;
            animStage = 1;

            textBox.style.width = "1450px";
            textBox.style.height = "100px";

            return;
        }
    }
    else if (animStage == 1){
        //Scroll
        scrollingText.style.right = (animFrame * (animTextWidth / stage2Length) - 1800).toString() + "px";

        if (animFrame == stage2Length){
            animFrame = 0;
            animStage = 2;

            if (queuedMessages.length > 0){
                pushScrollText();
                animStage = 1;
                scrollingText.style.right = "-1800px";
            }

            return;
        }
    }
    else if (animStage == 2){
        //Close
        textBox.style.bottom = ((animFrame / stage1Length * -200)).toString() + "px";

        textBox.style.width = ((1 - (animFrame / stage1Length)) * 1450).toString() + "px";
        textBox.style.height = ((1 - (animFrame / stage1Length)) * 100).toString() + "px";

        if (animFrame == stage3Length){
            animFrame = 0;
            animStage = 0;

            if (queuedMessages.length == 0){
                clearInterval(animInterval);
                animInterval = null;
            }

            return;
        }
    }
    
    
    animFrame++;
}

function pushScrollText(){
    animCurrentText = queuedMessages.pop();
    scrollingText.innerHTML = animCurrentText;
}

function onScoreUpdate(match) {
    if (match.id == targetMatchId){
        //Update Overlay in sheets
        console.log("score update!!!");
    }
}

function onMatchResult(match) {
    let winner = match.result == 1 ? match.team1 : match.team2;
    let loser = match.result == 2 ? match.team1 : match.team2;
    let members = tournament.teams.get(winner).members;
    let member_text = members[0].username;
    for (var i = 1; i < members.length; i++){
        if (i == members.length - 1) member_text += ", & " + members[i].username;
        else member_text += ", " + members[i].username;
    }

    let message = victory_messages[Math.floor(Math.random() * victory_messages.length)];
    message = message.replaceAll("{victor}", tournament.getTeamName(winner)).replaceAll("{loser}", tournament.getTeamName(loser)).replaceAll("{members}", member_text);

    queuedMessages.push(message);

    if (animInterval == null){
        pushScrollText();
        animInterval = setInterval(animate, 10);
    }
}

function measureText(txt){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "60px Splatoon2";
    return ctx.measureText(txt).width;
}

const sheetsAppUrl = "https://script.google.com/macros/s/AKfycbwGTvqjnRDoOGYxXxqbCFb-RvPXB8D8nxusRgc-ZYo5MwmSd3EEHKpWlkZeBKeK_qFPCw/exec";
const sheetParams = {
  spreadsheetId: "1RiaaW2m5NDao1XgKrWoyMuUkhxL2FPlxIA9c48YYVls",
  sheetName: "Sheet1"
};
const q = new URLSearchParams(sheetParams);
const url = sheetsAppUrl + "?" + q;

var spreadSheetData = {};
var swapTeams = false;

function initializeSendouTournament(){
    fetch(url).then(res => res.json())
        .then(res => {
            spreadSheetData = res.values;
            tournamentId = spreadSheetData[0][1];
            swapTeams = spreadSheetData[2][1];

            tournament = new Tournament(tournamentId, function(){
                updateScores();
                setInterval(() => { 
                    updateSpreadSheet();
                    tournament.update();
                    updateScores();
                }, 5000);
            }, function(){
                console.warn("Tournament fetch failed, trying again in 10 seconds...");
                setTimeout(initializeSendouTournament, 10000);
            });

            tournament.onScoreUpdate(onScoreUpdate);
            tournament.onMatchResult(onMatchResult);
        });
}

function updateSpreadSheet(){
    fetch(url)
        .then(res => res.json())
        .then(res => {
            spreadSheetData = res.values;
            swapTeams = spreadSheetData[2][1];
        });
}

function updateScores(){
    if (tournament.data.ctx.castedMatchesInfo != null) targetMatchId = tournament.data.ctx.castedMatchesInfo.castedMatches[0].matchId;
    
    if (targetMatchId != null && targetMatchId != 0 && targetMatchId != ""){
        console.log(targetMatchId);
        var match = tournament.getMatch(targetMatchId);
        alphaNameBox.textContent = tournament.getTeamName(swapTeams ? match.team2 : match.team1);
        alphaScoreBox.textContent = swapTeams ? match.score2 : match.score1;
        bravoNameBox.textContent = tournament.getTeamName(swapTeams ? match.team1 : match.team2);
        bravoScoreBox.textContent = swapTeams ? match.score1 : match.score2;
    }
}

initializeSendouTournament();
