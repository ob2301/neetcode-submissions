class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];

        let arr = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]){
                    let [temp, index] = stack.pop();

                    arr[index] = i - index;
                }
            

            stack.push([temperatures[i], i]);
        }

        return arr;
    }
}
