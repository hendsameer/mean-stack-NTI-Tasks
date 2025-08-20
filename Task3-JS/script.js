
//  Task 1: Array Manipulation
//1
const numbers = [10, -5, 25, -15, 30, 4, -8, 12, 1, -2];

let positiveSum = 0;
let totalSum = 0;

//2 & 3
for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  
  totalSum += currentNumber;

  
  if (currentNumber < 0) {
    continue;
  }

  
  positiveSum += currentNumber;
}

//4 
console.log('--- Task 1 Results ---');
console.log('Sum of all positive numbers:', positiveSum);
console.log('Total sum of all numbers:', totalSum);

// 5
numbers.push(99); 
const firstElement = numbers.shift(); 

console.log('Array after modification:', numbers);


//   Task 2: Object Manipulation
 

// 1
const student = {
  name: 'Ali Youssef',
  age: 23,
  grade: 'C',
  isGraduated: false
};

console.log('--- Task 2 Results ---');

// 2
console.log(`Student Name: ${student.name}, Age: ${student.age}`);

// 3
student.grade = 'A';

// 4
console.log('Object Keys:', Object.keys(student));
console.log('Object Values:', Object.values(student));

// 5
student.email = 'ali.youssef@example.com';

// 6
delete student.isGraduated;

// 7
console.log('Updated Student Object:', student);




//   Task 3: Complex Array and Object Manipulation
 

// 1
const students = [
  { name: 'Khaled', age: 25, grade: 'B', isGraduated: true },
  { name: 'Nour', age: 22, grade: 'A', isGraduated: false },
  { name: 'Mahmoud', age: 24, grade: 'C', isGraduated: true },
  { name: 'Fatima', age: 23, grade: 'B', isGraduated: false },
];

let totalAge = 0;
let graduatedCount = 0;
let nonGraduatedCount = 0;

// 2
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  totalAge += student.age;
  if (student.isGraduated) {
    graduatedCount++;
  } else {
    nonGraduatedCount++;
  }
}

const averageAge = totalAge / students.length;

console.log('--- Task 3 Results ---');
console.log(`Average age of students: ${averageAge.toFixed(2)}`);
console.log(`Number of graduated students: ${graduatedCount}`);
console.log(`Number of non-graduated students: ${nonGraduatedCount}`);

// 3
console.log('Student details (keys and values):');
for (const student of students) {
  console.log(`  - ${student.name}`);
  console.log('    Keys:', Object.keys(student));
  console.log('    Values:', Object.values(student));
}

// 4
const newStudent = { name: 'Layla', age: 21, grade: 'A', isGraduated: false };
students.push(newStudent);

// 5
for (const student of students) {
  student.email = `${student.name.toLowerCase()}@example.com`;
}

// 6
for (const student of students) {
  delete student.isGraduated;
}

// 7
console.log('All student names:', students.map(s => s.name));
console.log('All student ages:', students.map(s => s.age));
console.log('Final array of students:', students);
