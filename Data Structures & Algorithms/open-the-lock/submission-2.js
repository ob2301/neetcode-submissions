class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let dead = new Set();
        let seen = new Set();
        for(const d of deadends){
            dead.add(d);
        }

        if(dead.has("0000")) return -1;
        

        let q = new Queue();
        q.enqueue(["0000", 0]);
        seen.add("0000");

        while(!q.isEmpty()){
            const [lock, turns] = q.dequeue();
            if(lock === target) return turns;
            if(dead.has(lock)) continue;

            for(let i = 0; i < 4; i++){
                let digit = (Number(lock[i]) + 1) % 10;

                let new_lock = lock.substring(0, i) + digit + lock.substring(i + 1, 4);
                if(!seen.has(new_lock)){
                    seen.add(new_lock);
                    q.enqueue([new_lock, turns + 1]);
                }

                //substruct 1
                digit = (Number(lock[i]) - 1 + 10) % 10;

                new_lock = lock.substring(0, i) + digit + lock.substring(i + 1, 4);
                if(!seen.has(new_lock)){
                    seen.add(new_lock);
                    q.enqueue([new_lock, turns + 1]);
                }
            }
        }

        return -1;
    }
}
