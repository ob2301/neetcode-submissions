class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        let arr = []

        for(let i = 0; i < position.length; i++){
            arr.push([position[i], speed[i]]);
        }

        arr = arr.sort((a, b) => b[0] - a[0]);

        for(const [p, s] of arr){
            stack.push((target - p) / s);

            if(stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }

        return stack.length;
    }
}
