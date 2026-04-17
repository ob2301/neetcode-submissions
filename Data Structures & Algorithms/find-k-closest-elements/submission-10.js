class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let closest = [], closest_num = Infinity, cur = 0;

        let L = 0, R = k - 1;
        let cur_arr = [];

        while(R < arr.length){
            let i = L;
            cur = 0;
            cur_arr = [];
            while(i <= R){
                cur += Math.abs(arr[i] - x);
                cur_arr.push(arr[i]);
                i++;
            }
            if(closest_num === 1000 || cur < closest_num || (cur === closest_num && cur_arr[0] < closest[0])){
                closest_num = cur;
                closest = cur_arr;
            }
            R++;
            L++;
        }
        return closest.sort((a,b) => a - b);
    }
}
