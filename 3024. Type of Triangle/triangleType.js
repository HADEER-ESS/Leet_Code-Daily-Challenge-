/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    //equilateral => when all side are equal
    if(nums[0] === nums[1] && nums[1] === nums[2]) return 'equilateral';

    //none => when the sum of two side smaller than the third side
    if(
        nums[0] + nums[1] <= nums[2] || 
        nums[1] + nums[2] <= nums[0] ||
        nums[0] + nums[2] <= nums[1]) return 'none';

    //isosceles => when two sides are equal
    if(
        (nums[0] === nums[1] ||
        nums[1] === nums[2] ||
        nums[0] === nums[2] )&&
        (nums[0] + nums[1] > nums[2] ||
        nums[0] + nums[2] > nums[1] ||
        nums[1] + nums[1] > nums[0])
    ) return 'isosceles'

    //scalene => all sides are different but the sum of each two side greater than the third one
    return 'scalene'
};