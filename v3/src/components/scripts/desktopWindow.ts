document
  .querySelectorAll<HTMLButtonElement>("[data-modal-open]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalOpen;

      if (!modalId) return;

      const modal = document.getElementById(modalId);

      if (modal instanceof HTMLDialogElement) {
        modal.showModal();
      }
    });
  });

document
  .querySelectorAll<HTMLButtonElement>("[data-modal-close]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest("dialog");

      if (modal instanceof HTMLDialogElement) {
        modal.close();
      }
    });
  });
