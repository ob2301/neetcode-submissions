class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = new Map();

        for(let i = 0; i < numCourses; i++){
            adj.set(i, new Set());
        }

        for(let i = 0; i < prerequisites.length; i++){
            adj.get(prerequisites[i][0]).add(prerequisites[i][1]);
        }

        //adj list
        let global = new Set();
        function dfs(seen, course){
            if(global.has(course)) return true;

            for(const c of adj.get(course)){
                if(seen.has(c)) return false;

                seen.add(c);
                if(!dfs(seen, c)) return false;
                seen.delete(c);
            }
            global.add(course);
            
            return true;

        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(new Set, i)) return false;
        }
        return true;
    }
}
