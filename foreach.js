let a = ["ant", "bat", "cat", 42];

a.forEach(function(element) {
  console.log(element);
});

let s = "To be, or not to be, that is the question:";
Array.from(s).forEach(function(element) {
  console.log(element)
});

a.forEach((element) => {
  console.log(element);
  });
