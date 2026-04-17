class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums) {

        nums.sort((a, b) => {
            let aa = ' ' + a + b;
            let bb = ' ' + b + a;

            if(aa > bb) return -1;
            if(aa < bb) return 1;
            return 0;
        });

        if(nums[0] === 0) return 0;

        return nums.join('');
    }
}
