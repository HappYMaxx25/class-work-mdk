
function task5(a,b,c,d,e){
    const mas =[a,b,c,d,e]
    let k = 0;
    for (let i = 0; i < mas.length; i++) {
        if(mas[i] < 0){
            k = 1;
        }
    }
    if(k>=1){
        console.log("yes");
    }
    else{
        console.log("no");
    }
    // return result
}
task5(13,26,33,-49,56);