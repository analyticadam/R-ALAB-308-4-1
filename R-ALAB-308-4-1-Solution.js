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
console.log(arraydata);