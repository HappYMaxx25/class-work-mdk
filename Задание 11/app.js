class Asset { 
    name
    cost
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
} 
class FinancialAsset extends Asset { 
    profitability
    typeinv
    constructor(name,cost,profitability,typeinv){
        super(name,cost)
        this.profitability=profitability
        this.typeinv=typeinv
    }
} 
class RealAsset extends Asset{
    adress
    typeact
    constructor(name,cost,adress,typeact){
        super(name,cost)
        this.adress=adress
        this.typeact=typeact
    }
}
const gg = new RealAsset("Принтер",30000,"ул. Пушкина","Принтер")
console.log(gg);
const pp = new FinancialAsset("Медаль",45000,45100,"Неизвестно")
console.log(pp);