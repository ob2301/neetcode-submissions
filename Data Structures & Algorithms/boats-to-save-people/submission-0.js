class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let L = 0, R = people.length-1;
        let sum = 0;

        people = people.sort((a,b) => a - b);

        while(L <= R){
            if(people[L] <= limit){
                if(people[L] === limit){
                    L++;
                    sum++;
                }
                else if(people[L] + people[R] <= limit){
                    sum++;
                    R--;
                    L++;
                }
                else{
                    if(people[R] <= limit){
                        R--;
                        sum++;
                    }
                    
                }
            }
            else{
                return sum;
            }
        }
        return sum;
    }
}
