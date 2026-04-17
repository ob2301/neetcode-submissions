class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        
        let arr = new Array(temperatures.length).fill(0);
        let stack = [];

        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]){
                const [stackT, stackInd] = stack.pop();

                arr[stackInd] = i - stackInd;

            }
            stack.push([temperatures[i], i]);
        }
        return arr;
    }
}
