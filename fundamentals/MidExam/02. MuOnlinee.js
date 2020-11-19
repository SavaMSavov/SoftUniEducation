function solve(input = []) {
  let dungeonRooms = input.shift().split(`|`);

  let health = 100;
  let bitcoins = 0;

  for (let i = 0; i < dungeonRooms.length; i++) {
    let currRoom = dungeonRooms[i].split(` `);

    let wordOne = currRoom[0];
    let wordTwo = Number(currRoom[1]);

    if (wordOne === `potion`) {
      if (health + wordTwo >= 100) {
        let heal = 100 - health;
        health = 100;
        console.log(`You healed for ${heal} hp.`);
        console.log(`Current health: 100 hp.`);
      } else {
        health += wordTwo;
        console.log(`You healed for ${wordTwo} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (wordOne === `chest`) {
      bitcoins += wordTwo;
      console.log(`You found ${wordTwo} bitcoins.`);
    } else {
      let monster = wordOne;
      let power = wordTwo;

      if (health - power > 0) {
        health -= power;
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }

    if (health > 0 && dungeonRooms[i + 1] === undefined) {
      console.log(`You've made it!`);
      console.log(`Bitcoins: ${bitcoins}`);
      console.log(`Health: ${health}`);
    }
  }
}
solve([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`]);
solve([`cat 10|potion 30|orc 10|chest 10|snake 25|chest 110`]);
