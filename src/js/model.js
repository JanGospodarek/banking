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
      totalBalance: 0,
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
      contacts: [
        {
          name: "Stefciu",
          desribtion: "lol",
          email: "stefan@nowak.com",
        },
        {
          name: "Wera",
          describtion: "okwejnf",
          email: "wera@nowak.com",
        },
      ],
      totalBalance: 0,
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
let curUser;
export function logInUser(email, password) {
  userIndex = state.users.findIndex((user) => user.email === email);
  if (state.users[userIndex].password !== password) return;
  curUser = state.users[userIndex];

  state.wallets = curUser.wallets;
  state.name = curUser.name;
  state.email = curUser.email;
  state.totalBalance = curUser.totalBalance;
  state.password = curUser.password;
  state.movements = curUser.movements;
  state.contacts = curUser.contacts;
}

// state.users.push;
export function calculateTotalBalance() {
  state.totalBalance = 0;
  state.wallets.forEach((wallet) => (state.totalBalance += wallet.balance));
}

export function createNewWallet(data) {
  // console.log(curUser);
  curUser.wallets.push({
    walletName: data.walletName,
    balance: 0,
    describtion: data.describtion,
    movements: [],
  });
}
export function deleteWalletManage(name) {
  const index = curUser.wallets.findIndex((wallet) => {
    return wallet.walletName === name;
  });

  if (index !== -1) curUser.wallets.splice(index, 1);
}

export function transferWallet(data, name) {
  const indexOfCurWallet = curUser.wallets.findIndex(
    (wallet) => wallet.walletName === name
  );

  const indexOfDestWallet = curUser.wallets.findIndex(
    (wallet) => wallet.walletName === data.destWalletName
  );

  if (indexOfDestWallet === -1) {
    alert("Nie wykryto portfela!");
    return;
  }

  if (curUser.wallets[indexOfCurWallet].balance < data.amount) {
    alert("Za mało środków!");
    return;
  }

  curUser.wallets[indexOfCurWallet].balance =
    curUser.wallets[indexOfCurWallet].balance - data.amount;
  curUser.wallets[indexOfDestWallet].balance =
    curUser.wallets[indexOfDestWallet].balance + data.amount;
  // calculateTotalBalance();
}

export function deleteContact(name) {
  const index = curUser.contacts.findIndex((contact) => contact.name === name);
  if (index !== -1) curUser.contacts.splice(index, 1);
}
