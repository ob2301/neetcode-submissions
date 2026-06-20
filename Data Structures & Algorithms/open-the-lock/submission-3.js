class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let seen = new Set([...deadends]);

        let minHeap = new MinPriorityQueue(x => x[1]);

        minHeap.enqueue(["0000", 0]);

        while(minHeap.size() > 0){

            let [val, t] = minHeap.dequeue();
            if(seen.has(val)) continue;
            seen.add(val);

            if(val === target) return t;

            for(let i = 0; i < 4; i++){
                let digit = Number(val[i]);

                let add = (digit + 1) % 10;
                let sub = (digit -1 + 10) % 10;

                minHeap.enqueue([val.substring(0, i) + add + val.substring(i + 1, 4), t + 1]);
                minHeap.enqueue([val.substring(0, i) + sub + val.substring(i + 1, 4), t + 1]);
            }
        }

        return -1;
    }
}
