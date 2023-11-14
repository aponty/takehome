## To Run
`npm i && npm run build`  
`npm run test`

to run the simple iterative solution:  
`cd build && node simpleIterationSolution.js`

## The Problem

Write a function that accepts a single string as input, and that returns a list of English words that can be created using some combination of the letters in the input string.
Example input: "oogd"
Example output: ["good", "god", "dog", "goo", "do", "go"]
You can assume you'll be given an array of strings that enumerates all valid English words. To determine whether a word is a valid word, you can simply check for its presence in the array (e.g., `WORDS.includes(word)`)


## Solutions


### Naive Approach


Phrased differently, the challenge here is to find which, if any, of all permutations of all subsets of the characters of the string are valid English words.


The first thought is to generate all permutations of all subsets, and filter out the words from the resulting list.


However, there are 2^N possible subsets of a list of N length, so a 20 character word will have over a million subsets . Permutations are even more complex at O(n * n!), so attempting to solve the problem in this manner will quickly leady to OOM errors (or extremely long runtimes, if using memory-safe algorithms like a permutation generator function).


### Simple Iterative Approach


The English language has appx 1 million words in it, which is not an unmanageable size for an array. A very simple (and therefore very maintainable) solution is to simply iterate through all the words, and check if each can be constructed from the characters provided. This runs in constant time (1M * N) and gets the job done. Depending on the use context, this may actually be a preferred solution; if the set of words is know to have a limited scope (say, all English words under a 7th grade reading level), there are limited engineering or hardware resources available in a get-to-MVP situation, or the feature is a low-use use-case likely to be maintained by a very junior team.


Of course, it is not not the fastest.


### Trie approach


The preferred approach in nearly all contexts. Construct a [trie](https://en.wikipedia.org/wiki/Trie) from the list of words, and then navigate it with the set of characters available recursively. Remove characters from the available set as you pass it down each level of the tree. If you hit a node that is marked as the end of a word, store that word.


This allows us to cut off sections of iteration entirely vs the previous approach; if we know our set does not include the word "do", we do not have to check "dog" (or "doggie", or "dot", or "domicile") to see if they are constructible as well.


Downsides of this approach is that it does take some (fairly limited) time to construct the tree, which may hamper performance minimally in unstable environments, and there is additional code complexity esp. in the case of expanding use cases (removing words; mapping or reducing the set of words, etc)

