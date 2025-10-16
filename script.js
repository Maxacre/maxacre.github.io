// Animación de secciones al aparecer
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{ threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Scroll suave para links de navegación
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});


