const map = document.getElementsByClassName("map")[0];
const mode = document.getElementsByClassName("mode")[0];
const roundTitle = document.getElementsByClassName("tournament-title")[0];

const roundNames = ["Groups Round {round}", "Semi-Finals", "Grand Finals"];

var targetMatchId;
var tournamentUrl;
var roundTitleIndex = 0;

var tournament;

function onScoreUpdate(match) {
    /*if (match.id == targetMatchId){
        var mapIndex = match.score1 + match.score2;
        map.style.backgroundImage = "url('../../resources/maps/" + tournament.map_list[mapIndex].map + ".png')";
        mode.style.backgroundImage = "url('../../resources/modes/" + tournament.map_list[mapIndex].mode + ".png')";
    }*/
}

const sheetsAppUrl = "https://script.google.com/macros/s/AKfycbwGTvqjnRDoOGYxXxqbCFb-RvPXB8D8nxusRgc-ZYo5MwmSd3EEHKpWlkZeBKeK_qFPCw/exec";
const sheetParams = {
  spreadsheetId: "1RiaaW2m5NDao1XgKrWoyMuUkhxL2FPlxIA9c48YYVls",  // Please set your Google Spreadsheet ID.
  sheetName: "Sheet1"  // Please set the sheet name you want to retrieve the values.
};
const q = new URLSearchParams(sheetParams);
const url = sheetsAppUrl + "?" + q;

const encoderData = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
    "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "=", "+", "[", "]", "{", "}", "|",
    ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?",
    "-a", "-b", "-c", "-d", "-e", "-f", "-g", "-h", "-i", "-j",
    "-k", "-l", "-m", "-n", "-o", "-p", "-q", "-r", "-s", "-t",
    "-u", "-v", "-w", "-x", "-y", "-z", "-A", "-B", "-C", "-D",
    "-E", "-F", "-G", "-H", "-I", "-J", "-K", "-L", "-M", "-N",
    "-O", "-P", "-Q", "-R", "-S", "-T", "-U", "-V", "-W", "-X",
    "-Y", "-Z", "-0", "-1", "-2", "-3", "-4", "-5", "-6", "-7",
    "-8", "-9", "-!", "-@", "-#", "-$", "-^", "-&", "-*", "-("
];

function encodeBoardTile(index){
    return encoderData[index];
}

function decodeBoard(data){
    var boardData = [];
    
    var x = 0;
    for (var i = 0; i < data.length; i++){
        boardData[x] = encoderData.indexOf(data[i]);
        if (boardData[x] == -1){
            boardData[x] = encoderData.indexOf(data[i] + data[i+1]);
            i++;
        }
        x++;
    }
    return boardData;
}

var spreadSheetData = {};

function initializeSendouTournament(){
    fetch(url)
        .then(res => res.json())
        .then(res => {
            spreadSheetData = res.values;
            tournamentUrl = spreadSheetData[0][1];
            loadBoardImages(spreadSheetData[3 + roundTitleIndex][1]);

            tournament = new Tournament(tournamentUrl, function(){
                if (tournament.data.ctx.castedMatchesInfo != null){
                    targetMatchId = tournament.data.ctx.castedMatchesInfo.castedMatches[0].matchId;
                    tournament.updateURL(tournamentUrl + "/matches/" + targetMatchId);

                    //Get Round Index (Groups: 0, Bracket Round 1: 1, Grands: 2)
                    getRoundIndex();
                }

                setInterval(() => { 
                    updateSpreadSheet();
                    tournament.update();
                    updateMapMode();
                }, 5000);
            }, function(){
                console.warn("Tournament fetch failed, trying again in 10 seconds...");
                setTimeout(initializeSendouTournament, 10000);
            });

            tournament.onScoreUpdate(onScoreUpdate);
        });
}

function getRoundIndex(){
    roundTitleIndex = 0;
    var targetRoundId = 0;
    var targetStageId = 0;
    var roundNumber;
    for (var i = 0; i < tournament.data.data.match.length; i++){
        if (tournament.data.data.match[i].id == targetMatchId){
            targetRoundId = tournament.data.data.match[i].round_id;
            targetStageId = tournament.data.data.match[i].stage_id;
            break;
        }
    }
    var type;
    for (var i = 0; i < tournament.data.data.stage.length; i++){
        if (tournament.data.data.stage[i].id == targetStageId){
            type = tournament.data.data.stage[i].type;
            break;
        }
    }
    if (type != "swiss"){
        for (var i = 0; i < tournament.data.data.round.length; i++){
            if (tournament.data.data.round[i].id == targetRoundId){
                roundTitleIndex = tournament.data.data.round[i].number;
                break;
            }
        }
    }
    else{
        for (var i = 0; i < tournament.data.data.round.length; i++){
            if (tournament.data.data.round[i].id == targetRoundId){
                roundNumber = tournament.data.data.round[i].number;
                break;
            }
        }
        
    }

    roundTitle.innerHTML = roundNames[roundTitleIndex].replace("{round}", roundNumber);
}

function updateSpreadSheet(){
    fetch(url)
        .then(res => res.json())
        .then(res => {
            spreadSheetData = res.values;

            if (spreadSheetData[3 + roundTitleIndex][1] != rawBoardData){
                loadBoardImages(spreadSheetData[3 + roundTitleIndex][1]);
            }
        });
}

function updateMapMode(){
    if (targetMatchId == null && tournament.data.ctx.castedMatchesInfo != null){
        targetMatchId = tournament.data.ctx.castedMatchesInfo.castedMatches[0].matchId;
        tournament.updateURL(tournamentUrl + "/matches/" + targetMatchId);
    }

    if (targetMatchId != null){
        getRoundIndex();

        if (targetMatchId != tournament.data.ctx.castedMatchesInfo.castedMatches[0].matchId){
            targetMatchId = tournament.data.ctx.castedMatchesInfo.castedMatches[0].matchId;
            tournament.updateURL(tournamentUrl + "/matches/" + targetMatchId);
        }
        
        var targetMatch = tournament.getMatch(targetMatchId);
        var mapIndex = Math.min(targetMatch.score1 + targetMatch.score2, tournament.map_list.length - 1);
        map.style.backgroundImage = "url('../../resources/maps/" + tournament.map_list[mapIndex].map + ".png')";
        mode.style.backgroundImage = "url('../../resources/modes/" + tournament.map_list[mapIndex].mode + ".png')";
    }
}

//Bingo Stuff
const cells = document.getElementsByClassName("tile");

const image_path = "../../resources/obs/weapon-images/";

function bingoClick(evt, index){
    if (evt.button == 0) bingoOrange(index);
    else if (evt.button == 2) bingoBlue(index);
}

function bingoBlue(index){
    var className = cells[index].classList[1];
    var enabled = className == "blue" || className == "both";
    var altEnabled = className == "orange" || className == "both";

    var newClass = enabled ? (altEnabled ? "orange" : "none") : (altEnabled ? "both" : "blue");
    cells[index].classList.remove(className);
    cells[index].classList.add(newClass);
}

function bingoOrange(index){
    var className = cells[index].classList[1];
    var enabled = className == "orange" || className == "both";
    var altEnabled = className == "blue" || className == "both";

    var newClass = enabled ? (altEnabled ? "blue" : "none") : (altEnabled ? "both" : "orange");
    cells[index].classList.remove(className);
    cells[index].classList.add(newClass);
}

var rawBoardData;
function loadBoardImages(boardText){
    rawBoardData = boardText;
    var boardData = decodeBoard(rawBoardData);
    for (var i = 0; i < cells.length; i++){
        var weaponName = boardData[i];
        cells[i].id = weaponName;
        cells[i].className = "tile none";
        cells[i].children[0].style.backgroundImage = "url('" + image_path + weaponName + "_Blue.png')";
        cells[i].children[1].style.backgroundImage = "url('" + image_path + weaponName + "_Orange.png')";
        cells[i].children[2].style.backgroundImage = "url('" + image_path + weaponName + "_Unchecked.png')";
    }
}

cells[0].addEventListener("mousedown", (evt) => { bingoClick(evt, 0); });
cells[1].addEventListener("mousedown", (evt) => { bingoClick(evt, 1); });
cells[2].addEventListener("mousedown", (evt) => { bingoClick(evt, 2); });
cells[3].addEventListener("mousedown", (evt) => { bingoClick(evt, 3); });
cells[4].addEventListener("mousedown", (evt) => { bingoClick(evt, 4); });

cells[5].addEventListener("mousedown", (evt) => { bingoClick(evt, 5); });
cells[6].addEventListener("mousedown", (evt) => { bingoClick(evt, 6); });
cells[7].addEventListener("mousedown", (evt) => { bingoClick(evt, 7); });
cells[8].addEventListener("mousedown", (evt) => { bingoClick(evt, 8); });
cells[9].addEventListener("mousedown", (evt) => { bingoClick(evt, 9); });

cells[10].addEventListener("mousedown", (evt) => { bingoClick(evt, 10); });
cells[11].addEventListener("mousedown", (evt) => { bingoClick(evt, 11); });
cells[12].addEventListener("mousedown", (evt) => { bingoClick(evt, 12); });
cells[13].addEventListener("mousedown", (evt) => { bingoClick(evt, 13); });
cells[14].addEventListener("mousedown", (evt) => { bingoClick(evt, 14); });

cells[15].addEventListener("mousedown", (evt) => { bingoClick(evt, 15); });
cells[16].addEventListener("mousedown", (evt) => { bingoClick(evt, 16); });
cells[17].addEventListener("mousedown", (evt) => { bingoClick(evt, 17); });
cells[18].addEventListener("mousedown", (evt) => { bingoClick(evt, 18); });
cells[19].addEventListener("mousedown", (evt) => { bingoClick(evt, 19); });

cells[20].addEventListener("mousedown", (evt) => { bingoClick(evt, 20); });
cells[21].addEventListener("mousedown", (evt) => { bingoClick(evt, 21); });
cells[22].addEventListener("mousedown", (evt) => { bingoClick(evt, 22); });
cells[23].addEventListener("mousedown", (evt) => { bingoClick(evt, 23); });
cells[24].addEventListener("mousedown", (evt) => { bingoClick(evt, 24); });

initializeSendouTournament();
