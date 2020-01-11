function findFactorial(n){
    if(n===0){
        return 1;
    }else{
        return n * findFactorial(n - 1);
    }
}

console.log(findFactorial(2));