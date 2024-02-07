class task3{
    a
    b
    c
    d
    x1
    x2
    constructor(aa,bb,cc){
        this.a = aa
        this.b = bb
        this.c = cc
    }
    Dis(){
        this.d = Math.pow(this.b,2)-(4*this.a*this.c)
        return this.d
    }
    print(){
        if(this.Dis()>0){
            this.x1= (-this.b - Math.sqrt(this.Dis())) / (2*this.a)
            this.x2= (-this.b + Math.sqrt(this.Dis())) / (2*this.a)
            console.log(`Решения квадратного уравнения ${this.a}x^2 + ${this.b}x + ${this.c}= 0 --> x1=${this.x1}; x2=${this.x2}`);
        }
        else if(this.Dis()===0){
            this.x1=-(this.b/(2*this.a))
            this.x2=0
            console.log(`Решения квадратного уравнения ${this.a}x^2 + ${this.b}x + ${this.c}= 0 --> x1=${this.x1}`);
        }
        else if(this.Dis()<0){
            console.log(`Решения не найдено`);
        }
        
    }
}
const result = new task3(1,2,3)
result.print()