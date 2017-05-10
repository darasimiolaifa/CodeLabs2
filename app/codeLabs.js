'use strict';

module.exports = {
	
	words : (str) => {
		str = str.replace(/\n|\t/, ' ');
		
		let split = str.split(' ');

		let  frequencies = {};

		for(let counter = 0; counter < split.length; counter++) {
		    let word = split[counter];
		    if (Object.prototype.hasOwnProperty(word))
		    {
		    	frequencies[word] = 1;
		    }
		    else if(word !== '') {
		      frequencies[word] = (frequencies[word] || 0) + 1; 
		    }
		}

		return frequencies;
	}
}