import { View } from "./View";
import * as markups from "./markups.js";
class QuickTransfer extends View {
  btnOpen = document.querySelector(".btnQuickTransfer");
  transferForm = document.querySelector(".quickTransferForm");
  window = document.querySelector(".quickTransferWindow");
  title = document.querySelector(".titleTransfer");
  describtion = document.querySelector(".describtionTransfer");
  fromWallet = document.querySelector(".walletTransfer");
  name = document.querySelector(".receiverTransfer");
  amount = document.querySelector(".amountTransfer");
  TransferToAccount(handler) {
    this.transferForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const exitData = {
        title: this.title.value,
        describtion: this.describtion.value,
        fromWallet: this.fromWallet.value,
        name: this.name.value,
        amount: Number(this.amount.value),
      };

      //   this.transferWindow.classList.add("hidden");

      this.valueCleaner([
        this.title,
        this.describtion,
        this.fromWallet,
        this.name,
        this.amount,
      ]);
      this.hideWindow();
      handler(exitData);
    });
  }
}

class QuickTransferRenderFromWallet extends View {
  parentElement = document.querySelector("#walletsList");
  generateMarkup() {
    let markup = " ";
    this.data.wallets.forEach((entry) => {
      markup += markups.quickTransferRenderMarkup(entry);
    });
    return markup;
  }
}

class QuickTransferRenderContacts extends View {
  parentElement = document.querySelector("#contactsList");
  generateMarkup() {
    let markup = " ";
    this.data.contacts.forEach((entry) => {
      markup += markups.quickTransferRenderMarkup(entry, false);
    });
    return markup;
  }
}

export const quickTransfer = new QuickTransfer();
export const quickTransferRenderFromWallet =
  new QuickTransferRenderFromWallet();
export const quickTransferRenderContacts = new QuickTransferRenderContacts();
