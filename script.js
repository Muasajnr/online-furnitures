var cart= document.getElementById("cart");
var table = document.querySelector("tr");
var tr = document.querySelector("td");

cart.addEventListener("click", function(){
    console.log("kshdns")
    var td=document.createElement("td");
    td.appendChild(document.createTextNode("chairs","joji","neno","moli","toki","koli"));
    tr.appendChild(td);
})
