function solve(stock = [], ordered = []){

    function addingToArr(inStock = []){
  
        let inStockOutput = [];
  
        for(let i = 0; i < inStock.length; i++){
  
            if(i % 2 == 0){
                let name = inStock[i];
                let count = Number(inStock[i + 1]);
  
                let product = { name, count };
                inStockOutput.push(product);  
            }            
        }
        return inStockOutput;
    }
  
    let firstArray = addingToArr(stock);
    let secondArray = addingToArr(ordered);
    let merged = firstArray.concat(secondArray)
  
    let result = []

    for (const element of merged) {
        let missingInTheResultArray = true
        for (const resultElement of result) {
            if(element.name === resultElement.name){
            resultElement.count += element.count
            missingInTheResultArray = false
            }
        }
        if(missingInTheResultArray) {
            result.push(element)
        }
    }
  
    for (const element of result) {

        console.log(`${element.name} -> ${element.count}`); 
    }
}
  
  solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])