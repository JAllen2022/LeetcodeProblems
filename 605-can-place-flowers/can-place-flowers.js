/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let count = 0
    
    for(let i = 0 ; i<flowerbed.length;i++) {
       if(flowerbed[i]===0){
            // Check adjacent
            if(flowerbed[i-1]===0 && flowerbed[i+1]===0) {
                flowerbed[i]='X'
                count++
            } else if (i===0){
                if (flowerbed[i+1]===0 && flowerbed[i]===0){
                    flowerbed[i]='X'
                    count++
                }   else if (flowerbed.length===1) {
                count++
            }
            } else if (i===flowerbed.length-1) {
                if (flowerbed[i-1]===0 && flowerbed[i]===0){
                    flowerbed[i]='X'
                    count++
                }
            } 
        }
    }

    return count>=n
};