class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        //max success = priority queue
        let map = new Map();
        for(let i = 0; i < n; i++){
            map.set(i, []);
        }

        for(let i = 0; i < edges.length; i++){
            const [e1, e2] = edges[i];

            map.get(e1).push([succProb[i], e2]);
            map.get(e2).push([succProb[i], e1]);
        }

        let q = new MaxPriorityQueue(x => x[0]);
        let seen = new Set();
        q.enqueue([1, start_node]);

        while(!q.isEmpty()){
            const [w, node] = q.dequeue();
            if(node === end_node) return w;
            seen.add(node);

            for(const [w2, nei] of map.get(node)){
                if(!seen.has(nei)) q.enqueue([w2 * w, nei]);
            }
        }

        return 0;
    }
}
