function InchesToCentimeters(input){
    let inches = Number(input.shift());
    let centimeters = inches * 2.54;

    console.log(centimeters);
}
InchesToCentimeters([5])