class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = [];
        let post = [];
        let pre_pointer = 1;
        let post_pointer = 1;
        let res = [];

        for(let i = 0; i < nums.length; i++){
            pre.push(pre_pointer);
            post.push(post_pointer);

            pre_pointer *= nums[i];
            post_pointer *= nums[nums.length - i - 1];
        }

        for(let i = 0; i < nums.length; i++){
            let cur = (pre[i] * post[nums.length - 1 - i]);

            res.push(cur);
        }

        return res;
    }
}
