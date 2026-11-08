// Interações leves e acessíveis da tela de acesso.
const eye = document.getElementById('togglePassword');
const pass = document.getElementById('password');
eye?.addEventListener('click', () => {
  const showing = pass.type === 'password';
  pass.type = showing ? 'text' : 'password';
  eye.setAttribute('aria-pressed', String(showing));
  eye.setAttribute('aria-label', showing ? 'Ocultar senha' : 'Mostrar senha');
});
// Reduz movimentos para quem configurou essa preferência no sistema.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const viewer = document.getElementById('flipflop3d');
  viewer?.removeAttribute('auto-rotate');
}

// Pointer-responsive depth effect, limited to fine pointers and motion-enabled users.
const art = document.getElementById('loginArt');
const form = document.getElementById('authCard');
const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
function attachTilt(element, maxDegrees, xVar, yVar) {
  if (!element || !motionOK || !finePointer) return;
  element.addEventListener('pointermove', (event) => {
    const r = element.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;
    element.style.setProperty(xVar, `${(-y * maxDegrees).toFixed(2)}deg`);
    element.style.setProperty(yVar, `${(x * maxDegrees).toFixed(2)}deg`);
  });
  element.addEventListener('pointerleave', () => {
    element.style.setProperty(xVar, '0deg');
    element.style.setProperty(yVar, '0deg');
  });
}
attachTilt(art, 5, '--rx', '--ry');
attachTilt(form, 1.5, '--frx', '--fry');
const viewer = document.getElementById('flipflop3d');
viewer?.addEventListener('error', () => {
  const poster = viewer.querySelector('.model-poster');
  if (poster) poster.innerHTML = '<span aria-hidden="true">✳</span><small>Não foi possível carregar o 3D. Verifique sua conexão.</small>';
});
