alert('hãy nhập a , b, c   để tính pt bậc 2 ') ;
var a =prompt('nhập hệ số a') ;
var b= prompt ('nhập hệ sô b');
var c= prompt('nhập hệ số c');

// tính dellta 
var dellta=(b**2 - 4 * a * c) ;
// th 1 
  if (dellta>0){
    var x1=(-b+ Math.sqrt(dellta))/( 2 * a) ;
    var x2=(-b- Math.sqrt(dellta))/( 2 * a) ;
  document.write('phương trình có 2 nghiệm:' + x1 +'và:'+ x2) ;
    //th2
 } else if (dellta == 0 ) {
      var x=(-b/ 2*a) ;
      document.write('phương trình có nghiệm kép là :'+ x)
   //th3 
    } else {
    document.write('phương trình vô nghiệm ') ;
  }
  
 