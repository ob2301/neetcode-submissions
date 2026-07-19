class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root
        
        for char in word:
            if char in curr.children:
                curr = curr.children[char]
            else:
                curr.children[char] = TrieNode()
                curr = curr.children[char]

        curr.end = True

    def search(self, word: str) -> bool:
        def dfs(root, i):
            curr = root

            for j in range(i, len(word)):
                char = word[j]

                if char == ".":
                    for child in curr.children.values():
                        if dfs(child, j + 1):
                            return True
                    return False
                else:
                    if char in curr.children:
                        curr = curr.children[char]
                    else:
                        return False

            return curr.end

        return dfs(self.root, 0)

