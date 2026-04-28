// ── CUSTOM CURSOR ──
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;

document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });

(function loop(){
  rx += (mx-rx)*0.12;
  ry += (my-ry)*0.12;
  if(cur)  cur.style.cssText  = `left:${mx-5}px;top:${my-5}px`;
  if(ring) ring.style.cssText = `left:${rx-18}px;top:${ry-18}px`;
  requestAnimationFrame(loop);
})();

// Cursor grow on hover
document.querySelectorAll('a,button,.project-row,.svc-row,.skill-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if(cur)  cur.style.transform  = 'scale(2)';
    if(ring){ ring.style.transform = 'scale(1.5)'; ring.style.borderColor='rgba(0,233,106,0.7)'; }
  });
  el.addEventListener('mouseleave', () => {
    if(cur)  cur.style.transform  = 'scale(1)';
    if(ring){ ring.style.transform = 'scale(1)';   ring.style.borderColor='rgba(0,233,106,0.4)'; }
  });
});

// ── SCROLL FADE-IN ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// ── SKILL BARS animate on scroll ──
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => barObs.observe(el));

// ── TYPING EFFECT in hero (if needed) ──
const typingEl = document.getElementById('typing');
if(typingEl){
  const words = ['Websites', 'Business Platforms', 'Modern Interfaces', 'Hotel Sites'];
  let i=0, j=0, deleting=false;
  function type(){
    const word = words[i];
    typingEl.textContent = word.substring(0, j);
    if(!deleting && j === word.length){ deleting=true; setTimeout(type,1200); return; }
    if(deleting && j === 0){ deleting=false; i=(i+1)%words.length; }
    j = deleting ? j-1 : j+1;
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}
