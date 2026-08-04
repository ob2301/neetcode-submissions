"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        intervals.sort(key=lambda x: x.start)
        minHeap = []
        if not intervals:
            return 0
        res = float('-inf')
        
        for i in range(len(intervals)):
            start = intervals[i].start
            end = intervals[i].end

            while minHeap and minHeap[0] <= start:
                heapq.heappop(minHeap)
            
            heapq.heappush(minHeap, end)
            res = max(res, len(minHeap))
        return res

            