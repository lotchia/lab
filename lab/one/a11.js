
var win ;
var downInterval;
function openNewWin() {
  win = open("", "", "width=100, height=100,top=200");
 movedown();

}

function movedown() {
    console.log("welcome")
    var i=10;
     downInterval = setInterval(function ()
     {
 
       win.moveBy(i, i);
       i+=200;
    }, 1000)
}    


  function stop(){
     clearInterval(downInterval);
  }
