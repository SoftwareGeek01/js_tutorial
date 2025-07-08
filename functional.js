let states  = [ "Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-")
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}

function functionalUrls(elements) {
  return elements.map(element => 
    urlify(element));
}

function urls(strings) {
  return strings.map(string => `https://example.com/${urlify(string)}`)
}

// singles : Imperative version
function imperativeSingles(elements) {
  singles = [];
  elements.forEach(function(element) { 
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

// singles : Functional version
function functionalSingles(elements) {
  return elements.filter(element =>  element.split(/\s+/).length === 1);
}

function dakotas1(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(dakotas1(states));

function dakotas2(elements) {
  return elements.filter(element => element.split(/\s+/).length == 2)
}
console.log(dakotas2(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers))

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths(states))

function functionalMult(numbers) {
  return numbers.reduce((product, element) => {
    return product *= element;
  }, 1);
}
console.log(functionalMult([1]));
console.log(functionalMult([1,2,3,4,5]));
console.log(functionalMult(numbers));
