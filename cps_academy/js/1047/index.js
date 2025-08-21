const solution = (s) => {
    let str = ""

    let obj = {}
    for (let char of s) {
        if (!obj[char]) {
            obj[char] = 1
        } else {
            obj[char] += 1
            if ((obj[char]) % 2 == 0) {
                delete obj[char];
            }

        }
    }

    for (let key in obj) {
        if ((obj[key]) % 2 == 1) {
            str += key
        }

    }

    return str
}

let s = "abbaca"

let result = solution(s)
console.log(result);
