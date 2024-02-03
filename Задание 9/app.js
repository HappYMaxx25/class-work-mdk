class task5{
    a
    b
    c
    d
    e
    i
    k
    constructor(aa,bb,cc,dd,ee){
        this.a = aa
        this.b = bb
        this.c = cc
        this.d = dd
        this.e = ee
    }
    print(){
        this.k = 0
        this.mas=[this.a,this.b,this.c,this.d,this.e]
        for (this.i = 0; this.i < this.mas.length; this.i++) {
            if(this.mas[this.i] % 3 === 0){
                this.k = 1;
            }
        }
        if(this.k>=1){
            console.log("yes");
        }
        else{
            console.log("no");
        }
    }
}
const result = new task5(15,26,33,46,56)
result.print()