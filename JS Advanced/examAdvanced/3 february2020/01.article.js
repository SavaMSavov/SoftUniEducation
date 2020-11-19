class Article {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this article!`;
    }

    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this article!`;
  }

  like(userName) {
    if (userName === this.creator) {
      throw new Error("You can't like your own articles!");
    }

    const user = this._likes.find((x) => x === userName);

    if (user !== undefined) {
      throw new Error("You can't like the same article twice!");
    }

    this._likes.push(userName);
    return `${userName} liked ${this.title}!`;
  }

  dislike(userName) {
    const index = this._likes.indexOf(userName);

    if (index === -1) {
      throw new Error("You can't dislike this article!");
    }
    this._likes.splice(index, 1);
    return `${userName} disliked ${this.title}`;
  }

  comment(username, content, id) {
    const user = this._comments[id - 1];

    if (id === undefined || user === undefined) {
      this._comments.push({
        id: this._comments.length + 1,
        username,
        content,
        replies: [],
      });
      return `${username} commented on ${this.title}`;
    }

    user.replies.push({
      id: `${user.id}.${user.replies.length + 1}`,
      username,
      content,
    });
    return "You replied successfully";
  }

  toString(sortingType) {
    return [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      "Comments:",
      this._sort(this._comments.slice(), sortingType),
    ].join("\n");
  }

  _sort(arry, method) {
    const sortMap = {
      asc: (a, b) => a.id - b.id,
      desc: (a, b) => b.id - a.id,
      username: (a, b) => a.username.localeCompare(b.username),
    };
    return arry
      .sort(sortMap[method])
      .reduce((a, b) => {
        a = [...a, `-- ${b.id}. ${b.username}: ${b.content}`];
        if (b.replies.length > 0) {
          a = [
            ...a,
            b.replies
              .sort(sortMap[method])
              .reduce(
                (acc, curr) => [
                  ...acc,
                  `--- ${curr.id}. ${curr.username}: ${curr.content}`,
                ],
                []
              )
              .join("\n"),
          ];
        }
        return a;
      }, [])
      .join("\n");
  }
}
