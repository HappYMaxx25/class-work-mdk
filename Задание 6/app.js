// function main(){
//     console.log("eeeeeeeeeeeeeeeeeeee");
// }
//====================================================================
// function sum(a, b){
//     let result = a+b;
//     console.log(result);
// }
//====================================================================
// function student(Name, LName, group){
//     alert(`Привет,${Name} ${LName}. Язнаю  что ты из ${group}`);
// }
// let fName = prompt("Нужны имена")
// let lName = prompt("Нужны фамилии")
// let gName = prompt("Нужны группы")
// student(fName,lName,gName)
// sum(2, 3)
// sum(5, 5)
// main();
//====================================================================
// function sperson(person){
//     console.log(`Имя, ${person[0]}`);
//     console.log(`Лет, ${person[1]}`);
//     console.log("============================");
// }
// const tom = ["Tom",39]
// const bom = ["Bob",39]
//====================================================================
// function main(a=2,b=3){
//     let result = a*b
//     return result;
// }
// let x = main(4,5)
// let y = x+2
// console.log(y);
//====================================================================
function min(a,b){
    if(a>b){
        console.log(`Значение ${a} больше значения ${b}`);
    }
    else if(a<b){
        console.log(`Значение ${b} больше значения ${a}`);
    }
    else if (a===undefined||b===undefined){
        console.log("Введите значение");
    }
    else{
        console.log("Вводи правильно");
    }
}
min(5,55)
//====================================================================

//====================================================================