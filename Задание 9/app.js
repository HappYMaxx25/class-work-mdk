class task2{
    I
    fns;
    fn(){
        this.I = []
        for (let i = 0; i <= 100; i++) {
            if(i % 3 === 0 && i % 5 === 0 && i % 7 === 0 ){
                this.I.push(i)
            }
        }
        return this.I
    }
    print(){
        this.fns = this.fn()
        console.log(this.fns);
    }
}
const result = new task2()
result.print()