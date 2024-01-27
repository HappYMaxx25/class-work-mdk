// const people =["Том","Нова","Сэм","Боб","Нат","Иван","Стас"];
// for(let i=0; i<people.length; i++) {
//     let result = people[i]
//     console.log(result);
// }
const people =[["Tom","Green",33,"New-York"],["Bob","Anderson",25,"Missuri"],["Stanly","Parable",43,"Unknown"],["Kate","Lockwell",24,"Washington"],["Marry","Thomston",23,"Washington"],["Max","Green",35,"New-York"]];
for(let i=0; i<people.length; i++){
    for (let j=0; j<people[i].length; j++){
        let result = people[i][j];
        console.log(result);
    }
    console.log("===================================");
}