class task2{
    i
    mass
    print(){
        this.mass =[]
        for (this.i = 0; this.i <= 1000; this.i++) {
            if(this.i % 3 === 0 && this.i % 5 === 0 && this.i % 7 === 0 ){
                this.mass = [this.i];
                console.log(this.mass);
            }
        }
        
    }
}
const result = new task2()
result.print()