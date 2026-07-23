class WordDistance:

    def __init__(self, wordsDict: List[str]):
        self.dic = {};

        for i in range(len(wordsDict)):
            if wordsDict[i] in self.dic:
                self.dic[wordsDict[i]].append(i)
            else:
                self.dic[wordsDict[i]] = [i]

    def shortest(self, word1, word2):
            # 1 4 7 10 11
            # 13 15

            first = self.dic[word1]
            second = self.dic[word2]

            l1 = 0
            l2 = 0

            dif = float('inf')

            while l1 < len(first) and l2 < len(second):
                diff = abs(first[l1] - second[l2])

                dif = min(dif, diff)

                if first[l1] >= second[l2]:
                    l2 += 1
                else:
                    l1 += 1
            return dif
            
