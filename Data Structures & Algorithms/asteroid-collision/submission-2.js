class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for(let a of asteroids){
            while(stack.length && stack[stack.length - 1] > 0 && a < 0){
                let diff = a + stack[stack.length - 1];

                if(diff > 0){
                    a = 0;
                }
                else if(diff < 0){
                    stack.pop();
                }
                else{
                    a = 0;
                    stack.pop();
                }
            }
            if(a !== 0) stack.push(a); //case where both -> or both <-
        }
        return stack;
    }
}
