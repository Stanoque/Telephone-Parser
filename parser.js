function telephoneCheck(str) {
    let separatorsRegExp = /[0-9]|\(|\)|^-/g;
    let strictRegExp = /[0-9]/g;
    let workString = str.match(separatorsRegExp);
    // getting string with (important) separators
    let clearString = workString.join("").match(strictRegExp);
    // getting clear (only numbers) string
  
    if(clearString.length > 11 || clearString.length < 10){
      return false;
    }
    // if there are to many numbers return false
    
    if(clearString.length === 11 && workString[0] === '-' ){
      return false;
    }
    // if hyphen makes '1' into '-1' return false
   
    if(clearString.length === 11 && clearString[0] !== '1' ){
      return false;
    }
    // if there are 11 numbers and first one is not 1 return false
  
    if(clearString.length === workString.length){
      return true;
    }
    // if there are no parentheses in workString return true
  
    if(workString.length > 13){
      return false;
    }
    // if there are more than two parentheses return false
  
    if(workString[clearString.length%10] === '(' && workString[4 + clearString.length%10] === ')'){
      return true;
    } else {
      return false;
    }
    // checking if parentheses are in their's places
  
    
  
  }
  

  
  