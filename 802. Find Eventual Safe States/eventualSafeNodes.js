/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    let nodes = graph.length
    let ans = []
    let visit = new Array(nodes).fill(0);
    let stack = []


    function dfs(node) {
        if (visit[node] === 2) return true

        visit[node] = 1;

        for (let item of graph[node]) {
            if (visit[item] === 1 || !dfs(item)) {
                return false
            }
        }

        visit[node] = 2
        return true;
    }


    for (let i = 0; i < nodes; i++) {
        if (dfs(i)) ans.push(i)
    }

    return ans;
};

/**
- state for visit marker
=> 0 = unvisited
=> 1 = visited
=> 2 = safe area
 */