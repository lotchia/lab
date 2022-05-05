var img =document.getElementById("one");



function move()
{
    
    img.style.left="0px";
    img.style.bottom="0px"; 
    
    var newimg = document.createElement("img");
     newimg.src = "dom.jpg";
     document.body.appendChild(newimg);
     newimg.style.position = "fixed"
     newimg.style.left="1200px";


}



