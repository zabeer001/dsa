


function findCommonLetters(words) {


    const firstWord = words[0];
    const obj = {};

    // Count chars in first word
    for (let char of firstWord) {
        obj[char] = (obj[char] || 0) + 1;
    }

    // Loop over keys, not repeated chars
    for (let char of Object.keys(obj)) {
        for (let i = 1; i < words.length; i++) {
            let word = words[i];

            if (!word.includes(char)) {
                delete obj[char];
                break; // No need to check further
            } else {
                let countletter = word.split(char).length - 1;
                obj[char] = Math.min(countletter, obj[char]);
            }
        }
    }

    return Object.entries(obj)
        .flatMap(([key, count]) => Array(count).fill(key));

}

const words = ["cool","lock","cook"]

let result = findCommonLetters(words)

console.log(result);




// remove "a"
// delete obj["a"];

