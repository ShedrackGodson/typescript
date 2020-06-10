// Arrows functions
let log = function (message) {
  console.log(message);
}

// log("Hello t/his my first tutorial about TypeScript i.e A Javascript subset");

// console.log("There is much simpler way to dclare functions in TypeScript");

let doLog = (name, message) => console.log("My name is "+name," and this is my message"+message+"\n");

// doLog("Shedrack Godson Lucas",": This is an arrow function");

// Inline Annotartions

let drawPoint = (point: { name: string, year: number }) => {
  // code...
}

drawPoint({
  name: "Benz",
  year: 2002
})


// Concepts of Interfaces
/* When using Interfaces always use Naming Convertions i.e
  Starts with the capital letter.
*/
interface Point{
  name: String,
  year: Number
}

let drawingPoint = (point: Point) => {
  // Code...
}

