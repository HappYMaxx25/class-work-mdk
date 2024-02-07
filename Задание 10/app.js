class task2{
    a //начало
    b //прыжок
    c //конец
    constructor(aa,bb,cc){
        this.a = aa
        this.b = bb
        this.c = cc
    }
    print(){
        let res=0;
        for(let i = this.a; i <= this.c; i=i+this.b){
            res = res + i
        }
        console.log(`Арифметическая прогрессия = ${res}`);
    }
}
const result = new task2(1,5,10)
result.print()