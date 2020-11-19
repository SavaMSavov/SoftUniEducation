function solve(input = []) {
  for (let i = 0; i < input.length; i++) {
    let pattern = /^([#$%*&]+)(?<racer>[A-Za-z]+)\1=(?<lengthGeohashCode>[\d]+)!{2}(?<geohashCode>.+)$/g;
    let match = pattern.exec(input[i]);

    if (match) {
      const { racer, lengthGeohashCode, geohashCode } = match.groups;

      if (+lengthGeohashCode === geohashCode.length) {
        let newCode = ``;
        for (let char of geohashCode) {
          const charAsciiCode = char.charCodeAt(0);
          const lengOfNewVal = charAsciiCode + +lengthGeohashCode;
          newCode += String.fromCharCode(lengOfNewVal);
        }

        console.log(`Coordinates found! ${racer} -> ${newCode}`);
      } else {
        console.log(`Nothing found!`);
      }
    } else {
      console.log(`Nothing found!`);
    }
  }
}

solve([
  `%GiacomoAgostini%=7!!hbqw`,
  `&GeoffDuke*=6!!vjh]zi`,
  `JoeyDunlop=10!!lkd,rwazdr`,
  `Mike??Hailwood=5!![pliu`,
  `#SteveHislop#=16!!df%TU[Tj(h!!TT[S`
]);

console.log(``);

solve([
  `Ian6Hutchinson=7!!\(58ycb4`,
  `#MikeHailwood#!!'gfzxgu6768=11`,
  `slop%16!!plkdek/.8x11ddkc`,
  `$Steve$=9Hhffjh`,
  `*DavMolyneux*=15!!efgk#'_$&UYV%h%`,
  `RichardQ^uayle=16!!fr5de5kd`
]);
