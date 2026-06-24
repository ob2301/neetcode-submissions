class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let q = new MinPriorityQueue(x => x[1]);

        q.enqueue(["0000", 0]);

        let seen = new Set([...deadends]);

        while(!q.isEmpty()){
            let [val, turns] = q.dequeue();

            if(val === target) return turns;

            if(seen.has(val)) continue;
            seen.add(val);

            for(let i = 0; i < 4; i++){
                let digit = Number(val[i]);

                let down = (digit + 10 - 1) % 10;
                let up = (digit + 1) % 10;

                let down2 = val.substring(0, i) + down + val.substring(i + 1, 4);
                let up2 = val.substring(0, i) + up + val.substring(i + 1, 4);

                q.enqueue([down2, turns + 1]);
                q.enqueue([up2, turns + 1]);
            }
        }

        return -1;
    }
}
