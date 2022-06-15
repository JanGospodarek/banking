import { View } from "./View";
import iconPlus from "../../img/iconPlus.png";
import iconAc from "../../img/contact.png";
import iconDel from "../../img/trash.png";
class ContactView extends View {
  window = document.querySelector(".contactsCont");
  parentElement = document.querySelector(".contacts");
  formCreate = document.querySelector(".newContactForm");

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
}

class NewContactView extends View {
  window = document.querySelector(".newContact");
  formCreate = document.querySelector(".newContactForm");
  name = document.querySelector(".nameContact");
  describtion = document.querySelector(".describtionContact");
  email = document.querySelector(".emailContact");

  createContactHandler(handler) {
    this.formCreate.addEventListener("submit", (e) => {
      e.preventDefault();
      const exitData = {
        name: this.name.value,
        describtion: this.describtion.value,
        email: this.email.value,
      };
      this.valueCleaner([this.name, this.describtion, this.email]);
      this.window.classList.add("hidden");
      handler(exitData);
    });
  }
}

export const contactView = new ContactView();
export const newContactView = new NewContactView();
