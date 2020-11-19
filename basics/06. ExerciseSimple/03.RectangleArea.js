function RectangleArea(input){
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    let area = a * b;
    let perimeter = 2 * (a + b);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
RectangleArea([60,20,10,50])