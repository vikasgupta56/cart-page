let addbtn = document.getElementsByClassName('addbtn');
// console.log(addbtn);
for (i = 0; i < addbtn.length; i++) {
    addbtn[i].addEventListener("click",upfunc)
};
function upfunc(e){
    // alert("item has been added to the cart");
        let addToCartBtn = e.target;
        productContainer = addToCartBtn.parentElement;
        productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
        productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
        let productQuan = productContainer.getElementsByClassName('quan')[0];
        let productimgElm = productContainer.parentElement
        productimg = productimgElm.getElementsByClassName('prodimg')[0].src;
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObj = []
    }
     else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
title: productTitle,
price: productPrice,
imgsrc: productimg,
quan: productQuan.value
    }
    console.log(myObj.title);
    notesObj.push(myObj);
    
    localStorage.setItem("notes",JSON.stringify(notesObj));
       
};
let firstbut = document.getElementById('firstbut');
firstbut.addEventListener("click",(e)=>{
    let addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement.parentElement;
    let productQuan = productContainer.getElementsByClassName('quan')[0];
    let img = productContainer.getElementsByClassName('prodimg')[1];
    if(productQuan.value !=0){
    img.setAttribute('id','first');
    setTimeout(() => {
        img.removeAttribute('id','first')
     }, 3000);}
     else{
         alert("Quantity cannot be zero")
     }
   
});
let secondbut = document.getElementById('secondbut');
secondbut.addEventListener("click",(e)=>{
    let addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement.parentElement;
    let productQuan = productContainer.getElementsByClassName('quan')[0];
    let img = productContainer.getElementsByClassName('prodimg')[1];
    if(productQuan.value !=0){
    img.setAttribute('id','second');
    setTimeout(() => {
        img.removeAttribute('id','second')
     }, 3000);}
     else{
        alert("Quantity cannot be zero")
    }
   
});
let thirdbut = document.getElementById('thirdbut');
thirdbut.addEventListener("click",(e)=>{
    let addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement.parentElement;
    let productQuan = productContainer.getElementsByClassName('quan')[0];
    let img = productContainer.getElementsByClassName('prodimg')[1];
    if(productQuan.value !=0){
    img.setAttribute('id','third');
    setTimeout(() => {
        img.removeAttribute('id','third')
     }, 3000);}
     else{
        alert("Quantity cannot be zero")
    }
   
});
let fourthbut = document.getElementById('fourthbut');
fourthbut.addEventListener("click",(e)=>{
    let addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement.parentElement;
    let productQuan = productContainer.getElementsByClassName('quan')[0];
    let img = productContainer.getElementsByClassName('prodimg')[1];
    if(productQuan.value !=0){
    img.setAttribute('id','fourth');
    setTimeout(() => {
        img.removeAttribute('id','fourth')
     }, 3000);}
     else{
         alert("Quantity cannot be zero")
     }
   
});
