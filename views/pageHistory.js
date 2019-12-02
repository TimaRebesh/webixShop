import { progressOfOrder } from "../data/progressOfOrder";

export let tableHistory = {
  view: "datatable",
  id: "tableHistory",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 50,
  tooltip: true,
  data: progressOfOrder,
  columns: [
    {
      id: "prodact",
      header: [{ text: "Prodacts" }, { content: "textFilter" }],
      fillspace: 2.5
    },
    {
      id: "amount",
      header: "Amount",
      fillspace: 0.5,
      tooltip: false
    },
    {
      id: "address",
      header: "Address",
      fillspace: 1,
      tooltip: false
    },
    {
      id: "delivery",
      header: "Delivery",
      fillspace: 1,
      tooltip: false
    },
    {
      id: "payment",
      header: "Payment",
      fillspace: 1,
      tooltip: false
    },
    {
      id: "orderDate",
      header: "Order date",
      format: webix.Date.dateToStr("%Y-%m-%d %H:%i"),
      fillspace: 1,
      tooltip: false
    },
    {
      header: "Status",
      template: "{common.status()}",
      fillspace: 1,
      tooltip: "click to see the reason"
    }
  ],
  type: {
    status: function(obj) {
      if (obj.status !== "Declined") {
        return obj.status;
      }
      return `
              <button type='button' class='button_status' tabindex='-1' >${obj.status}</button>
              `;
    }
  },
  onClick: {
    button_status: function() {
      $$("windowProgress").show();
    }
  }
};

webix.ui({
  view: "window",
  id: "windowProgress",
  modal: true,
  position: "center",
  head: {
    view: "toolbar",
    type: "clean",
    css: "webix_primary",
    elements: [
      { template: "Decline reason", css: "window_toolbar_progress" },
      {
        view: "icon",
        icon: "mdi mdi-close",
        css: "alter",
        hotkey: "esc",
        click: function() {
          $$("windowProgress").hide();
        }
      }
    ]
  },

  body: {
    template: `<p class="window_progress_text">Product was lost</p>`
  }
});
