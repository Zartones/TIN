function money(am, c){
    let val = '';
    for(let i = 0; i < c.length; i++){
       while((am - c[i]) >= 0){
        val = val.concat(c[i].toString(), ', ');
        am = am - c[i];
       }
    }
    return val;
}

console.log(money(46, [25, 10, 5, 2, 1]));