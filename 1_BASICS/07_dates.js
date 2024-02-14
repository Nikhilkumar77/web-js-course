let mydate = new Date()
console.log(mydate.toString());//Wed Feb 14 2024 19:39:49 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());//Wed Feb 14 2024
console.log(mydate.toLocaleString());//2/14/2024, 7:39:49 PM
console.log(typeof mydate);// object

let mycreatedDate = new Date(2024, 1, 14)
let mycreatedDate1 = new Date("01-20-2024")
console.log(mycreatedDate.toDateString());//Wed Feb 14 2024
console.log(mycreatedDate1.toDateString());


let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(mycreatedDate.getTime());


