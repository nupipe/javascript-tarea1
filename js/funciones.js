function sendEmail() {
  const correo = document.getElementById('correo');
  const errorCorreo = document.getElementById('errorCorreo');
  const clave = document.getElementById('clave');
  const errorClave = document.getElementById('errorClave');
  const claveConfirm = document.getElementById('claveConfirm');
  const errorClaveConfirm = document.getElementById('errorClaveConfirm');

  if (correo.value.includes('@')) {
    correo.className = 'input-correct';
    errorCorreo.className = 'error';
  } else {
    correo.className = 'input-wrong';
    errorCorreo.className = 'error-display';
  }

  if (clave.value.length >= 8) {
    clave.className = 'input-correct';
    errorClave.className = 'error';
  } else {
    clave.className = 'input-wrong';
    errorClave.className = 'error-display';
  }

  if (claveConfirm.value === clave.value && claveConfirm.value.length >= 8) {
    claveConfirm.className = 'input-correct';
    errorClaveConfirm.className = 'error';
  } else {
    claveConfirm.className = 'input-wrong';
    errorClaveConfirm.className = 'error-display';
  }
}