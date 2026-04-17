class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let L = 0, R = people.length - 1;

        let sorted_people = people.sort((a,b) => a - b), boats = 0;

        while(L <= R){
            if(sorted_people[L] + sorted_people[R] <= limit){
                R--;
                L++;
                boats++;
            }
            else{
                R--;
                boats++;
            }
        }

        return boats;
    }
}
