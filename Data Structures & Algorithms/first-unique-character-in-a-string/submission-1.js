class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let map = new Map();

        for(const letter of s){
            map.set(letter, map.get(letter) + 1 || 1);
        }

        for(const [key, value] of map){
            if(value == 1) return s.indexOf(key);
        }
        return -1;
    }
}
