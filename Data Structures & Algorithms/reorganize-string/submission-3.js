class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let map = new Map();

        for(const letter of s){
            map.set(letter, (map.get(letter) || 0) + 1);
        }

        let maxHeap = new MaxPriorityQueue(x => x[0]);

        for(const [letter, freq] of map){
            maxHeap.enqueue([freq, letter]);
        }

        let res = "", time = 0;

        let cooldown = new Queue();//fifo

        while(!cooldown.isEmpty() || !maxHeap.isEmpty()){
            time++;

            if(!maxHeap.isEmpty()){
                const [freq, letter] = maxHeap.dequeue();

                res += letter;

                if(freq > 1){
                    cooldown.push([time + 2, freq - 1, letter]);
                }
            }

            if(!cooldown.isEmpty() && cooldown.front()[0] === time + 1){
                const [t, f, l] = cooldown.pop();
                maxHeap.enqueue([f, l]);
            }
            else if(!cooldown.isEmpty() && cooldown.front()[0] > time + 1 && maxHeap.isEmpty()){
                return "";
            }
        }

        return res;
    }
}
