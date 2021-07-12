let wordlist = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

/**
 * @returns Array
 */
function groupAnagram() {
    const result = [];
    while (wordlist.length > 0) {
        result.push(pairSearching(wordlist[0]));
    }
    return result;
}

/*** 
 * This function for searching through wordlist that anagram
 * of passed word parameter
 * @param {string} word 
 * @returns Array 
 */
function pairSearching(word) {
    wordlist.splice(0, 1)
    let wordArray = Array.from(word);
    const result = [];
    result.push(word);
    for (let x = 0; x < wordlist.length; x++) {
        const word2 = wordlist[x]
        if (wordArray.length === word2.length) {
            if (isAnagram(wordArray, Array.from(word2))){
                result.push(wordlist[x]);
                wordlist.splice(x, 1)
                x = x-1;
            }
        }
    }
    return result;
}

/**
 * check if word2 is anagram of word1
 * @param {string} word1 
 * @param {string} word2 
 * @returns boolean
 */
function isAnagram(word1, word2) {
    const superSet = {};

    for (const i of word1) {
        superSet[i] = 1;
    }
  
    for (const i of word2) {
        if (!superSet[i]) {
            return false;
        }
        superSet[i] = 2;
    }
  
    for (let e in superSet) {
        if (superSet[e] === 1) {
          return false;
        }
    }
    return true;
}

console.time('time');
console.log(groupAnagram());
console.timeEnd('time');