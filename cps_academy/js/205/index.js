function checkIfIsomorphic(s, t) {
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = t[i]
        } else {
            let status = (obj[s[i]] === t[i])
            if (status === false) {
                return status
            }
        }
    }
    return true
}

function solution(s, t) {
    let result = checkIfIsomorphic(s, t)
    if (result == true) {
        result = checkIfIsomorphic(t, s)
    }
    return result
}



let [s, t] = ["badc", "baba"];

let result = solution(s,t)

console.log(result);
