class TimeMap {
    
    constructor() {
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
        let res = "";
        if(!this.map.get(key)) return "";
        const arr = this.map.get(key);
        function bs(left, right){
            if(left > right) return;

            const middle = Math.floor((left + right) / 2);

            if(arr[middle][0] === timestamp){
                res = arr[middle][1];
                return res;
            }

            if(arr[middle][0] <= timestamp){
                res = arr[middle][1];
                bs(middle + 1, right);
            }
                //bs(middle + 1, right);

            if(arr[middle][0] > timestamp)
                bs(left, middle - 1);
        }  
        bs(0, arr.length - 1);
        return res;
    }
}
