class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let p1 = 0, p2 = 0;

        function isNum(ch){
            return ch >= '0' && ch <= '9';
        }

        while(p1 < word.length && p2 < abbr.length){
            if(word[p1] === abbr[p2]){
                p1++;
                p2++;
            }
            else{
                if(isNum(abbr[p2])){
                    if(Number(abbr[p2]) === 0) return false;
                    let cur_num = '';
                    while(isNum(abbr[p2]) && p2 < abbr.length){
                        cur_num += abbr[p2];
                        p2++;
                    }
                    p1 += Number(cur_num);
                    if(word[p1] !== abbr[p2]) return false;
                }
            }
        }

        return p1 === word.length && p2 === abbr.length;
    }
}
