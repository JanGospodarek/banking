import { View } from "./View";
import iconPlus from "../../img/iconPlus.png";
import iconAc from "../../img/contact.png";
import iconDel from "../../img/trash.png";
class ContactView extends View {
  window = document.querySelector(".contactsCont");
  parentElement = document.querySelector(".contacts");
  formCreate = document.querySelector(".newContactForm");

  constructor() {
    super();
    this.initHandlers("btnNewContact");
    this.initHandlers("btnContacts");
  }
  initHandlers(name) {
    this.addHandlerShowWindow(name);
    this.addHandlerHideWindow();
  }
  addHandlerDeleteContact(handler, executeHandler = true) {
    let name;
    this.window.addEventListener("click", (e) => {
      const btnDelete = e.target.closest(".btnDeleteContact");
      if (!btnDelete) return;
      name = e.target.closest(".contact").dataset.name;
      console.log(name);
      if (executeHandler) handler(name);
    });
  }

  generateMarkup() {
    let markup = " ";
    this.data.contacts.forEach((contact) => {
      markup += `
        <div class="contact" data-name="${contact.name}">
          <img
            src="${iconAc}"
            alt="contact"
            class="contactImg"
            width="120"
          />
          <div class="contactInfo">
            <p><span class="category">Name</span> ${contact.name}</p>
            <p><span class="category">Describtion</span> ${contact.describtion}</p>
            <p><span class="category">Email</span> ${contact.email}</p>
          </div>
          <button class="btnDeleteContact">
            <img src="${iconDel}" alt="" width="25" />
          </button>
        </div>
        `;
    });
    return markup;
  }

  //   renderBtn() {
  //     this.parentElement.insertAdjacentHTML(
  //       "beforeend",
  //       `
  //       <button class="btnNewContact">
  //           <img src="${iconPlus} alt="new wallet" width="35" />
  //         </button>`
  //     );
  //   }
}

class NewContactView extends View {
  window = document.querySelector(".newContact");
  formCreate = document.querySelector(".newContactForm");
  constructor() {
    super();
    this.initHandlers("btnNewContact");
    // this.initHandlers("btnContacts");
  }
  initHandlers(name) {
    this.addHandlerShowWindow(name);
    this.addHandlerHideWindow();
  }
  createContactHandler(handler) {
    this.formCreate.addEventListener("submit", (e) => {
      e.preventDefault();
      const exitData = {
        name: document.querySelector(".nameContact").value,
        describtion: document.querySelector(".describtionContact").value,
        email: document.querySelector(".emailContact").value,
      };
      document.querySelector(".nameContact").value = "";
      document.querySelector(".describtionContact").value = "";
      document.querySelector(".emailContact").value = "";
      this.window.classList.add("hidden");
      handler(exitData);
      // this.hideWindow();
    });
  }
}

export const contactView = new ContactView();
export const newContactView = new NewContactView();
