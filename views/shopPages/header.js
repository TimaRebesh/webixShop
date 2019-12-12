/* eslint-disable import/prefer-default-export */
import {currentUser} from "../../data/usersInfo";
import {showCurrentUserOrders} from "../../script";
import {userOrder} from "../../data/order";

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
			click() {
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
			click() {
				$$("adminSet").show();
			}
		},
		{},
		{
			view: "label",
			id: "labelShowName",
			template: () => {
				let item = currentUser.serialize();
				if (item[0].admin) {
					return "<span class='label_color templ_position'>Hi admin!</span>";
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
			click() {
				$$("shop").show();
				$$("tableOrdered").filter(obj => obj.orderedAmount > 0);
				$$("tableOrdered").refresh();
				$$("pageGoods").show();
			}
		},
		{
			view: "button",
			label: "History",
			width: 120,
			click() {
				$$("shop").show();
				showCurrentUserOrders();
				$$("tableHistory").show();
			}
		},
		{
			view: "button",
			label: "Logout",
			width: 120,
			click() {
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

export {toolbar};
