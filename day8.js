// Specifications :
// ○ Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name

// class Player {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.power = 10;
//   }

//   hit(power) {
//     this.health -= power;
//   }

//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }

//   showStatus() {
//     console.log(
//       `${this.name} (Health => ${this.health}, Power => ${this.power})`
//     );
//   }
// }

// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }

//   getRandomItem() {
//     return {
//       health: Math.floor(Math.random() * 2) * 10,
//       power: Math.floor(Math.random() * 2) * 10,
//     };
//   }

//   start() {
//     let currentPlayer = this.player1;
//     let otherPlayer = this.player2;

//     while (this.player1.health > 0 && this.player2.health > 0) {
//       console.log("Current turn: ", currentPlayer.name);
//       currentPlayer.showStatus();
//       otherPlayer.showStatus();

//       const itemForCurrentPlayer = this.getRandomItem();
//       const itemForOtherPlayer = this.getRandomItem();

//       console.log(`${currentPlayer.name} gets an item: `, itemForCurrentPlayer);
//       console.log(`${otherPlayer.name} gets an item: `, itemForOtherPlayer);

//       currentPlayer.useItem(itemForCurrentPlayer);
//       otherPlayer.useItem(itemForOtherPlayer);

//       currentPlayer.showStatus();
//       otherPlayer.showStatus();

//       otherPlayer.hit(currentPlayer.power);

//       [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
//     }

//     const winner =
//       this.player1.health > 0 ? this.player1.name : this.player2.name;
//     console.log(`Winner is ${winner}`);
//   }
// }

// const player1 = new Player("Player A");
// const player2 = new Player("Player B");
// const game = new ShootingGame(player1, player2);
// game.start();

// pembahasan lecture ===========================================================================

// class Player {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }
//   demage(power) {
//     this.health -= power;
//   }
//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }

//   showStatus() {
//     return `${this.name} (healt => ${this.health}, power => ${this.power})`;
//   }
// }

// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }

//   getRandomItem() {
//     const health = Math.random() < 0.5 ? 0 : 10;
//     const power = Math.random() < 0.5 ? 0 : 10;

//     return { health, power };
//   }

//   start() {
//     while (this.player1.health > 0 && this.player2.health > 0) {
//       // tampilkan status tiap player
//       this.player1.showStatus();
//       this.player2.showStatus();

//       const itemplayer1 = this.getRandomItem();
//       const itemplayer2 = this.getRandomItem();
//       this.player1.useItem(itemplayer1);
//       this.player2.useItem(itemplayer2);
//     }
//   }
// }

// const playerA = new Player("fauzi");
// const playerB = new Player("fauzan");
// const game = new ShootingGame(playerA, playerB);
// console.log(game.start());

// NO. 2 ================================================================================================================
// Exercise - Employee Salary
// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept

class Employee {
  constructor(name) {
    this.name = name;
    this.workingHours = 0;
  }
}
class FullTimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }
  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    const normalRate = 100000;
    const overTimeRate = 75000;

    if (this.workingHours <= 6) {
      return {
        total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
      };
    } else {
      const normalHour = 6;
      const overTimeHour = this.workingHours - normalHour;

      return {
        total:
          "Rp. " +
          (
            overTimeHour * overTimeRate +
            normalHour * normalRate
          ).toLocaleString("id-ID"),
      };
    }
  }
}

class PartTimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }
  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    const normalRate = 50000;
    const overTimeRate = 30000;

    if (this.workingHours <= 6) {
      return {
        total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
      };
    } else {
      const normalHour = 6;
      const overTimeHour = this.workingHours - normalHour;

      return {
        total:
          "Rp. " +
          (
            overTimeHour * overTimeRate +
            normalHour * normalRate
          ).toLocaleString("id-ID"),
      };
    }
  }
}

const employee1 = new FullTimeEmployee("halal");
employee1.addWorkingHours(7);
console.log(employee1.calculateSalary());

const employee2 = new PartTimeEmployee("bihalal");
employee2.addWorkingHours(7);
console.log(employee2.calculateSalary());