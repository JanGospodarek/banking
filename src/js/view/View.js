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

  initHandlers(name) {
    this.addHandlerShowWindow(name);
    this.addHandlerHideWindow();
  }

  addHandlerShowWindow(query) {
    this.btnOpen = document.querySelector(`.${query}`);
    this.btnOpen.addEventListener("click", this.showWindow.bind(this));
  }

  addHandlerHideWindow() {
    this.overlay.addEventListener("click", this.hideWindow.bind(this));
  }

  showWindow() {
    this.overlay.classList.remove("hidden");
    this.window.classList.remove("hidden");
  }

  hideWindow() {
    this.overlay.classList.add("hidden");
    this.window.classList.add("hidden");
  }

  render(data, clear = true) {
    if (clear) this.parentElement.innerHTML = "";
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  valueCleaner(elements) {
    elements.forEach((element) => {
      element.value = "";
    });
  }

  /**
   *
   * @param {function} handler  function witch is executed by handler
   * @param {boolean} executeHandler
   * @param {string} btn  name of btn that handler is being attached to
   * @param {string} closest   name of parent element from which function takes dataset value
   */

  addHandlerDeleteElement(handler, executeHandler = true, btn, closest) {
    let name;
    this.window.addEventListener("click", (e) => {
      const btnDelete = e.target.closest(`.${btn}`);
      if (!btnDelete) return;
      if (executeHandler) handler();
      name = e.target.closest(`.${closest}`).dataset.name;
      handler(name);
    });
  }

  generateMarkup() {}
}
