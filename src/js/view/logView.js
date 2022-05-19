import { View } from "./View";
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

class LogView extends View {
  btnRegOrLogin = document.querySelector(".logWindowLogOrReg");
  form = document.querySelector(".logIn");
  btnSend = document.querySelector(".logSubmit");

  // window = document.querySelector(".logWindowBig");
  logInHandler(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector(".emailLogIn");
      const password = document.querySelector(".passwordLogIn");
      const exitData = {
        email: email.value,
        password: password.value,
      };
      email.value = "";
      password.value = "";
      handler(exitData);
    });
  }
}
// class RegisterView extends View {}
// export const logOrRegView = new LogOrRegView();
export const logView = new LogView();
