import { View } from "./View";
import iconPlus from "../../img/iconPlus.png";
console.log(iconPlus);
class BalanceView extends View {
  parentElement = document.querySelector(".balance");
}
class NameView extends View {
  parentElement = document.querySelector(".hiMsg");
}
class MainWallet extends View {
  parentElement = document.querySelector(".mainWallet");
  generateMarkup() {
    return `
    <p class="walletName">
    <span class="boldWalletName">${this.data.wallets[0].walletName}</span> 
  </p>
  <p><span class="category">Balance</span> ${this.data.wallets[0].balance} $</p>
  <p>
    <span class="category">Describtion</span> ${this.data.wallets[0].describtion}
  </p>
    `;
  }
}
class NewWallet extends View {
  parentElement = document.querySelector(".wallets");
  btnCreate = document.querySelector(".btnCreateWallet");
  btnOpen = document.querySelector(".btnNewWallet");
  formCreate = document.querySelector(".newWalletForm");
  window = document.querySelector(".newWallet");
  constructor() {
    super();
    this.addHandlerShowWindow("btnNewWallet");
    this.addHandlerHideWindow();
  }
  createWalletHandler(handler) {
    this.formCreate.addEventListener("submit", (e) => {
      e.preventDefault();
      const exitData = {
        walletName: document.querySelector(".nameWallet").value,
        describtion: document.querySelector(".walletDescribtion").value,
      };
      document.querySelector(".nameWallet").value = "";
      document.querySelector(".walletDescribtion").value = "";
      handler(exitData);
      this.hideWindow();
    });
  }

  generateMarkup() {
    let markup = "";
    this.data.wallets.forEach((entry, i) => {
      if (i === 0) return markup;
      markup += `
      <div class="wallet">
                <p class="walletName">
                  <span class="category">Wallet name</span> ${entry.walletName}
                </p>
                <p><span class="category">Balance</span> ${entry.balance} $</p>
                <p>
                  <span class="category">Describtion</span> ${entry.describtion}
                </p>
                <p>
                
               </div>
               `;
    });

    return markup;
  }
  renderBtn() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      `
    <div class="btnContainer">
              <button class="btnNewWallet btn" data-modal="newWallet">
              <img src="${iconPlus}" alt="new wallet" width="37">
              </button>
            </div>`
    );
  }
}
export const balanceView = new BalanceView();
export const nameView = new NameView();
export const mainWallet = new MainWallet();
export const newWallet = new NewWallet();
