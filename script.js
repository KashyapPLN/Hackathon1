var url="https://api.openbrewerydb.org/breweries"

async function brewery(){
    var res1 = await (await fetch(url)).json();
   
    console.log(res1.length);
    function display(){

    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","txtsearch");
    input.setAttribute("placeholder","Enter Brewery Name");
    input.setAttribute("onkeyup","searchFilter()");
    document.body.append(input);
    var table= document.createElement("table");
    table.setAttribute("id","brewerydetails");
    var tabhead1= document.createElement("thead");
    tabhead1.setAttribute("id","name");
    tabhead1.innerHTML=`<tr><th>Brewery Name</th><th>Type</th><th>Address</th><th>Website</th><th>Phone Number</th></tr>`;

    table.append(tabhead1);
    var tbody= document.createElement("tbody");
    tbody.setAttribute("id","body");
try{
    if (res1.length > 0){
        var temp = "";
        for(var itemData=0;itemData<res1.length;itemData++){
          temp += "<tr>";
          temp += "<td>" + res1[itemData].name + "</td>";
          temp += "<td>" + res1[itemData].brewery_type + "</td>";
          temp += "<td>" +"Street: " + res1[itemData].street +" , City: "+ res1[itemData].city +" , State: "+ res1[itemData].state +"<br>"+"Country: "+ res1[itemData].country + " , PostalCode: "+ res1[itemData].postal_code +"</td>";
          temp += "<td>" + res1[itemData].website_url + "</td>";
          temp += "<td>" + res1[itemData].phone + "</td>";
        };
        console.log(temp);
        tbody.innerHTML = temp;
    }
    table.append(tbody);
    document.body.append(table);
}catch(error){
    console.log(error);
}
    }
   
   return display();
  
}

brewery();
function searchFilter() {
    // alert("hi");
    var input1, filter, table1, tr, td, i, txtValue;
    try{
    input1 = document.getElementById("txtsearch");
    filter = input1.value.toUpperCase();
    table1 = document.getElementById("brewerydetails");
    tr = table1.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
} catch(error){
   console.log(error);
  }
}
