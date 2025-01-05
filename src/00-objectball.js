// Define the gameObject function
function gameObject() {
    return {
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
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 14,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Helper function to retrieve all players
function getAllPlayers() {
    const game = gameObject();
    return { ...game.home.players, ...game.away.players };
}

// Function to get points scored by a player
function numPointsScored(playerName) {
    const players = getAllPlayers();
    return players[playerName]?.points || null;
}

// Function to get shoe size of a player
function shoeSize(playerName) {
    const players = getAllPlayers();
    return players[playerName]?.shoe || null;
}

// Function to get team colors
function teamColors(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null;
}

// Function to get team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Function to get player numbers for a team
function playerNumbers(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return Object.values(team.players).map(player => player.number);
        }
    }
    return [];
}

// Function to get player stats
function playerStats(playerName) {
    const players = getAllPlayers();
    return players[playerName] || null;
}

// Function to get rebounds of player with largest shoe size
function bigShoeRebounds() {
    const players = getAllPlayers();
    let maxShoeSize = 0;
    let rebounds = 0;
    for (const player of Object.values(players)) {
        if (player.shoe > maxShoeSize) {
            maxShoeSize = player.shoe;
            rebounds = player.rebounds;
        }
    }
    return rebounds;
}

// Function to find the player with the most points
function mostPointsScored() {
    const players = getAllPlayers();
    let maxPoints = 0;
    let topScorer = '';
    for (const [name, stats] of Object.entries(players)) {
        if (stats.points > maxPoints) {
            maxPoints = stats.points;
            topScorer = name;
        }
    }
    return topScorer;
}

// Function to find the team with the most points
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (const player of Object.values(game.home.players)) {
        homePoints += player.points;
    }
    for (const player of Object.values(game.away.players)) {
        awayPoints += player.points;
    }

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return 'Tie';
    }
}

// Function to find the player with the longest name
function playerWithLongestName() {
    const players = Object.keys(getAllPlayers());
    let longestName = '';
    for (const name of players) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

// Function to check if the player with the longest name has the most steals
function doesLongNameStealATon() {
    const players = getAllPlayers();
    const longestName = playerWithLongestName();
    const maxSteals = Math.max(...Object.values(players).map(player => player.steals));
    return players[longestName]?.steals ===
contentReference[oaicite]
}
