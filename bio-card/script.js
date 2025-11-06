// small helpers for date and smooth nav
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(!target) return;
    target.scrollIntoView({behavior:'smooth', block:'start'});
  })
});