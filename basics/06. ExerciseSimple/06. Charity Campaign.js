function Charity(input){
    let days = Number(input.shift());
    let confectioner = Number(input.shift());
    let cakes = Number(input.shift());      //price: 45.00
    let waffles = Number(input.shift());    //price: 5.80
    let pancakes = Number(input.shift());   //price: 3.20

    let eachConfectioner = cakes * 45.00 + waffles * 5.80 + pancakes * 3.20;
    let campaign = days * confectioner * eachConfectioner;

    let sum = campaign - campaign / 8;

    console.log(sum.toFixed(2));
}
Charity([20,8,14,30,16])