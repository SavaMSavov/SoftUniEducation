function solve(input = []) {
  let email = input.shift();
  let token = input.shift();

  while (token !== `Complete`) {
    let splitedToken = token.split(` `);
    let command = splitedToken[0];
    let argument = splitedToken[1];

    if (command === `Make`) {
      if (argument === `Upper`) {
        email = email.toUpperCase();
        console.log(email);
      } else if (argument === `Lower`) {
        email = email.toLowerCase();
        console.log(email);
      }
    } else if (command === `GetDomain`) {
      let count = +argument;
      let domain = email.substring(email.length - count);
      console.log(domain);
    } else if (command === `GetUsername`) {
      let index = email.indexOf(`@`);
      if (index !== -1) {
        console.log(email.substring(0, index));
      } else {
        console.log(`The email ${email} doesn't contain the @ symbol.`);
      }
    } else if (command === `Encrypt`) {
      let result = email
        .split(``)
        .map(x => x.charCodeAt(0))
        .join(` `);
      console.log(result);
    } else if (command === `Replace`) {
      while (email.includes(argument)) {
        email = email.replace(argument, `-`);
      }
      console.log(email);
    }
    token = input.shift();
  }
}

solve([
  `Mike123@somemail.com`,
  `Make Upper`,
  `GetDomain 3`,
  `GetUsername`,
  `Encrypt`,
  `Complete`
]);
