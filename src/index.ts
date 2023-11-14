const dictTrie = require("./trie").Trie;
const words = require("an-array-of-english-words");

// Driver code; construct the trie
const trie = new dictTrie();

for (const word of words) {
    trie.insert(word.toLowerCase());
}

// Test cases
const undefinedCase = undefined;
const baseCase = "";
const simpleTest = "oodg";
const upperLowerCases = "Oodg";
const specialChars = "@#1231 &% Oodg";
const veryLong =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const undefinedCaseRes = trie.allPossibleWords(undefinedCase);
const baseCaseRes = trie.allPossibleWords(baseCase);
const simpleTestRes = trie.allPossibleWords(simpleTest);
const upperLowerCasesRes = trie.allPossibleWords(upperLowerCases);
const specialCharsRes = trie.allPossibleWords(specialChars);
const veryLongRes = trie.allPossibleWords(veryLong);

console.log(`Testing with string: ${undefinedCaseRes}`, "\n Results: \n");
console.log(undefinedCaseRes, "\n");
console.log(`Testing with string: ${baseCase}`, "\n Results: \n");
console.log(baseCaseRes, "\n");
console.log(`Testing with string: ${simpleTest}`, "\n Results: \n");
console.log(simpleTestRes, "\n");
console.log(`Testing with string: ${upperLowerCases}`, "\n Results: \n");
console.log(upperLowerCasesRes, "\n");
console.log(`Testing with string: ${specialChars}`, "\n Results: \n");
console.log(specialCharsRes, "\n");
console.log(`Testing with string: ${veryLong}`, "\n Results: \n");
console.log(veryLongRes, "\n");
