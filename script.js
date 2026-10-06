const reveal = document.getElementById('reveal');
function sprinkleHearts() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.querySelector('.petals');
  if (!layer || layer.childElementCount > 30) return;
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '♡';
    heart.style.left = `${Math.random() * 95}%`;
    heart.style.animationDelay = `${Math.random() * .5}s`;
    layer.append(heart);
    heart.addEventListener('animationend', () => heart.remove(), {once: true});
  }
}
reveal?.addEventListener('click', () => {
  const extra = document.getElementById('extra');
  const expanded = reveal.getAttribute('aria-expanded') === 'true';
  extra.hidden = expanded;
  reveal.setAttribute('aria-expanded', String(!expanded));
  reveal.innerHTML = expanded ? 'Mais um pedacinho do meu coração <span aria-hidden="true">♡</span>' : 'Guardar esse carinho <span aria-hidden="true">♡</span>';
  if (!expanded) sprinkleHearts();
});
document.getElementById('hearts')?.addEventListener('click', sprinkleHearts);
