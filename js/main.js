let header = document.getElementById("page-header");
let sayWhat = document.getElementById("output");

console.log("header", header);

// function handleHeaderMouseEvent(event){
//     console.log("event", event);
// }
function handleHeaderMouseEvent(event){
    // console.log("event", event.target, event.currentTarget);
    sayWhat.innerHTML = "The Force is strong with this one.";
}

function handleHeaderMouseOut(event){
    sayWhat.innerHTML = "Remember...the Force will be with you always."
}

let listItems = document.getElementsByClassName("list-item");
// console.log("list items", listItems);

for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
    //must use the .item(i) method because listItems is NOT an array. It is an HTML collection
}

function handleClick(MouseEvent){
    let elementText = MouseEvent.target.innerHTML    
    sayWhat.innerHTML = "hmmmm. " + elementText + " Clicked you have.";
}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);