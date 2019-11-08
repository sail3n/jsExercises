function getDiffDates(date1, date2){
    dateOne= new Date(date1);
    dateTwo= new Date(date2);

   var differenceTime= dateTwo.getTime()-dateOne.getTime();
   var differenceDays= differenceTime/(1000*60*60*24);
 
   console.log(differenceDays);

}
getDiffDates("10/10/2019", "11/11/2019");