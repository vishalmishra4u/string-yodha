var _ = require('lodash');

module.exports = {
  toCamelCase : toCamelCase
};

function toCamelCase(sentence){
  if(!sentence){
    throw new Error('string is expected');
  }
  var wordsOfSentence = [];

  wordsOfSentence = sentence.toString().split(' ');

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
