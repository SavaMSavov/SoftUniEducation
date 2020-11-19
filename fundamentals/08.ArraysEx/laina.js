
function solve(array = []){

    let longestSeqLength = 1;
    let longestSeqStart = 0;
    let currentSeqLength = 1;
    let currentSeqStart = 0; 

    for(let i = 1; i < array.Length; i++){
        if(array[i] == array[i-1]){
            
            currentSeqLength++;

            if(currentSeqLength > longestSeqLength)
            {
                longestSeqLength = currentSeqLength;
                longestSeqStart = currentSeqStart;
            }
        }
        else{
            currentSeqLength = 1;
            currentSeqStart = i;
        }
    }

    for(let i = longestSeqStart; i < longestSeqStart + longestSeqLength; i++){
        console.log(array[i] + " ");
    }
}


solve([2, 1, 1, 2, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
