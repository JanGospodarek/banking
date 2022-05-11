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
  // openModal(query) {
  //   this.btnOpen = document.querySelector(`.${query}`);
  //   this.btnOpen.addEventListener("click", (e) => {
  //     const btn = e.target.closest(".btn");
  //     document
  //       .querySelector(`.${btn.dataset.modal}`)
  //       .classList.remove("hidden");
  //     this.overlay.classList.remove("hidden");
  //   });
  // }
  addHandlerShowWindow(query) {
    this.btnOpen = document.querySelector(`.${query}`);
    this.btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerHideWindow() {
    this.overlay.addEventListener("click", this.toggleWindow.bind(this));
  }
  toggleWindow() {
    this.overlay.classList.toggle("hidden");
    this.window.classList.toggle("hidden");
  }

  // closeModal(query) {

  //   document.querySelector(`.${query}`).classList.add("hidden");
  //   this.overlay.classList.add("hidden");
  // }

  render(data, clear = true) {
    if (clear) this.parentElement.innerHTML = "";
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  // update(data) {
  //   this.data = data;
  //   const newMarkup = this.generateMarkup();

  //   const newDOM = document.createRange().createContextualFragment(newMarkup);
  //   const newElements = Array.from(newDOM.querySelectorAll("*"));
  //   const curElements = Array.from(this.parentElement.querySelectorAll("*"));

  //   newElements.forEach((newEl, i) => {
  //     const curEl = curElements[i];
  //     if (  !newEl.isEqualNode(curEl) )
  //     this.parentElement.insertAdjacentHTML()
  //     // // Updates changed TEXT
  //     // if (
  //     //   !newEl.isEqualNode(curEl) &&
  //     //   newEl.firstChild?.nodeValue.trim() !== ""
  //     // ) {
  //     //   curEl.textContent = newEl.textContent;
  //     // }
  //     // Updates changed ATTRIBUES
  //     // if (!newEl.isEqualNode(curEl))
  //     //   Array.from(newEl.attributes).forEach((attr) =>
  //     //     curEl.setAttribute(attr.name, attr.value)
  //     //   );
  //   });
  // }
  generateMarkup() {}
}
