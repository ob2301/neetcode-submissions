class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let maxHeap = new MaxPriorityQueue(x => x[0]);
        let cool = new Queue();

        let cycles = 0;

        let map = new Map();

        for(let i = 0; i < tasks.length; i++){
            map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
        }

        for(const [task, freq] of map){
            maxHeap.enqueue([freq, task]);
        }

        while(!cool.isEmpty() || !maxHeap.isEmpty()){
            cycles++;

            if(!maxHeap.isEmpty()){
                let [freq, task] = maxHeap.dequeue();

                if(freq > 1){
                    cool.push([n + cycles, freq - 1, task]);
                }
            }

            if(!cool.isEmpty() && cycles === cool.front()[0]){
                const [cycle, freq, task] = cool.pop();
                maxHeap.enqueue([freq, task]);
            }
        }

        return cycles;
    }
}
