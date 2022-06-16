import { View } from "./View";
import * as markups from "./markups.js";
class QuickTransfer extends View {
  btnOpen = document.querySelector(".btnQuickTransfer");
  formCreate = document.querySelector(".quickTransferForm");
  window = document.querySelector(".quickTransferWindow");
}

class QuickTransferRenderFromWallet extends View {
  parentElement = document.querySelector("#walletsList");
  generateMarkup() {
    let markup;
    this.data.wallets.forEach((entry) => {
      markup += markups.quickTransferRenderMarkup(entry);
    });
    return markup;
  }
}

class QuickTransferRenderContacts extends View {
  parentElement = document.querySelector("#contactsList");
  generateMarkup() {
    let markup;
    this.data.contacts.forEach((entry) => {
      markup += markups.quickTransferRenderMarkup(entry, false);
    });
    console.log(markup);
    return markup;
  }
}

export const quickTransfer = new QuickTransfer();
export const quickTransferRenderFromWallet =
  new QuickTransferRenderFromWallet();
export const quickTransferRenderContacts = new QuickTransferRenderContacts();
