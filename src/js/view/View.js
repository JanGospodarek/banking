export class View {
  parentElement;
  data;
  btnOpen;
  modalClass;
  window;
  overlay = document.querySelector(".overlay");
  renderSimply(data) {
    this.parentElement.innerHTML = "";
    this.data = data;
    this.parentElement.innerHTML = this.data;
  }

  addHandlerShowWindow(query) {
    this.btnOpen = document.querySelector(`.${query}`);
    this.btnOpen.addEventListener("click", this.showWindow.bind(this));
  }

  addHandlerHideWindow() {
    this.overlay.addEventListener("click", this.hideWindow.bind(this));
  }
  render(data, clear = true) {
    if (clear) this.parentElement.innerHTML = "";
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  generateMarkup() {}
}
