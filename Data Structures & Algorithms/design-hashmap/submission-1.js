class MyHashMap {
    constructor() {
        this.keys = [], this.values = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let has = false;
        for(let i = 0; i < this.keys.length; i++){
            if(this.keys[i] === key){
                this.values[i] = value;
                has = true;
            }
        }

        if(!has){
            this.keys.push(key);
            this.values.push(value);
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let index = null;
        for(let i = 0; i < this.keys.length; i++){
            if(this.keys[i] === key) index = i;
        }

        if(index === null) return -1;

        return this.values[index];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let newkeys = [], newvalues = [];

        for(let i = 0; i < this.keys.length; i++){
            if(this.keys[i] === key) continue;

            newkeys.push(this.keys[i]);
            newvalues.push(this.values[i]);
        }

        this.keys = newkeys, this.values = newvalues;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
