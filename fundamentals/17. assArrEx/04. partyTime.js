function solve(input) {
  function createList(guestArr) {
    let guests = {
      vip: [],
      regular: []
    };

    guestArr.forEach(guest => {
      if (isNaN(Number(guest[0]))) {
        guests.regular.push(guest);
      } else {
        guests.vip.push(guest);
      }
    });
    return guests;
  }

  function removeGuests(arr, guestObj) {
    arr.forEach(guest => {
      if (guestObj.vip.includes(guest)) {
        let index = guestObj.vip.indexOf(guest);
        guestObj.vip.splice(index, 1);
      }
      if (guestObj.regular.includes(guest)) {
        let index = guestObj.regular.indexOf(guest);
        guestObj.regular.splice(index, 1);
      }
    });
    return guestObj;
  }

  function createOutput(guests) {
    let output = guests.vip.concat(guests.regular);
    return output.length + `\n` + output.join(`\n`);
  }

  let partyIndex = input.indexOf(`PARTY`);
  let guestList = createList(input.slice(0, partyIndex));
  let removedList = removeGuests(input.slice(partyIndex + 1), guestList);
  return createOutput(removedList);
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc"
]);
