class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let seen = new Set(deadends), q = new Queue();

        if(seen.has("0000")) return -1;
        q.enqueue(["0000", 0]);
        seen.add("0000");

        function twist_lock(lock, twists){
            for(let i = 0; i < 4; i++){
                const digit = Number(lock[i]);
                
                const twist_up = String(lock.slice(0, i) + ((digit + 1) % 10) + lock.slice(i + 1));
                const twist_down = String(lock.slice(0, i) + ((digit + 9) % 10) + lock.slice(i + 1));

                //if(seen.has(twist_up) || seen.has(twist_down)) return -1;

                if(!seen.has(twist_up)){
                    q.enqueue([twist_up, twists + 1]);
                seen.add(twist_up);
                }
                
                if(!seen.has(twist_down))
                {
                    q.enqueue([twist_down, twists + 1]);
                seen.add(twist_down);
                }
                
            }
        }

        while(!q.isEmpty()){
            const [lock, twists] = q.dequeue();

            if(lock === target) return twists;
            twist_lock(lock, twists);
        }
        return -1;
    }
}
