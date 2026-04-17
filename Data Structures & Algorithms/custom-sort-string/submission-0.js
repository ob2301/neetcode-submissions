class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const rank = {};

        for(let i = 0; i < order.length; i++){
            rank[order[i]] = i;
        }

        return [...s].sort((a,b) => {
            const ra = rank[a] ?? 26;
            const rb = rank[b] ?? 26;
            return ra - rb;
        }).join('');
    }
}
