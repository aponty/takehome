class TrieNode {
    children: Map<string, TrieNode>;
    value: string;
    endOfWord: boolean;
    isRoot: boolean;

    constructor({ value = "", isRoot = false }) {
        this.children = new Map();
        this.value = value;
        this.endOfWord = false;
        this.isRoot = isRoot;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode({ isRoot: true });
    }

    insert(word: string): boolean {
        if (!word) return false;

        let currentNode = this.root;

        for (const letter of word) {
            if (!currentNode.children.has(letter)) {
                currentNode.children.set(letter, new TrieNode({ value: letter }));
            }
            currentNode = <TrieNode>currentNode.children.get(letter);
        }

        currentNode.endOfWord = true;
        return true;
    }

    allPossibleWords(string: string): string[] {
        if (string === null || string === undefined) return [];
        const chars = [...string.toLowerCase()];
        const res: string[] = [];

        const checkNodes = (
            remainingChars = chars,
            currentNode = this.root,
            currentWord = ""
        ) => {
            const nodeInSet = remainingChars.indexOf(currentNode.value) !== -1;
            if (!remainingChars.length) return;
            if (!nodeInSet && !currentNode.isRoot) return;
            currentWord += currentNode.value;
            if (currentNode.endOfWord) res.push(currentWord);
            if (!currentNode.children) return;
            for (const [_, childNode] of currentNode.children) {
                const nextCharSet = this.#removeElFromArray(
                    remainingChars,
                    currentNode.value
                );
                checkNodes(nextCharSet, childNode, currentWord);
            }
        };
        checkNodes();
        return res;
    }

    #removeElFromArray = (arr: string[], el: string): string[] => {
        return el
            ? [
                  ...arr.slice(0, arr.indexOf(el)),
                  ...arr.slice(arr.indexOf(el) + 1),
              ]
            : arr;
    };
}

module.exports.Trie = Trie;
