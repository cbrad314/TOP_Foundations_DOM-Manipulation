const body = document.querySelector('body');

const p = document.createElement('p');
p.textContent = 'Hey, I\'m red!';
p.setAttribute('style', 'color: red');
body.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3';
h3.setAttribute('style', 'color: blue');
body.appendChild(h3);

const container = document.createElement('div');
container.setAttribute('style','border:solid black; background-color: pink;');
body.appendChild(container);

const h1 = document.createElement('h1');
const div = document.createElement('div');
h1.textContent = 'I\'m in a div';
div.textContent = 'ME TOO!';
container.appendChild(h1);
container.appendChild(div);


