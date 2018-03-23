let argv = process.argv;

console.log(argv);

let length = argv.length;

let whatArg = 1;

let current = 2;

var allTogether = 0;
var gemmidelde = 0;



  while (length > current)
  {
    console.log(whatArg + " : " + argv[current]);
    allTogether = allTogether + parseInt(argv[current]);
    gemmidelde = allTogether / whatArg;
    current = current + 1;
    whatArg = whatArg + 1;
  }

console.log("Het gemmidelde is : " + gemmidelde);
