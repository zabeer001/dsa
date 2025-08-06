function findUniqueCharIndex(s) {
    let charfreq = {}
    for (let char of s) {
        if (!charfreq[char]) {
            charfreq[char] = 1
        }else{
            charfreq[char] = charfreq[char] + 1
        }

    }
    for(let i = 0 ; i < s.length ;i++ ){
         if (charfreq[s[i]] === 1) return i;
    }

    return -1
}

let s = "loveleetcode"

let result = findUniqueCharIndex(s)
console.log(result);
