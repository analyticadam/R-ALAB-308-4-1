//R-ALAB-308-4-1



console.log("================================================");

let datainfo = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rowdata = datainfo.split('\n');
console.log(rowdata);  //Prints data in nice format to start

const headersdata = rowdata[0].split(','); // Creates the headers and/or object keys

// The array
const arraydata = [];

let rowdataIndex = 1;

//================================Part 3: Transforming Data =====================================
let x = 0;
while (x < headersdata.length) {
    headersdata[x] = headersdata[x].toLowerCase(); // Changing headers to lower case
    x++;
}

//Row Split
while (rowdataIndex < rowdata.length) {
    const currentRow = rowdata[rowdataIndex].split(','); // Splits the row according to the index position
    const obj = {}; // Creates an object for my row
    let headercountindex = 0; //Counter used to assign correct information to each header

    while (headercountindex < headersdata.length) {
        obj[headersdata[headercountindex]] = currentRow[headercountindex]; // Adds each item to the appropriate header (key) for a row
        headercountindex++; 

    }
    arraydata.push(obj); // Adds the object to the arraydata array
    rowdataIndex++;
}
//console.log(arraydata);

//================================Part 4: Sorting and Manipulating Data =====================================

const removeEnd = arraydata.pop();
console.log(arraydata);

const insertIndex = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
arraydata.splice(1, 0, insertIndex); //Remove the last element from the sorted array and insert the following object at index 1

const insertLast = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
arraydata.push(insertLast) //Add the following object to the end of the array
console.log(arraydata); //Prints out the array data to verify above statements worked correctly and they did :)

let totalAges = 0;
let ageCounter = 0;
for (let i = 0; i < arraydata.length; i++) {
    totalAges += Number(arraydata[i].age); // Converts the string into a number and adds the value to totalAges
    ageCounter++;
}
console.log(totalAges);
console.log(totalAges/ageCounter);
//This is the average age
let avg = totalAges/ageCounter;
//I decided to round up as that what you normally do in math when a number is above 5, I prefer whole numbers instead of decimals
console.log(Math.floor(avg));
