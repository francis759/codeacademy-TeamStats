const team ={
  _players:[
    {
      firstname:'Francis',
      lastName:'Dowuona',
      age:28
    },
    {
      firstname:'Josh',
      lastName:'Arhin',
      age:24
    },
    {
      firstname:'Mike',
      lastName:'Tundra',
      age:26
    }
  ],
  _games:[
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Kotoko',
      teamPoints: 50,
      opponentPoints: 27
    },
    {
      opponent: 'Hearts of Oak',
      teamPoints: 49,
      opponentPoints: 20
    }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    let player={
      firstname:firstName,
      lastName:lastName,
      age:age
    }
    this._players.push(player);
  },
  addGame(opponentName,teamPoints, opponentPoints){
    const gameRecord = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
      }
      this._games.push(gameRecord);
  }
};

team.addPlayer("Steph","Curry",28);
team.addPlayer("Lisa","Leslie",44);
//
console.log(team.players);
team.addGame("Chelsea",45,40);
team.addGame("Arsenal",50,35);
team.addGame("Manchester City",40,42);
//
console.log(team.games);
