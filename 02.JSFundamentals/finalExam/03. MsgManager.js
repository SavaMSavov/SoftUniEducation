function solve(input = []) {
  const capacity = input.shift();
  let line = input.shift();

  let users = [
    //   {
    //       name: `gosho`,
    //       sent: ,
    //       recieved:
    //   }
  ];

  while (line !== `Statistics`) {
    const tokens = line.split(`=`);
    const command = tokens[0];
    const person = tokens[1];
    const sentToken = +tokens[2];
    const recievedToken = +tokens[3];

    if (command === `Add`) {
      const isUserExist = users.find(u => u.name === person);

      if (!isUserExist) {
        users.push({ name: person, sent: sentToken, recieved: recievedToken });
      }
    } else if (command === `Message`) {
      const secondPerson = tokens[2];
      const isSenderExist = users.find(u => u.name === person);
      const isRecieverExist = users.find(p => p.name === secondPerson);

      if (isSenderExist && isRecieverExist) {
        isRecieverExist.recieved += 1;
        isSenderExist.sent += 1;

        if (isSenderExist.sent + isSenderExist.recieved >= 10) {
          users = users.filter(x => x.name !== person);
          console.log(`${person} reached the capacity!`);
        }
        if (isRecieverExist.sent + isRecieverExist.recieved >= 10) {
          users = users.filter(x => x.name !== secondPerson);
          console.log(`${secondPerson} reached the capacity!`);
        }
      }
    } else if (command === `Empty`) {
      if (person === `All`) {
        users = [];
      } else {
        const isUserExist = users.find(u => u.name === person);

        if (isUserExist) {
          users = users.filter(x => x.name !== person);
        }
      }
    }
    line = input.shift();
  }

  users.sort((a, b) => {
    if (a.recieved > b.recieved) {
      return -1;
    } else if (a.recieved < b.recieved) {
      return 1;
    } else {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  console.log(`Users count: ${users.length}`);

  for (const user of users) {
    console.log(`${user.name} - ${user.sent + user.recieved}`);
  }
}

solve([
  `10`,
  `Add=Mark=5=4`,
  `Add=Clark=3=5`,
  `Add=Berg=9=0`,
  `Add=Kevin=0=0`,
  `Message=Berg=Kevin`,
  `Statistics`
]);
