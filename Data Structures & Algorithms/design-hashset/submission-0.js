class MyHashSet {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.arr.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.n = [];
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] === key) continue;
            this.n.push(this.arr[i]);
        }

        this.arr = this.n;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] === key) return true;
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
