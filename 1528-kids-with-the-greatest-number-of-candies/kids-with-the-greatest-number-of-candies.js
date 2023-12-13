/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    const greatest = Math.max(...candies)
    const retArr = []

    candies.forEach(ele=> ele + extraCandies >= greatest ? retArr.push(true) : retArr.push(false))    

    return retArr
};