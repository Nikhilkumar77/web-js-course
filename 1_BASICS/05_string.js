const name = "nikhil"
const count = 20
//console.log(name + count + " value"); dont us this format for concatenation
console.log(`hello my name is ${name} and my repo count is ${count} `); //string interpolation 

const name1 = new String('nikhil-kr-06')
const name2 = new String('fronend web development by chai aur code')
// slice(a,b) -> slice the string into two parts can even slice from reverse i.e negative no unlike substring
// trim() -> remove all the space before and after the string  
const url = "https://youtube.com/liked%20 videos"
console.log(url.replace('%20', '_'));
console.log(url.includes('liked'));
console.log(name1.split('-'));
console.log(name2.split(' '));
console.log(name2.split('e'));
