export { userOrder };

let userOrderServer = [
  {
    userInfo: {},
    order: [
      {
        id: "9",
        value: "Nokia",
        model: "33101",
        price: 3800,
        rating: 110,
        orderedAmount: 0,
        sum: 0,
        amount: 0,
        image: "https://mobidevices.ru/images/2014/04/Nokia-33101.jpg"
      }
    ]
  }
];

let userOrder = new webix.DataCollection({ data: userOrderServer });

console.log(userOrder[0]);
