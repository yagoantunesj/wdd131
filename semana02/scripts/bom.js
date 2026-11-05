botao = document.querySelector('button')
input = document.querySelector('#favchap')
lista = document.querySelector('ul')

const li = document.createElement('li')
const btDelete = document.createElement('button')

li.innerHTML = input.value;
btDelete.textContent = '❌';
li.append(btDelete)
lista.append(li)
