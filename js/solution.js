'use strict';


(function() {

    
//task 1.1
const ul = document.querySelector('ul');
let arr = Array();

for (let attr of ul.attributes) { 
    arr.push(attr.nodeValue)
    //console.log(Array(`${attr.value}`));
}

console.log(arr);

// task 1.2

const ulData = ul.getAttributeNames();
const arrayOfAttr = Array(ulData);


console.log(arrayOfAttr);
console.log(ulData);

// Task 1.3; 1.4; 1.5;

let childNodes = ul.childNodes;

console.log(ul.lastElementChild.innerHTML = 'Привет, меня зовут Юра');
ul.firstElementChild.setAttribute('data-my-name','Yura');
ul.removeAttribute('data-dog-tail');







// Task 2
// let array = [1, 2, [1.1, 1.2, 1.3], 3];
 


// function generateList(array) {
//     let s = '<ul>';
//     const count = array.length;

//     for (let i = 0; i < count; ++i) {
//         let row = array[i];
//         if (Array.isArray(row)) {
//             s += '<li><ul>';
//             for (let j = 0; j < row.length; ++j) {
//                 s += `<li>${row[j]}</li>`;
//             }
//             s += '</ul></li>';
//         }
//         else
//             s += `<li>${row}</li>`;
//     }
//     s += "</ul>";
//     document.body.innerHTML = s;
// }

// generateList(array);

// task 3
const table = document.getElementById('table');

function generateTab(row,col) {
    const num = 0;

    for (let i = 0;i < row;i++) {
        const tr = document.createElement('tr');

        for (let c = 1;c <= col;c++) {
            const td = document.createElement('td');
            td.innerHTML = i * 10 + c;
            tr.append(td);

        }
        table.append(tr);
    }
}
generateTab(10,10);



})();
