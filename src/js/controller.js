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

//////

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

init();

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

function controlLogIn(data) {
  model.logInUser(data.email, data.password);
  init();
}

function controlTransferToWallet(data, name) {
  model.transferWallet(data, name);
  newWallet.render(model.state);
  // newWallet.renderBtn();
  walletManager.render(model.state);
}

function controlContacts() {}

function initHandlers() {
  newWallet.createWalletHandler(controlCreateWallet);
  walletManager.addHandlerDeleteWallet(controlDeleteWalletManage);
  contactView.addHandlerDeleteContact(controlDeleteContact);
  logView.logInHandler(controlLogIn);
  walletManager.addHandlerOpenTransferModal();
  walletManager.TransferToWallet(controlTransferToWallet);
}

initHandlers();
// console.log(curWalletName);
