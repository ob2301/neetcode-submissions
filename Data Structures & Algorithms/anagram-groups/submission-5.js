class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];

        let map = new Map();

        for(let i = 0; i < strs.length; i++){
            let str = strs[i].split('').sort().join('');

            if(map.has(str)){
                map.get(str).push(strs[i]);
            }
            else{
                map.set(str, [strs[i]]);
            }
        }

        for(const [key, value] of map){
            res.push(value);
        }

        return res;
    }
}

