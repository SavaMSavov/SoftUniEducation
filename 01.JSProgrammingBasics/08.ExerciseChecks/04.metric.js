function metric(input) {
    let num = Number(input.shift());
    let  first = input.shift();
    let second = input.shift();
    let result = 0.0;

    if((first === 'mm') && (second === 'm')){
        result = num / 1000; 
    } else if((first === 'm') && (second === 'mm')){
        result = num * 1000;
    } else if((first === 'cm') && (second === 'm')){
        result = num / 100;
    } else if((first === 'm') && (second === 'cm')){
        result = num * 100;
    } else if((first === 'cm') && (second === 'mm')){
        result = num * 10;
    } else if((first === 'mm') && (second === 'cm')){
        result = num / 10;
    } 
    console.log(result.toFixed(3));
}
metric(['45','cm','mm'])