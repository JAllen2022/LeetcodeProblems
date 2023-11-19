/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {

    let obj = {}
    let min = Infinity
    let retArr=[]
    
    list1.forEach((ele,i)=> obj[ele]=i)

    list2.forEach((ele,i)=> {
        if(obj[ele]!==undefined){
            let temp = obj[ele]+i
            if(temp===min) {
                retArr.push(ele)
            } else if (temp<min) {
                retArr=[ele]
            }
            min = Math.min(min,temp)
        }
    })

    return retArr
    
};