const text = document.querySelector(".text")
const net = document.querySelector(".bred")
let i = text.innerText
let u = net.innerText
let p = i/10*100
if(i>100000){
    console.log(`Вы взяли кредит на ${i} на ${u} года(лет). Вы должны вернуть ${p}`);
}
else{
    console.log(`Нужно больше 100000`);
}