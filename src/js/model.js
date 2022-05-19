import { registerView } from "./view/logView";
export class User {
  wallets = [
    {
      walletName: "Main wallet",
      balance: 1000,
      describtion: "Default wallet",
      movements: [],
    },
  ];
  totalBalance = 0;
  movements = [];
  contacts = [];
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  generateMovement(data) {
    this.movements.push({
      type: data.type,
      title: data.title,
      amount: data.amount,
      from: data.from,
      wallet: data.wallet,
      totalBalance: data.totalBalance,
      date: data.date,
    });
  }
}

const curUser = new User("Jan Gospodarek", "jan.gospo@onet.pl", "zaq1@WSX");
curUser.generateMovement({
  type: "plus",
  title: "wydatek",
  amount: 100,
  from: "example.pl",
  wallet: "main wallet",
  totalBalance: "1000",
  date: "edeef",
});
export const state = {
  users: [],
  wallets: curUser.wallets,
  name: curUser.name,
  email: curUser.email,
  totalBalance: curUser.totalBalance,
  password: curUser.password,
  movements: curUser.movements,
  contacts: curUser.movements,
};
export function calculateTotalBalance() {
  state.wallets.forEach((wallet) => (state.totalBalance += wallet.balance));
}
export function createNewWallet(data) {
  curUser.wallets.push({
    walletName: data.walletName,
    balance: 0,
    describtion: data.describtion,
    movements: [],
  });
  console.log(curUser.wallets);
}
export function deleteWalletManage(name) {
  const index = curUser.wallets.findIndex(
    (wallet) => wallet.walletName === name
  );
  curUser.wallets.splice(index, 1);
}
