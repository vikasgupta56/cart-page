let notes = localStorage.getItem("notes");
 let flex = document.getElementById('flex');
 if(notes == null){
  notesObj = []
}
else{
notesObj = JSON.parse(notes);
};


let html = "";

   notesObj.forEach(function(element, index) {
       html = html + `<div class="cartcontainer">
                     <div class="flexrow">
                     <img src="${element.imgsrc}" class="cartimg">
                     <div class="flex"><div class="cartfruitname" >${element.title}</div>
                     <div class="cartfruitmrp">${element.price}}</div>
                     <div class="cartfruitno">Quantity : ${element.quan} dozens</div>
                     <div ><button class="deleteitembutton" id="${index}" onclick = "deleteelm(this.id)">Delete</button></div></div>
                </div>
             </div>`
   });
   if (notesObj.length != 0) {
    flex.innerHTML = html;
  } 
  else{
    flex.innerHTML = "Cart is empty.";
  }
 
  hw.innertext = a;
 
  function deleteelm(index){
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    notesObj.splice(index, 1);

   localStorage.setItem('notes',JSON.stringify(notesObj));
   
   let html = "";
   notesObj.forEach(function(element, index) {
     a = element.price
       html = html + `<div class="cartcontainer">
       <div class="flexrow">
       <img src="${element.imgsrc}" class="cartimg">
       <div class="flex"><div class="cartfruitname" >${element.title}</div>
       <div class="cartfruitmrp">${element.price}</div>
       <div class="cartfruitno">${element.quan} dozen</div>
       <div ><button class="deleteitembutton" id="${index}" onclick = "deleteelm(this.id)">Delete</button></div></div>
  </div>
</div>`;
   });
   html = html + ``
   if (notesObj.length != 0) {
    flex.innerHTML = html;
  } 
  else{
    flex.innerHTML = `Cart is empty.`;
  }}
   