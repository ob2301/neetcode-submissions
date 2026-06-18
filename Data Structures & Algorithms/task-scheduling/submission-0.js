class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let maxHeap = new MaxPriorityQueue(x => x[0]);
        let queue = new Queue();

        let map = new Map();

        for(const task of tasks){
            map.set(task, (map.get(task) || 0) + 1);
        }

        for(const [key, value] of map){
            maxHeap.enqueue([value, key]); //frequency, letter
        }

        let cycles = 0;

        while(maxHeap.size() > 0 || queue.size() > 0){
            cycles++;

            if(maxHeap.size() > 0){
                const [freq, letter] = maxHeap.dequeue();

                if(freq !== 1){
                    queue.push([letter, freq - 1, cycles + n]);
                    //cycles + n is when it can do again
                }
                //no else since it would be gone
            }

            if(queue.size() > 0 && queue.front()[2] === cycles){
                const [letter, freq, cy] = queue.pop();
                maxHeap.enqueue([freq, letter]);
            }
        }
        return cycles;
    }
}
