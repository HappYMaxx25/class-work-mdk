class task3{
    a
    b
    constructor(aa,bb){
        this.a=aa;
        this.b=bb;
    }
    print(){
        if(this.a>this.b){
            console.log(`Больше: ${this.a}`);
        }else if(this.a<this.b){
            console.log(`Больше: ${this.b}`);
        }
    }
}
const TASK3 = new task3(5,3)
TASK3.print()