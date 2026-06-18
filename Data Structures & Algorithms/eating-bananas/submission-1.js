class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a, b) => a - b);

        //4, 10, 23, 25
        let L = 1, R = Math.max(...piles);
        let speed = R;

        while(L <= R){
            let k = Math.floor((L + R) / 2);

            let time = 0;

            for(const p of piles){
                time += Math.ceil(p / k);
            }

            if(time <= h){
                speed = Math.min(speed, k);
                R = k - 1;
            }
            else{
                L = k + 1;
            }
        }

        return speed;
    }
}
