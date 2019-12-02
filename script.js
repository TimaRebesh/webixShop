import { phones, prodacts } from "./data/prodacts";
import { datatable } from "./views/datatable";
import { pageGoods, table } from "./views/pageGoods";
import { pageOrder } from "./views/pageOrder";
import { tableHistory } from "./views/pageHistory";

export { toolbar };

const toolbar = {
  view: "toolbar",
  id: "toolbar",
  css: "webix_primary",
  padding: 3,
  elements: [
    {
      view: "label",
      label: "Phone Shop"
    },
    {},
    { view: "label", label: "Hi, user!" },
    {},
    { view: "button", label: "Logout", width: 150 },
    {
      view: "button",
      label: "History",
      width: 150,
      click: function() {
        $$("tableHistory").show();
      }
    },
    {
      view: "button",
      label: "Bag",
      id: "buttonBage",
      badge: "",
      width: 90,
      click: function() {
        $$("tableOrdered").filter(function(obj) {
          return obj.orderedAmount > 0;
        });
        $$("tableOrdered").refresh();
        $$("pageGoods").show();
      }
    }
  ]
};

const treeNavigation = {
  view: "tree",
  select: true,
  data: phones,
  width: 180,
  on: {
    onAfterSelect: function() {
      let selectedItem = this.getSelectedItem().value;
      if (selectedItem == "Phones") {
        $$("myDatatable").filter(function(obj) {
          return obj.value;
        });
      } else {
        $$("myDatatable").filter(function(obj) {
          return obj.value === selectedItem;
        });
      }
    },
    onItemClick: function() {
      $$("myDatatable").show();
    }
  }
};

webix.ready(function() {
  webix.ui({
    rows: [
      toolbar,
      {
        cols: [
          treeNavigation,
          {
            animate: false,
            cells: [datatable, pageGoods, pageOrder, tableHistory]
          }
        ]
      }
    ]
  });
});
