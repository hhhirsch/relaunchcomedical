(() => {
  const dialog = document.querySelector('.briefing-dialog');
  const openButton = document.querySelector('[data-open-briefing]');
  const closeButton = document.querySelector('[data-close-briefing]');
  const form = document.querySelector('[data-briefing-form]');

  if (!dialog || !openButton || !form) return;

  openButton.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      alert('Ihr Browser unterstützt dieses Dialogfenster nicht.');
    }
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => dialog.close());
  }

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) dialog.close();
  });

  form.addEventListener('submit', (event) => {
    if (event.submitter && event.submitter.value === 'submitted') {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Briefing Anfrage:', data);
      alert('Vielen Dank! Wir melden uns kurzfristig für die Terminabstimmung.');
      dialog.close();
      form.reset();
    }
  });
})();
