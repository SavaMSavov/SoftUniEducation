function solve(input = []) {
  let line = input.shift();

  let followers = [
    //{
    // name: `gosho`,
    // likes:
    // comments:
    //}
  ];

  while (line != `Log out`) {
    const tokens = line.split(`: `);
    const command = tokens[0];
    const person = tokens[1];
    const count = +tokens[2];

    if (command === `New follower`) {
      const isPersonExist = followers.find(p => p.name === person);

      if (!isPersonExist) {
        followers.push({ name: person, likes: 0, comments: 0 });
      }
    } else if (command === `Like`) {
      const isPersonExist = followers.find(p => p.name === person);

      if (!isPersonExist) {
        followers.push({ name: person, likes: count, comments: 0 });
      } else {
        isPersonExist.likes += count;
      }
    } else if (command === `Comment`) {
      const isPersonExist = followers.find(p => p.name === person);

      if (!isPersonExist) {
        followers.push({ name: person, likes: 0, comments: 1 });
      } else {
        isPersonExist.comments += 1;
      }
    } else if (command === `Blocked`) {
      const isPersonExist = followers.find(p => p.name === person);

      if (!isPersonExist) {
        console.log(`${person} doesn't exist.`);
      } else {
        followers = followers.filter(x => x.name !== person);
      }
    }
    line = input.shift();
  }

  followers.sort((a, b) => {
    if (a.likes > b.likes) {
      return -1;
    } else if (a.likes < b.likes) {
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

  console.log(`${followers.length} followers`);

  for (const follower of followers) {
    console.log(`${follower.name}: ${follower.likes + follower.comments}`);
  }
}

solve([
  `New follower: gosho`,
  `Like: gosho: 5`,
  `Comment: gosho`,
  `New follower: gosho`,
  `New follower: tosho`,
  `Comment: gosho`,
  `Comment: tosho`,
  `Comment: pesho`,
  `Log out`
]);

console.log(``);

solve([
  `Like: A: 3`,
  `Comment: A`,
  `New follower: B`,
  `Blocked: A`,
  `Comment: B`,
  `Like: C: 5`,
  `Like: D: 5`,
  `Log out`
]);
