class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        //much easier than you think, dont overthink it!

        let map = new Map(), N = points.length;

        for(let i = 0; i < N; i++){
            map.set(i, []);
        }

        for(let i = 0; i < N; i++){
            const [x1, y1] = points[i];

            for(let j = i + 1; j < N; j++){
                const [x2, y2] = points[j];
                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                
                map.get(i).push([dist, j]);
                map.get(j).push([dist, i]);
            }
        }

        let q = new MinPriorityQueue(x => x[0]), seen = new Set(), t = 0;
        q.enqueue([0,0]); //?

        while(seen.size < N){
            const [w, pt] = q.dequeue();
            if(seen.has(pt)) continue;
            t += w;
            seen.add(pt);

            for(const [w2, nei] of map.get(pt)){
                if(!seen.has(nei)) q.enqueue([w2, nei]);
            }
        }
        return seen.size === N ? t : 0;
    }
}
