class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let q = new Queue(), seen = new Set(deadends);
        if(!seen.has("0000")){
            q.enqueue(["0000", 0]);
            seen.add("0000");
        }
        else{
            return -1;
        }

        function helper(lock, turns){

            for(let i = 0; i < 4; i++){
                const dig = parseInt(lock[i]);
                const change_add = String((dig + 1) % 10);
                const change_sub = String((dig + 9) % 10);

                const n = lock.slice(0, i) + change_add + lock.slice(i + 1);
                const n2 = lock.slice(0, i) + change_sub + lock.slice(i + 1);
                if(!seen.has(n)){
                    q.enqueue([n, turns + 1]);
                    seen.add(n);
                }

                if(!seen.has(n2)){
                    q.enqueue([n2, turns + 1]);
                    seen.add(n2);
                }
            }
        }

        while(!q.isEmpty()){
            //q gonna have [lock, turns]

            const [lock, turns] = q.dequeue();
            if(lock === target) return turns;

           
            helper(lock, turns);
        }
        return -1;
    }
}
