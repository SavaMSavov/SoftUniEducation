function solve(steps, footprint, speed) {
  const dist = steps * footprint;
  let time = Math.round((dist / speed) * 3.6);
  time += Math.floor(dist / 500) * 60;

  const seconds = time % 60;
  time -= seconds;
  const minutes = time / 60;
  time -= minutes * 60;
  const hours = time / 3600;

  console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

  function pad(num) {
    if (num < 10) {
      return `0` + num;
    } else {
      return `` + num;
    }
  }
}

solve(4000, 0.6, 5);
solve(2564, 0.7, 5, 5);
