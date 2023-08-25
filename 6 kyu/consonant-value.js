//Task:

// Given a lowercase string that has alphabetic characters only and no spaces, 
// return the highest value of consonant substrings. 
// Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z d cs"


// My solution:

function solve(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return s.split(/[aeiou]/).reduce((result, part) => {
        const partSum = part.split('').reduce((accu, char) => {
            for (let i = 0; i < alphabet.length; i++) {
                if (char === alphabet[i]) {
                    accu += (i + 1);
                }
            }
            return accu;
        }, 0);
      
        result = partSum > result ? partSum : result;
        return result;
    }, 0);
}