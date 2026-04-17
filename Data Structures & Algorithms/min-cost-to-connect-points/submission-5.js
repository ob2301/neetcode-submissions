class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        //much easier than you think, dont overthink it!
        let map = new Map();

        for(let i = 0; i < points.length; i++){
            map.set(i, []);
        }
        
        for(let i = 0; i < points.length; i++){
            const [x1, y1] = points[i];

            for(let j = i+1; j < points.length; j++){
                const [x2, y2] = points[j];
                const dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);

                map.get(i).push([dist, j]);
                map.get(j).push([dist, i]);
            }
        }

        let q = new MinPriorityQueue(x => x[0]), seen = new Set();
        q.enqueue([0,0]);
        let total = 0;

        while(seen.size < points.length){
            const [w, pt] = q.dequeue();
            if(seen.has(pt)) continue;
            total += w;
            seen.add(pt);

            for(const [dist, end] of map.get(pt)){
                if(!seen.has(end)){
                    q.enqueue([dist, end]);
                }
            }
        }

        return seen.size === points.length ? total : 0;
    }
}
