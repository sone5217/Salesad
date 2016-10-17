var args = arguments[0] || {}; 

/** google analytics**/ 
if(OS_IOS){
	Alloy.Globals.tracker.trackEvent({
		category: "settings",
		action: "view",
		label: "help",
		value: 1
	}); 
	Alloy.Globals.tracker.trackScreen({
		screenName: "Help"
	});
}else{ 
	Alloy.Globals.tracker.addEvent({
        category: "settings",
		action: "view",
		label: "help",
		value: 1
    }); 
	Alloy.Globals.tracker.addScreenView('Help');
}
/**Set Custom title**/
var custom = $.UI.create("Label", { 
    text: 'HELP', 
    color: '#ED1C24', 
    width: Ti.UI.SIZE 
 });

if(Ti.Platform.osname == "android"){ 
	$.pageTitle.add(custom);    
}else{
	$.help.titleControl = custom;
}    

$.btnBack.addEventListener('click', function(){ 
	COMMON.closeWindow($.help); 
}); 