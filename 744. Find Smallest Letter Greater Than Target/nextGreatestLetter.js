/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    //non-decreasing => increasing => small -> high
    let left = 0;
    let right = letters.length - 1;
    let ans = letters[0]

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (letters[mid] > target) {
            ans = letters[mid]
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }

    return ans;
};