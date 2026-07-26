class TimeMap:

    def __init__(self):
        self.keyStore = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if not key in self.keyStore:
            self.keyStore[key] = []
            self.keyStore[key].append((timestamp, value))
        else:
            self.keyStore[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        #loop through the maxheap, gurantees largest timestamp if exists

        if not key in self.keyStore: return ""
        i = len(self.keyStore[key]) - 1

        while i >= 0:
            if self.keyStore[key][i][0] <= timestamp:
                return self.keyStore[key][i][1]
            i -= 1

        return ""

        
