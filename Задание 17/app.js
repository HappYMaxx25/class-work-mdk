function task(a,b,c,d,e,f,g,h){
    let mas1 = [a,b,c,d]
    let mas2 = [e,f,g,h]
    let gmas = []
    for(let mass1 in mas1){
        for(let mass2 in mas2){
            if(mas1[mass1] === mas2[mass2]){
                gmas = gmas + mas2[mass2]
            }
        }
    }
    console.log(gmas);
}
task(1,2,3,4,2,3,1,0)