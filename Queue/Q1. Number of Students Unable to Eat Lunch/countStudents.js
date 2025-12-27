/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let unable = 0


    while (students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            unable = 0
        }
        else {
            students.push(students.shift())
            unable++
            if (unable === students.length) break
        }
    }

    return students.length
};