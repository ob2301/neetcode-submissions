class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        let stone = new MaxPriorityQueue();

        for(let i = 0; i < stones.length; i++){
            stone.enqueue(stones[i]);
        }

        while(stone.size() > 1){
            let first = stone.dequeue();
            let second = stone.dequeue();

            if(first > second){
                stone.enqueue(first - second);
            }

            if(first < second){
                stone.enqueue(second - first);
            }
        }

        return stone.front() || 0;
    }
}
