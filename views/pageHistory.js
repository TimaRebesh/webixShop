import { progressOfOrder } from "../data/progressOfOrder";

export let tableHistory = {
  view: "datatable",
  id: "tableHistory",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 50,
  data: progressOfOrder,
  // scheme: {
  //   $init: function(obj) {
  //     obj.name = `${obj.value} ${obj.model}`;
  //   }
  // },
  columns: [
    {
      id: "prodact",
      header: [{ text: "Prodacts" }, { content: "textFilter" }],
      fillspace: 3
    },
    {
      id: "amount",
      header: "Amount",
      fillspace: 1
    },
    {
      id: "address",
      header: "Address",
      fillspace: 1
    },
    {
      id: "delivery",
      header: "Delivery",
      fillspace: 1
    },
    {
      id: "payment",
      header: "Payment",
      fillspace: 1
    },
    {
      id: "orderData",
      header: "Order date",
      fillspace: 2
    },
    {
      id: "status",
      header: "Status",
      fillspace: 1
    }
  ]
};
