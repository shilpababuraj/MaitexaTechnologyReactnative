var item = document.getElementById("imageItem")

//using query selector(#id_name)
var divEle= document.querySelector("#customText");

//for hide element
function hide (){
    item.setAttribute("hidden","true");
}

//to show the hide element
function reset(){
    item.removeAttribute("hidden","true");
}
 
// change the content of the div

function change (){

    divEle.innerHTML="<p>your item is missing</p>";
}

//mouseover
function changeImage(){
    item.removeAttribute("src","./image/s1.jpg")
    item.setAttribute("src","./image/s2.jpg")
}

//mouseout
function resetImage(){
    item.removeAttribute("src","./image/s2.jpg")
    item.setAttribute("src","./image/s1.jpg")
}