
var RandomizedSet = function() {
    this.myObj = {}
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.myObj[val]){ 
        this.myObj[val]=true
        return true
    } else return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.myObj[val]){ 
        delete this.myObj[val]
        return true
    } else return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const arr = Object.keys(this.myObj)
    const rand = Math.floor(Math.random()*arr.length)
    return arr[rand]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */