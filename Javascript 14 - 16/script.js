// Declare an empty array using JS literal notation to store
// student names in future.

let students = [];
students.push("Rida");
students.push("Amna");
students.push("Ayesha");

console.log(students);


// Declare an empty array using JS object notation to store
// student names in future.

let studentsObj = new Array();
studentsObj.push("Malik");
studentsObj.push("Khan");
studentsObj.push("Rajpoot");

console.log(studentsObj);

// Declare and initialize a strings array.

let strings = ["apple", "banana", "cherry"];

console.log(strings);

// Declare and initialize a numbers array.

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Declare and initialize a booleans array.

let booleans = [true, false, true, false];

console.log(booleans);

// Declare and initialize a mixed arrays.

let mixed = ["apple", 1, true, "banana", 2, false];

console.log(mixed);

// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil.",
  "PhD",
];

console.log("Available Education Qualifications in Pakistan: ", qualifications);

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let studentNames = ["Rida", "Amna", "Ayesha"];
let studentScores = [475, 380, 490];

for (let i = 0; i < studentNames.length; i++) {
  let percentage = (studentScores[i] / 500) * 100;
  console.log(
    `${studentNames[i]}: ${
      studentScores[i]
    } / 500, Percentage: ${percentage.toFixed(2)}%`
  );
}

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

let colors = ["red", "blue", "green", "yellow"];

console.log("Initial Array: ", colors);

let userColor = prompt("Enter a color to add at the beginning:");

colors.unshift(userColor);

console.log("Updated Array: ", colors);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

let userColorEnd = prompt("Enter a color to add at the end:");

colors.push(userColorEnd);

console.log("Updated Array: ", colors);

// Add two more color to the beginning of the array.
// Display the updated array in your browser.

colors.unshift("purple", "pink");

console.log("Updated Array: ", colors);

// Delete the first color in the array. Display the updated
// array in your browser.

colors.shift();

console.log("Updated Array: ", colors);

// Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

let userIndex = parseInt(prompt("Enter an index to add a color:"));
let userColorAdd = prompt("Enter a color to add:");

colors.splice(userIndex, 0, userColorAdd);

console.log("Updated Array: ", colors);

// Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let userIndexDelete = parseInt(prompt("Enter an index to delete a color:"));
let userColorDelete = parseInt(prompt("Enter the number of colors to delete:"));

colors.splice(userIndexDelete, userColorDelete);

console.log("Updated Array: ", colors);

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let studentScoresSort = [475, 380, 490, 420, 450];

studentScoresSort.sort((a, b) => a - b);

console.log("Sorted Array: ", studentScoresSort);

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

let selectedCities = cities.slice(0, 3);

console.log("Selected Cities: ", selectedCities);

// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let arr = ["This", "is", "my", "cat"];

let singleString = arr.join(" ");

console.log("Single String: ", singleString);

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let queue = [];

queue.push("Apple");
queue.push("Banana");
queue.push("Cherry");

console.log("Queue: ", queue);

let firstItem = queue.shift();

console.log("First Item: ", firstItem);

console.log("Updated Queue: ", queue);

// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)

let stack = [];

stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");

console.log("Stack: ", stack);

let lastItem = stack.pop();

console.log("Last Item: ", lastItem);

console.log("Updated Stack: ", stack);

// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

let select = document.createElement("select");

for (let i = 0; i < manufacturers.length; i++) {
  let option = document.createElement("option");
  option.text = manufacturers[i];
  select.add(option);
}

document.write(select);
