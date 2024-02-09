//DOM
const text = document.querySelector(".text")
const net = document.querySelector(".bred")
let i = text.innerText
let u = net.innerText
let p = i/10*100
console.log(`Вы взяли кредит на ${i} на ${u} года(лет). Вы должны вернуть ${p}`);
// for (i of text) {
//     if(i.innerText === "Winter"){
//         console.log("Надевай шапку");
//     }else if(i.innerText === "Sping"){
//         console.log("Надевай пальто");
//     }
//     else if(i.innerText === "Summer"){
//         console.log("Надевай кепку");
//     }
//     else if(i.innerText === "Awtumn"){
//         console.log("Надевай носки");
//     }
    
// }
//2 эемента размер кредита  кол-во лет(1-5) форма кредита вывести на сколько лет + переплата