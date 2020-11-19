function solve(input = []) {
  let countOfInputs = input.shift();
  let counter = 0;

  for (let i = 0; i < countOfInputs; i++) {
    let pattern = /^U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}\d+)P@\$$/g;
    let match = pattern.exec(input[i]);

    if (match) {
      const { username, password } = match.groups;
      counter++;
      console.log(`Registration was successful`);
      console.log(`Username: ${username}, Password: ${password}`);
    } else {
      console.log(`Invalid username or password`);
    }
  }
  console.log(`Successful registrations: ${counter}`);
}

solve([
  `3`,
  `U$MichaelU$P@$asdqwe123P@$`,
  `U$NameU$P@$PasswordP@$`,
  `U$UserU$P@$ad2P@$`
]);
