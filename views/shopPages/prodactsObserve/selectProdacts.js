import { prodacts, prodactsDC } from "../../../data/prodacts";
import { userOrder } from "../../../data/order";
import { windowDetails } from "./windowDetails"
// import { toolbar } from "../../script";

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
	type: {
		myCounter: function (obj, common, value, column, index) {
			value = 0;
			return `<div class='webix_el_group buttons_counter'>
              <button type='button' class='webix_inp_counter_prev' tabindex='-1' >-</button>

              <input type='text' readonly class='webix_inp_counter_value' value=${obj.amount}></input>
              <button type='button' class='webix_inp_counter_next' tabindex='-1'>+</button>
              </div>`;
		}
	},
	onClick: {
		webix_inp_counter_prev: function (e, id, node) {
			if (this.getSelectedItem().amount == 0) return;
			this.getSelectedItem().amount--;
			$$("myDatatable").refresh();
		},
		webix_inp_counter_next: function (event, cell, target) {
			this.getSelectedItem().amount++;
			$$("myDatatable").refresh();
		},
		image_buy: function () {
			let selected = this.getSelectedItem();

			if (!selected.amount) {
				return webix.message("please, select goods");
			}

			for (let i = 1; i <= selected.amount; i++) {
				selected.orderedAmount = selected.amount;
			}

			selected.sum = selected.price * selected.orderedAmount;

			if (userOrder.exists(selected.id)) {
				userOrder.updateItem(selected.id, selected);
			} else {
				userOrder.add(selected, -1);
			}

			let count = 0;
			userOrder.find(function (obj) {
				return (count += obj.orderedAmount);
			});

			$$("buttonBage").config.badge = count;
			$$("buttonBage").refresh();

			let name = selected.value + selected.model;
			webix.message(`<b>${name}</b> has been added to your bag`);

			selected.amount = 0;
			$$("myDatatable").refresh();
		}
	},
	on: {
		onItemDblClick: function (obj) {
			windowDetails.show();
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

export { datatable, curentSelectedItem };
