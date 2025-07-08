(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("swg01-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`)
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}

alert(new Phrase("Madam, I'm Adam.").palindrome());

},{"swg01-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds revers to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}


function emailParts(email) {
  return email.toLowerCase().split("@")
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Processes a sting for palindrome checking
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }  

  this.louder = function louder() {
    return this.content.toUpperCase();
  }

  this.letters = function() {
    let theLetters = [];
    const letterRE = /[a-z]/i;
    return (this.content.match(/[a-z]/ig) || []).join("")
  }
}


},{}]},{},[1]);
