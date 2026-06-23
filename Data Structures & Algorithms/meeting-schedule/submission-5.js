/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let time = 0;
        intervals.sort((a, b) => a.start - b.start);

        let i = 0;

        while(i < intervals.length){
            let A = intervals[i];

            if(A.start < time) return false;
            time = A.end;
            i++;
        }
        return true;
    }
}
