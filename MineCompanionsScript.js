console.log("New Window Log.");
opener.console.log("Opener Window Log.");

//Hey ok! So first thing we want to get is make sure
//we are keeping an eye on the opener.
//To do that, we need to set up an OnUnload function, ASAP.
function OpenerUnload(){
	opener.onunload = function(){
		console.log("loading")
	}; 
	document.body.innerHTML = "Newer Page" + i; 
	i++;
	setTimeout(function(){
		opener.onunload = OpenerUnload;
	},3000);
}	

