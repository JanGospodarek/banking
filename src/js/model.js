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
// let curUser;
// if (curUser === undefined) {
//   curUser = new User(undefined, undefined, undefined);
// }
export let state = {
  users: [
    {
      name: "Robert Kowalski",
      email: "robert@kowalski.com",
      password: "zaq1@WSX1",
      movements: [],
      contacts: [],
      totalBalance: 100,
    },
    {
      name: "Ela Nowak",
      email: "ela@nowak.com",
      password: "zaq1@WSX",
      wallets: [
        {
          walletName: "Main wallet",
          balance: 1000,
          describtion: "Default wallet",
          movements: [],
        },
      ],
      movements: [],
      contacts: [],
      totalBalance: 300,
    },
  ],
  wallets: [
    {
      walletName: "",
      balance: 0,
      describtion: "",
      movements: [],
    },
  ],
  name: "",
  email: "",
  totalBalance: 0,
  password: "",
  movements: [],
  contacts: [],
};
let userIndex;
export function logInUser(email, password) {
  userIndex = state.users.findIndex((user) => user.email === email);
  if (state.users[userIndex].password !== password) return;
  let curUser = state.users[userIndex];

  state.wallets = curUser.wallets;
  state.name = curUser.name;
  state.email = curUser.email;
  state.totalBalance = curUser.totalBalance;
  state.password = curUser.password;
  state.movements = curUser.movements;
  state.contacts = curUser.contacts;
}
// export let curUser = new User();

// curUser.generateMovement({
//   type: "plus",
//   title: "wydatek",
//   amount: 100,
//   from: "example.pl",
//   wallet: "main wallet",
//   totalBalance: "1000",
//   date: "edeef",
// });
console.log(state);
// state.users.push;
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
