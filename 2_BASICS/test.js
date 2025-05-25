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
console.log(result);

const arr1 = Object.keys(school)
console.log(arr1);

