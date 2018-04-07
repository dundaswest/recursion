// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let output = '';
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return `${obj}`;
  } 

  if(typeof obj === 'string') {
  	return `"${obj}"`;
  }
  if(Array.isArray(obj)) {
  	output = '[';
  	if(obj.length < 1){
  	return "[]";
  	} else {
  		for(let i = 0; i < obj.length;i++) {
  			if(i === obj.length-1) {
  				output+= `${stringifyJSON(obj[i])}`;
  			} else {
  				output+= `${stringifyJSON(obj[i])},`;
  			}
  		}
  		return output + "]";
  	}
  }
  if(typeof obj === 'object') {
  	output = '{';
  	let keyArr = Object.keys(obj);
  	if(keyArr.length === 0) {
  		return '{}';
  	} else {
  		for(let i = 0; i < keyArr.length;i++) {
  			if(keyArr[i] === 'functions' || keyArr[i] === 'undefined') {
  				return '{}';
  			}
  			if(i === keyArr.length-1) {
  				output+= `${stringifyJSON(keyArr[i])}:${stringifyJSON(obj[keyArr[i]])}`;
  			} else {
  			output+= `${stringifyJSON(keyArr[i])}:${stringifyJSON(obj[keyArr[i]])},`;
  			}
  		}
  		return output + '}';
  	}
  }
 };
