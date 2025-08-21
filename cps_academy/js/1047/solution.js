const solution = (s) => {

    let stack = []
    let str = ""

    for (let char of s) {
        stack.push(char)

        if(stack[stack.length-1] == stack[stack.length-2]){
            stack.pop()
            stack.pop()
        }
       
    }

    for(let char of stack){
        str += char

    }
    
    return str
}


let s = "abbaca"

let result = solution(s)
console.log(result);