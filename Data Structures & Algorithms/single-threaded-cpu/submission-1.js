class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        let minHeap = new PriorityQueue((a, b) => {
            if(a[1] === b[1]) return a[2] - b[2];
            return a[1] - b[1];
        });

        tasks = tasks.map((t, i) => [...t, i]);

        tasks.sort((a, b) => a[0] - b[0]);

        let time = tasks[0][0], res = [], i = 0;

        while(res.length < tasks.length){

            while(i < tasks.length && time >= tasks[i][0]){
                minHeap.enqueue([tasks[i][0], tasks[i][1], tasks[i][2]]);
                i++;
            }

            if(minHeap.size()){
                const [en, pro, i] = minHeap.dequeue();
                time += pro;
                res.push(i);
            }
            else{
                time = tasks[i][0];
            }
        }

        return res;
    }
}
