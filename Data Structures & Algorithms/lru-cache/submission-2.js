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
            let x = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, x);
            return this.cache.get(key);
        }
        return -1;
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
            if(this.cache.size === this.capacity) this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key, value);
        }
    }
}
