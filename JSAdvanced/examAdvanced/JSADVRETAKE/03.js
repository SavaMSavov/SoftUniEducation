class Movie {
  movieName;
  ticketPrice;
  screenings;
  totalProfit;
  totalSoldTickets;
  screenings;

  constructor(movieName, ticketPrice) {
    this.movieName = movieName;
    this.ticketPrice = ticketPrice;
    this.totalProfit = 0;
    this.totalSoldTickets = 0;
    this.screenings = [];
  }

  newScreening(date, hall, description) {
    const isThereSuchScreeningDate = this.screenings.some(
      (e) => e.date === date
    );
    const isThereSuchScreeningHall = this.screenings.some(
      (e) => e.hall === hall
    );

    if (isThereSuchScreeningDate && isThereSuchScreeningHall) {
      return `Sorry, ${hall} hall is not available on ${date}`;
    } else {
      this.screenings.push({ date, hall, description });
      return `New screening of ${this.movieName} is added.`;
    }
  }

  endScreening(date, hall, soldTickets) {
    const isThereSuchScreeningDate = this.screenings.some(
      (e) => e.date === date
    );
    const isThereSuchScreeningHall = this.screenings.some(
      (e) => e.hall === hall
    );

    if (!isThereSuchScreeningDate && !isThereSuchScreeningHall) {
      return `Sorry, there is no such screening for ${this.movieName} movie.`;
    } else {
      let currProfit = soldTickets * this.ticketPrice;
      this.totalProfit += currProfit;
      this.totalSoldTickets += soldTickets;

      const isItAnyScreening = this.screenings.some(
        (e) => e.date === date && e.hall === hall
      );

      if (isItAnyScreening) {
        let currScr = this.screenings.filter(
          (e) => e.date === date && e.hall === hall
        );
        let index = this.screenings.indexOf(currScr);

        this.screenings.splice(index, 1);
      }

      return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currProfit}`;
    }
  }

  toString() {
    let output = "";
    output +=
      `${this.movieName} full information:` +
      `\nTotal profit: ${this.totalProfit}$` +
      `\nSold Tickets: ${this.totalSoldTickets}`;
    if (this.screenings.length > 0) {
      output += `\nRemaining film screenings:`;
      for (const e of this.screenings) {
        output += `\n${e.hall} - ${e.date} - ${e.description}`;
      }
      return output;
    } else {
      return `No mote screenings!`;
    }
  }
}

let m = new Movie("Wonder Woman 1984", "10.00");
console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
console.log(m.endScreening("October 3, 2020", "Main", 78));
console.log(m.toString());

m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
console.log(m.toString());
