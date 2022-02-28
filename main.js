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

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é Maior que a altura do header
    header.classList.add('scroll')
  } else {
    //Menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testmonial carousel slider swiper*/

const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Quando rolar a página */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
