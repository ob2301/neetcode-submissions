class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let boats = 0;

        let L = 0, R = people.length - 1;

        while(L <= R){
            if(L === R){
                if(people[L] <= limit) boats++;
                return boats;
            }

            let sum = people[L] + people[R];

            if(sum <= limit){
                boats++;
                L++;
                R--;
            }
            else{
                if(people[L] >= limit){
                    boats++;
                    L++;
                }

                R--;
                boats++;
            }
        }
        return boats;
    }
}
