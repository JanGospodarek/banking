let userIndex;
let curUser;
export function logInUser(email, password) {
  userIndex = state.users.findIndex((user) => user.email === email);
  if (userIndex === -1) return;
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

export function calculateTotalBalance() {
  state.totalBalance = 0;
  state.wallets.forEach((wallet) => (state.totalBalance += wallet.balance));
}

export function createNewWallet(data) {
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
  if (index !== -1) {
    curUser.wallets[0].balance += curUser.wallets[index].balance;
    curUser.wallets.splice(index, 1);
  }
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
}

export function deleteContact(name) {
  const index = curUser.contacts.findIndex((contact) => contact.name === name);
  if (index === -1) return;
  curUser.contacts.splice(index, 1);
}

export function addContact(data) {
  curUser.contacts.push({
    name: data.name,
    describtion: data.describtion,
    email: data.email,
  });
}

// function findElementHelper(elementToLookIn, elementToLookFor, condition) {
//   const index = elementToLookIn.findIndex((el,i) => {
//     return elementToLookIn[i].elementToLookFor === condition;
//   });
//   if (index === -1) return;
//   return index;
// }

export function transferAccount(data) {
  console.log(data);

  const index = curUser.contacts.findIndex(
    (contact) => contact.name === data.name
  );
  if (index === -1) return;

  // const index = findElementHelper(
  //   curUser.contacts,
  //   name,
  //   data.name
  // );

  const userIndex = state.users.findIndex(
    (user) => user.email === curUser.contacts[index].email
  );
  if (userIndex === -1) return;

  const walletIndex = curUser.wallets.findIndex(
    (wallet) => wallet.walletName === data.fromWallet
  );

  if (curUser.wallets[walletIndex].balance < data.amount) return;
  curUser.wallets[walletIndex].balance -= data.amount;
  state.users[userIndex].wallets[0].balance += data.amount;
}
///STATE with example users data
export let state = {
  users: [
    {
      name: "Robert",
      email: "rob@nowak.com",
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
          name: "ela",
          describtion: "elunia",
          email: "ela@nowak.com",
        },
        {
          name: "Wera",
          describtion: "okwejnf",
          email: "wera@nowak.com",
        },
      ],
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
          name: "Robert",
          describtion: "lol",
          email: "rob@nowak.com",
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

// export class User {
//   wallets = [
//     {
//       walletName: "Main wallet",
//       balance: 1000,
//       describtion: "Default wallet",
//       movements: [],
//     },
//   ];
//   totalBalance = 0;
//   movements = [];
//   contacts = [];
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
//   generateMovement(data) {
//     this.movements.push({
//       type: data.type,
//       title: data.title,
//       amount: data.amount,
//       from: data.from,
//       wallet: data.wallet,
//       totalBalance: data.totalBalance,
//       date: data.date,
//     });
//   }
// }
