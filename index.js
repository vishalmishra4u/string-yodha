var _ = require('lodash');

module.exports = {
  toCamelCase : toCamelCase,
  isCamelCase : isCamelCase
};

function toCamelCase(sentence){
  if(!sentence){
    throw new Error('string is expected');
  }
  var wordsOfSentence = [];

  if(hasCharacter(sentence, ' ')){
    wordsOfSentence = sentence.toString().split(' ');
  }
  if(hasCharacter(sentence, '_')){
    wordsOfSentence = sentence.toString().split('_');
  }
  if(hasCharacter(sentence, '.')){
    wordsOfSentence = sentence.toString().split('.');
  }

  wordsOfSentence[0] = wordsOfSentence[0].charAt(0).toLowerCase() + wordsOfSentence[0].slice(1);

	for(var i = 1; i < wordsOfSentence.length; i++){
  	wordsOfSentence[i] = wordsOfSentence[i].charAt(0).toUpperCase() + wordsOfSentence[i].slice(1);
  };

	var newCamelCaseString = "";
  wordsOfSentence.map(function(word){
    newCamelCaseString = newCamelCaseString + word;
  });

  return newCamelCaseString;
}

function isCamelCase(sentence){
	if(sentence[0] != sentence[0].toLowerCase()){
  	throw new Error('Not camel case');
  }
  var isCamelCase = 1;
	for(var i = 1; i < sentence.length; i++){
  	if(sentence[i] == " "){
      isCamelCase = 0;
      break;
    }
  	if(sentence[i] == sentence[i].toUpperCase()){
    document.write(sentence[i]);
      if(sentence[i-1] != sentence[i-1].toLowerCase() && sentence[i+1] == sentence[i+1].toLowerCase()){
      	isCamelCase = 0;
      	break;
      }
    }
  }
  if(isCamelCase == 0){
    throw new Error('Not camel case');
  }
  else{
    return ('Camel case');
  }
}

function hasCharacter(string, character){
  return string.indexOf(character) >=0;
}
