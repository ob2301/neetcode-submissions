class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let g = 0;
        let i = 0;
        let res = 0;

        if(gas.reduce((e, acc) => e + acc) < cost.reduce((e, acc) => e + acc)) return -1;

        while(i < gas.length){
            g += gas[i]-cost[i];

            if(g < 0){
                g = 0;
                res = i + 1;
            }
            i++;
        }
        return res;
    }
}
