class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let adj = new Map();

        for(let i = 0; i < n; i++){
            adj.set(i, []);
        }

        for(const [src, des, price] of flights){
            adj.get(src).push([price, des]);
        }

        let q = new MinPriorityQueue(x => x[0]);
        q.enqueue([0, src, k]);

        //dijkstras (price aka weight) with a k val
        while(!q.isEmpty()){
            const [price, src, k] = q.dequeue();
            if(src === dst) return price;
            if(k < 0) continue;

            for(const [price2, des2] of adj.get(src)){
                q.enqueue([price2 + price, des2, k-1]);
            }
        }

        return -1;
    }
}
