
    var h =0;
    var m = 0;
    var s =0;
    

 function run()  {
    ++s;
    document.getElementsByClassName("hours")[0].innerHTML = h;
    document.getElementsByClassName("minutes")[0].innerHTML = m;
    document.getElementsByClassName("seconds")[0].innerHTML = s;

    if(s==60)
    {
        
        m++;
        s=0;
    }
    if(m==60){
        h++;
        m=0;
    }
 }
setInterval(run,1000);

function run1(){
    document.getElementsByClassName("hours")[0].innerHTML = h;
    document.getElementsByClassName("minutes")[0].innerHTML = m;
    document.getElementsByClassName("seconds")[0].innerHTML = s;
    if()
        clearInterval(address);
}
  var address =setInterval(run1,1000);

// function run2(){
//     document.getElementsByClassName("hours")[0].innerHTML = 0;
//     document.getElementsByClassName("minutes")[0].innerHTML = 0;
//     document.getElementsByClassName("seconds")[0].innerHTML = 0;
//    clearInterval(address);
//    h=0;
//    m=0;
//    s=0;
//   }

//  function run3(){
    
//  }