class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let letters = new Map();

        for(let i = 0; i < S.length; i++){
            letters.set(S[i], (letters.get(S[i]) || 0) + 1);
        }

        let L = 0, R = 0, res = [];

        while(R < S.length){
            letters.set(S[R], letters.get(S[R]) - 1);
            let count = 0;

            for(const s of S.substring(L, R + 1)){
                if(letters.get(s) !== 0){
                    break;
                }
                else{
                    count++;
                }
            }

            if(count === R - L + 1){
                res.push(R - L + 1);
                L = R + 1;
            }

            R++;
        }

        return res;
    }
}
