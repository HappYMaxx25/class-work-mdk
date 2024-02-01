function task1(a,b,c,d,e,f){
    mas =[a,b,c,d,e,f]
    mass =[]
    for (let i = 0; i < mas.length; i++) {
        if(mas[i] % 3 === 0 && mas[i] % 5 === 0 && mas[i] % 7 === 0){
            mass = [mas[i]]
        }
    }
    console.log(mass);
}
task1(105,365,1,65,958,26)