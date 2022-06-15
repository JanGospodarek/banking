import { View } from "./View";
import iconPlus from "../../img/iconPlus.png";
import * as markups from "./markups.js";

class BalanceView extends View {
  parentElement = document.querySelector(".balance");
}

class NameView extends View {
  parentElement = document.querySelector(".hiMsg");
}

class MainWallet extends View {
  parentElement = document.querySelector(".mainWallet");
  generateMarkup() {
    const markup = markups.mainWalletMarkup.call(this);
    return markup;
  }
}

class NewWallet extends View {
  parentElement = document.querySelector(".wallets");
  btnCreate = document.querySelector(".btnCreateWallet");
  btnOpen = document.querySelector(".btnNewWallet");
  formCreate = document.querySelector(".newWalletForm");
  window = document.querySelector(".newWallet");
  walletName = document.querySelector(".nameWallet");
  walletDesc = document.querySelector(".walletDescribtion");

  createWalletHandler(handler) {
    this.formCreate.addEventListener("submit", (e) => {
      e.preventDefault();
      const exitData = {
        walletName: this.walletName.value,
        describtion: this.walletDesc.value,
      };
      this.valueCleaner([this.walletName, this.walletDesc]);
      handler(exitData);
      this.hideWindow();
    });
  }

  generateMarkup() {
    let markup = "";
    this.data.wallets.forEach((entry, i) => {
      if (i === 0) return markup;
      markup += markups.newWalletMarkup(entry);
    });

    return markup;
  }
}

export const balanceView = new BalanceView();
export const nameView = new NameView();
export const mainWallet = new MainWallet();
export const newWallet = new NewWallet();

////////////////////////////
// renderBtn() {
//   this.parentElement.insertAdjacentHTML(
//     "beforeend",
//     `
//   <div class="btnContainer">
//             <button class="btnNewWallet btn" data-modal="newWallet">
//             <img src="${iconPlus}" alt="new wallet" width="37">
//             </button>
//           </div>`
//   );
// }
