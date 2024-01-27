// const animals = ["Собака","Кошка","Свинья"]
// for(let animal of animals){
//     console.log(animal);
// }
// let students = {name:"Harry",age:33,course:4}
// for(let student in students){
//     console.log(student,students[student]);
// }
// const personArray = [
//     {name: "Tom",age:25},
//     {name: "Bob",age:23}
// ]
// for (let person of personArray) {
//     for(let key in person){
//         console.log(key + ": "+person[key]);
//     }
// }
const students =[
    {name:"Amber",age:16,course:3,love_pares:"Математика",pares_now:"История",ocenki:[4,5,4],date:"12.02.2034"},
    {name:"Max",age:15,course:2,love_pares:"Английский",pares_now:"Математика",ocenki:[3,3,3],date:"12.02.2034"},
    {name:"Mike",age:19,course:4,love_pares:"ИЗО",pares_now:"История",ocenki:[3,2,2],date:"12.02.2034"},
    {name:"Denis",age:18,course:3,love_pares:"Физра",pares_now:"Английский",ocenki:[4,2,4],date:"12.02.2034"},
    {name:"Mike",age:18,course:4,love_pares:"История",pares_now:"ИЗО",ocenki:[5,2],date:"12.02.2034"},
    {name:"Max",age:18,course:4,love_pares:"Физра",pares_now:"Физра",ocenki:[4,3,3],date:"12.02.2034"},
    {name:"Artem",age:15,course:2,love_pares:"Математика",pares_now:"Математика",ocenki:[5,4,5],date:"12.02.2034"}
]
for (let student of students) {
    for(let key in student){
        console.log(key + ": "+student[key]);
    }
    console.log("=======================================================");
}