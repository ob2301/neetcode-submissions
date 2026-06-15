class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        let cntK = 0, cnt = 0, total = 0;

        for(const a of nums){
            if(a === k) cntK++;
        }
        
        for(let i = 1; i <= 50; i++){
            //if(i === k) continue;
            if(i === k) continue;
            cnt = 0;

            for(const num of nums){
                if(num === i) cnt++;
                if(num === k) cnt--;

                cnt = Math.max(cnt, 0);
                total = Math.max(total, cnt + cntK);
            }
        }

        return total;
    }
}
