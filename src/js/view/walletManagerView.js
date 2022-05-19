import { View } from "./View";
// import { history } from "./leftView";
import { renderHistoryEntry } from "../helper";
import { renderDeleteBtn } from "../helper";
class WalletManager extends View {
  btnOpen = document.querySelector(".btnManageWallets");
  window = document.querySelector(".manageWalletsWindow");
  parentElement = document.querySelector(".walletManager");
  // btnsDelete = document.querySelectorAll(".btnDeleteWallet");
  constructor() {
    super();
    this.addHandlerShowWindow("btnManageWallets");
    this.addHandlerHideWindow();
  }
  generateMarkup() {
    let markup = "";
    console.log(this.data.wallets);
    this.data.wallets.forEach((entry, i) => {
      markup += `
    
            <div class="walletOnManage">
              <p class="walletName">${entry.walletName}</p>
              <p><span class="category">Describtion</span> ${
                entry.describtion
              }</p>
              <p><span class="category">Balance</span> ${entry.balance}</p>
              <p><span class="category">History</span></p>
              <div class="history">
                <ul class="historyListManager">
                ${renderHistoryEntry(entry)}
                 
                </ul>
              </div>
              <div class="btnActionCont ">
                <button class="btnWalletManager btnTransferWallet">
                  Transfer to other wallet
                </button>
                ${renderDeleteBtn(entry)}
               
              </div>
            </div>
     
          `;
    });
    return markup;
  }
  addHandlerDeleteWallet(handler, executeHandler = true) {
    let name;
    this.window.addEventListener("click", (e) => {
      const btnDelete = e.target.closest(".btnDeleteWallet");
      if (e.target !== btnDelete) return;
      console.log(e);
      if (executeHandler) handler();
      name = e.target.closest(".walletName");
    });
    return name;
  }
}
export const walletManager = new WalletManager();
