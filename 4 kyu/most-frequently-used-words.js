// Most frequently used words in a text

// Task:

// Write a function that, given a string of text (possibly with punctuation and line-breaks), 
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:

// - A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// - Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// - Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// - Matches should be case-insensitive, and the words in the result should be lowercased.
// - Ties may be broken arbitrarily.
// - If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, 
// or an empty array if a text contains no words.


// My solution:

function topThreeWords(text) {
    const words = text.replace(/([^a-zA-Z'])+/g, ' ')
    .toLowerCase().split(' ').reduce((map, word)=>{
      if (word && word !== "'") {
        if (map[word]) map[word]++;
        else map[word] = 1;
      }
      return map;
    }, {})
    const topThreeValues = Object.values(words).sort((a, b) => b - a).slice(0, 3)
    let keys = Object.keys(words)
    const result = topThreeValues.map(value=>{
      const word = keys.find(key => words[key] === value)
      keys = keys.filter(key => key !== word)
      return word
    })
    return result;
  }