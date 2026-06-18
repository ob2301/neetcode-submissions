class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        //each boat at most 2 (so 1 works)
        //each boat <= limit in weight

        people.sort((a, b) => a - b);

        let L = 0, R = people.length - 1;

        let boats = 0;

        while(L <= R){
            if(L === R){
                if(people[L] <= limit)
                {
                    boats++;
            }
            break;
            }
            let weight = people[L] + people[R];

            if(weight <= limit){
                boats++;
                L++;
                R--;
                continue;
            }

            
//1 2 2 3
            let first = limit - people[L];
            let last = limit - people[R];

            if(first == 0 || first < last){
                boats++;
                L++;
                continue;
            }


                boats++;
                R--;
                continue;
        }

        return boats;
    }
}
