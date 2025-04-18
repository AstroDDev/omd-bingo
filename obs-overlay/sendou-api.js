class Tournament{
    static MAP_INDEX = [
        "SCORCH_GORGE",
        "EELTAIL_ALLEY",
        "HAGGLEFISH_MARKET",
        "UNDERTOW_SPILLWAY",
        "MINCEMEAT_METALWORKS",
        "HAMMERHEAD_BRIDGE",
        "MUSEUM_D_ALFONSINO",
        "MAHI_MAHI_RESORT",
        "INKBLOT_ART_ACADEMY",
        "STURGEON_SHIPYARD",
        "MAKOMART",
        "WAHOO_WORLD",
        "FLOUNDER_HEIGHTS",
        "BRINEWATER_SPRINGS",
        "MANTA_MARIA",
        "UM_AMI_RUINS",
        "HUMPBACK_PUMP_TRACK",
        "CRABLEG_CAPITAL",
        "SHIPSHAPE_CARGO_CO",
        "BLUEFIN_DEPOT",
        "ROBO_ROM_EN",
        "MARLIN_AIRPORT",
        "LEMURIA_HUB"
    ];

    constructor(url, init, fail){
        this.url = url;
        this.match_url = url.includes("/matches/");
        this.map_list = [];

        this.teams = new Map();
        this.brackets = [];

        this.scoreUpdateCall = () => {};
        this.matchResultCall = () => {};

        var _this = this;

        $.get("https://corsproxy.io/?url=" + encodeURI(this.url), function(r) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(r, "text/xml");
            var root = xml.getRootNode();

            var script = root.getElementsByTagName("script")[2];

            if (script == null){
                fail();
                return;
            }
            
            var tourney;
            try{
                tourney = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament/routes/to.$id"].tournament;
            }
            catch (e){
                fail();
                return;
            }
            
            if (tourney == null){
                fail();
                return;
            }
            
            if (_this.match_url){
                try{
                    var mapList = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament-bracket/routes/to.$id.matches.$mid"].mapList;
                    for (var i = 0; i < mapList.length; i++){
                        _this.map_list.push({ map: mapList[i].stageId, mode: mapList[i].mode });
                    }
                }
                catch(e){
                    console.error(e);
                }
            }
            
            _this.data = tourney;

            for (var i = 0; i < tourney.ctx.teams.length; i++){
                _this.teams.set(tourney.ctx.teams[i].id, tourney.ctx.teams[i]);
            }

            var bracketIDs = [];
            for (var i = 0; i < tourney.data.stage.length; i++){
                _this.brackets.push(new Bracket(tourney.data.stage[i], this));
                bracketIDs.push(tourney.data.stage[i].id);
            }

            for (var i = 0; i < tourney.data.match.length; i++){
                _this.brackets[bracketIDs.indexOf(tourney.data.match[i].stage_id)].addMatch(tourney.data.match[i]);
            }

            init();
        });
    }

    updateURL(newUrl, callback){
        this.url = newUrl;

        this.match_url = newUrl.includes("/matches/");

        this.teams = new Map();
        this.brackets = [];

        this.update();
    }

    update(){
        var _this = this;
        
        $.get("https://corsproxy.io/?url=" + encodeURI(this.url), function(r) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(r, "text/xml");
            var root = xml.getRootNode();
            
            var script = root.getElementsByTagName("script")[2];
            var tourney = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament/routes/to.$id"].tournament;
            
            if (_this.match_url){
                _this.map_list = [];
                try{
                    var mapList = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament-bracket/routes/to.$id.matches.$mid"].mapList;
                    for (var i = 0; i < mapList.length; i++){
                        _this.map_list.push({ map: mapList[i].stageId, mode: mapList[i].mode });
                    }
                }
                catch(e){
                    console.error(e);
                }
            }

            _this.data = tourney;

            for (var i = 0; i < tourney.ctx.teams.length; i++){
                _this.teams.set(tourney.ctx.teams[i].id, tourney.ctx.teams[i]);
            }

            var bracketIDs = [];
            var newBrackets = [];
            for (var i = 0; i < tourney.data.stage.length; i++){
                newBrackets.push(new Bracket(tourney.data.stage[i], this));
                bracketIDs.push(tourney.data.stage[i].id);
            }

            for (var i = 0; i < tourney.data.match.length; i++){
                var bracketID = bracketIDs.indexOf(tourney.data.match[i].stage_id);
                newBrackets[bracketID].addMatch(tourney.data.match[i]);
            }

            for (var j = 0; j < _this.brackets.length; j++){
                for (var k = 0; k < _this.brackets[j].matches.length; k++){
                    var foundMatch = false;
                    for (var x = 0; x < newBrackets.length; x++){
                        for (var y = 0; y < newBrackets[x].matches.length; y++){
                            if (newBrackets[x].matches[y].id != _this.brackets[j].matches[k].id) continue;

                            foundMatch = true;
                            
                            if (newBrackets[x].matches[y].score1 != _this.brackets[j].matches[k].score1 || newBrackets[x].matches[y].score2 != _this.brackets[j].matches[k].score2){
                                //Score Update
                                if (_this.scoreUpdateCall != null) _this.scoreUpdateCall(newBrackets[x].matches[y]);
                                console.log("SCORE");
                            }
                            if (newBrackets[x].matches[y].result != _this.brackets[j].matches[k].result && newBrackets[x].matches[y].result != 0){
                                //Set Over
                                if (_this.scoreUpdateCall != null) _this.matchResultCall(newBrackets[x].matches[y]);
                                console.log("SET OVER");
                            }

                            break;
                        }
                        if (foundMatch) break;
                    }
                }
            }

            _this.brackets = newBrackets;
        });
    }

    onScoreUpdate(event){
        this.scoreUpdateCall = event;
    }

    onMatchResult(event){
        this.matchResultCall = event;
    }

    getTeamName(teamId){
        return this.teams.get(teamId).name;
    }

    getMatch(matchId){
        for (var i = 0; i < this.brackets.length; i++){
            for (var j = 0; j < this.brackets[i].matches.length; j++){
                if (this.brackets[i].matches[j].id == matchId) return this.brackets[i].matches[j];
            }
        }
    }

    testAllTeams(){
        this.teams.forEach((v, k, m) => {
            console.log(k + ": " + JSON.stringify(v));
        });
    }
}

class Bracket{
    constructor(data, tournament){
        this.id = data.id;
        this.name = data.name;
        this.data = data;
        this.tournament = tournament;
        this.matches = [];
    }

    addMatch(matchObj){
        if (!Bracket.verifyMatch(matchObj)) return false;

        let result = matchObj.opponent1.result == null ? 0 : (matchObj.opponent1.result == "win" ? 1 : 2)
        let match = new Match(matchObj.id, matchObj.opponent1.id, matchObj.opponent2.id, matchObj.opponent1.score, matchObj.opponent2.score, result, this);

        this.matches.push(match);
        return true;
    }

    static verifyMatch(matchObj){
        if (matchObj == null){
            return false;
        }
        if (matchObj.opponent1 == null || matchObj.opponent2 == null || matchObj.opponent1.id == null || matchObj.opponent2.id == null){
            return false;
        }
        return true;
    }
}

class Match{
    constructor(id, team1id, team2id, team1score, team2score, result, bracket){
        this.id = id;
        this.team1 = team1id;
        this.team2 = team2id;
        this.score1 = team1score == null ? 0 : team1score;
        this.score2 = team2score == null ? 0 : team2score;
        this.result = result;
        this.bracket = bracket;
        this.tournament = bracket.tournament;
    }
}
