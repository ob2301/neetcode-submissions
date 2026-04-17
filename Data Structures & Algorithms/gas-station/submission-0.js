class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let g = 0;
        if(gas.reduce((acc, e) => acc + e) < cost.reduce((acc, e) => acc + e)) return -1;

        let i = 0;

        while(i < gas.length){
            let starting = i;
            let count = 0;
            let cur_gas = gas[starting] - cost[starting];
            while(count < gas.length){
                
                if(cur_gas < 0) break;
                cur_gas += (gas[(starting + 1) % gas.length] - cost[(starting + 1)%cost.length]);
                starting = (starting + 1) % gas.length;
                count++;
            }
            if(count === gas.length) return i;
            i++;
        }
        return -1;
    }
}
