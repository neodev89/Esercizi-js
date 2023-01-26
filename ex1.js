function tabelline(n){
    for(let i = 0; i <= 10; i++){
        if(n > 0 && n <= 10){
             console.log(` ${n} x ${i} = ${n*i}`);
        }
    }
     if(n > 10){
        console.log(`Il numero ${n} è tropo grande`);
    }else if(n < 0){
        console.log(`Il numero ${n} è negativo`);
    }else if(n == n.toFixed){
        console.log(`il numero ${n} non è un numero intero`);
    }
}
