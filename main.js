/* Abre e fecha menu quando clica no incone */
const nav = document.querySelector('#header nav')
const toggle =
  document.querySelectorAll('nav .toggle') /*Declarei as constantes */

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  }) /* Adiciona uma função aos botões de menu para abrir e fechar menu */
}

/*Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
} /* Adiciona uma função aos botões de menu para abrir e fechar menu */
