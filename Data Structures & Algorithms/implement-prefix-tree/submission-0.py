class Node:

    def __init__(self, children, end):
        self.children = children
        self.end = end


class PrefixTree:

    def __init__(self):
        self.root = Node(children = {}, end = False)

    def insert(self, word: str) -> None:
        curr = self.root

        for i in range(len(word)):
            if word[i] not in curr.children:
                curr.children[word[i]] = Node(children = {}, end = False)
            
            curr = curr.children[word[i]]
        
        curr.end = True


    def search(self, word: str) -> bool:
        curr = self.root

        for i in range(len(word)):
            if word[i] not in curr.children:
                return False
            curr = curr.children[word[i]]

        return curr.end    
        

    def startsWith(self, prefix: str) -> bool:
        curr = self.root

        for i in range(len(prefix)):
            if prefix[i] not in curr.children:
                return False
            curr = curr.children[prefix[i]]

        return True
        