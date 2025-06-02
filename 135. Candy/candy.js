/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let len = ratings.length
    let arr = new Array(len).fill(1)

    //left to right
    for (let i = 1; i < len; i++) {              //O(n)
        if (ratings[i] > ratings[i - 1]) {
            arr[i] = arr[i - 1] + 1
        }
    }

    //right tp left
    for (let i = len - 2; i >= 0; i--) {               //O(n)
        if (ratings[i] > ratings[i + 1] && arr[i + 1] >= arr[i]) {
            arr[i] = arr[i + 1] + 1
        }
    }

    return arr.reduce((acc, curr) => acc + curr, 0)     //O(n)
};

/*
- the minimum number of candies
- count the candies must be spread based on rating one from start -> end and another from end -> start
- Total Time Complexity is => O(3 n) = O(n)
*/