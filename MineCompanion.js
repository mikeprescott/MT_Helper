//Open a new window (The Helper window)
var MT_Helper = window.open(document.URL, "MT_HelperWindow", "width=300, height=600" ); 

// 3 seconds from now, the helper window should be open.
// Initialize it, by clearing out the head and body and 
// add script 2.
MT_Helper_init();
	
function MT_Helper_init(){	
	setTimeout(function(){		
		if(MT_Helper == undefined){
			console.log("Waiting on Helper to open.");
			MT_Helper_init();
		}else{
			console.log("Helper Opened.");
			//Clear 
			MT_Helper.document.body.innerHTML = "";
			MT_Helper.document.head.innerHTML = "<title>Helper</title>";
			
			var js = MT_Helper.document.createElement("script");
			js.type = "text/javascript";
			js.src = "https://raw.githubusercontent.com/mikeprescott/MT_Helper/master/MineCompanionsScript.js";
			MT_Helper.document.head.appendChild(js);
		}
	},500);void(0);
}
	
