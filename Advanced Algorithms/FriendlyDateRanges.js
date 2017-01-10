function makeFriendlyDates(arr) {
  
  var date1 = dateRange(arr[0].split('-'));
  var date2 = dateRange(arr[1].split('-'));
  
  function dateRange(date){
    var y = date[0];
    var m;
    var d;
    
      switch(parseInt(date[1])){
        case 1: m = "January";
            break;
        case 2: m = "February";
            break;
        case 3: m = "March";
            break;
        case 4: m = "April";
            break;
        case 5: m = "May";
            break;
        case 6: m = "June"; 
            break;
        case 7: m = "July";
            break;
        case 8: m = "August";
            break;
        case 9: m = "September";
            break;
        case 10: m = "October";
            break;
        case 11: m = "November";
            break;
        case 12: m = "December";
            break;
        }
      
     switch (parseInt(date[2])) {
      case 1:
      case 21:
      case 31:
        d = date[2] + 'st';
         break;
      case 2:
      case 22:
        d = date[2] + 'nd';
         break;
      case 3:
      case 23:
        d = date[2] + 'rd';
         break;
      default:
        d = date[2] + 'th';
       break;
    }
    
    if(d[0] === "0"){
      d = d.substr(1);
    }
  
  return m + " " + d + ", " + y;
 }
   
  
  var newDates = [];
  date1 = date1.split(' ');
  date2 = date2.split(' ');
  
  //Check if dates later than 2022 and is less 
  if((parseInt(date2[2]) > 2022) && (date1[1] !== date2[1])){
    date2.splice(2, 1);
    date2 = date2.join(' ');
    date2 = date2.substring(0, date2.length - 1);
    newDates = [date1.join(' '), date2];
    return newDates;
  }
  
  //Check if dates are less than a year apart
  if((parseInt(date2[2]) - parseInt(date1[2])) === 1 && parseInt(date1[2]) < 2020){
      date1.splice(2, 1);
      date2.splice(2, 1);
      date1 = date1.join(' ');
      date2 = date2.join(' ');
      date1 = date1.substring(0, date1.length - 1);
      date2 = date2.substring(0, date2.length - 1);
      newDates = [date1, date2];
      return newDates;
   }
  
    //Check if both dates are the same
    if(date1.join(' ') === date2.join(' ')){
      newDates = [date1.join(' ')];
      return newDates;
    }
  
     //Check if both dates are 2016
    if (date1[2] === "2016" && date2[2] === "2016") {
      date1.splice(2, 1);
      date2.splice(2, 1);
      //Check if both months are the same
      if(date1[0] === date2[0]){
        date2.splice(0, 1);
        date1 = date1.join(' ');
        date2 = date2.join(' ');
        //Cut commas
        date1 = date1.substring(0, date1.length - 1);
        date2 = date2.substring(0, date2.length - 1);
        newDates = [date1, date2];
        return newDates;
      }
    }
  
    //Check if both dates are 2017
    if (date1[2] === "2017" && date2[2] === "2017") {
      date2.splice(2, 1);
        date1 = date1.join(' ');
        date2 = date2.join(' ');
        //Cut comma
        date2 = date2.substring(0, date2.length - 1);
        newDates = [date1, date2];
        return newDates;
     }

  
  newDates = [date1.join(' '), date2.join(' ')];
  
  return newDates;
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);