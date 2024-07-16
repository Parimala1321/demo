 var data=[
    {
      name:"Parimala",
      rollnumber:"23P35A0412",
      marks:"95",
      college:"acet",
    },
    {
        name:"Tanuja",
        rollnumber:"23P35A0411",
        marks:"95",
        college:"acet",
    },
    {
        name:"Anusha",
        rollnumber:"23P35A0413",
        marks:"90",
        college:"acet",
    },
    {
        name:"Chandhu",
        rollnumber:"23P35A0414",
        marks:"85",
        college:"aec",
    }
 ]

//  var child = document.createElement("tr");
//     var parent = document.getElementsByClassName("my_table")[0];
//     parent.appendChild(child);
   
//     var  th_1 =document.createElement("th");
//     var row1 = document.getElementsByTagName("tr")[0];
//     row1.appendChild(th_1).innerHTML="Name";
      
//     var  th_2 =document.createElement("th");
//     var row1 = document.getElementsByTagName("tr")[0];
//     row1.appendChild(th_2).innerHTML="Roll no";
   
//     var  th_3 =document.createElement("th");
//     var row1 = document.getElementsByTagName("tr")[0];
//     row1.appendChild(th_3).innerHTML="Marks";
   
//     var  th_4 =document.createElement("th");
//     var row1 = document.getElementsByTagName("tr")[0];
//     row1.appendChild(th_4).innerHTML="College";

 var param=true;
  var index=0;
function fun(){
    var  table = document.getElementsByClassName('my_table')[0];
   if(param==true){
   data.map ((ele) => {
     var table_row =document.createElement('tr');
     Object.entries(ele).map((data) => 
     {
        var table_data = document.createElement('td');
        table_data.innerHTML = data[1];
        table_row.appendChild(table_data);
     })
         table.appendChild(table_row);
      })

      param=false;
    }

    else{
        var table_row=document.createElement('tr');
        Object.entries(data[0]).map((data) => {
        var table_data = document.createElement('td');
        table_data.innerHTML=window.prompt(data[0]);
        table_row.appendChild(table_data);
        // table.appendChild(table_row)
        })
        table.append(table_row);
    }
      
}
 var delete_td = document.createElement("td");
 var delete_button = document.createElement("button");
 delete_button.setAttribute("onclick",`delete(${index,value})`)
 delete_button.innerHTML ="delete";
 delete_td.appendChild("delete_button");
 table_row.appendChild("table_row");
 table.appendChild("table_row");
 index +=1;

//   function delete(id) { 
//     var delete_row = document.getElementById(id);
//   var table = document.getElementsByClassName("table")
//   table.removechild("table_row")
//   }
