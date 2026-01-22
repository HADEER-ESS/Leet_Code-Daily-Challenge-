#include <iostream>
#include <vector>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        //pointer for Head List
        ListNode* list = head;
        //vector to store NODES values
        vector<int> arr;

        //ListNode for REV
        ListNode* rev = new ListNode(0);
        //pointer for REVERSE LIST iteration
        ListNode* ptr = rev;


        while(list){
            arr.push_back(list->val);
            list = list->next;
        }

        while(arr.size()){
            ptr->next = new ListNode(arr.back());
            arr.pop_back();
            ptr = ptr->next;
        }

        return rev->next;
    }
};