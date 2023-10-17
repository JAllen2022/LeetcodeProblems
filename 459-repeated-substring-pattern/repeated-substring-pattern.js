/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
   let len = 2
   let found = false
   while(len<=s.length) {
       let increment = s.length/len
       let subString = s.slice(0,increment)
       let run= true
       for(let i=increment;i<s.length;i+=increment ) {
           if(s.slice(i,i+increment)!==subString){
               run=false
               break
           }
       }
       if( run){
           found=true
            break
        }
       len++
   }

   return found
};