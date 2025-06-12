const CLASS = {
    shooter: 0,
    roller: 1,
    charger: 2,
    slosher: 3,
    splatling: 4,
    dualie: 5,
    brella: 6,
    blaster: 7,
    brush: 8,
    stringer: 9,
    splatana: 10
};
const SUB = {
    splatBomb: 0,
    suctionBomb: 1,
    burstBomb: 2,
    curlingBomb: 3,
    autoBomb: 4,
    inkMine: 5,
    toxicMist: 6,
    pointSensor: 7,
    splashWall: 8,
    sprinkler: 9,
    squidBeakon: 10,
    fizzyBomb: 11,
    torpedo: 12,
    angleShooter: 13
};
const SPECIAL = {
    bigBubbler: 0,
    booyahBomb: 1,
    crabTank: 2,
    inkStorm: 3,
    inkVac: 4,
    inkJet: 5,
    killerWail: 6,
    krakenRoyal: 7,
    reefslider: 8,
    splattercolorScreen: 9,
    superChump: 10,
    tacticooler: 11,
    tentaMissiles: 12,
    tripleInkstrike: 13,
    tripleSplashdown: 14,
    trizooka: 15,
    ultraStamp: 16,
    waveBreaker: 17,
    zipCaster: 18
};
const VALUE = {
    low: 0,
    mid: 1,
    high: 2
};
const WEAPONS = [
    {
        name: "Sploosh-o-matic",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Neo Sploosh-o-matic",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Splattershot Jr.",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom Splattershot Jr.",
        kit: {
            sub: SUB.torpedo,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splash-o-matic",
        kit: {
            sub: SUB.burstBomb,
            special: SPECIAL.crabTank
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Neo Splash-o-matic",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Aerospray MG",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Aerospray RG",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.booyahBomb
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splattershot",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Tentatek Splattershot",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: ".52 Gal",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: ".52 Gal Deco",
        ignore: true,
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.splattercolorScreen
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "N-ZAP '85",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "N-ZAP '89",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.superChump
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splattershot Pro",
        kit: {
            sub: SUB.angleShooter,
            special: SPECIAL.crabTank
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Forge Splattershot Pro",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.booyahBomb
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: ".96 Gal",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: ".96 Gal Deco",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Jet Squelcher",
        kit: {
            sub: SUB.angleShooter,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Custom Jet Squelcher",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Splattershot Nova",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Annaki Splattershot Nova",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.inkJet
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Luna Blaster",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.zipCaster
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Luna Blaster Neo",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Blaster",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom Blaster",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.tripleSplashdown
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Range Blaster",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.mid,
            paint: VALUE.low,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom Range Blaster",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.mid,
            paint: VALUE.low,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Clash Blaster",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.trizooka
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Clash Blaster Neo",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.superChump
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Rapid Blaster",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Rapid Blaster Deco",
        kit: {
            sub: SUB.torpedo,
            special: SPECIAL.inkJet
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Rapid Blaster Pro",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Rapid Blaster Pro Deco",
        kit: {
            sub: SUB.angleShooter,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "S-Blast '92",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "S-Blast '91",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.blaster,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.high
        }
    },
    {
        name: "L-3 Nozzlenose",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.crabTank
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "L-3 Nozzlenose D",
        kit: {
            sub: SUB.burstBomb,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "H-3 Nozzlenose",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "H-3 Nozzlenose D",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Squeezer",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.trizooka
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.high
        }
    },
    {
        name: "Foil Squeezer",
        ignore: true,
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.splattercolorScreen
        },
        data: {
            class: CLASS.shooter,
            range: VALUE.mid,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Carbon Roller",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.zipCaster
        },
        data: {
            class: CLASS.roller,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Carbon Roller Deco",
        kit: {
            sub: SUB.burstBomb,
            special: SPECIAL.trizooka
        },
        data: {
            class: CLASS.roller,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Splat Roller",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.roller,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Krak-On Splat Roller",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.roller,
            range: VALUE.low,
            paint: VALUE.low,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Dynamo Roller",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.roller,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Gold Dynamo Roller",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.superChump
        },
        data: {
            class: CLASS.roller,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Flingza Roller",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.tentaMissiles
        },
        data: {
            class: CLASS.roller,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Foil Flingza Roller",
        ignore: true,
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.splattercolorScreen
        },
        data: {
            class: CLASS.roller,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Big Swig Roller",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.roller,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Big Swig Roller Express",
        kit: {
            sub: SUB.angleShooter,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.roller,
            range: VALUE.low,
            paint: VALUE.high,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Ink Brush",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.brush,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Ink Brush Nouveau",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.brush,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Octobrush",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.zipCaster
        },
        data: {
            class: CLASS.brush,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Octobrush Nouveau",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.brush,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Painbrush",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.brush,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Painbrush Nouveau",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.tentaMissiles
        },
        data: {
            class: CLASS.brush,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Classic Squiffer",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.charger,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "New Squiffer",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.zipCaster
        },
        data: {
            class: CLASS.charger,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splat Charger",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Z+F Splat Charger",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splatterscope",
        ignore: true,
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Z+F Splatterscope",
        ignore: true,
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "E-liter 4K",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom E-liter 4K",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "E-liter 4K Scope",
        ignore: true,
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom E-liter 4K Scope",
        ignore: true,
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.low,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Bamboozler 14 Mk I",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.charger,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Bamboozler 14 Mk II",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.superChump
        },
        data: {
            class: CLASS.charger,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Goo Tuber",
        kit: {
            sub: SUB.torpedo,
            special: SPECIAL.tentaMissiles
        },
        data: {
            class: CLASS.charger,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Custom Goo Tuber",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.charger,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Snipewriter 5H",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Snipewriter 5B",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.charger,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Slosher",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Slosher Deco",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Tri-Slosher",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.inkJet
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Tri-Slosher Nouveau",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Sloshing Machine",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.booyahBomb
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Sloshing Machine Neo",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.trizooka
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.mid,
            paint: VALUE.low,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Bloblobber",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Bloblobber Deco",
        kit: {
            sub: SUB.angleShooter,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Explosher",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom Explosher",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.tripleSplashdown
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Dread Wringer",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Dread Wringer D",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.slosher,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Mini Splatling",
        kit: {
            sub: SUB.burstBomb,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Zink Mini Splatling",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Heavy Splatling",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Heavy Splatling Deco",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.krakenRoyal
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Hydra Splatling",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.booyahBomb
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Custom Hydra Splatling",
        ignore: true,
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.splattercolorScreen
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Ballpoint Splatling",
        kit: {
            sub: SUB.fizzyBomb,
            special: SPECIAL.inkJet
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Ballpoint Splatling Nouveau",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Nautilus 47",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.inkStorm
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Nautilus 79",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.tripleSplashdown
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Heavy Edit Splatling",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Heavy Edit Splatling Nouveau",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.crabTank
        },
        data: {
            class: CLASS.splatling,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.low,
            popularity: VALUE.high
        }
    },
    {
        name: "Dapple Dualies",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.tacticooler
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Dapple Dualies Nouveau",
        kit: {
            sub: SUB.torpedo,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Splat Dualies",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.crabTank
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Enperry Splat Dualies",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.tripleSplashdown
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.low,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Glooga Dualies",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.booyahBomb
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Glooga Dualies",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.trizooka
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Dualie Squelchers",
        kit: {
            sub: SUB.splatBomb,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom Dualie Squelchers",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.superChump
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Dark Tetra Dualies",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Light Tetra Dualies",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.zipCaster
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Douser Dualies FF",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Custom Douser Dualies FF",
        kit: {
            sub: SUB.burstBomb,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.dualie,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }  
    },
    {
        name: "Splat Brella",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.tripleInkstrike
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Sorella Brella",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.inkJet
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Tenta Brella",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.inkVac
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Tenta Sorella Brella",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.trizooka
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.mid
        }
    },
    {
        name: "Undercover Brella",
        kit: {
            sub: SUB.inkMine,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Undercover Sorella Brella",
        ignore: true,
        kit: {
            sub: SUB.torpedo,
            special: SPECIAL.splattercolorScreen
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.low
        }
    },
    {
        name: "Recycled Brella 24 Mk I",
        kit: {
            sub: SUB.angleShooter,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Recycled Brella 24 Mk II",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.tripleSplashdown
        },
        data: {
            class: CLASS.brella,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Tri-Stringer",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.killerWail
        },
        data: {
            class: CLASS.stringer,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "Inkline Tri-Stringer",
        kit: {
            sub: SUB.sprinkler,
            special: SPECIAL.superChump
        },
        data: {
            class: CLASS.stringer,
            range: VALUE.high,
            paint: VALUE.high,
            difficulty: VALUE.high,
            popularity: VALUE.low
        }
    },
    {
        name: "REEF-LUX 450",
        kit: {
            sub: SUB.curlingBomb,
            special: SPECIAL.tentaMissiles
        },
        data: {
            class: CLASS.stringer,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "REEF-LUX 450 Deco",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.reefslider
        },
        data: {
            class: CLASS.stringer,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Wellstring V",
        kit: {
            sub: SUB.autoBomb,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.stringer,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Custom Wellstring V",
        kit: {
            sub: SUB.pointSensor,
            special: SPECIAL.waveBreaker
        },
        data: {
            class: CLASS.stringer,
            range: VALUE.high,
            paint: VALUE.mid,
            difficulty: VALUE.low,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splatana Stamper",
        kit: {
            sub: SUB.burstBomb,
            special: SPECIAL.zipCaster
        },
        data: {
            class: CLASS.splatana,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.high,
            popularity: VALUE.high
        }
    },
    {
        name: "Splatana Stamper Nouveau",
        kit: {
            sub: SUB.toxicMist,
            special: SPECIAL.crabTank
        },
        data: {
            class: CLASS.splatana,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
    {
        name: "Splatana Wiper",
        kit: {
            sub: SUB.torpedo,
            special: SPECIAL.ultraStamp
        },
        data: {
            class: CLASS.splatana,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Splatana Wiper Deco",
        kit: {
            sub: SUB.squidBeakon,
            special: SPECIAL.tentaMissiles
        },
        data: {
            class: CLASS.splatana,
            range: VALUE.mid,
            paint: VALUE.mid,
            difficulty: VALUE.mid,
            popularity: VALUE.low
        }
    },
    {
        name: "Mint Decavitator",
        kit: {
            sub: SUB.suctionBomb,
            special: SPECIAL.bigBubbler
        },
        data: {
            class: CLASS.splatana,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.high
        }
    },
    {
        name: "Charcoal Decavitator",
        kit: {
            sub: SUB.splashWall,
            special: SPECIAL.inkJet
        },
        data: {
            class: CLASS.splatana,
            range: VALUE.mid,
            paint: VALUE.high,
            difficulty: VALUE.mid,
            popularity: VALUE.mid
        }
    },
];
const RULES = [
    "kit.sub",
    "kit.special",
    "data.class",
    "data.range",
    "data.paint",
    "data.difficulty",
    "data.popularity"
];

const resultDiv = document.getElementById("result");

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

var boards = [];
function Generate(){
    var quantity = document.getElementById("quantity").value;

    for (var i = 0; i < encoderData.length; i++){
        var e = encodeBoardTile(i);
        var v = encoderData.indexOf(e);
        if (i != v){
            console.error(e + " does not work");
        }
    }

    boards = [];
    var stringBuilder = [];
    for (var i = 0; i < quantity; i++){
        boards.push(GenerateBoard());
        //Add a copy button for Bingo Board URL
        stringBuilder.push("<button onclick='copy(" + i + ")'>copy</button> " + boards[i].replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("&", "&amp;") + "<br>" + "<button onclick='copyURL(" + i + ")'>copy</button> https://astroddev.github.io/omd-bingo/?board=" + encodeURIComponent(boards[i]) + "<br>");
        stringBuilder.push(GenerateBoardImage(boards[i]) + "<br><br>");
    }

    resultDiv.innerHTML = stringBuilder.join("");
}

function GenerateBoardImage(data){
    var weapons = decodeBoard(data);

    var result = "<div class='board'>";

    for (var y = 0; y < 5; y++){
        result += "<div class='row'>";
        for (var x = 0; x < 5; x++){
            var i = y * 5 + x;
            result += "<image src='../resources/weapon-images/" + weapons[i] + "_Unchecked.png'/>";
        }
        result += "</div>";
    }

    result += "</div>";

    return result;
}

function GenerateBoard(){
    while(true){
        var rules = [];
        var ruleWeaponSets = [[], [], [], [], []];

        for (var i = 0; i < 5; i++){
            var randomWeapon, rule, rulePath1, rulePath2;
            while(true){
                randomWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
                rule = RULES[Math.floor(Math.random() * RULES.length)]
                
                rulePath1 = rule.split(".")[0];
                rulePath2 = rule.split(".")[1];

                //Weapon Bans
                if (randomWeapon.ignore != null) continue;
                else break;
            }

            rules.push({
                rule: rule,
                target: randomWeapon[rulePath1][rulePath2]
            });

            for (var j = 0; j < WEAPONS.length; j++){
                if (WEAPONS[j][rulePath1][rulePath2] == rules[i].target && WEAPONS[j].ignore != true){
                    ruleWeaponSets[i].push(j);
                }
            }
        }

        for (var i = 0; i < 4; i++){
            for (var j = i + 1; j < 5; j++){
                if (ruleWeaponSets[i].length > ruleWeaponSets[j].length){
                    var tempWeaponSet = ruleWeaponSets[i];
                    var tempRule = rules[i];
                    ruleWeaponSets[i] = ruleWeaponSets[j];
                    rules[i] = rules[j];
                    ruleWeaponSets[j] = tempWeaponSet;
                    rules[j] = tempRule;
                }
            }
        }

        var weaponOrder = [1, 2, 3, 4, 5];
        for (var i = 0; i < 5; i++){
            var rng = Math.floor(Math.random() * 5);
            var ivalue = weaponOrder[i];
            weaponOrder[i] = weaponOrder[rng];
            weaponOrder[rng] = ivalue;
        }

        boardData = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

        for (var i = 0; i < 5; i++){
            for (var j = 0; j < 5; j++){
                var x = j * 5 + (weaponOrder[j] + i) % 5;
                var attempts = 0;
                while(boardData[x] == -1){
                    var rng = ruleWeaponSets[i][Math.floor(Math.random() * ruleWeaponSets[i].length)];
                    if (!boardData.includes(rng)){
                        boardData[x] = rng;
                    }
                    attempts++;
                    if (attempts > 20){
                        break;
                    }
                }
                if (attempts > 20){
                    continue;
                }
            }
        }
    
        if(boardData.includes(-1)){
            continue;
        } 

        var result = "";
        for (var i = 0; i < boardData.length; i++){
            result += encodeBoardTile(boardData[i]);
        }

        return result;
    }
}

function copy(index){
    navigator.clipboard.writeText(boards[index]);
}

function copyURL(index){
    var text = "https://astroddev.github.io/omd-bingo/?board=" + encodeURIComponent(boards[index]);
    navigator.clipboard.writeText(text);
}
