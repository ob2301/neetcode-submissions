class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        
        let one = 1;
        let i = 0;

        digits.reverse();

        while(one){
            if(digits[i] === 9){
                if(i === digits.length - 1){
                    digits.push(1);
                    one = 0;
                    digits[i] = 0;
                }
                else{
                digits[i] = 0;
                one = 1;
                }
            }
            else{
                digits[i] += 1;
                one = 0;
            }
            i++;
        }

        return digits.reverse();
    }
}
