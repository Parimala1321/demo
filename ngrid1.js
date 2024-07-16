
var n = parseInt(window.prompt("Enter The Number"));


var y = document.getElementsByClassName("mytable")[0];
 var icon =`<i class="fa-brands fa-google"></i>`;

for(var i=0;i<n;i++)
{
    var row=document.createElement("tr");
    for(var j=0;j<n;j++)
    {
        var cell =document.createElement("td");
        cell.id=`${i}${j}`;
        if(i==0 && j==0)
        {
            cell.innerHTML=icon; 
                
        }
        row.appendChild(cell);
    }
    y.appendChild(row);
}

var cr=0;
var cc=0;
  function move(direction){
    
  }
