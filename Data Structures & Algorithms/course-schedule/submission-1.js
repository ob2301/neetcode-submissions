class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let map = new Map(), seen = new Set();
        if(prerequisites.length === 0) return true;

        for(let i = 0; i < prerequisites.length; i++){
            if(!map.has(prerequisites[i][0])) map.set(prerequisites[i][0], []);
            map.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }

        function dfs(course, prereqs){
            if(seen.has(course)) return false;
            seen.add(course);

            for(const el of prereqs){
                if(!dfs(el, map.get(el) || [])) return false;
            }
            seen.delete(course);
            return true;
        }
        
        for(let i = 0; i < numCourses; i++){
            seen = new Set();
            if(!dfs(i, map.get(i) || [])) return false;
        }
        return true;
    }
}
