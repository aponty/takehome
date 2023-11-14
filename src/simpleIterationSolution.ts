const wordList = require("an-array-of-english-words");

const stringContainsWord = (string: string, word: string): boolean => {
    let rest = string;
    for (const char of word) {
        const sliceIndex = rest.indexOf(char);
        if (sliceIndex === -1) return false;
        rest = rest.slice(0, sliceIndex) + rest.slice(sliceIndex + 1);
    }
    return true;
};

const allPossibleWords = (string: string): string[] => {
    const possibleWords = new Set();
    for (const word of wordList) {
        if (stringContainsWord(string, word)) possibleWords.add(word);
    }
    return <string[]>[...possibleWords]
};

const basicTest = "oodg";
const basicTestResult = allPossibleWords(basicTest);
console.log(`Testing with string: ${basicTest}`, "\n Results: \n");
console.log(basicTestResult);


const veryLongTest =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
const veryLongTestResult = allPossibleWords(veryLongTest);
console.log(`Testing with string: ${veryLongTest}`, '\n Results: \n');
console.log(veryLongTestResult);
