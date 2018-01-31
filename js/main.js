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

var yodaImage = document.getElementById("theYoda");

document.getElementById("change-color").addEventListener("click", () =>{
    yodaImage.classList.toggle("flashy"); 
});

    //above is an example of an anonymous function that can't be accessed outside of where it appears above
    //otherwise this might be
    //document.getElementbyID("change-color").addEventListener("click", toggle);
    //function toggle(event){
    //     yodaImage.classList.toggle("flashy");
    // }

    document.getElementById("force-lots-of")
    .addEventListener("click", function() {
    yodaImage.classList.toggle("moreforce");
  });
  
  document.getElementById("add-border")
    .addEventListener("click", function() {
    yodaImage.classList.toggle("bordered");
  });

document.getElementById("starWars").addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "li"){
      console.log("You clicked on an <li>.");
    }

      if(event.target.className == "list-item"){
        console.log("You clicked on the list-item element.");
      }
  });
//CAN'T GET LINE 57 to behave

  var quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
    ];

quotesArray.forEach( (quote, index) => {
    let quoteBlock = `<div id="quote--${index}">
                    <h3>"${quote}" - Star Wars</h3>
                    </div>`
    let quoteDiv = document.createElement("div");
    quoteDiv.innerHTML = quoteBlock;

    document.getElementById("stickHere").appendChild(quoteDiv);

    let quoteDom = document.getElementById(`quote--${index}`);
    quoteDom.addEventListener("click", () => {
        event.currentTarget.classList.add("accent");
        // event.currentTarget.classList.toggle("accent");
    });
});