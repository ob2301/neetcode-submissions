class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let maxHeap = new MaxPriorityQueue(x => x[1]);

        let freq = new Map();

        for(const task of tasks){
            freq.set(task, (freq.get(task) || 0) + 1);
        }

        for(const [task, val] of freq){
            maxHeap.enqueue([task, val]);
        }

        let cooldown = new Queue();
        let time = 0;

        while(!maxHeap.isEmpty() || !cooldown.isEmpty()){
            time++;

            if(!maxHeap.isEmpty()){
                let [task, val] = maxHeap.dequeue();

                if(val > 1){
                    cooldown.enqueue([n + time, task, val - 1]);
                }
            }

            if(!cooldown.isEmpty()){
                if(cooldown.front()[0] === time){
                    let [t, tt, v] = cooldown.dequeue();
                    maxHeap.enqueue([tt, v]);
                }
            }
        }

        return time;
    }
}
