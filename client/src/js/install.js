const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE? Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// DONE? Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const installEvent = window.deferredPrompt;

  if (!installEvent) {
   return;
  }
  installEvent.prompt();
  window.defferedPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

// DONE? Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
