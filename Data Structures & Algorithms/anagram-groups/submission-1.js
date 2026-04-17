class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const og = strs[i];
            const sorted = og.split("").sort().join("");  // sort characters

            if (!map.has(sorted)) {
                map.set(sorted, [og]); // start new group (array)
            } else {
                map.get(sorted).push(og); // add to existing group
            }
        }

        return [...map.values()]; // extract all grouped arrays
    }
}

