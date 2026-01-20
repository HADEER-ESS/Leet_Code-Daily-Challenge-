#include <iostream>
#include <list>

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
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* list = head;

        while(list){
            if(list->next && list->val == list->next->val){
                list->next = list->next->next;
            }
            else{
                list = list->next;
            }
        }

        return head;
    }
};