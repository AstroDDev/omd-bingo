class Tournament{
    constructor(id){
        this.id = id;
        this.url = "https://sendou.ink/to/" + id + "/brackets";

        this.teams = new Map();
        this.brackets = [];

        this.init();
    }

    init(){
        fetch(this.url).then(r => r.text()).then(r => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(r, "text/xml");
            let root = xml.getRootNode();

            let script = root.getElementsByTagName("script")[1];
            let tourney = JSON.parse(script.textContent.slice(24, -1)).state.loaderData["features/tournament/routes/to.$id"].tournament;
            
            this.data = tourney;

            for (var i = 0; i < tourney.ctx.teams.length; i++){
                this.teams.set(tourney.ctx.teams[i].id, tourney.ctx.teams[i]);
            }

            let bracketIDs = [];
            for (var i = 0; i < tourney.data.stage.length; i++){
                this.brackets.push(new Bracket(tourney.data.stage[i], this));
                bracketIDs.push(tourney.data.stage[i].id);
            }

            for (var i = 0; i < tourney.data.match.length; i++){
                this.brackets[bracketIDs.indexOf(tourney.data.match[i].stage_id)].addMatch(tourney.data.match[i]);
            }
        }).catch(console.error);

        console.log(JSON.stringify(this.data));
    }

    update(){

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
            console.error("Failed to add match, is either a placeholder or a bye.");
            return;
        }
        if (matchObj.stage_id != this.id){
            console.error("Match is not a part of bracket.");
            return;
        }

        let result = matchObj.opponent1.result == null ? 0 : (matchObj.opponent1.result == "win" ? 1 : 2)
        let match = new Match(matchObj.id, matchObj.opponent1.id, matchObj.opponent2.id, result, this);

        this.matches.push(match);
    }
}

class Match{
    constructor(id, team1id, team2id, result, bracket){
        this.id = id;
        this.team1 = team1id;
        this.team2 = team2id;
        this.result = result;
        this.bracket = bracket;
        this.tournament = bracket.tournament;
    }
}

// ADD EVENTS FOR onScoreUpdate AND onMatchFinished

// LOAD match page for map + mode 