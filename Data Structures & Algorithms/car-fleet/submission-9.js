class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = [], stack = [];

        for(let i = 0; i < position.length; i++){
            arr.push([position[i], speed[i]]);
        }

        arr.sort((a, b) => b[0] - a[0]);

        for(const [pos, speed] of arr){
            const time = (target - pos) / speed;

            stack.push(time);

            if(stack.length && stack[stack.length - 1] <= stack[stack.length - 2]) stack.pop();
        }
        return stack.length;
    }

}
