class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {

        const paths = path.split('/');
        const stack = [];

        for(const c of paths){
            if(c === '..'){
                if(stack.length) stack.pop();
            }
            else if(c !== '.' && c !== '') stack.push(c);
        }

        return '/' + stack.join('/');
    }
}
