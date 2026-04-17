class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {

        let set = new Set();
        nums = nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length - 1; i++){
            for(let j = i + 1; j < nums.length; j++){
                let L = 0, R = nums.length - 1;
                while(L < R){
                    //testing if distinct first
                    let sum = nums[L] + nums[R] + nums[j] + nums[i];
                    if((L !== R && L !== j && L !== i && R !== j && R !== i && i !== j)){
                        let sorted = [nums[L], nums[R], nums[j], nums[i]].sort((a,b) => a - b);
                        if(sum === target && !set.has(JSON.stringify(sorted))){
                            set.add(JSON.stringify(sorted));
                        }
                    }
                            if(sum < target) L++;
                            else{
                                R--;
                            }
                        
                    }
                }
            }
            return [...set].map(x => JSON.parse(x));

        }
    }

