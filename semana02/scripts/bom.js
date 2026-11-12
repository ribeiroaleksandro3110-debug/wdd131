const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');

botao.addEventListener('click', () => {
    const valor = input.value.trim();

    if (valor === '') {
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const botaoexcluir = document.createElement('button');

    li.textContent = valor;
    botaoexcluir.textContent = '❌';
    botaoexcluir.type = 'button';
    botaoexcluir.addEventListener('click', () => {
        li.remove();
    });

    li.append(botaoexcluir);
    lista.append(li);
    input.value = '';
    input.focus();
});