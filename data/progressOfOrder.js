export { progressOfOrder };
import { prodacts } from "./prodacts";

let progressOfOrderServer = [
  {
    prodactsId: "1",
    amount: 1,
    address: "Minsk",
    delivery: "Post",
    payment: "Card",
    orderDate: new Date(2012, 11, 12),
    status: "Declined",
    orderUserName: "",
    mail: "",
    tel: "",
    userIdLogin: 123
  }
];

let progressOfOrder = new webix.DataCollection({
  scheme: {
    $init: obj => {
      prodacts.find(function(item) {
        if (item.id == obj.prodactsId) {
          obj.prodact = item.value + " " + item.model;
        }
      });
    }
  },
  data: progressOfOrderServer
});
