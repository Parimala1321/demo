 var array = [
    { 
      name:"Parimala",
      rollnumber:"23P35A0412",
      marks:"95",
      college:"acet",
     update:"UPDATE",
     deletion:"REMOVE"
    },
    {
        name:"Tanuja",
        rollnumber:"23P35A0411",
        marks:"95",
        college:"acet",
         update:"UPDATE",
         deletion:"REMOVE"
      },
      {
        name:"Anusha",
        rollnumber:"23P35A0413",
        marks:"90",
        college:"acet",
         update:"UPDATE",
        deletion:"REMOVE"
      },
      {
        name:"Chandhu",
        rollnumber:"23P35A0414",
        marks:"85",
        college:"aec",
         update:"UPDATE",
        deletion:"REMOVE"
      },
      {
        name:"Tulasi",
        rollnumber:"23P35A0415",
        marks:"80",
        college:"aec",
         update:"UPDATE",
         deletion:"REMOVE"
      },
 ]

//  var button = document.getElementsByClassName("b")[0]; 
//   var t =document.getElementsByClassName("my_table")[0];
 

//  var child = document.createElement("tr");
//  var parent = document.getElementsByClassName("my_table")[0];
//  parent.appendChild(child);

//  var  th_1 =document.createElement("th");
//  var row1 = document.getElementsByTagName("tr")[0];
//  row1.appendChild(th_1).innerHTML="Name";
   
//  var  th_2 =document.createElement("th");
//  var row1 = document.getElementsByTagName("tr")[0];
//  row1.appendChild(th_2).innerHTML="Roll no";

//  var  th_3 =document.createElement("th");
//  var row1 = document.getElementsByTagName("tr")[0];
//  row1.appendChild(th_3).innerHTML="Marks";

//  var  th_4 =document.createElement("th");
//  var row1 = document.getElementsByTagName("tr")[0];
//  row1.appendChild(th_4).innerHTML="College";
  
//  var  th_5 =document.createElement("th");
//  var row1 = document.getElementsByTagName("tr")[0];
//  row1.appendChild(th_5).innerHTML="Update";

//  var  th_6 =document.createElement("th");
//  var row1 = document.getElementsByTagName("tr")[0];
//  row1.appendChild(th_6).innerHTML="Deletion";

var a = document.getElementsByClassName("b")[0];
var tr_1 = document.createElement("tr");
var t = document.getElementsByClassName("my_table")[0];
t.appendChild(tr_1);

var headers = ["Name", "Roll Number", "marks" ,"College", "Updation", "Deletion"];
headers.forEach(header => {
    var th = document.createElement("th");
    th.innerHTML = header;
    tr_1.appendChild(th);
});
   

 entering(array);
 function entering(array){
  for(var i=0;i<array.length;i++){
    var row =`<tr>

      <td>${array[i].name}</td>
      <td>${array[i].rollnumber}</td>
      <td>${array[i].marks}</td>
      <td>${array[i].college}</td>
      <td class="update_1">${array[i].update}</td>
      <td class="delete_1">${array[i].deletion}</td>
    </tr>`
    t.innerHTML += row;
   
  }
  addUpdateFunctionality();
  addRemoveFunctionality();
}

function table(){
  if(t.style.display!="block")
   {
     t.style.display="block";
  }
  else{
   var prompt={
     name:window.prompt("enter name"),
     rollnumber:window.prompt("enter roll no"),
     marks:window.prompt("enter marks"),
     college:window.prompt("enter college"),  
     update:"UPDATE",
     remove:"REMOVE",
   };
    //  array.push(prompt)
     var row =`<tr>
       <td>${prompt.name}</td>
       <td>${prompt.rollnumber}</td>
       <td>${prompt.marks}</td>
       <td>${prompt.college}</td>
       <td class="update_1">${prompt.update}</td>
       <td class="remove_1">${prompt.remove}</td>
     </tr>`
     t.innerHTML+=row;
     addUpdateFunctionality();
     addRemoveFunctionality();
  }

}

//for deletion the rows
function addRemoveFunctionality() {
  var rows = t.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
      var removeBtn = rows[i].getElementsByClassName("remove_1")[0];
      removeBtn.onclick = function () {
          var row = this.parentElement;
          row.parentElement.removeChild(row);
      };
  }
}

function  addUpdateFunctionality(){
  var rows= t.getElementsByTagName('tr');
  for(var i=1;i<rows.length;i++){
    var updateBtn = rows[i].getElementsByClassName("update_1")[0];
        updateBtn.onclick = function () {
            var row = this.parent;
            var cells = row.getElementsByTagName('td')
            row.parent.removeChild(row);
            for (var j = 0; j < cells.length - 2; j++) {
              var currentValue = cells[j].innerText;
               cells[j].innerHTML = `<input type='text' value='${currentValue}' onchange='updateCell(this)'>`;

            
            }       
};
}
}

function updateCell(input) {
  var cell = input.parentElement;
  cell.innerHTML = input.value;
}

addRemoveFunctionality(); // To add functionality to initial data
addUpdateFunctionality(); // To add functionality to initial data