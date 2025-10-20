if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(() => console.log('Error al registrar Service Worker'));
}
