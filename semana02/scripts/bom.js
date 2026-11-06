botao = document.querySelector('button')
input = document.querySelector('#favchap')
lista = document.querySelector('ul')


botao.addEventListener("click", function () {
    if (input.value.trim() != '') {

        const li = document.createElement('li')
        const btDelete = document.createElement('button')

        li.innerHTML = input.value;
        btDelete.textContent = '❌';
        li.append(btDelete);
        lista.append(li);
        input.value = '';

        btDelete.addEventListener("click", function () {
            lista.removeChild(li)
            input.focus()
        })
    }
});



