class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        let res = 0, countK = 0;

        for(const num of nums){
            if(num === k){
                countK++;
            }
        }
        
        for(let i = 1; i <= 50; i++){
            if(i === k) continue;
            let count = 0;

            for(const num of nums){
                if(num === i) count++;
                if(num === k) count--;

                count = Math.max(0, count);

                res = Math.max(res, count + countK);
            }
        }

        return res;
    }
}
