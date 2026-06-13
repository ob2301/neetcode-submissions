class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights) {
        let res = [], max = 0;

        for(let i = heights.length - 1; i >= 0; i--){
            if(i === heights.length - 1){
                res.push(i);
                max = heights[i];
            }
            else{
                if(heights[i] <= max) continue;
                else{
                    res.push(i);
                    max = heights[i];
                }
            }
        }

        return res.reverse();
    }
}
