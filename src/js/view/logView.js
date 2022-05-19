import { View } from "./View";
// import * as model from "./model.js";
class LogOrRegView extends View {
  window = document.querySelector(".logging");
  btnOpen = document.querySelector("#btnLogIn");
  logWindow = document.querySelector(".logWindowBig");
  logForm = document.querySelector(".logWindowForm");
  constructor() {
    super();
    // this.btnOpenLogForm();
    window.addEventListener("load", this.showWindow());
  }
  btnOpenLogForm(handler) {
    console.log(this.btnOpen);
    this.btnOpen.addEventListener("click", (e) => {
      console.log(e);
      //   this.logWindow.classList.remove("hidden");
      //   this.logForm.classList.remove("hidden");
    });
  }
}

class LogView extends View {
  btnRegOrLogin = document.querySelector(".logWindowLogOrReg");
  form = document.querySelector(".logWindowForm");
  btnOpen = document.querySelector(".btnLogIn");
  window = document.querySelector(".logWindowBig");
  constructor() {
    super();
  }
}
class RegisterView extends View {}
export const logOrRegView = new LogOrRegView();
export const logView = new LogView();
