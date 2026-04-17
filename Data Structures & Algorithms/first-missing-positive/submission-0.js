class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let set = new Set([...nums]);

        let i = 1;
        while(true){
            if(!set.has(i)) return i;
            i++;
        }

        return 1;
    }
}

