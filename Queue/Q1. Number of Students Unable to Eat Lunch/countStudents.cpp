#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        int unable = 0;

        while(students.size()){
            if(students.front() == sandwiches.front()){
                students.erase(students.begin());
                sandwiches.erase(sandwiches.begin());
                unable = 0;
            }
            else{
                students.push_back(students.front());
                students.erase(students.begin());
                unable++;
                if(unable == students.size())break;
            }
        }

        return unable;
    }
};