class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];

        let pairs = [];

        for(let i = 0; i < position.length; i++){
            pairs.push([position[i], speed[i]]);
        }

        pairs = pairs.sort((a, b) => b[0] - a[0]);

        for(const [p, s] of pairs){
            stack.push((target - p) / s);

            if(stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }
        return stack.length;
    }

}
