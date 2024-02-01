
function task5(a,b,c,d,e){
    const mas =[a,b,c,d,e]
    let k = 0;
    for (let i = 0; i < mas.length; i++) {
        if(mas[i] % 3 == 0){
            k = 1;
            // console.log(mas[i]);
        }
    }
    if(k>=1){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
task5(15,26,33,46,56);