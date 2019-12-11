import { phones, prodacts } from "./data/prodacts";
import { datatable } from "./views/datatable";
import { pageGoods, table } from "./views/pageGoods";
import { userOrder } from "./data/order";
import { pageOrder } from "./views/pageOrder";
import { tableHistory } from "./views/pageHistory";
import { authorization } from "./views/autorization/startPage";
import { currentUser, usersInfo } from "./data/usersInfo";
import { progressOfOrder } from "./data/progressOfOrder";
import { adminSet } from "./views/admin/navigation"

const toolbar = {
	view: "toolbar",
	id: "toolbar",
	css: "webix_primary",
	padding: 3,
	elements: [
		{
			view: "label",
			width: 150,
			label: "<span class='label_color'>Phone Shop</span>",
			click: function () {
				$$("shop").show();
				$$("myDatatable").show();
			}
		},
		{
			view: "button",
			id: "buttonToolbarAdmin",
			label: "Admin's settings",
			css: "button_toolbar_admin",
			badge: "",
			width: 150,
			click: function () {
				$$("adminSet").show()
			}
		},
		{},
		{
			view: "label",
			id: "labelShowName",
			template: obj => {
				let item = currentUser.serialize();
				if (item[0].admin) {
					return `<span class='label_color templ_position'>Hi admin!</span>`;
				}
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
				$$("shop").show();
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
				$$("shop").show();
				showCurrentUserOrders();
				$$("tableHistory").show();
			}
		},
		{
			view: "button",
			label: "Logout",
			width: 120,
			click: function () {
				userOrder.clearAll();
				$$("buttonBage").config.badge = "";
				$$("buttonBage").refresh();
				$$("tableOrdered").clearAll();
				$$("buttonToolbarAdmin").hide();
				$$("myDatatable").clearSelection();
				$$("myDatatable").scrollTo(0, 0);
				$$("myDatatable").show();
				$$("authorization").show();
				$$("shop").show();
			}
		}
	]
};

const treeNavigation = {
	view: "tree",
	select: true,
	data: phones,
	width: 250,
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

let shop = {
	id: "shop",
	cols: [
		treeNavigation,
		{
			animate: false,
			cells: [datatable, pageGoods, pageOrder, tableHistory]
		}
	]
};



let shopPage = {
	id: "shopPage",
	rows: [
		toolbar,
		{
			cells: [shop, adminSet]
		},

	]
};

webix.ready(function () {
	webix.ui({
		animate: false,
		cells: [authorization, shopPage]
	});

	$$("buttonToolbarAdmin").hide();
	$$("datatableCI").sync(usersInfo)
	$$("textareaAdminWindow").hide()
});

const showCurrentUserOrders = function () {
	const filteredOrders = $$("tableHistory").filter(function (obj) {
		const item = currentUser.serialize();
		if (obj.userId === item[0].userId) {
			return true;
		} return false;
	});
	$$("tableHistory").refresh()
	return filteredOrders;
}

export { toolbar, showCurrentUserOrders };
