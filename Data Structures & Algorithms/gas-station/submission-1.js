class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let gTotal = 0, res = 0;
        if(gas.reduce((acc, e) => acc + e) < cost.reduce((acc, e) => acc + e)) return -1;
        //must be a solution if above didnt return
        for(let i = 0; i < gas.length; i++){
            gTotal += gas[i] - cost[i];

            //if gTotal becomes neg, then all indicies behind it were invalid too!

            if(gTotal < 0){
                gTotal = 0;
                res = i + 1;
            }
        }
        return res;
    }
}
