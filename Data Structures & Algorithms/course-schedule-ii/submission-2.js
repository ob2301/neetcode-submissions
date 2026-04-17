class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        //dfs
        let courses = new Map();

        for(const [course, pre] of prerequisites){
            if(courses.has(course)) courses.get(course).push(pre);
            else{
                courses.set(course, []);
                courses.get(course).push(pre);
            }
        }

        let seen = new Set(), seen2 = new Set();
        let arr = [];
        function dfs(i){
            if(seen.has(i)) return true;
            if(seen2.has(i)) return false;
            const [course, prereqs] = [i, courses.get(i) || []];
            seen2.add(course);

            for(const pre of prereqs){
                if (!dfs(pre)) return false;
            }
            arr.push(course);
            courses.delete(course);
            seen.add(course);
            return true;
        
        }

        

        for(let i = 0; i < numCourses; i++){
            if(seen.has(i)) continue;
            if(!dfs(i)) return [];
            
        }
        return arr;
        
    }
}
