// EVERELLE PRINCESS SHELL — MAIN.JS
function enterSite() {
  document.querySelector('.intro').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Glitter Trail Cursor Effect
const cursorTrail = document.createElement('div');
cursorTrail.style.position = 'fixed';
cursorTrail.style.width = '8px';
cursorTrail.style.height = '8px';
cursorTrail.style.borderRadius = '50%';
cursorTrail.style.background = 'rgba(255,215,250,0.6)';
cursorTrail.style.pointerEvents = 'none';
document.body.appendChild(cursorTrail);

document.addEventListener('mousemove', (e) => {
  cursorTrail.style.top = e.clientY + 'px';
  cursorTrail.style.left = e.clientX + 'px';
  cursorTrail.style.transition = 'all 0.1s ease-out';
});

const sections = document.querySelectorAll('.shell-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});
