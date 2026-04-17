class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        let map = new Map(), one = 0;

        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        if(s.length % 2 !== 0){
            for(const [key, val] of map){
                if(val % 2 !== 0) one++;
                map.delete(key);
            }
            if(one != 1) return false;
        }

        for(const [key, val] of map){
            if(val % 2 !== 0) return false;
        }

        return true;
    }
}
