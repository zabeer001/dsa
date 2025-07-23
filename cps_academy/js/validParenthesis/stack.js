function isValidParenthesis(e, mapping) {
    if (e.length % 2 !== 0) {
        return 'Invalid parenthesis';
    }
    let stack = [];
    for (let i = 0; i < (e.length / 2); i++) {

        let item = e[i];
        if (mapping[item]) {
            stack.push(mapping[item]);
        } else {
            if (item === stack.pop()) {
                continue;
            }
            return 'Invalid parenthesis';
        }
        return stack.length === 0 ? 'Valid parenthesis' : 'Invalid parenthesis';
    }
}

    const mapping = {
        "{": "}",
        "(": ")",
        "[": "]",
    };

    let question = "{()}";
    let result = isValidParenthesis(question, mapping);
    console.log(result); // Output: Valid parenthesis