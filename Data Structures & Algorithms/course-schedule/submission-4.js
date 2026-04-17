class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let list = new Map();

        for(let i = 0; i < prerequisites.length; i++){
            if(list.has(prerequisites[i][0])){
                list.get(prerequisites[i][0]).push(prerequisites[i][1]);
                //push prereq for given course to its prereq list
            }
            else{
                list.set(prerequisites[i][0], []);
                list.get(prerequisites[i][0]).push(prerequisites[i][1]);
                //set to list with just the one prereq until meeting another
            }
        }

        let seen = new Set();

        function dfs(course, pre){
            if(seen.has(course)) return false;

            seen.add(course);

          
                for(const p of pre){
                    if(!dfs(p, list.get(p) || [])) return false;
                }
                seen.delete(course);
            return true;
        }

        for(const [course, pre] of list){
            if(!dfs(course, pre || [])) return false;
            //seen = new Set();
        }
        return true;
    }
}
