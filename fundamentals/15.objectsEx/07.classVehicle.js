class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;

        let engine = parts.engine;
        let power = parts.power;
        let quality = parts.engine * parts.power;

        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: quality, 
        }

        this.fuel = fuel;
    }

    drive(fuelloss){
        this.fuel -= fuelloss;
    }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
