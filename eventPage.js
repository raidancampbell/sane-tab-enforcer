chrome.tabs.onCreated.addListener( function (tab) {
	//on every new tab
	 chrome.windows.getCurrent({populate: true}, function(window){
	 	//grab the current window
	 	var tabIDs = chrome.tabs.query({currentWindow: true}, function(tabs) {
	 		//from the current window, grab all the tabs
	 		if (tabs.length < 13) return;
	 		var tabIDs = [];
	 		for(var i = 0; i< tabs.length; i++) {
	 			tabIDs[i] = tabs[i].id;
	 		}
	 		chrome.tabs.remove(tabIDs);
	 	});
	 });
});