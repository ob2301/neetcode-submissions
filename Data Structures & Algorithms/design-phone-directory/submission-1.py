class PhoneDirectory:

    def __init__(self, maxNumbers: int):
        self.used = set()
        self.free = set([i for i in range(maxNumbers)])

    def get(self) -> int:
        if len(self.free) == 0:
            return -1
        
        num = self.free.pop()
        self.used.add(num)
        return num

    def check(self, number: int) -> bool:
        return number in self.free

    def release(self, number: int) -> None:
        if number in self.used:
            self.used.remove(number)
            self.free.add(number)


# Your PhoneDirectory object will be instantiated and called as such:
# obj = PhoneDirectory(maxNumbers)
# param_1 = obj.get()
# param_2 = obj.check(number)
# obj.release(number)
