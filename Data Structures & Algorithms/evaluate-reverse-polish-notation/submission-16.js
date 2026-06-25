class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if(!tokens) return null;

        let stack = [];

        for(const c of tokens){
            if(c === "+"){
                stack.push(stack.pop() + stack.pop());
            }
            else if(c === "-"){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            }
            else if(c === "*"){
                stack.push(stack.pop() * stack.pop());
            }
            else if(c === "/"){
                const a = stack.pop();
                const b = stack.pop();

                let res = b / a;

                if(res < 0) res = Math.ceil(res);
                else{
                    res = Math.floor(res);
                }
                stack.push(res);
            }
            else{
                stack.push(Number(c));
            }
        }
        return stack[0];
    }
}
