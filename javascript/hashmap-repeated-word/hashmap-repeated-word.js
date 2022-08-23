'use strict'
function wordRepeat(str){
    str =str.toLowerCase();
   const arr=str.split(/\W+/g);
   // console.log(arr)
   return arr.find( (current ,index) =>
     arr.slice(0,index).includes(current )
   );
 }
 console.log(wordRepeat("Once upon a time, there was a brave princess who...")) 
 module.exports = wordRepeat;