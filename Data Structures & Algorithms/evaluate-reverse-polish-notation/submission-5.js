class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let s = [];
        let i = 0;
        while(i < tokens.length){
            if(!['+','-','/','*'].includes(tokens[i])){
                s.push(Number(tokens[i]));
            }
            else if(tokens[i] === '-'){
                let a = s.pop();
                let b = s.pop();
                s.push(b - a);
            }
            else if(tokens[i] === '+'){
                let a = s.pop();
                let b = s.pop();
                s.push(b+a);
            }
            else if(tokens[i] === '/'){
                let a = s.pop();
                let b = s.pop();
                if(b / a < 0) s.push(Math.ceil(b/a));
                else{
                    s.push(Math.floor(b / a));
                }
            }
            else if(tokens[i] === '*'){
                let a = s.pop();
                let b = s.pop();
                s.push(b * a);
            }
            i++;
        }
        return s[0];
    }
}
