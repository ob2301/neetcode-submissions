class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let left_min = 0, left_max = 0;
        let i = 0;
        while(i < s.length){
            if(s[i] === ')'){
                left_min--;
                left_max--;
            }
            else if(s[i] === '('){
                left_max++;
                left_min++;
            }
            else{
                left_min--;
                left_max++;
            }
            if(left_min < 0){
                left_min = 0;
            }
            if(left_max < 0) return false;

            i++;
        }
        return left_min === 0;
    }
}
