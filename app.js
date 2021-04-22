const sections = document.querySelectorAll('section')
const trans = document.querySelector('.trans')
const gradients = ['coral','chartreuse','chocolate','cadetblue']

const options = {
    threshold: 0.7,
}
// Vai salvar na variavel 'observer' a função 'IntersectionObserver' responsavel por salvar as variaveis 'navScroll' e 'options' para mirar melhor a rolagem da pagina
let observer = new IntersectionObserver(navScroll, options)

// Essa função e responsavel por pegar a informação da posição da barra de rolagem da página, pra cada rolagem vai pegar diversos tipos de informações e armazenar em variaveis pra aplicar o efeito na barra de navegação
function navScroll(entries) {
    entries.forEach(function (entry) {
      // console.log(entry);
      const className = entry.target.className;
      const activeLink = document.querySelector(`[data-page="${className}"]`);
      const elementIndex = entry.target.getAttribute("data-index");
      const coordinates = activeLink.getBoundingClientRect();
      const directions = {
        height: coordinates.height,
        width: coordinates.width,
        top: coordinates.top,
        left: coordinates.left,
      };
  
      if (entry.isIntersecting) {
        trans.style.setProperty("height", `${directions.height}px`);
        trans.style.setProperty("width", `${directions.width}px`);
        trans.style.setProperty("top", `${directions.top}px`);
        trans.style.setProperty("left", `${directions.left}px`);
        trans.style.backgroundColor = gradients[elementIndex];
      }
    });
  }



// Monitorar a função 'navScroll' e a variavel 'options'
sections.forEach(function(section) {
    observer.observe(section)
})