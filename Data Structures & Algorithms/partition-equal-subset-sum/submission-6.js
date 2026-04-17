class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {

        const target = ([...nums].reduce((acc, val) => acc + val, 0)) / 2;

        if(Math.floor(target) !== target) return false;
        //no half way point, so there cannot be two = subsets

        function subset(sub, t, i){
            if(t === 0) return true;

            if(i >= nums.length) return false;

            sub.push(nums[i]);
            if(subset(sub, t - nums[i], i + 1)) return true;

            sub.pop();
            if(subset(sub, t, i + 1)) return true;

            return false;
        }

        return subset([], target, 0);
    }
}
