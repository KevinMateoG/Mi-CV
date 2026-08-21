// Punto 3
console.log("Punto 3\n");

const arrayNumbers: number[] = [20, 30, 66, 10, 12, 80];

let result: number = 0;

for (let index = 0; index < arrayNumbers.length; index++) {
  result += arrayNumbers[index];
}

console.log("El resultado de la suma es " + result);

// Punto 4
console.log("Punto 4\n");

let ramdonArray: number[] = [];
let result2: number = 0;

for (let index = 0; index <= 1500; index++) {
  ramdonArray.push(Math.floor(Math.random() * 100) + 1);
  result2 += ramdonArray[index];
}

console.log("El valor de la suma de los numeros random es " + result2);

// Punto 5
console.log("Punto 5\n");

const promedio: number = result / arrayNumbers.length;

console.log("El promedio del punto 3 es " + promedio);

// Punto 6
console.log("Punto 6\n");

for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers[index] > 50) {
    console.log(arrayNumbers[index]);
  }
}

// Punto 7

console.log("Punto 7\n");

const persona = {
  name: "Pedrito fernades",
  age: 22,
  city: "Cali",
};

for (const index in persona) {
  console.log(persona[index]);
}

// Punto 8
console.log("Punto 8\n");

interface Product {
  name: string;
  price: number;
  units?: number;
}

const products: Product[] = [
  { name: "Laptop", price: 2_500_000 },
  { name: "Mouse", price: 15_000 },
  { name: "Keyboard", price: 500_000 },
  { name: "Monitor", price: 1_000_000 },
];

products.forEach((product) => {
  console.log(`el producto es ${product.name} y su precio es ${product.price}`);
});

// Punto 9
console.log("Punto 9\n");

const productMostExpensive = products.reduce((max, producto) =>
  producto.price > max.price ? producto : max,
);

console.log(
  `el producto mas cara es ${productMostExpensive.name} y el precio es ${productMostExpensive.price}`,
);

// Punto 10
console.log("Punto 10\n");

const productosConCantidad: Product[] = [
  { name: "Laptop", price: 2_500_000, units: 10 },
  { name: "Mouse", price: 15_000, units: 5 },
  { name: "Keyboard", price: 500_000, units: 2 },
  { name: "Monitor", price: 1_000_000, units: 15 },
];

const valorTotalInvetario = productosConCantidad.reduce(
  (acumulado, product) => {
    return acumulado + product.price * product.units;
  },
  0,
);

console.log(`El valor total del inventario es de ${valorTotalInvetario}`);

// Punto 11
console.log("Punto 11\n");

interface schoolSubject {
  name: string;
  note: number;
}

interface Student {
  name: string;
  semester: number;
  subjects: schoolSubject[];
}

const students: Student[] = [
  {
    name: "Pedrito",
    semester: 6,
    subjects: [
      { name: "Calculo integral", note: 4.2 },
      { name: "Física", note: 3.8 },
      { name: "Programación", note: 4.5 },
    ],
  },
  {
    name: "Maria",
    semester: 4,
    subjects: [
      { name: "Álgebra", note: 3.0 },
      { name: "Química", note: 3.2 },
    ],
  },
  {
    name: "Juan",
    semester: 2,
    subjects: [
      { name: "Historia", note: 2.8 },
      { name: "Inglés", note: 3.4 },
    ],
  },
];

const averageStudents: number[] = [];
let sumTotal: number = 0;

for (let index = 0; index < students.length; index++) {
  const student: Student = students[index];
  let sumNotes: number = 0;
  for (let i = 0; i < student.subjects.length; i++) {
    sumNotes += student.subjects[i].note;
  }
  const averageIndividual = sumNotes / student.subjects.length;
  averageStudents.push(averageIndividual);
  sumTotal += averageIndividual;

  console.log(
    `El estudiante ${student.name} y su promedio es ${averageIndividual}`,
  );
}

const averageTotal = sumTotal / students.length;
console.log(`El primedio general de todos los estudiantes es ${averageTotal}`);
// Punto 12
console.log("Punto 12\n");

for (let index = 0; index < students.length; index++) {
  if (averageStudents[index] > 3.5) {
    console.log(
      `el estudiante ${students[index].name} tiene un promedio mayor de 3.5`,
    );
  }
}
