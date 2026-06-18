class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adj = {};

        for(let i = 0; i < numCourses; i++){
            adj[i] = [];
        }

        for(const [course, pre] of prerequisites){
            adj[course].push(pre);
        }

        let courses = [], global = new Set();

        function dfs(seen, course){
            if(seen.has(course)) return false;
            if(global.has(course)) return true;
            
            seen.add(course);

            for(const pre of adj[course]){
                if(!dfs(seen, pre)) return false;
            }
            seen.delete(course);

            courses.push(course);
            global.add(course);
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(new Set(), i)) return [];
        }

        return courses;
    }
}
