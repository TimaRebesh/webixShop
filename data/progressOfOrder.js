export { progressOfOrder };
import { prodacts } from "./prodacts";

let progressOfOrderServer = [
  {
    prodactsId: "1",
    amount: 1,
    address: "Minsk",
    delivery: "Post",
    payment: "Card",
    orderData: "",
    status: "In progress",
    userId: 123
  },
  {
    prodactsId: "4",
    amount: 2,
    address: "Minsk",
    delivery: "Post",
    payment: "Card",
    orderData: "",
    status: "In progress",
    userId: 123
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
