
currentDate = new Date();

const expiryChecker = function(pie){
   if(pie.expiryDate < currentDate.now().getUTCDate()){
    return true
   } else{
    return false
   }
}

module.exports = expiryChecker;
