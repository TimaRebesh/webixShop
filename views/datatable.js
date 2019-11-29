import { prodacts, prodactsDC } from "../data/prodacts";
import { userOrder } from "../data/order";
import { toolbar } from "../script";

export { datatable };

const defaultPhoto =
  "https://docplayer.ru/docs-images/61/45953296/images/5-2.png";

let curentSelectedItem = 0;

let datatable = {
  view: "datatable",
  id: "myDatatable",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 100,
  data: prodacts,

  select: true,
  columns: [
    {
      id: "image",
      css: "style_for_image",
      header: "Images",
      fillspace: 2,
      template: obj => `
          <image class="image" src="${obj.image || defaultPhoto}" />
        `
    },
    {
      template: obj => {
        return `<div>${obj.value} ${obj.model}</div>`;
      },
      header: [{ text: "Name" }, { content: "textFilter" }],
      fillspace: 8
    },
    { id: "price", header: "Price", fillspace: 2 },
    { id: "rating", header: "Rating", fillspace: 2 },
    {
      id: "amount",
      header: "Amount",
      width: 140,
      template: "{common.myCounter()}"
    },
    {
      header: "Buy",
      width: 100,
      template:
        "<image class='image_buy' src='http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG3.png'></image>"
    }
  ],
  // selectedItem: function() {
  //   return this.getSelectedItem();
  // },

  type: {
    myCounter: function(obj, common, value, column, index) {
      value = 0;
      return `<div class='webix_el_group'>
              <button type='button' class='webix_inp_counter_prev' tabindex='-1' >-</button>
              
              <input type='text' readonly class='webix_inp_counter_value' value=${obj.amount}></input>
              <button type='button' class='webix_inp_counter_next' tabindex='-1'>+</button>
              </div>`;
    }
  },
  onClick: {
    webix_inp_counter_prev: function(e, id, node) {
      if (this.getSelectedItem().amount == 0) return;
      this.getSelectedItem().amount--;
      $$("myDatatable").refresh();
    },
    webix_inp_counter_next: function(event, cell, target) {
      this.getSelectedItem().amount++;
      $$("myDatatable").refresh();
    },
    image_buy: function() {
      if (
        this.getSelectedItem().amount == undefined ||
        this.getSelectedItem().amount === 0
      )
        return;

      for (let i = 1; i <= this.getSelectedItem().amount; i++) {
        this.getSelectedItem().orderedAmount = this.getSelectedItem().amount;
        $$("buttonBage").config.badge++;
      }
      $$("buttonBage").refresh();

      this.getSelectedItem().sum =
        this.getSelectedItem().price * this.getSelectedItem().orderedAmount;
      // let selected = this.getSelectedItem();

      // userOrder.order.push(selected);

      let name = this.getSelectedItem().value + this.getSelectedItem().model;
      webix.message(`<b>${name}</b> has been added to your bag`);

      this.getSelectedItem().amount = 0;
      $$("myDatatable").refresh();
    }
  },
  on: {
    onItemDblClick: function(obj) {
      $$("window").show();
    },
    onAfterSelect(id) {
      curentSelectedItem = this.getItem(id);

      $$("windowHead").setValues({
        FirstName: this.getItem(id).value + " " + this.getItem(id).model
      });
      $$("formInWindow").setValues({
        Name: { name: this.getItem(id).value + " " + this.getItem(id).model },
        Rating: { rating: this.getSelectedItem().rating },
        Price: { price: this.getItem(id).price },
        Image: {
          picture: this.getItem(id).image
        }
      });
    }
  }
};

webix.protoUI(
  {
    name: "mytemplate",
    getValue: function() {
      return this.getValues();
    },
    setValue: function(values) {
      this.setValues(values);
    }
  },
  webix.ui.template
);

webix.ui({
  view: "window",
  id: "window",
  modal: true,
  position: "center",
  label: {
    width: 140
  },
  on: {
    onBeforeShow: function() {
      if (curentSelectedItem.star === 1) {
        $$("iconView").config.icon = "mdi mdi-star star_gold";
        $$("iconView").refresh();
      } else {
        $$("iconView").config.icon = "mdi mdi-star star_grey";
        $$("iconView").refresh();
      }
      $$("ratingWindow").config.ratingValue = curentSelectedItem.rating;
      $$("ratingWindow").refresh();
    }
  },
  head: {
    view: "toolbar",
    id: "windowHead",
    css: "window_toolbar",
    cols: [
      { view: "label", name: "FirstName", css: "text_in_windowHead" },
      {
        view: "icon",
        icon: "mdi mdi-close",
        css: "alter",
        hotkey: "esc",
        click: function() {
          $$("window").hide();
        }
      }
    ]
  },
  body: {
    view: "form",
    id: "formInWindow",
    width: 700,
    elementsConfig: {
      labelWidth: 40
    },
    elements: [
      {
        type: "clean",
        cols: [
          {
            view: "mytemplate",
            template: "<img class='image_for_window' src='#picture#'/>",
            name: "Image",
            height: 400
          },
          {
            type: "clean",
            rows: [
              {
                view: "mytemplate",
                template: "<p class='text_winow'><b>Name</b> #name#</p>",
                name: "Name",
                height: 100
              },
              {
                view: "mytemplate",
                template: `<p class='text_winow'><b>Price</b> #price#</p>`,
                name: "Price",
                height: 100
              },
              {
                type: "clean",

                cols: [
                  {
                    view: "template",
                    ratingValue: "",
                    template: (obj, view) => {
                      return `<p class='text_winow'><b>Rating</b> ${view.config.ratingValue}</p>`;
                    },
                    name: "Price",
                    id: "ratingWindow"
                  },
                  {
                    view: "icon",
                    id: "iconView",
                    css: "icon_view_star",
                    height: 100,
                    align: "left",
                    icon: "",
                    click: function() {
                      if (curentSelectedItem.star === 1) {
                        curentSelectedItem.star = 0;
                        curentSelectedItem.rating--;
                        this.config.icon = "mdi mdi-star star_grey";
                        this.refresh();
                        $$("ratingWindow").config.ratingValue =
                          curentSelectedItem.rating;
                        $$("myDatatable").refresh();
                        $$("ratingWindow").refresh();
                      } else {
                        curentSelectedItem.star = 1;
                        curentSelectedItem.rating++;
                        this.config.icon = "mdi mdi-star star_gold";
                        this.refresh();
                        $$("ratingWindow").config.ratingValue =
                          curentSelectedItem.rating;
                        $$("myDatatable").refresh();
                        $$("ratingWindow").refresh();
                      }
                    }
                  },
                  {}
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
