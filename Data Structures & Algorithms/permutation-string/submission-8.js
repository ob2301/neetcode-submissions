class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let R = 0;

        s1 = s1.split("").sort().join("");

        //console.log(s2)

        while(R < s2.length){
            if(!s1.includes(s2[R])) R++;

            else{
                if(s2.substring(R, R + s1.length).split("").sort().join("") === s1){
                    return true;
                }
                else{
                    R++;
                }
            }
        }

        return false;
    }
}
