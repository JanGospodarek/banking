import { View } from "./View";
// import { history } from "./leftView";
import { renderHistoryEntry } from "../helper";
class WalletManager extends View {
  btnOpen = document.querySelector(".btnManageWallets");
  window = document.querySelector(".manageWalletsWindow");
  parentElement = document.querySelector(".walletManager");
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
                ${renderHistoryEntry(this.data.wallets)}
                 
                </ul>
              </div>
              <div class="btnActionCont ">
                <button class="btnWalletManager btnTransferWallet">
                  Transfer to other wallet
                </button>
                <button class="btnWalletManager btnDeleteWallet">
                  Delete wallet
                </button>
              </div>
            </div>
     
          `;
    });
    return markup;
  }
}
export const walletManager = new WalletManager();
