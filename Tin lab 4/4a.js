function recursive(n){
    if(n == 1)
        return 1;

    return n * recursive(n - 1);
}

console.log(recursive(7));

function iterative(n){
    if(n == 1)
        return 1;
    
    let result = 1;
    for(let i = 1; i <= n; i++)
        result = result * i;

    return result;
}

console.log(iteration(8));