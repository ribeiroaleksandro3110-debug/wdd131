const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('_________');
const li = document.createElement('li');
const botaoexcluir =document.createElement('button');

li.textContent = input.ariaValueText;
botaoexcluir.textContent = '❌'
li.append(botaoexcluir);
lista.append(li);