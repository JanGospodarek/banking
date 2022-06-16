import * as model from "./model.js";
import { balanceView } from "./view/centerView.js";
import { nameView } from "./view/centerView.js";
import { mainWallet } from "./view/centerView.js";
import { history } from "./view/leftView.js";
import { newWallet } from "./view/centerView.js";
import { logOrRegView, logView } from "./view/logView.js";
import { walletManager } from "./view/walletManagerView.js";
import { contactView } from "./view/contactView.js";
import { newContactView } from "./view/contactView.js";
import { quickTransfer } from "./view/quickTransferView.js";
import { quickTransferRenderFromWallet } from "./view/quickTransferView.js";
import { quickTransferRenderContacts } from "./view/quickTransferView.js";
//////
logView.logInHandler(controlLogIn);

function controlCreateWallet(data, newWalletBool = true) {
  if (newWalletBool) model.createNewWallet(data);
  newWallet.render(model.state);
  walletManager.render(model.state);
  quickTransferRenderFromWallet.render(model.state);
}

function controlDeleteWalletManage(name) {
  model.deleteWalletManage(name);
  newWallet.render(model.state);
  newWallet.initHandlers("btnNewWallet");
  walletManager.render(model.state);
  controlCreateWallet(undefined, false);
}

function controlDeleteContact(name) {
  model.deleteContact(name);
  quickTransferRenderContacts.render(model.state);
  contactView.render(model.state);
}

function controlLogIn(data) {
  model.logInUser(data.email, data.password);
  initHandlers();
  init();
}

function controlTransferToWallet(data, name) {
  model.transferWallet(data, name);
  newWallet.render(model.state);
  walletManager.render(model.state);
}

function controlAddContacts(data) {
  model.addContact(data);
  quickTransferRenderContacts.render(model.state);

  contactView.render(model.state);
}

function controlTransferToAccount(data) {
  model.transferAccount(data);
  init();
}

function initHandlers() {
  newWallet.initHandlers("btnNewWallet");
  contactView.initHandlers("btnNewContact");
  contactView.initHandlers("btnContacts");
  newContactView.initHandlers("btnNewContact");
  walletManager.initHandlers("btnManageWallets");
  quickTransfer.initHandlers("btnQuickTransfer");

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
  newWallet.createWalletHandler(controlCreateWallet);
  walletManager.TransferToWallet(controlTransferToWallet);
  newContactView.createContactHandler(controlAddContacts);
  quickTransfer.TransferToAccount(controlTransferToAccount);
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
  quickTransferRenderFromWallet.render(model.state);
  quickTransferRenderContacts.render(model.state);
}
