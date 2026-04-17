class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        let i = 0;

        while(i < strs.length){
            str += (strs[i].length + "#" + strs[i]);
            i++;
        }
        console.log(str);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //redo before bed
        //4#neet4#code4#love3#you

        let i = 0, arr = [];

        while(i < str.length){
            let j = i;

            while(str[j] !== "#") j++;

            let length = parseInt(str.substring(i, j));

            arr.push(str.substring(j + 1, j + length + 1));

            i = j + length + 1;
        }
        return arr;
    }
}
