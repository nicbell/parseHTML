(function (global) {
    'use strict';

	var parseHTML = function (element) {
		//Element is already parsed.
		if (element.querySelector) {
			return element;
		}
	
		//Element is a string and should be parsed
		if (typeof element === 'string') {
			var el = document.createElement('div');
			el.innerHTML = element;

			var elements = el.children;
		
			//Only one root element, return it
			if (elements.length === 1) {
				return elements[0];
			}
		
			//Otherwise create a fragment, return it
			var frag = document.createDocumentFragment();

			while (elements.length > 0) {
				frag.appendChild(elements[0])
			}

			return frag;
		}

		return null;
	}

	
	if (typeof define === 'function' && define.amd) {
		// AMD support
		define(function () { return parseHTML; });
	}
	else if (typeof exports === 'object') {
		// Support Node.js specific 'module.exports'
		module.exports = parseHTML;
	}
	else {
		// Browser global (window)
		global.parseHTML = parseHTML;
	}

})(this);