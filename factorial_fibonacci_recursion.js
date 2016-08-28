var total = 1

var factorial = function(num){
    total = total * num

	  if(num > 1){
      factorial(num - 1)
    }
    return total
}

log(factorial(10))



var total = [1,1]

var fibonacci = function(){
    var  sum = total[total.length - 1] + total[total.length - 2]
    total.push(sum) 
   
    if(total.length < 9){
        fibonacci()
    }
  
  return total
}

log(fibonacci())