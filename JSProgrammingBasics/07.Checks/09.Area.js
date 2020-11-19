function areashapes (input){
    let shape = input.shift();
    if(shape === "square"){
        let a = Number(input.shift());
        area = a * a;
        console.log(area.toFixed(3));
    } else if(shape === "rectangle"){
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b;
        console.log(area.toFixed(3));
    } else if(shape === "circle"){
        let a = Number(input.shift());
        area = a * a * Math.PI;
        console.log(area.toFixed(3));
    } else if(shape === "triangle"){
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b / 2;
        console.log(area.toFixed(3));
    } else {
        console.log("wrong input");
    }
}
areashapes(["rectangle",7,2.5])