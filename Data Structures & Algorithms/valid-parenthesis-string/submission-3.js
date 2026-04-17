class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftmin = 0, leftmax = 0, i = 0;

        while(i < s.length){
            if(s[i] === '('){
                leftmax++;
                leftmin++;
            }
            else if(s[i] === ')'){
                leftmin--;
                leftmax--;
            }
            else{
                leftmin--;
                leftmax++;
            }
            if(leftmin < 0) leftmin = 0;
            if(leftmax < 0) return false;
            i++;
        }
        return leftmin === 0;
    }
}
