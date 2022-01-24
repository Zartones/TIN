function secondLowestSecondGreatest(arr){
    arr.sort(function(x,y){return x-y;});

    var val = [arr[0]];
    var res = [];
    
    for(var j=1; j < arr.length; j++){
      if(arr[j-1] !== arr[j]){
        val.push(arr[j]);
      }
    }
      res.push(val[1],val[val.length-2]);
    return res.join(';');  
  }


  console.log(secondLowestSecondGreatest([8,2,4,7,1]));