class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let R = 0;

        function perm(str1, str2){
            let n = str1.split("").sort().join("");
            let nn = str2.split("").sort().join("");
            return n === nn;
        }
        while(R < s2.length){
            if(s1.includes(s2[R])){
                let pass = s2.slice(R, R + s1.length);
                if(perm(s1, pass)) return true;
            }
            R++;
        }
        return false;
    }
}
