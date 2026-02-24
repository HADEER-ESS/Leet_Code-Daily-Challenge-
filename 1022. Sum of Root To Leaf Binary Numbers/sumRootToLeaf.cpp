#include <iostream>
#include <treeNode.h>

using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int ans = 0;
    void dfs(TreeNode* tree, string str){
        if(!tree)return ;
        str += to_string(tree->val);
        if(!tree->left && !tree->right){
            //add to sum
            int dic = stoi(str, nullptr, 2);
            ans += dic;
        }

        dfs(tree->left, str);
        dfs(tree->right, str);
    }
    int sumRootToLeaf(TreeNode* root) {
        dfs(root, "");
        return ans;
    }
};