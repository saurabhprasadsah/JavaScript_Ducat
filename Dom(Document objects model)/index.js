//dom(document objects model)
// window(browser objects model)
// console.log(document);


// (document)

// [html]

// [head]               [body]

// [meta] [title]       [h1] [h2]

//Selectors
//class Selectors
//Tag/ elements

//Query selectors
//Query Selectors for all



// selectors
// id
// let heading = document.getElementById('heading')

// get data 
// console.log(heading.innerText);
// console.log(heading.innerHTML);

// get set
// heading.innerText = "Hello from DOM <button>Click Me!</button>";
// heading.innerHTML = 
// "Hello from DOM INNERHTML <button>Click Me!</button";

// inline styling
// heading.style.color = "white"
// heading.style.backgroundColor = "red"

// add class
// heading.className = "red"

// id
// heading.id = "testing"

// remove 
// heading.remove()

// class
// let headings = document.getElementsByClassName('heading');

// headings[0].className = "heading red";

// for (const el of headings) {
//     console.log(el);
//     el.className = "heading black"
// }


// tag/element
// let headings = document.getElementsByTagName('h1');

// console.log(headings);

// // headings[0].className = "heading red";
// // headings[1].className = "heading red";

// for (const el of headings) {
//     console.log(el);
//     el.className = "heading black"
// }


// querySelector
// let heading = document.querySelector('#heading'); // id
// let heading = document.querySelector('.heading'); // class
// let heading = document.querySelector('h1'); // tag / element

// console.log(heading);

// querySelectorAll
// let headings = document.querySelectorAll('#heading'); // id
// let headings = document.querySelectorAll('.heading'); // class
// let headings = document.querySelectorAll('h1'); // tag / element
// console.log(headings);

// create elements
// let div = document.createElement('div');
// div.innerText = "Div from js";
// div.className = "red"

// let root = document.getElementById('root');

// append / appendChild add element at the last 
// root.append(div)
// root.appendChild(div)

// prepend add element at the first
// root.prepend(div)

// traversing elements
// parent
// let paragraph = document.getElementById('paragraph');
// console.dir(paragraph.parentElement);
// console.dir(paragraph.parentNode);
// console.log(paragraph.parentElement.parentElement.parentElement.parentElement);
// console.log(paragraph.parentNode.parentNode.parentNode.parentNode);

// children
// let list = document.getElementById('list');
// console.log(list.childNodes);
// console.log(list.children);

// siblings
// previous sibling
// let list = document.getElementById('list');
// console.log(list.previousSibling);
// console.log(list.previousElementSibling);
// console.log(list.previousElementSibling.previousElementSibling.previousElementSibling);

// next sibling
let list = document.getElementById('list');
console.log(list);
// console.log(list.nextSibling);
// console.log(list.nextElementSibling);
// console.log(list.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

console.log(navigator.language)



