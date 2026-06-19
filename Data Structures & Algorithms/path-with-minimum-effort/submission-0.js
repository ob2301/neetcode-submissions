class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {

        let q = new MinPriorityQueue(x => x[2]);
        q.enqueue([0, 0, 0]);
        let seen = new Set();

        while(!q.isEmpty()){
            let [r, c, diff] = q.dequeue();
            if(r === heights.length - 1 && c === heights[0].length - 1) return diff;

            if(seen.has(JSON.stringify([r,c]))) continue;
            seen.add(JSON.stringify([r,c]));

            let dirs = [[1,0], [0,-1], [-1,0], [0,1]];

            for(const [dr, dc] of dirs){
                const[row, col] = [dr + r, dc + c];

                if(row >= 0 && col >= 0 && row < heights.length && col < heights[0].length){
                    q.enqueue([row, col, Math.max(diff, Math.abs(heights[row][col] - heights[r][c]))]);
                }
            }
        }

        return 0;
    }
}
