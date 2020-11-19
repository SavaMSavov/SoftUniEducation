function solve(input = []){

    let equipment = input.shift().split(` `);
    for(let i = 0; i < input.length; i++){

        let splited = input[i].split(` `);
        let command = splited[0];
        let item = splited[1];

        if(command === `Buy`){
            buy(equipment, item);
        }
        else if(command === `Trash`){
            trash(equipment, item);
        }
        else if(command === `Repair`){
            repair(equipment, item);
        }
        else if(command === `Upgrade`){
            upgrade(equipment, item);
        }
    }
    function buy(equipment, element){

        if(!equipment.includes(element)){
            equipment.push(element);
        }
    }
    function trash(equipment, element){

        if(equipment.includes(element)){
            let indexTrash = equipment.indexOf(element);
            equipment.splice(indexTrash, 1);
        }
    }
    function repair(equipment, element){
        
        if(equipment.includes(element)){
            let indexRepair = equipment.indexOf(element);
            equipment.splice(indexRepair, 1);
            equipment.push(element);
        }
    }
    function upgrade(equipment, element){

        let itemToUpgrade = element.split(`-`);
        let upgraded = itemToUpgrade[0];
        let powerUp = itemToUpgrade[1];

        if(equipment.includes(upgraded)){
            let indexUpgrade = equipment.indexOf(upgraded);
            
            equipment.splice(indexUpgrade + 1, 0, `${upgraded}:${powerUp}`);
        }
    }
    console.log(equipment.join(` `));
}

solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])