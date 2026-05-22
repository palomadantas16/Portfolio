const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('on');
  });
}, {threshold: .15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));