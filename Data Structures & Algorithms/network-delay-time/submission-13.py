import heapq

class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = {}

        for src, dest, time in times:
            if src in adj:
                adj[src].append((time, dest))
            else:
                adj[src] = [(time, dest)]

        heap = []
        heapq.heappush(heap, (0, k))

        seen = set()

        time = 0

        while(heap):
            new_time, node = heapq.heappop(heap)
            time = new_time
            
            if node not in seen:
                seen.add(node)
                if len(seen) == n:
                    break
            
                if node in adj:
                    for time_added, child in adj[node]:
                        heapq.heappush(heap, (time + time_added, child))
            
            

        return time if len(seen) == n else -1


        

        