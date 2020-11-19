function solve(input = []) {
  let line = input.shift();

  let users = [
    //   {
    //       name: `ivan`,
    //       emails: [....]
    //   }
  ];

  while (line != `Statistics`) {
    const tokens = line.split(`->`);
    const command = tokens[0];
    const person = tokens[1];
    const msg = tokens[2];

    if (command === `Add`) {
      const isUserExist = users.find(u => u.name === person);
      if (!isUserExist) {
        users.push({ name: person, emails: [] });
      } else {
        console.log(`${person} is already registered`);
      }
    } else if (command === `Send`) {
      const currUser = users.find(u => u.name === person);

      currUser.emails.push(msg);
    } else if (command === `Delete`) {
      const isUserExist = users.find(u => u.name === person);

      if (isUserExist) {
        users = users.filter(n => n.name !== person);
      } else {
        console.log(`${person} not found!`);
      }
    }
    line = input.shift();
  }

  users.sort((a, b) => {
    if (a.emails.length > b.emails.length) {
      return -1;
    } else if (a.emails.length < b.emails.length) {
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
    console.log(user.name);
    for (let i = 0; i < user.emails.length; i++) {
      console.log(`- ${user.emails[i]}`);
    }
  }
}

solve([
  `Add->Mike`,
  `Add->George`,
  `Send->George->Hello World`,
  `Send->George->Some random test mail`,
  `Send->Mike->Hello, do you want to meet up tomorrow?`,
  `Send->George->It would be a pleasure`,
  `Send->Mike->Another random test mail`,
  `Statistics`
]);

console.log(``);

solve([
  `Add->Mike`,
  `Add->George`,
  `Send->George->Hello World`,
  `Send->George->Your loan is overdue`,
  `Add->Mike`,
  `Send->Mike->Hello, do you want to meet up tomorrow?`,
  `Delete->Peter`,
  `Send->George->I'm busy`,
  `Send->Mike->Another random test mail`,
  `Delete->George`,
  `Statistics`
]);
