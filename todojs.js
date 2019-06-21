//alert("WELCOME");

var ul =document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click",addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click",removeItem);



function addItem(){
	var input = document.getElementById("input");
	var item =input.value;
	var ul1 = document.getElementById("list");
	var textnode = document.createTextNode(item);
	if(item =="")
		alert("Enter your To Do");
	else
	{
		var litem = document.createElement("li");
		var cbox = document.createElement("input");
		cbox.setAttribute("type","checkbox");
		cbox.setAttribute("id","check");
		var label = document.createElement("label");
		//label.appendChild(textnode);
		label.innerHTML = input.value;
		litem.appendChild(cbox);
		litem.appendChild(label);
		ul1.appendChild(litem);
		input.value="";
	}
}

function removeItem()
{
	li = ul.children;//return array of li elements
	//console.log(li);
	for(let index = 0;index<li.length;index++)
	{
		while(li[index]&&li[index].children[0].checked)//simultaneously checking at that index and arrray size is also varying side by side
		{
			ul.removeChild(li[index])
		}	
	}
}
