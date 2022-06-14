import { View } from "./View";
// import { history } from "./leftView";
import { renderHistoryEntry } from "../helper";
import { renderDeleteBtn } from "../helper";
class WalletManager extends View {
  btnOpen = document.querySelector(".btnManageWallets");
  window = document.querySelector(".manageWalletsWindow");
  parentElement = document.querySelector(".walletManager");
  // btnTransfer = document.querySelectorAll(".btnTransferWallet");
  transferWindow = document.querySelector(".TransferToWallet");
  // btnsDelete = document.querySelectorAll(".btnDeleteWallet");
  name;
  constructor() {
    super();
    this.addHandlerShowWindow("btnManageWallets");
    this.addHandlerHideWindow();
  }
  generateMarkup() {
    let markup = "";
    this.data.wallets.forEach((entry, i) => {
      markup += `
    
            <div class="walletOnManage" data-name="${entry.walletName}">
              <p class="walletName">${entry.walletName}</p>
              <p><span class="category">Describtion</span> ${
                entry.describtion
              }</p>
              <p><span class="category">Balance</span> ${entry.balance} $</p>
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
      if (executeHandler) handler();
      name = e.target.closest(".walletName");
    });
    return name;
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
    document
      .querySelector(".TransferToWalletForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const exitData = {
          destWalletName: document.querySelector(".destNameWallet").value,
          amount: Number(document.querySelector(".amount").value),
        };
        document.querySelector(".destNameWallet").value = "";
        document.querySelector(".amount").value = "";
        this.transferWindow.classList.add("hidden");

        handler(exitData, this.name);
      });
  }
}
export const walletManager = new WalletManager();
