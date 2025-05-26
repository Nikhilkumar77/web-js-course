// const school = new Object()
const  school = {}
//console.log(school)
school.name ="DBA"
school.address = "patna"
school.student = "Nikhil"
school.Nostu = 2000;
//console.log(school)

const student = {
    stuname :"Kumar",
    age :25,
    roll_no :30,

}

const result  = {...school,...student}
//console.log(result);

const arr1 = Object.keys(school)
//console.log(arr1);

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  console.log('Access granted');
} else {
  console.log('Access denied');

  }
