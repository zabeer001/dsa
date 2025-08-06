function findUniqueCharIndex(s) {
    let char
    for (let i = 0; i < s.length; i++) {
        char = s[i]
        let indexToRemove = i;
        let modifiedStr = s.slice(0, indexToRemove) + s.slice(indexToRemove + 1);
        if (!modifiedStr.includes(char)) {
            return i
        }
    }

    return -1
}

let s = "loveleetcode"

let result = findUniqueCharIndex(s)
console.log(result);
