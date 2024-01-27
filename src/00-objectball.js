function gameObject() {
    const obj1 = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
            
        },
    };
    return obj1
};

const objectToIterate = gameObject();

function numPointsScored(name) {
    for (let key in objectToIterate) {
        const players = objectToIterate[key].players
        for (let player in players) {
            if (player === name) {
                const playerStats = players[name]
                return playerStats.points
            }
        }
    }
}

function shoeSize(name) {
    for (let key in objectToIterate) {
        const players = objectToIterate[key].players
        for (let player in players) {
            if (player === name) {
                const playerStats = players[name]
                return playerStats.shoe
            }
        }
    }
}

function teamColors(team) {
    for (let key in objectToIterate) {
        if (team === objectToIterate[key].teamName) {
            return objectToIterate[key].colors
        }
    }
}

function teamNames() {
    let teamsArray = []
    for (let key in objectToIterate) {
        const teamObj = objectToIterate[key]
        teamsArray.push(teamObj.teamName)
    }
    return teamsArray
}

function playerNumbers(team) {
    const playerNumbers = []
    for (let key in objectToIterate) {
        const teamName = objectToIterate[key].teamName
        if (team === teamName) {
            const players = objectToIterate[key].players
            for (let player in players) {
                playerNumbers.push(players[player].number)
            }
        }
    }
    return playerNumbers
}

function playerStats(name) {
    for (let key in objectToIterate) {
        const players = objectToIterate[key].players
        for (let player in players) {
            if (name === player) {
                return players[name]
            }
        }
    }
}

function bigShoeRebounds() {
    let biggestSize = 0
    let playerStatsWithBiggestSize;
    for (let key in objectToIterate) {
        const players = objectToIterate[key].players
        for (let player in players) {
            const shoeSize = players[player].shoe
            if (shoeSize > biggestSize) {
                biggestSize = shoeSize
                playerStatsWithBiggestSize = players[player]
            }
        }
    }
    return playerStatsWithBiggestSize.rebounds
}