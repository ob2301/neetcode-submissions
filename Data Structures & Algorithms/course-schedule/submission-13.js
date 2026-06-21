class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = {};
        let global_seen = new Set();

        for(let i = 0; i < numCourses; i++){
            adj[i] = [];
        }

        for(const [course, pre] of prerequisites){
            adj[course].push(pre);
        }

        function dfs(seen, course){
            if(global_seen.has(course)) return true;
            if(seen.has(course)) return false; //cycle
            seen.add(course);

            for(const pre of adj[course]){
                if(!dfs(seen, pre)) return false;
            }
            seen.delete(course);
            global_seen.add(course);


            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(new Set(), i)) return false;
        }

        return true;
    }
}
