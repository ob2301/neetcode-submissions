class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {

        const paths = path.split('/');
        const stack = [];

        for(const char of paths){
            if(char === '..'){
                if(stack.length){
                    stack.pop();
                }
            }
            else if(char !== '.' && char !== ''){
                stack.push(char);
            }
        }

        return '/' + stack.join('/');
    }
}
