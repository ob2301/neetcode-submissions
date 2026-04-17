class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let i = 0; i < strs.length; i++){
            const sort = strs[i].split('').sort().join('');

            if(map.has(sort)) map.get(sort).push(strs[i]);
            else{
                map.set(sort, [strs[i]]);
            }
        }

        return [...map.values()];
    }
}

