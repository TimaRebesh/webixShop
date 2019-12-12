import {phones} from "./data/prodacts";
import {datatable} from "./views/shopPages/prodactsObserve/selectProdacts";
import {pageGoods} from "./views/shopPages/Bag";
import {pageOrder} from "./views/shopPages/pageOrder";
import {tableHistory} from "./views/shopPages/history/pageHistory";
import {authorization} from "./views/autorization/startPage";
import {currentUser, usersInfo} from "./data/usersInfo";
import {adminSet} from "./views/admin/navigation";
import {toolbar} from "./views/shopPages/header";

const treeNavigation = {
	view: "tree",
	id: "treeNavigation",
	select: true,
	data: phones,
	width: 250,
	ready() {
		this.openAll();
	},
	on: {
		onAfterSelect() {
			let selectedItem = this.getSelectedItem().value;
			if (selectedItem === "Phones") {
				$$("myDatatable").filter(obj => obj.value);
				return true;
			}

			$$("myDatatable").filter(obj => obj.value === selectedItem);
			return true;
		},
		onItemClick() {
			$$("myDatatable").show();
		}
	}
};

const shop = {
	id: "shop",
	cols: [
		treeNavigation,
		{
			animate: false,
			cells: [datatable, pageGoods, pageOrder, tableHistory]
		}
	]
};

const shopPage = {
	id: "shopPage",
	rows: [
		toolbar,
		{
			cells: [shop, adminSet]
		}
	]
};

webix.ready(() => {
	webix.ui({
		animate: false,
		cells: [authorization, shopPage]
	});

	$$("buttonToolbarAdmin").hide();
	$$("datatableCI").sync(usersInfo);
	$$("textareaAdminWindow").hide();
});

const showCurrentUserOrders = function show() {
	const filteredOrders = $$("tableHistory").filter((obj) => {
		const item = currentUser.serialize();
		if (obj.userId === item[0].userId) {
			return true;
		} return false;
	});
	$$("tableHistory").refresh();
	return filteredOrders;
};

export {toolbar, showCurrentUserOrders};
