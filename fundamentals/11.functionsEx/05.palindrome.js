function solve(arr = []){

    function isPalindrome(text){

        let len = text.length;
        let isPalindrome = true;

        for(let i = 0; i < Math.floor(len / 2); i++){
            if( text[i] !== text[len - 1 - i]){
                isPalindrome = false;
                break;
            }
        }

        return isPalindrome;
    }

    for(let num of arr){
        console.log(isPalindrome(num.toString()));
    }

}

solve([123,323,421,121]);
solve([32,2,232,1010]);