class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs || strs.length === 0) return "";
        let pre = strs[0];

        for(let i = 1; i < strs.length; i++){
            let j = 0;

            while(j < Math.min(strs[i].length, pre.length)){
                if(strs[i].charAt(j) !== pre[j]){
                    break;
                }
                j++;
            }

            pre = pre.slice(0, j);
        }
        return pre;
    }
    }
