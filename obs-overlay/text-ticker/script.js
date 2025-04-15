const victory_messages = [
    "{victor} throws their hands in the air and yells BINGO! Leaving {loser} alone and bingoless. Well done {members}!",
    "{victor} has proven themselves the alpha grandma after a fist fight with {loser}. {members} flex their bingo wings in dominance!",
    "{loser} tripped and fell in a cane duel against {victor}. {members} are the last seniors standing!",
    "{victor} and {loser} drag raced their wheelchairs. {members} fortunately brought motorized wheelchairs and won. Good job {victor}!",
    "{victor} crimped the hose on {loser}'s CPAP machine. {loser} is eliminated from play. Victory Royal for {members}!"
];

const scrollingText = document.getElementsByClassName("text")[0];
const textBox = document.getElementsByClassName("box")[0];

var searchParams = new URLSearchParams(window.location.search)
var targetMatchId = searchParams.get("match");
var tournamentId = searchParams.get("id");

var queuedMessages = [];

var tournament = new Tournament(tournamentId, function(){
    setInterval(() => { tournament.update(); }, 5000);
});

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
            animTextWidth = measureText(animCurrentText);
            scrollingText.style.right = "-1450px";
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
        scrollingText.style.right = (animFrame * (animTextWidth / stage2Length) - 1450).toString() + "px";

        if (animFrame == stage2Length){
            animFrame = 0;
            animStage = 2;

            if (queuedMessages.length > 0){
                console.log("NEW MESSAGE");
                pushScrollText();
                animStage = 1;
                scrollingText.style.right = "-1900px";
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

tournament.onScoreUpdate((match) => {
    if (match.id == targetMatchId){
        //Update Overlay in sheets
        console.log("score update!!!");
    }
});

tournament.onMatchResult((match) => {
    let winner = match.result == 1 ? match.team1 : match.team2;
    let loser = match.result == 2 ? match.team1 : match.team2;
    let members = tournament.teams.get(winner).members;
    let member_text = members[0].username;
    for (var i = 1; i < members.length; i++){
        if (i == members.length - 1) member_text += ", & " + members[i].username;
        else member_text += ", " + members[i].username;
    }

    let message = victory_messages[Math.floor(Math.random() * victory_messages.length)];
    message = message.replaceAll("{victor}", tournament.teams.get(winner.id)).replaceAll("{loser}", tournament.teams.get(loser.id)).replaceAll("{members}", member_text);

    queuedMessages.push(message);

    if (animInterval == null){
        pushScrollText();
        animInterval = setInterval(animate, 10);
    }
    console.log("WORKED!!!");
});

function measureText(txt){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "60px Splatoon2";
    return ctx.measureText(txt).width + 1450;
}
