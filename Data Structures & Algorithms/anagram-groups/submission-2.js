class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let i = 0; i < strs.length; i++){
            const original = strs[i];
            const sorted = strs[i].split("").sort().join("");

            if(map.has(sorted)) map.get(sorted).push(original);

            else{
                map.set(sorted, []);
                map.get(sorted).push(original);
            }
        }

        return [...map.values()];
    }
}

