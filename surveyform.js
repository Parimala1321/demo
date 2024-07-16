 var data = {
    firstname:"",
    lastname:"",
    fathername:"",
    mothername:"",
    address:"",
    gender:"",
    certificate:"",
    skills:"",
    badges:"",
    declaration:"",

    ssc_1 :"",
    ssc_2 :"",
    ssc_3 :" ",
    diploma_1 :"",
    diploma_2 :"",
    diploma_3 :" ",
    btech_1:"",
    btech_2:"",
    btech_3:""

 }

function firstname(event){
  data.firstname= event.target.value;
}
function lastname(event){
    data.lastname = event.target.value;
 }
 function date(event){
    data.date = event.target.value;
 }
 function fathername(event){
    data.fathername= event.target.value;
 }
 function mothername(event){
    data.mothername= event.target.value;
 }
 function address(event){
    data.address= event.target.value;
 }
 function gender(event){
    data.gender= event.target.value;
 }
 function certificate(event){
    data.certificate= event.target.value;
 }
 function skills(event){
    data.skills= event.target.value;
 }
 function hobbies(event){
    data.hobbies= event.target.value;
 }
 function badges(event){
   data.badges= event.target.value;
}
function declaration(event){
   data.declaration= event.target.value;
}
 function submit(event){
   console.log(data)
 }
 
 var SSc = {
    ssc_1 :"",
    ssc_2 :"",
    ssc_3 :" ",
 }
function ssc_1(event){
  SSc.ssc_1=event.target.value;
}
function ssc_2(event){
    SSc.ssc_2=event.target.value;
}
function ssc_3(event){  
    SSc.ssc_3=event.target.value;
}


var Diploma = {
    diploma_1 :"",
    diploma_2 :"",
    diploma_3 :" ",
 }
function diploma_1(event){
    Diploma.diploma_1=event.target.value;
}
function diploma_2(event){
    Diploma.diploma_2=event.target.value;
}
function diploma_3(event){  
    Diploma.diploma_3=event.target.value;
}


var Btech ={
    btech_1:"",
    btech_2:"",
    btech_3:""
}
function btech_1(event){
    Btech.btech_1 = event.target.value;
}
function btech_2(event){
    Btech.btech_2 = event.target.value;
}
function btech_3(event){
    Btech.btech_3 = event.target.value;
}
