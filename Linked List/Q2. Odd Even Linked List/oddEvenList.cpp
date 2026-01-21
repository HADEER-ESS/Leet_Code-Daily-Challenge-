#include <iostream>
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
    ListNode* oddEvenList(ListNode* head) {
        ListNode* evenList = new ListNode(0);
        ListNode* oddList = new ListNode(0);

        ListNode* odd = oddList;
        ListNode* even = evenList;

        ListNode* list = head;
        int start = 0;

        while(list){
            if(start %2 != 0){ //ODD
                odd->next = list;
                odd = odd->next;
            }else{//EVEN
                even->next = list;
                even = even->next;
            }
            //moveforward
            list = list->next;
            start++;
        }

        //we need to end with ODD, so we need to trunckate it
        odd->next = nullptr;

        //link the EVEN to the ODD list, and skipping its first node value 0
        even->next = oddList->next;

        return evenList->next; //to SKIPP the first NODE value 0
    }
};
