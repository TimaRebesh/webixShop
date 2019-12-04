export { usersInfo, currentUser };

const usersInfoServer = [
  {
    userId: 1,
    name: "James",
    email: "james@gmail.com",
    password: 1
  },
  {
    userId: 2,
    firstname: "Dilan",
    email: "bobmail@gmail.com",
    password: 2
  }
];

let usersInfo = new webix.DataCollection({ data: usersInfoServer });

let exam = [{ name: "user", userId: 0 }];

let currentUser = new webix.DataCollection({ data: exam });
