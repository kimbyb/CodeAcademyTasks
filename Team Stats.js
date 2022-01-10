const team = {
  _players: [
    {
      firstName: 'Dany',
      lastName: 'The best',
      age: 23, 
    },
    {
      firstName: 'Sasha',
      lastName: 'not sporty',
      age: 27, 
    },
    {
      firstName: 'Doggo',
      lastName: 'Doggowitch',
      age: 1
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27, 
    },
    {
      opponent: 'Juve',
      teamPoints: 89,
      opponentPoints: 15,
    },
    {
      opponent: 'Barca',
      teamPoints: 85,
      opponentPoints: 74
    }
  ],


  get players(){
    return this._players
  },

  get games(){
    return this._games
  },

  addPlayer(firstName, lastName, age){
     const player = {
       firstName: firstName,
       lastName: lastName,
       age: age
     }
     this._players.push(player)
    },

  addGame(opName, teamPoint, opPoint){
    const game = {
      opName: opName,
      teamPoint: teamPoint,
      opPoint: opPoint
    }
    this._games.push(game)
  }
}

team.addPlayer('Steph', 'Cury', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team.players)
team.addGame('Juve', 45, 67)
console.log(team.games)
