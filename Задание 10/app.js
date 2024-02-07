class task1{
    a;
    constructor(aa){
        this.a = aa
    }
    print(){
        let res=1;
        for(let i = 1; i < this.a; i++){
            res = res * i
        }
        res = res * this.a
        console.log(`Факториал числа ${this.a}: ${res}`);
    }
}
const result = new task1(6)
result.print()