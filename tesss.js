class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandom() {
    const random = [
      { healt: 10, power: 0 },
      { healt: 0, power: 10 },
    ];
    const changeRandom = random [Math.floor(Math.random()*1.9)]
    console.log(changeRandom);
}
}
