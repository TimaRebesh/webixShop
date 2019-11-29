import { pageOrder } from "./pageOrder";
import { prodacts } from "../data/prodacts";
import { userOrderer } from "../data/order";

export { pageGoods, table };

const defaultPhoto =
  "https://docplayer.ru/docs-images/61/45953296/images/5-2.png";

let table = {
  view: "datatable",
  id: "tableOrdered",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 100,
  footer: true,
  data: prodacts,
  scheme: {
    $init: function(obj) {
      obj.name = `${obj.value} ${obj.model}`;
    }
  },
  select: true,
  columns: [
    {
      id: "image",
      css: "style_for_image",
      header: "Images",
      fillspace: 2,
      footer: { text: "Total", colspan: 1 },
      template: obj =>
        ` <image class="image" src="${obj.image || defaultPhoto}" />`
    },
    {
      template: obj => {
        return `<div>${obj.value} ${obj.model}</div>`;
      },
      header: "Name",
      fillspace: 8
    },
    {
      id: "orderedAmount",
      header: "Amount"
    },
    {
      id: "price",
      header: "Price",
      fillspace: 2
    },
    {
      id: "sum",
      header: "Sum",
      fillspace: 2,
      footer: { content: "summColumn" }
    },
    {
      id: "",
      template: "{common.trashIcon()}",
      width: 40
    }
  ],
  onClick: {
    "wxi-trash": (e, id) => {
      webix
        .confirm({
          text: "Are you sure?",
          ok: "Delete",
          cancel: "Cancel"
        })
        .then(() => {
          $$("tableOrdered").remove(id);
        });
      return false;
    }
  }
};

let buttons = {
  cols: [
    {
      view: "button",
      css: "webix_primary",
      value: "Make order",
      width: 200,
      click: function() {
        let checkTable = $$("tableOrdered").getFirstId();
        if (checkTable === undefined) {
          webix.message("select prodacts to order");
        } else {
          $$("pageOrder").show();
        }
      }
    },
    {
      view: "button",
      value: "Back to Shop",
      width: 200,
      click: function() {
        $$("myDatatable").show();
      }
    },
    {}
  ]
};

let pageGoods = {
  id: "pageGoods",
  rows: [table, buttons]
};
