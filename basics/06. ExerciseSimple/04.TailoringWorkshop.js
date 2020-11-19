function tailoring(input){
    let tableCovers = Number(input.shift());
    let tableLenght = Number(input.shift());
    let tableWidth = Number(input.shift());

    let areaRectangle = (tableLenght + 2 * 0.30) * (tableWidth + 2* 0.30);
    let areaSquare = Math.pow((tableLenght/2),2);

    let priceUSD = tableCovers * (areaRectangle * 7 + areaSquare * 9);
    let priceBGN = priceUSD * 1.85;

    console.log(` ${priceUSD.toFixed(2)} USD`);
    console.log(` ${priceBGN.toFixed(2)} BGN`);
}

tailoring([5,1.00,0.50])