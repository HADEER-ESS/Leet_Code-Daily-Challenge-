#include <iostream>
#include <vector>

using namespace std;

class MyQueue {
private:
    vector<int> arr;
public:
    MyQueue() {
    }
    
    void push(int x) {
        this->arr.push_back(x);
    }
    
    int pop() {
        int front = this->arr.front();
        this->arr.erase(this->arr.begin());
        return front;
    }
    
    int peek() {
        return this->arr.front();
    }
    
    bool empty() {
        return this->arr.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */