/* dom ready */

var whenReady = (function() {
    var ready = false;
    var callbacks = [];

    function handler(e) {
        if (ready) return; //already domeready;

        // not ready yet
        if (e.type == "readystatechange" && e.readyState !== "complete")
            return;

        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].call(document);
        }

        // clear up
        ready = true;
        callbacks = null;
    }

    if (window.addEventListener) {
        document.addEventListener("DOMContentLoaded", handler, false);
        document.addEventListener("readystatechange", handler, false);
        window.addEventListener("load", handler, false);
    } else {
        widnow.attachEvent("onload", handler);
        document.attachEvent("onreadystatechange", handler);
    }

    return function(func){
    	if(ready) 
    		func.call(document);
    	else
    		callbacks.push(func);
    }
}());
