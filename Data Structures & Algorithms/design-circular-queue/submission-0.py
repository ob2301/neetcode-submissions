class MyCircularQueue:

    def __init__(self, k: int):
        self.queue = [0] * k
        self.size = 0
        self.capacity = k
        self.head = 0 #for next dequeue
        self.tail = 0 #for full
# 6 7 3 4 5
    def enQueue(self, value: int) -> bool:
        if self.size < self.capacity:
            self.queue[self.tail] = value
            self.tail = (self.tail + 1) % self.capacity
            self.size += 1
            return True
        return False

    def deQueue(self) -> bool:
        if self.size > 0:
            self.queue[self.head] = 0
            self.head = (self.head + 1) % self.capacity
            self.size -= 1
            return True
        return False

    def Front(self) -> int:
        if self.size > 0:
            return self.queue[self.head]
        return -1

    def Rear(self) -> int:
        if self.size > 0:
            return self.queue[self.tail - 1]
        return -1

    def isEmpty(self) -> bool:
        if self.size == 0:
            return True
        return False

    def isFull(self) -> bool:
        if self.capacity == self.size:
            return True
        return False
        
# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()