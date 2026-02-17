/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    //hours     => 0->11 => represent: 8  4  2  1
    //minutes   => 0->59 => represent: 32 16 8  4  2  1

    const hrs = [1, 2, 4, 8] //len = 4  //max value can be form = 11        //TOTAL = 15
    const mins = [1, 2, 4, 8, 16, 32] //len = 6 //max value can be form = 59 //TOTAL = 63
    let ans = new Set()

    function createTime(total, idx, hr, min) {
        if (hr > 11 || min > 59) return
        if (total === 0) {
            let form = min < 10 ? "0" + min : min
            ans.add(`${hr}:${form}`)
            return;
        }
        for (let i = idx; i < 10; i++) {
            let currHr = hr
            let currMin = min
            //Max hrs Length = 4
            if (i < 4) {
                currHr += hrs[i]
            }
            else {
                currMin += mins[i - 4]
            }
            createTime(total - 1, i + 1, currHr, currMin)
        }

    }

    createTime(turnedOn, 0, 0, 0)

    return [...ans]
};