class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq_table = new Map();

        for(const task of tasks){
            freq_table.set(task, (freq_table.get(task) || 0) + 1);
        }

        let maxHeap = new MaxPriorityQueue(x => x[0]);

        for(const [task, freq] of freq_table){
            maxHeap.enqueue([freq, task]);
        }

        let cooldown = new Queue(), cycles = 0;

        while(!cooldown.isEmpty() || maxHeap.size() > 0){
            cycles++;

            if(maxHeap.size() > 0){
                let [freq, task] = maxHeap.dequeue();

                if(freq > 1){
                    cooldown.push([cycles + n, task, freq - 1]);
                }
            }

            if(!cooldown.isEmpty() && cooldown.front()[0] === cycles){
                maxHeap.enqueue([cooldown.front()[2], cooldown.pop()[1]]);
            }
        }

        return cycles;
    }
}
