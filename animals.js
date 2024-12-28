
var fly=confirm("do you fly"); //===> true or false

if(fly)  
{
  var wild=confirm("do you wild") // true , false
  if(wild)
  {
   document.write("eagle");
   
  }else{
   document.write("parrot");
  }
}
else{
  var sea=confirm("do you live under sea") // true , false
  if(sea){
      var wild=confirm("do you wild")
      if(wild)
        {
           document.write("shark");
         
        }else{
           document.write("dolphine");
       }
   }
   else{
    var wild=confirm("do you wild")
   if(wild)
      {
       document.write("lion");
       
      }else{
       document.write("cat");
      }

   }
}



if(0)//===> false
if(false)
if(y=5) truey=5