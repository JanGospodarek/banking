export class View {
  parentElement;
  data;
  btnOpen;
  modalClass;
  renderSimply(data) {
    this.parentElement.innerHTML = "";
    this.data = data;
    this.parentElement.innerHTML = this.data;
  }
  openModal() {
    this.btnOpen.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn");
      console.log(btn);
      this.modalClass = btn.dataset.modal;
      document.querySelector(`.${this.modalClass}`).classList.remove("hidden");
    });
  }
  closeModal() {
    console.log(this.modalClass);

    document.querySelector(`.${this.modalClass}`).classList.add("hidden");
  }
  render(data, clear = true) {
    if (clear) this.parentElement.innerHTML = "";
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  generateMarkup() {}
}
