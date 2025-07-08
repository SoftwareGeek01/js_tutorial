greeting = "Hello world!"  + "how's iit going";
console.log("Hello world!", "how's it going");

String.prototype.blank = function() {
  return !!this.match(/^\s*$/)
}

Array.prototype.last = function () {
  if (this.length === 0) {
    return undefined;
  }
  return this[this.length-1];
}
