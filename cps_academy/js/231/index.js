// const solution = (n) => {

//     let base = 2
//     let x =  Math.log(n) / Math.log(base);
//     if(Number.isInteger(x)){
//         return true
//     }else{
//         return false
//     }

// }

const solution = (n) => {

    if (n <= 0) return false; // powers of two are positive

    let base = 2;
    let x = Math.log(n) / Math.log(base);
    // check if x is close enough to an integer (tolerance = 1e-10)
    return Math.abs(x - Math.round(x)) < 1e-10;

}



const n = 16;


// const result = Math.log(x) / Math.log(base);

let result = solution(n)
console.log(result);
