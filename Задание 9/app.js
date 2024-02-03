class task2{
    a
    b
    c
    d
    res
    mas
    i
    constructor(aa,bb,cc,dd){
        this.a = aa
        this.b = bb
        this.c = cc
        this.d = dd
    }
    print(){
        this.res=0
        this.mas=[this.a,this.b,this.c,this.d]
        for(this.i = 0; this.i < this.mas.length; this.i++){
            this.res = this.res + this.mas[this.i]
        }
        console.log(`Результат: ${this.res}`);
    }
}
const result = new task2(1,2,3,4)
result.print()