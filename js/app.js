'use strict';



alert('Learn more about me by answering these five yes or no questions!');
var born = prompt('Was I born on the west coast of the US?').toLowerCase();
if (born === 'no') {
  alert('Yes that\'s correct! Dan was born in New York');
}
else {
  alert('Sorry I guess you don\'t really know Dan :/');
}
console.log('Q: Was I born on the west coast of the US? A: No');

var school = prompt('Did I major in economics in college?').toLowerCase();
if (school === 'no') {
  alert('Yes that\'s correct! Dan majored in finance');
}
else {
  alert('Sorry I guess you need to go back to school');
}
console.log('Q: Did I major in economics in college? A: No');

var language = prompt('Did I study Mandarin Chinese in school?').toLowerCase();
if (language === 'yes') {
  alert('Yes that\'s correct! Dan studied Mandarin Chinese for a couple years');
}
else {
  alert('Wrong! You thought he studied Spanish didn\'t you?');
}
console.log('Q: Did I study Mandarin Chinese in school A: Yes');

var travel = prompt('Have I traveled to South Africa?').toLowerCase();
if (travel === 'no') {
  alert('Yes that\'s correct! Unfortunately he hasn\'t had the opportunity to travel there yet');
}
else {
  alert('That\'s not the answer we were looking for');
}
console.log('Q: Have I traveled to South Africa A: No');

var food = prompt('Is pizza my favorite food?').toLowerCase();
if (food === 'yes') {
  alert('Yes that\'s correct! Pizza = yum');
}
else {
  alert('Sorry... contrary to popular belief it\'s not broccoli');
}
console.log('Q: Is pizza my favroite food A: Yes');



var europe = parseInt(prompt('How many countries in Europe have I been to? You have 4 guesses!'));
var europeCorrectAnswer = 5;
for (var i = 0; i < 4; i++) {
  if(europe === europeCorrectAnswer) {
    alert('Yes that is correct!');
    break;
  } else if (europe > europeCorrectAnswer) {
    alert ('Unfortunately I havn\'t traveled that much yet!');
    europe = prompt('How many countries have I been to in Europe?');
  } else if (europe < europeCorrectAnswer) {
    alert ('I\'ve traveled more than that! ');
    europe = prompt ('How many countries have I been to in Europe?');
  }
}

var sportsGuess = (prompt('Name a sport I played in high school. I will give you six guesses!').toLowerCase());
var sports = ['soccer','tennis','running'];
for (var x = 0; x < 5; x++) {
  if (sportsGuess === ('tennis')) {
    alert('Yes that is correct!');
    alert('I played soccer, tennis & ran cross country!');
    break; }
  if (sportsGuess === ('soccer')) {
    alert('Yet that is correct!');
    alert('I played soccer, tennis & ran cross country!');
    break; }
  if (sportsGuess === ('running')) {
    alert('Yet that is correct!');
    alert('I played soccer, tennis & ran cross country!');
    break;
  } else if (sportsGuess !== sports) {
    alert ('That is not correct!');
    sportsGuess = prompt ('Name a sport I played in high school');
    if (x === 4) {
      alert('Sorry you didn\'t guess any :/ I played soccer, tennis & ran cross country!');
    }
  }
}


