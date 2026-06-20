class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
       this.cache = new Map();
       this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            let temp = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, temp);
            return this.cache.get(key);
        }
        else{
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.cache.delete(key);
            this.cache.set(key, value);
        }
        else{
            if(this.cache.size === this.capacity){
                this.cache.delete(this.cache.keys().next().value);
                this.cache.set(key, value);
            }
            else{
                this.cache.set(key, value);
            }
        }
    }
}
