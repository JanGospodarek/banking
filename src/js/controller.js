import * as model from "./model.js";
import { balanceView } from "./view/centerView.js";
import { nameView } from "./view/centerView.js";
import { mainWallet } from "./view/centerView.js";
import { history } from "./view/leftView.js";
import { newWallet } from "./view/centerView.js";
import { View } from "./view/View.js";
import { logOrRegView } from "./view/logView.js";
import { walletManager } from "./view/walletManagerView.js";
function init() {
  model.calculateTotalBalance();
  balanceView.renderSimply(`${model.state.totalBalance} $`);
  nameView.renderSimply(`Hi ${model.state.name}`);
  mainWallet.render(model.state);
  newWallet.render(model.state, false);
  history.render(model.state.movements);
  walletManager.render(model.state);
}
init();

function controlCreateWallet(data, newWalletBool = true) {
  if (newWalletBool) model.createNewWallet(data);
  newWallet.render(model.state);
  newWallet.renderBtn();
  newWallet.addHandlerShowWindow("btnNewWallet");
  walletManager.render(model.state);
  // console.log(model.state);
}
function controlDeleteWalletManage() {
  const name = walletManager.addHandlerDeleteWallet(undefined, false);
  model.deleteWalletManage(name);
  walletManager.render(model.state);
  controlCreateWallet(undefined, false);
}
function initHandlers() {
  newWallet.createWalletHandler(controlCreateWallet);
  walletManager.addHandlerDeleteWallet(controlDeleteWalletManage);
  logOrRegView.btnOpenLogForm();
}
initHandlers();
