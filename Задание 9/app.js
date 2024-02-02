// class Summ{
//     x
//     y
//     z
//     result
//     constructor(varX, varY, varZ){
//         this.x = varX
//         this.y = varY
//         this.z = varZ
//     }
//     print(){
//         this.result = this.x+(this.y*this.z)
//         console.log(`Ваш результат: ${this.result}`);
//     }
// }
// let result = new Summ(2,5,6)
// result.print()
class task2{
    a
    b
    c
    d
    res
    constructor(aa,bb,cc,dd){
        this.a = aa
        this.b = bb
        this.c = cc
        this.d = dd
    }
    print(){
        let mas=[this.a,this.b,this.c,this.d]
        for(let i = 0; i < mas.length; i++){
            this.res = this.res + mas[i]
        }
        console.log(`Результат: ${this.res}`);
    }
}
const result = new task2(1,2,3,4)
result.print()