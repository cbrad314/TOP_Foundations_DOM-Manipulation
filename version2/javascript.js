const para1 = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

para1.textContent = `Hey I'm red!`;
h3.textContent = `I'm a blue h3!`;
h1.textContent = `I'm in a div`;
para2.textContent = `ME TOO!`;

para1.style.setProperty('color','red');
h3.style.setProperty('color','blue');
div.style.setProperty('border-style','solid');
div.style.setProperty('border-color','black');
div.style.setProperty('background-color','pink');

document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(para2);
document.body.appendChild(h3);
document.body.appendChild(para1);


