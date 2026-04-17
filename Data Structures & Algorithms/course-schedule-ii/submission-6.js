class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        //try agaibn
        let map = new Map();
        for(let i = 0; i < numCourses; i++){
            map.set(i, []);
        }

        for(const [course, pre] of prerequisites){
            map.get(course).push(pre);
        }

        let res = new Set();

        function dfs(course, seen){
            if(seen.has(course)) return false;

            seen.add(course);

            for(const nei of map.get(course)){
                if(!dfs(nei, seen)) return false;
            }
            res.add(course);
            seen.delete(course);
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            let seen = new Set();
            if(res.has(i)) continue;
            if(!dfs(i, seen)) return [];
        }

        return [...res];
    }
}
