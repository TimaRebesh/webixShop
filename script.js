import { phones, prodacts } from "./data/prodacts";
import { datatable } from "./views/datatable";
import { pageGoods, table } from "./views/pageGoods";
import { pageOrder } from "./views/pageOrder";
import { tableHistory } from "./views/pageHistory";
import { authorization } from "./views/authorizationPage";
import { currentUser } from "./data/usersInfo";
import { progressOfOrder } from "./data/progressOfOrder";

const toolbar = {
	view: "toolbar",
	id: "toolbar",
	css: "webix_primary",
	padding: 3,
	elements: [
		{
			view: "label",
			label: "<span class='label_color'>Phone Shop</span>",
			click: function () {
				$$("myDatatable").show();
			}
		},
		{},
		{
			view: "label",
			id: "labelShowName",
			template: obj => {
				let item = currentUser.serialize();
				return `<span class='label_color templ_position'>Hi ${item[0].name}!</span>`;
			}
		},
		{},
		{
			view: "button",
			label: "Bag",
			id: "buttonBage",
			badge: "",
			width: 120,
			click: function () {
				$$("tableOrdered").filter(function (obj) {
					return obj.orderedAmount > 0;
				});
				$$("tableOrdered").refresh();
				$$("pageGoods").show();
			}
		},
		{
			view: "button",
			label: "History",
			width: 120,
			click: function () {
				filterData();
				$$("tableHistory").refresh();
				$$("tableHistory").show();
			}
		},
		{
			view: "button",
			label: "Logout",
			width: 120,
			click: function () {
				$$("myDatatable").show();
				$$("authorization").show();
				$$("tableHistory").clearAll();
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
		onAfterSelect: function () {
			let selectedItem = this.getSelectedItem().value;
			if (selectedItem == "Phones") {
				$$("myDatatable").filter(function (obj) {
					return obj.value;
				});
			} else {
				$$("myDatatable").filter(function (obj) {
					return obj.value === selectedItem;
				});
			}
		},
		onItemClick: function () {
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

webix.ready(function () {
	webix.ui({
		animate: false,
		cells: [authorization, shopPage]
	});
});

function filterData() {
	progressOfOrder.filter(function (obj) {
		const item = currentUser.serialize();
		if (obj.userId == item[0].userId) {
			return obj;
		}
	});
}

export { toolbar };
