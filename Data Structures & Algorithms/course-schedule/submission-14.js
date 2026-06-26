class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = {};

        for(let i = 0; i < numCourses; i++){
            adj[i] = [];
        }

        for(const [a, b] of prerequisites){
            adj[a].push(b);
        }

        let seen = new Set();

        function dfs(root, s){
            if(seen.has(root)) return true;
            if(s.has(root)) return false;
            s.add(root);

            for(const nei of adj[root]){
                if(!dfs(nei, s)) return false;
            }
            seen.add(root);
            //s.delete(root);

            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i, new Set())) return false;
        }

        return true;
    }
}
