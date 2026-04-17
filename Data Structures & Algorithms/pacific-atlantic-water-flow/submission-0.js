class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pac_q = new Queue(), atl_q = new Queue();
        let res = [], seen1 = new Set(), seen2 = new Set();

        for(let r = 0; r < heights.length; r++){
            for(let c = 0; c < heights[0].length; c++){
                if((r === 0 || c === 0) && !seen1.has(JSON.stringify([r,c]))){
                    pac_q.enqueue([r,c]);
                    seen1.add(JSON.stringify([r,c]));
                }
                if((r === heights.length - 1 || c === heights[0].length - 1) && !seen2.has(JSON.stringify([r,c]))){
                    atl_q.enqueue([r,c]);
                    seen2.add(JSON.stringify([r,c]));
                }
            }
        }

        while(!pac_q.isEmpty()){
            const lenp = pac_q.size();
            for(let i = 0; i < lenp; i++){
                const [r, c] = pac_q.dequeue();
                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr,dc] of dirs){
                    const nr = r + dr;
                    const nc = c + dc;

                    if(nc >= 0 && nr >= 0 && nc < heights[0].length && nr < heights.length && !seen1.has(JSON.stringify([nr,nc])) && heights[nr][nc] >= heights[r][c]){
                        pac_q.enqueue([nr,nc]);
                        seen1.add(JSON.stringify([nr,nc]));
                    }
                }
            }
        }

        while(!atl_q.isEmpty()){
            const lenp = atl_q.size();
            for(let i = 0; i < lenp; i++){
                const [r, c] = atl_q.dequeue();
                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr,dc] of dirs){
                    const nr = r + dr;
                    const nc = c + dc;

                    if(nc >= 0 && nr >= 0 && nc < heights[0].length && nr < heights.length && !seen2.has(JSON.stringify([nr,nc])) && heights[nr][nc] >= heights[r][c]){
                        atl_q.enqueue([nr,nc]);
                        seen2.add(JSON.stringify([nr,nc]));
                    }
                }
            }
        }

        for(const el of seen1){
            if(seen2.has(el)) res.push(JSON.parse(el));
        }
        return res;
    }
}
