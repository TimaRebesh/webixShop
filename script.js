import { phones, prodacts } from "./data/prodacts";
import { datatable } from "./views/datatable";
import { pageGoods, table } from "./views/pageGoods";
import { pageOrder } from "./views/pageOrder";
import { tableHistory } from "./views/pageHistory";
import { authorization } from "./views/authorizationPage";

export { toolbar };

const toolbar = {
  view: "toolbar",
  id: "toolbar",
  css: "webix_primary",
  padding: 3,
  elements: [
    {
      view: "label",
      label: "<span class='label_color'>Phone Shop</span>"
    },
    {},
    {
      view: "label",
      label: "<span class='label_color'>Hi, user!</span>"
    },
    {},
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
    },
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
      label: "Logout",
      width: 150,
      click: function() {
        $$("authorization").show();
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

let shopPage = {
  id: "shopPage",
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
};

webix.ready(function() {
  webix.ui({
    animate: false,
    cells: [authorization, shopPage]
  });
});
