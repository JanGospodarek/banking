import { View } from "./View";
import * as model from "../model.js";
import * as markups from "./markups.js";

class LogView extends View {
  form = document.querySelector(".logIn");
  btnSend = document.querySelector(".logSubmit");
  email = document.querySelector(".emailLogIn");
  password = document.querySelector(".passwordLogIn");
  logInHandler(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const exitData = {
        email: this.email.value,
        password: this.password.value,
      };
      this.valueCleaner([this.email, this.password]);

      handler(exitData);
    });
  }
}

export const logView = new LogView();

//////////////////////////////////
// import * as model from "./model.js";
// class LogOrRegView extends View {
//   window = document.querySelector(".logging");
//   btnOpen = document.querySelector("#btnLogIn");
//   logWindow = document.querySelector(".logWindowBig");
//   logForm = document.querySelector(".logWindowForm");
//   constructor() {
//     super();
//     // this.btnOpenLogForm();
//   }
//   btnOpenLogForm(handler) {
//     console.log(this.btnOpen);
//     this.btnOpen.addEventListener("click", (e) => {
//       console.log(e);
//       //   this.logWindow.classList.remove("hidden");
//       //   this.logForm.classList.remove("hidden");
//     });
//   }
// }
