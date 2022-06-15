import * as model from "./model.js";
import { balanceView } from "./view/centerView.js";
import { nameView } from "./view/centerView.js";
import { mainWallet } from "./view/centerView.js";
import { history } from "./view/leftView.js";
import { newWallet } from "./view/centerView.js";
import { View } from "./view/View.js";
import { logOrRegView, logView } from "./view/logView.js";
import { walletManager } from "./view/walletManagerView.js";
import { contactView } from "./view/contactView.js";
import { newContactView } from "./view/contactView.js";
//////

// init();

function controlCreateWallet(data, newWalletBool = true) {
  if (newWalletBool) model.createNewWallet(data);
  newWallet.render(model.state);
  // newWallet.renderBtn();

  walletManager.render(model.state);
  // console.log(model.state);
}

function controlDeleteWalletManage(name) {
  model.deleteWalletManage(name);
  newWallet.render(model.state);
  // newWallet.renderBtn();
  newWallet.initHandlers("btnNewWallet");
  walletManager.render(model.state);
  controlCreateWallet(undefined, false);
}

function controlDeleteContact(name) {
  model.deleteContact(name);
  contactView.render(model.state);
  // contactView.renderBtn();
  // controlCreateWallet(undefined, false);
}
logView.logInHandler(controlLogIn);

function controlLogIn(data) {
  model.logInUser(data.email, data.password);
  init();
  initHandlers();
}

function controlTransferToWallet(data, name) {
  model.transferWallet(data, name);
  newWallet.render(model.state);
  // newWallet.renderBtn();
  walletManager.render(model.state);
}

function controlAddContacts(data) {
  model.addContact(data);
  contactView.render(model.state);
}

function initHandlers() {
  newWallet.initHandlers("btnNewWallet");
  contactView.initHandlers("btnNewContact");
  contactView.initHandlers("btnContacts");
  newContactView.initHandlers("btnNewContact");
  walletManager.initHandlers("btnManageWallets");
  ////
  newWallet.createWalletHandler(controlCreateWallet);
  walletManager.addHandlerDeleteElement(
    controlDeleteWalletManage,
    true,
    "btnDeleteWallet",
    "walletOnManage"
  );
  contactView.addHandlerDeleteElement(
    controlDeleteContact,
    true,
    "btnDeleteContact",
    "contact"
  );
  walletManager.addHandlerOpenTransferModal();
  walletManager.TransferToWallet(controlTransferToWallet);
  newContactView.createContactHandler(controlAddContacts);
}

function init() {
  model.calculateTotalBalance();
  balanceView.renderSimply(`${model.state.totalBalance} $`);
  nameView.renderSimply(`Hi ${model.state.name}`);
  mainWallet.render(model.state);
  newWallet.render(model.state, false);
  history.render(model.state.movements);
  walletManager.render(model.state);
  contactView.render(model.state);
  // contactView.renderBtn();
}
// console.log(curWalletName);
