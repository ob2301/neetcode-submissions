class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let str = "";

        for(let i = 0; i < strs.length; i++){
            str += strs[i].length + "#" + strs[i];
        }
        //console.log(str);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let str_arr = [], i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#") j++;

            let length = parseInt(str.slice(i,j));
            let sub = str.substring(j + 1, j + 1 + length);
            str_arr.push(sub);

            i = j + 1 + length;
        }
        return str_arr;
    }
}
