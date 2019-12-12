/* eslint-disable import/no-mutable-exports */
import {prodacts} from "../../../data/prodacts";
import {userOrder} from "../../../data/order";
import {windowDetails} from "./windowDetails";

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
			template: obj => `<div>${obj.value} ${obj.model}</div>`,
			header: [{text: "Name"}, {content: "textFilter"}],
			fillspace: 8
		},
		{id: "price", header: "Price", fillspace: 2},
		{id: "rating", header: "Rating", fillspace: 2},
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
				"<image class='imageBuy' src='http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG3.png'></image>"
		}
	],
	type: {
		myCounter(obj) {
			return `<div class='webix_el_group buttons_counter'>
              <button type='button' class='webix_inp_counter_prev' tabindex='-1' >-</button>

              <input type='text' readonly class='webix_inp_counter_value' value=${obj.amount}></input>
              <button type='button' class='webix_inp_counter_next' tabindex='-1'>+</button>
              </div>`;
		}
	},
	onClick: {
		webix_inp_counter_prev() {
			if (this.getSelectedItem().amount === 0) return;
			this.getSelectedItem().amount--;
			$$("myDatatable").refresh();
		},
		webix_inp_counter_next() {
			this.getSelectedItem().amount++;
			$$("myDatatable").refresh();
		},
		imageBuy() {
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
			}
			else {
				userOrder.add(selected, -1);
			}

			let count = 0;
			// eslint-disable-next-line no-return-assign
			userOrder.find(obj => count += obj.orderedAmount);

			$$("buttonBage").config.badge = count;
			$$("buttonBage").refresh();

			let name = selected.value + selected.model;
			webix.message(`<b>${name}</b> has been added to your bag`);

			selected.amount = 0;
			$$("myDatatable").refresh();
			return true;
		}
	},
	on: {
		onItemDblClick() {
			windowDetails.show();
		},
		onAfterSelect(id) {
			curentSelectedItem = this.getItem(id);

			$$("windowHead").setValues({
				FirstName: `${this.getItem(id).value} ${this.getItem(id).model}`
			});
			$$("formInWindow").setValues({
				Name: {name: `${this.getItem(id).value} ${this.getItem(id).model}`},
				Rating: {rating: this.getSelectedItem().rating},
				Price: {price: this.getItem(id).price},
				Image: {
					picture: this.getItem(id).image
				}
			});
		}
	}
};

export {datatable, curentSelectedItem};
