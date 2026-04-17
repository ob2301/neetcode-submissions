class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let map = new Map(), seen = new Set(); //build adj list

        const N = points.length;

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

        let q = new MinPriorityQueue((a) => a[0]);

        q.enqueue([0, 0]);
        let res = 0;

        while(seen.size < N){
            const [w, node] = q.dequeue();

            if(seen.has(node)) continue;
            res += w;
            seen.add(node);

            for(const [w2, nei] of map.get(node)){
                if(!seen.has(nei)) q.enqueue([w2, nei]);
            }
        }
        return res;
    }
}
