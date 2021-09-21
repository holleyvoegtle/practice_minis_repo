// Create a team object with two properties _players, _games....purpose is to practice storing and accessing data
const team = {
  _players: [ // populate array with 3 players
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Pete',
      lastName: 'Bubbles',
      age: 13
    },
    {
      firstName: 'Bobby',
      lastName: 'Smith',
      age: 10
    }
  ],
  
  _games: [ // populate array with 3 teams:
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Patriots',
      teamPoints: 53,
      opponentPoints: 7
    },
    {
      opponent: 'Ravens',
      teamPoints: 14,
      opponentPoints: 17
    }  
  ],
  // Create getter methods for _players and _games keys
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
},

// Add method addPlayer to team object with 3 parameters and create a player object
addPlayer(firstName, lastName, age) {
  const player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);  
},
addGame(oppName, points, oppPoints) {
  const game = {
    opponent: oppName,
    points: points,
    opponentPoints: oppPoints
  };
  this.games.push(game);
}
}
// invoke addPlayer method to add players to array
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
// Print new Array
console.log(team.players);

// Invoke the addGame method to add games to array
team.addGame("Sharks", 47, 2);
team.addGame("Bruins", 3, 11);
team.addGame("Wolverines", 24, 27);
// Print new Array
console.log(team.games);
