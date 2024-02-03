class task1{
    a
    b
    c
    d
    e
    i
    mas
    mass
    constructor(aa,bb,cc,dd,ee){
        this.a = aa
        this.b = bb
        this.c = cc
        this.d = dd
        this.e = ee
    }
    print(){
        this.mas=[this.a,this.b,this.c,this.d,this.e]
        this.mass = []
        for (this.i = 0; this.i < this.mas.length; this.i++) {
            if(this.mas[this.i] % 3 === 0 && this.mas[this.i] % 5 === 0 && this.mas[this.i] % 7 === 0 ){
                this.mass = [this.mas[this.i]];
            }
        }
        console.log(this.mass);
    }
}
const result = new task1(105,365,1,65,35)
result.print()