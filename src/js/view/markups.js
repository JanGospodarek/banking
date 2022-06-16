import iconPlus from "../../img/iconPlus.png";
import iconAc from "../../img/contact.png";
import iconDel from "../../img/trash.png";
import { renderHistoryEntry } from "../helper";
import { renderDeleteBtn } from "../helper";

export function mainWalletMarkup() {
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

export function newWalletMarkup(entry) {
  return `
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
}

export function contactViewMarkup(contact) {
  return `
  <div class="contact" data-name="${contact.name}">
    <img
      src="${iconAc}"
      alt="contact"
      class="contactImg"
      width="120"
    />
    <div class="contactInfo">
      <p><span class="category">Name</span> ${contact.name}</p>
      <p><span class="category">Describtion</span> ${contact.describtion}</p>
      <p><span class="category">Email</span> ${contact.email}</p>
    </div>
    <button class="btnDeleteContact">
      <img src="${iconDel}" alt="" width="25" />
    </button>
  </div>
  `;
}

export function historyMarkup(entry) {
  return `
    <li class="entry ${entry.type}">
       <p><span class="category">Title</span> ${entry.title}</p>
      <p><span class="category">Amount</span> ${entry.amount}</p>
      <p><span class="category">From</span> ${entry.from}</p>
      <p><span class="category">Wallet</span> ${entry.wallet}</p>
      <p><span class="category">Balance</span> ${entry.totalBalance}</p>
      <p><span class="category">Date</span> ${entry.date}</p>
    </li>
    `;
}

export function walletManagerMarkup(entry) {
  return `
    <div class="walletOnManage" data-name="${entry.walletName}">
      <p class="walletName">${entry.walletName}</p>
      <p><span class="category">Describtion</span> ${entry.describtion}</p>
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
}

export function quickTransferRenderMarkup(entry, ifWallet = true) {
  return `
  <option value="${ifWallet ? entry.walletName : entry.name}"></option>
  `;
}
