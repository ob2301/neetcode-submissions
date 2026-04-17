class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0; i < tokens.length; i++){
            if(!['-', '+','/','*'].includes(tokens[i])){
                stack.push(parseInt(tokens[i]));
            }
            else{
                if(tokens[i] === '+'){
                    let b = stack.pop();
                    let a = stack.pop();
                    stack.push(a + b);
                }
                else if(tokens[i] === '*'){
                    let b = stack.pop();
                    let a = stack.pop();
                    stack.push(a * b);
                }
                else if(tokens[i] === '/'){
                    let b = stack.pop();
                    let a = stack.pop();

                    if(a/b < 0) stack.push(Math.ceil(a/b));
                    else{
                        stack.push(Math.floor(a/b));
                    }
                    //stack.push(a / b);
                }
                else if(tokens[i] === '-'){
                    let b = stack.pop();
                    let a = stack.pop();
                    stack.push(a - b);
                }
            }
        }
        return stack[0];
    }
}
