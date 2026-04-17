class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let list = new Map();

        for(let i = 0; i < prerequisites.length; i++){
            if(list.has(prerequisites[i][0])){
                list.get(prerequisites[i][0]).push(prerequisites[i][1]);
            }
            else{
                list.set(prerequisites[i][0], []);
                list.get(prerequisites[i][0]).push(prerequisites[i][1]);
            }
        }

        let seen = new Set(), res = [], permvisit = new Set();

        function dfs(course, pre){
            if(permvisit.has(course)) return true;
            if(seen.has(course)) return false;

            seen.add(course);

            for(const p of pre){
                if(!dfs(p, list.get(p) || [])) return false;
            }
            res.push(course);
            permvisit.add(course);
            seen.delete(course);
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(permvisit.has(i)) continue;
            if(!dfs(i, list.get(i) || [])) return [];
        }

        return res;
    }
}
