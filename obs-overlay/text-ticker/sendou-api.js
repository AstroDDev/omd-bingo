class Tournament{
    constructor(id, init){
        this.id = id;
        this.url = "https://sendou.ink/to/" + id;

        this.teams = new Map();
        this.brackets = [];

        this.scoreUpdateCall = (e) => {};
        this.matchResultCall = (e) => {};

        var _this = this;

        $.get("https://corsproxy.io/?url=" + encodeURI(this.url), function(r) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(r, "text/xml");
            var root = xml.getRootNode();

            var script = root.getElementsByTagName("script")[2];
            var tourney = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament/routes/to.$id"].tournament;
            
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

    update(){
        var _this = this;
        
        $.get("https://corsproxy.io/?url=" + encodeURI(this.url), function(r) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(r, "text/xml");
            var root = xml.getRootNode();
            
            var script = root.getElementsByTagName("script")[2];
            var tourney = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament/routes/to.$id"].tournament;
            
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
                
                var newMatch = newBrackets[bracketID].matches[newBrackets[bracketID].matches.length - 1];
                var oldMatch = _this.brackets[bracketID].matches[newBrackets[bracketID].matches.length - 1];
                if (newMatch.id != oldMatch.id){
                    alert("MATCH ORDERING ERROR!!!");
                    console.error("Unexpected Match Ordering Error");
                    return;
                }
                if (newMatch.result != oldMatch.result){
                    matchResultCall(newMatch);
                }
                else if (newMatch.score1 != oldMatch.score1 || newMatch.score2 != oldMatch.score2){
                    scoreUpdateCall(newMatch);
                }

                _this.brackets[bracketID].matches[newBrackets[bracketID].matches.length - 1] = newMatch;
            }
        });
    }

    onScoreUpdate(event){
        this.scoreUpdateCall = event;
    }

    onMatchResult(event){
        this.matchResultCall = event;
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
        if (matchObj.opponent1 == null || matchObj.opponent2 == null || matchObj.opponent1.id == null || matchObj.opponent2.id == null){
            console.warn("Failed to add match, is either a placeholder or a bye.");
            return;
        }
        if (matchObj.stage_id != this.id){
            console.warn("Match is not a part of bracket.");
            return;
        }

        let result = matchObj.opponent1.result == null ? 0 : (matchObj.opponent1.result == "win" ? 1 : 2)
        let match = new Match(matchObj.id, matchObj.opponent1.id, matchObj.opponent2.id, matchObj.opponent1.score, matchObj.opponent2.score, result, this);

        this.matches.push(match);
    }
}

class Match{
    constructor(id, team1id, team2id, team1score, team2score, result, bracket){
        this.id = id;
        this.team1 = team1id;
        this.team2 = team2id;
        this.score1 = team1score;
        this.score2 = team2score;
        this.result = result;
        this.bracket = bracket;
        this.tournament = bracket.tournament;
    }
}

//Not Possible as of now to load map + mode
//Maybe possible with counter picks
