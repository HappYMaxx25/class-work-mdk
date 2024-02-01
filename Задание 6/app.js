function main(){
    console.log("eeeeeeeeeeeeeeeeeeee");
}
function sum(a, b){
    let result = a+b;
    console.log(result);
}
function student(Name, LName, group){
    alert(`Привет,${Name} ${LName}. Язнаю  что ты из ${group}`);
}
let fName = prompt("Нужны имена")
let lName = prompt("Нужны фамилии")
let gName = prompt("Нужны группы")
student(fName,lName,gName)
sum(2, 3)
sum(5, 5)
main();