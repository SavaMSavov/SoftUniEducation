class Forum {
  #users;
  #questions;
  #id;
  logged;

  constructor() {
    this.#users = [];
    this.#questions = [];
    this.#id = 1;
    this.logged = [];
  }

  register(username, password, repeatPassword, email) {
    if (
      username === "" ||
      password === "" ||
      repeatPassword === "" ||
      email === ""
    ) {
      throw new Error(`Input can not be empty`);
    }
    if (password !== repeatPassword) {
      throw new Error(`Passwords do not match`);
    }
    if (this.#users.includes((u) => u.name === username || u.email === email)) {
      throw new Error(`This user already exists!`);
    }

    this.#users.push({ username, password, email });
    return `${username} with ${email} was registered successfully!`;
  }

  login(username, password) {
    let user = this.#users.find((u) => u.username === username);
    if (user === undefined) {
      throw new Error(`There is no such user`);
    }
    if (user.password === password) {
      this.logged.push(user.username);
      return `Hello! You have logged in successfully`;
    }
  }

  logout(username, password) {
    let user = this.#users.find((u) => u.username === username);
    if (user === undefined) {
      throw new Error(`There is no such user`);
    }
    if (user.password === password) {
      return `You have logged out successfully`;
    }
    this.logged.splice(this.logged.indexOf(user.username), 1);
  }

  postQuestion(username, question) {
    let user = this.#users.find((u) => u.username === username);
    if (user === undefined || !this.logged.includes(user.username)) {
      throw new Error(`You should be logged in to post questions`);
    }
    if (question === "") {
      throw new Error(`Invalid question`);
    }

    this.#questions.push({
      id: this.#id++,
      username,
      content: question,
      answers: [],
    });
    return `Your question has been posted successfully`;
  }

  postAnswer(username, questionId, answer) {
    let user = this.#users.find((u) => u.username === username);
    if (user === undefined || !this.logged.includes(user.username)) {
      throw new Error(`You should be logged in to post answers`);
    }
    if (answer === "") {
      throw new Error(`Invalid answer`);
    }
    let question = this.#questions.find((q) => q.id === questionId);
    if (question === undefined) {
      throw new Error(`There is no such question`);
    }

    question.answers.push({ username, content: answer });
    return `Your answer has been posted successfully`;
  }

  showQuestions() {
    let str = "";
    this.#questions.forEach((q) => {
      str += `Question ${q.id} by ${q.username}: ${q.content}\n`;
      q.answers.forEach((a) => (str += `---${a.username}: ${a.content}\n`));
    });
    return str.trim();
  }
}

let forum = new Forum();
forum.register("Jonny", "12345", "12345", "jonny@abv.bg");
forum.register("Peter", "123ab7", "123ab7", "peter@gmail@.com");
forum.login("Jonny", "12345");
forum.login("Peter", "123ab7");
forum.postQuestion("Jonny", "Do I need glasses for skiing?");
forum.postAnswer("Peter", 1, "Yes, I have rented one last year.");
forum.postAnswer("Jonny", 1, "What was your budget");
forum.postAnswer("Peter", 1, "$50");
forum.postAnswer("Jonny", 1, "Thank you :)");
console.log(forum.showQuestions());
