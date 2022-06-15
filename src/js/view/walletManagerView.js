import { View } from "./View";

import * as markups from "./markups.js";

class WalletManager extends View {
  btnOpen = document.querySelector(".btnManageWallets");
  btnsDelete = document.querySelectorAll(".btnDeleteWallet");
  window = document.querySelector(".manageWalletsWindow");
  parentElement = document.querySelector(".walletManager");
  transferWindow = document.querySelector(".TransferToWallet");
  transferForm = document.querySelector(".TransferToWalletForm");
  destWallet = document.querySelector(".destNameWallet");
  amount = document.querySelector(".amount");
  name;

  constructor() {
    super();
    //fix transfer window staying on screen
    this.overlay.addEventListener("click", () => {
      this.transferWindow.classList.add("hidden");
    });
  }

  generateMarkup() {
    let markup = "";
    this.data.wallets.forEach((entry) => {
      markup += markups.walletManagerMarkup(entry);
    });
    return markup;
  }

  addHandlerOpenTransferModal() {
    this.window.addEventListener("click", (e) => {
      const btnTransfer = e.target.closest(".btnTransferWallet");
      if (e.target !== btnTransfer) return;
      this.transferWindow.classList.remove("hidden");
      this.name = e.target.closest(".walletOnManage").dataset.name;
    });
  }

  TransferToWallet(handler) {
    this.transferForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const exitData = {
        destWalletName: this.destWallet.value,
        amount: Number(this.amount.value),
      };

      this.transferWindow.classList.add("hidden");

      this.valueCleaner([this.destWallet, this.amount]);

      handler(exitData, this.name);
    });
  }
}
export const walletManager = new WalletManager();
