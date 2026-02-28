
function factorial(n){
    if(n === 1){
        return 1
    }
    let r =  n* factorial(n-1)
    console.log(r);
    return r
    
}


let n = 5

let result = factorial(5) 

console.log(result);
