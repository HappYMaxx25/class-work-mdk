class Animal { 
    view
    place
    constructor(view,place){
        this.view=view
        this.place=place
    }
} 
class Mammal extends Asset { 
    food
    method
    constructor(view,place,food,method){
        super(view,place)
        this.food=food
        this.method=method
    }
} 
class Bird extends Asset{
    move
    tree
    constructor(view,place,move,tree){
        super(view,place)
        this.move=move
        this.tree=tree
    }
}
const gg = new Mammal("Принтер","30000","ул. Пушкина","Принтер")
console.log(gg);
const pp = new Bird("Голубь","Город","На еду","Любое")
console.log(pp);