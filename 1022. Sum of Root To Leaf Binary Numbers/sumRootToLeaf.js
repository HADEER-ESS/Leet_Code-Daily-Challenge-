/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    let arr = []
    let ans = 0
    let temp = root
    function dfs(tree, str) {
        if (!tree) return
        str += tree.val
        if (!tree.left && !tree.right) {
            ans += parseInt(BigInt("0b" + str))
        }

        dfs(tree.left, str)
        dfs(tree.right, str)
    }
    dfs(temp, '')

    return ans
};