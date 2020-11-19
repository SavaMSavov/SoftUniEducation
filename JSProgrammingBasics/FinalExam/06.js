function solve(input) {
    let lastSector = input.shift()
    let rows = +input.shift()
    let seatsOddrow = +input.shift()
   
    let sector = lastSector.charCodeAt(0)
    let totalSeats = 0
    let nextSectorBonus = 0
   
    for (let i = 65; i <= sector; i++) {
      for (let j = 1; j <= rows + nextSectorBonus; j++) {
        let seatsPerRow = 0
        if (j % 2 == 0) {
          seatsPerRow = seatsOddrow + 2
        } else {
          seatsPerRow = seatsOddrow
        }
   
        for (let k = 97; k <= seatsPerRow + 96; k++) {
          console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`)
          totalSeats++
        }
      }
      nextSectorBonus++
    }
    console.log(totalSeats)
  }
  solve([`B`, 3, `2`])