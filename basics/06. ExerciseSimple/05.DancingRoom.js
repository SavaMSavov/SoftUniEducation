function DancingRoom(input){
    let L = Number(input.shift());
    let W = Number(input.shift());
    let A = Number(input.shift());

    let room = (L * 100) * (W * 100);
    let wardrobe = Math.pow((A*100), 2);
    let bench = room/10;

    let freeSpace = room - wardrobe - bench;
    let dancers = freeSpace / 7040;

    console.log(Math.floor(dancers));
}
DancingRoom([50,25,2])