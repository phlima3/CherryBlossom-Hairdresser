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
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é Maior que a altura do header
    header.classList.add('scroll')
  } else {
    //Menor que a altura do header
    header.classList.remove('scroll')
  }
})

/* Testmonial carousel slider swiper*/

const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
