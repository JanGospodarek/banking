import { View } from "./View";
import * as markups from "./markups.js";

class ContactView extends View {
  window = document.querySelector(".contactsCont");
  parentElement = document.querySelector(".contacts");
  formCreate = document.querySelector(".newContactForm");

  generateMarkup() {
    let markup = " ";
    this.data.contacts.forEach((contact) => {
      markup += markups.contactViewMarkup(contact);
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
