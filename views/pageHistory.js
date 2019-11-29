export let tableHistory = {
  view: "datatable",
  id: "tableHistory",
  css: "data_style",
  fixedRowHeight: false,
  scheme: {
    $init: function(obj) {
      obj.name = `${obj.value} ${obj.model}`;
    }
  },
  select: true,
  columns: [
    {
      id: "name",
      header: "Product",
      fillspace: 3
    },
    {
      id: "name",
      header: "Amount",
      fillspace: 1
    },
    {
      id: "name",
      header: "Address",
      fillspace: 1
    },
    {
      id: "name",
      header: "Delivery",
      fillspace: 1
    },
    {
      id: "name",
      header: "Payment",
      fillspace: 1
    },
    {
      id: "name",
      header: "Order date",
      fillspace: 2
    },
    {
      id: "name",
      header: "Status",
      fillspace: 1
    }
  ]
};
