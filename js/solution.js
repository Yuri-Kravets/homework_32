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
 
// generateList(array);

// function generateList(array) {
//     let s = "<ul>";
//     const count = array.length;
//     for (let i = 0; i < count; ++i) {
//         let row = array[i];
//         if (Array.isArray(row)) {
//             s += "<li><ul>";
//             for (let j = 0; j < row.length; ++j) {
//                 s += `<li>${row[j]}</li>`;
//             }
//             s += "</ul></li>";
//         }
//         else
//             s += `<li>${row}</li>`;
//     }
//     s += "</ul>";
//     document.body.innerHTML = s;
// }


})();
