var FizsBuzzOutput = "";
    var fizz = 0;
    var buzz = 0;
    var fizzbuzz=0;



for (var i = 1; i <= 100; i++ ){
    if(i % 15 === 0){
        fizzbuzz+=1;   
        document.write("fizzbuzz" + " ");
    }else if(i % 3 === 0){
        fizz+=1
        document.write("fizz" + " ");
    }else if(i % 5 === 0){
        buzz+=1
        document.write("buzz" + " ")
    }else{
        
        document.write(i + " ")
    }
}
    
 console.log("fizz count= "+ fizz);
 console.log("buzz count= "+ buzz);
 console.log("fizzbuzz count= "+ fizzbuzz);