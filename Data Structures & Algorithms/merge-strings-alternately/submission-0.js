class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let L = 0, R = 0, res = "";
        let lW1 = word1.length, lW2 = word2.length;

        while(L < word1.length && R < word2.length){
                res += word1[L];
                L++;
                lW1--;

                res += word2[R];
                R++;
                lW2--;
        }

        if(word2.length > word1.length) res += word2.slice(R, word2.length);
        else if(word2.length < word1.length) res += word1.slice(L, word1.length);

        return res;
    }
}
