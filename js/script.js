// Año dinámico
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú móvil simple
function toggleMenu(){
  const ul = document.getElementById('menu');
  if (!ul) return;
  const isOpen = getComputedStyle(ul).display !== 'none';
  ul.style.display = isOpen ? 'none' : 'flex';
  if(!isOpen){ ul.style.flexDirection = 'column'; ul.style.gap = '8px'; }
}
window.toggleMenu = toggleMenu;

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href && href.length>1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});
