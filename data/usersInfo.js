export { usersInfo };

const usersInfoServer = [
  {
    userId: 1,
    name: "James",
    email: "a",
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
