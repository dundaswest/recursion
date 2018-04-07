// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//You should use document.body, element.childNodes, and element.classList
/*var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];*/

var getElementsByClassName = function(className
) {
	var output = [];
	function getClassName(target) {
 		if(target.classList && target.classList.contains(className)) {
 			output.push(target);
 		} 
 		if(target.hasChildNodes()) {
 			for(var i = 0; i < target.childNodes.length;i++) {
 				getClassName(target.childNodes[i]);
 			}
 		}			
 	};
 	
 	getClassName(document.body);
 	return output;

};	
 	

