class Solution {
    /**
     * @param {number[]} w
     */
    constructor(w) {
        this.w = w;
        this.total = w.reduce((a,b) => a + b);
    }

    /**
     * @return {number}
     */
    pickIndex() {
        if(!this.w) return -1;
        let target = this.total * Math.random();
        let p = 0;

        for(let i = 0; i < this.w.length; i++){
            p += this.w[i];
            if(p > target) return i;
        }

        return -1;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
