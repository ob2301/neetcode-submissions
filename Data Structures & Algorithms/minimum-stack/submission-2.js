class MinStack {
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.length] = val;
        this.length++;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.length > 0){
            let po = this.stack[this.length - 1];
            this.length--;
            return po;
        }
        }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.length > 0){
            let min = Infinity;
            for(let i = 0; i < this.length; i++){
                min = Math.min(min, this.stack[i]);
            }
            return min;
        }
    }
}
