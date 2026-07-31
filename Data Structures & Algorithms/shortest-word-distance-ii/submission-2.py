class WordDistance:

    def __init__(self, wordsDict: List[str]):
        self.wordsList = wordsDict

        self.wordsIndex = {}

        for index, word in enumerate(self.wordsList):
            if not word in self.wordsIndex:
                self.wordsIndex[word] = [index]
            else:
                self.wordsIndex[word].append(index)
        #each word mapped to the indicies where they appear in wordsList
        

    def shortest(self, word1, word2):
        # hi practice makes perfect practice perfect makes hi
        # shortest distance between hi and perfect is 2
        # hi: 0, 7
        # perfect: 3, 5
        # less goes up, min = trackingMin

        res = float('inf')

        if not word1 in self.wordsList or not word2 in self.wordsList:
            return -1
        
        i_word1 = 0
        i_word2 = 0

        while i_word1 < len(self.wordsIndex[word1]) and i_word2 < len(self.wordsIndex[word2]):
            w1 = self.wordsIndex[word1][i_word1]
            w2 = self.wordsIndex[word2][i_word2]

            res = min(res, abs(w2 - w1))

            if w1 < w2:
                i_word1 += 1
            else:
                i_word2 += 1
        return res

            
            
