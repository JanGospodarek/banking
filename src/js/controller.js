import * as model from "./model.js";
import { balanceView } from "./view/centerView.js";
import { nameView } from "./view/centerView.js";
import { mainWallet } from "./view/centerView.js";
import { history } from "./view/leftView.js";
import { newWallet } from "./view/centerView.js";
function init() {
  model.calculateTotalBalance();
  balanceView.renderSimply(`${model.state.totalBalance} $`);
  nameView.renderSimply(`Hi ${model.state.name}`);
  mainWallet.render(model.state);
  newWallet.render(model.state, false);
  history.render(model.state.movements);
  newWallet.openModal();
}
init();

function controlCreateWallet(data) {
  model.createNewWallet(data);
  console.log(data);
  newWallet.render(model.state, false);
  newWallet.closeModal();
}

function initHandlers() {
  newWallet.createWalletHandler(controlCreateWallet);
}
initHandlers();
