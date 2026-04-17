class MovingAverage {
    /**
     * @param {number} size
     */
    
    constructor(size) {
        this.arr = [];
        this.size = size;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.arr.push(val);
        
        if(this.arr.length < this.size){
            return this.arr.reduce((acc, num) => acc + num) / this.arr.length;
        }
        else{
            return this.arr.slice(this.arr.length - this.size, this.arr.length + 1).reduce((acc, num) => acc + num) / this.size;
        }
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
