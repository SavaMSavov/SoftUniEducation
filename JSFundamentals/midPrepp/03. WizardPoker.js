function solve(input = []) {
  let deck = input.shift().split(`:`);
  let newDeck = [];
  let enter;

  while ((enter = input.shift()) !== `Ready`) {
    if (enter === `Shuffle deck`) {
      newDeck.reverse();
    } else {
      let [action, firstCard, indexOrSecondCard] = enter.split(` `);

      switch (action) {
        case `Add`:
          if (deck.includes(firstCard)) {
            newDeck.push(firstCard);
          } else {
            console.log("Card not found.");
          }
          break;

        case `Insert`:
          let index = Number(indexOrSecondCard);
          if (
            deck.includes(firstCard) &&
            index > -1 && index < newDeck.length
          ) {
            newDeck.splice(index, 0, firstCard);
          } else {
            console.log(`Error!`);
          }
          break;

        case `Swap`:
          let secondCard = indexOrSecondCard;
          let firstIndex = newDeck.indexOf(firstCard);
          let secondIndex = newDeck.indexOf(secondCard);

          newDeck[firstIndex] = secondCard;
          newDeck[secondIndex] = firstCard;
          break;

        case `Remove`:
          if (newDeck.includes(firstCard)) {
            let index = newDeck.indexOf(firstCard);
            if (index != -1) {
              newDeck.splice(index, 1);
            }
          } else {
            console.log("Card not found.");
          }
          break;
      }
    }
  }
  console.log(newDeck.join(` `));
}

solve([
  `Innervate:Moonfire:Pounce:Claw:Wrath:Bite`,
  `Add Moonfire`,
  `Add Pounce`,
  `Add Bite`,
  `Add Wrath`,
  `Insert Claw 0`,
  `Swap Claw Moonfire`,
  `Remove Bite`,
  `Shuffle deck`,
  `Ready`
]);
