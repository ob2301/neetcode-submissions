from collections import OrderedDict

class LFUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.smallestFreq = 0
        self.size = 0

        self.keyToFreq = {}
        self.freqToKey = {}   # freq -> OrderedDict of keys (insertion order preserved)
        self.keyToVal = {}

    def _bump_freq(self, key):
        freq = self.keyToFreq[key]
        del self.freqToKey[freq][key]          # remove from old bucket, O(1)

        if not self.freqToKey[freq]:              # old bucket now empty
            if self.smallestFreq == freq:
                self.smallestFreq += 1

        newFreq = freq + 1
        self.keyToFreq[key] = newFreq
        if newFreq not in self.freqToKey:
            self.freqToKey[newFreq] = OrderedDict()
        self.freqToKey[newFreq][key] = None      # add to new bucket

    def get(self, key: int) -> int:
        if key not in self.keyToVal:
            return -1

        self._bump_freq(key)
        return self.keyToVal[key]

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return

        if key in self.keyToVal:
            self.keyToVal[key] = value
            self._bump_freq(key)
            return

        if self.size == self.capacity:
            # evict least-frequently-used, tie-broken by least-recently-used
            evictKey, _ = self.freqToKey[self.smallestFreq].popitem(last=False)
            del self.keyToVal[evictKey]
            del self.keyToFreq[evictKey]
            self.size -= 1

        # insert brand new key
        self.size += 1
        self.keyToVal[key] = value
        self.keyToFreq[key] = 1
        if 1 not in self.freqToKey:
            self.freqToKey[1] = OrderedDict()
        self.freqToKey[1][key] = None
        self.smallestFreq = 1