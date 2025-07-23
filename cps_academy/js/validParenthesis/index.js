
function isValidParenthesis(ques,mapping) {
    if (ques.length % 2 !== 0) {
        return 'Invalid parenthesis';       
        
    }
    for (let i = 0; i < (ques.length/2) ; i++) {

        let item1 = ques[i];
        let item2 = ques[ques.length - 1 - i];
        if (mapping[item1] !== item2) {
            // console.log(mapping[item1]);
            // console.log(item2);
            
            return 'Invalid parenthesis';
        }
    }
    return 'Valid parenthesis';
}



const mapping = {
    "{": "}",
    "(": ")",
    "[": "]",
};

let ques = "{(})"

let result = isValidParenthesis(ques,mapping);

console.log(result); // Output: Valid parenthesis
