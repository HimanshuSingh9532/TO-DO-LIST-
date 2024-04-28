const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function Addtask(){
    if (inputBox.value == '') {
        alert("You Must write something!");
        
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
    }
    inputBox.value ="";
}