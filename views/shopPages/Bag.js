/* eslint-disable no-unused-vars */
import {pageOrder} from "./pageOrder";
import {userOrder} from "../../data/order";

const defaultPhoto =
	"https://docplayer.ru/docs-images/61/45953296/images/5-2.png";

const table = {
	view: "datatable",
	id: "tableOrdered",
	css: "data_style",
	fixedRowHeight: false,
	rowHeight: 100,
	footer: true,
	data: userOrder,
	scheme: {
		$init(object) {
			const obj = object;
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
			footer: {text: "Total", colspan: 1},
			template: obj =>
				` <image class="image" src="${obj.image || defaultPhoto}" />`
		},
		{
			template: obj => `<div>${obj.value} ${obj.model}</div>`,
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
			footer: {content: "summColumn"}
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
					userOrder.remove(id);
					let count = 0;
					userOrder.filter((obj) => {
						count += obj.orderedAmount;
						return true;
					});

					$$("buttonBage").config.badge = count;
					$$("buttonBage").refresh();
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
			click() {
				let checkTable = $$("tableOrdered").getFirstId();
				if (checkTable === undefined) {
					webix.message("select prodacts to order");
				}
				else {
					$$("pageOrder").show();
				}
			}
		},
		{
			view: "button",
			value: "Back to Shop",
			width: 200,
			click() {
				$$("myDatatable").show();
			}
		},
		{}
	]
};

const pageGoods = {
	id: "pageGoods",
	rows: [table, buttons]
};

export {pageGoods, table};
