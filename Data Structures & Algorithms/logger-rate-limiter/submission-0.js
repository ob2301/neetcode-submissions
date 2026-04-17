class Logger {
    constructor() {
        this.dict = new Map();
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if(this.dict.has(message)){
            if(timestamp - this.dict.get(message) >= 10){
                this.dict.set(message, timestamp);
                return true;
            }
            else{
                return false;
            }
        }
        else{
            this.dict.set(message, timestamp);
        }
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
