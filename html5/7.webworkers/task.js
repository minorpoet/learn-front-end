postMessage("I\'m woking before postMessage('ali')");

onmessage = function(evt){
	postMessage("Hi " + evt.data);
};