class TimeMap {
    
    constructor() {
        //reeee
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.map.has(key)){
            this.map.get(key).push([timestamp, value]);
        }
        else{
            this.map.set(key, [[timestamp, value]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.map.get(key);//we know it exists
        let res = "";
        if(!arr) return res;
        
        function bs(low, high){//search for valid timestamp
            if(low > high) return;
            
            const mid = Math.floor((low + high)/2);

            if(arr[mid][0] <= timestamp){
                res = arr[mid][1];
                bs(mid + 1, high);
            }
            else{
                bs(low, mid - 1);
            }
        }

        bs(0, arr.length - 1);
        return res;
    }
}
