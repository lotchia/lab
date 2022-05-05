var win=window.open("","", "width=400,height=600")
var str="welcome to java script"
var i =0;

var inn=setInterval(function(){
			win.document.write(str[i]);
			i++;
			if(i<str.length-1)
			i++;
			else
			clearInterval(inn)

		},1000)
		
	
