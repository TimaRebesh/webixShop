/* eslint-disable import/prefer-default-export */
import {adminClietsInfo} from "./clientsInfo";
import {adminOrders} from "./orders";
import {addNewProdact} from "./addNewProdact";

let menuData = [
	{
		id: "datatableCI",
		value: "Clients info"
	},
	{
		id: "datatableOrders",
		value: "Orders"
	},
	{
		id: "addNewProdact",
		value: "Add new product"
	}
];

let adminNavigation = {
	view: "sidebar",
	id: "adminNavigation",
	width: 250,
	data: menuData,
	on: {
		onAfterSelect(id) {
			$$(id).show();
		}
	}
};

const adminSet = {
	id: "adminSet",
	cols: [
		adminNavigation,
		{
			cells: [adminClietsInfo, adminOrders, addNewProdact],
			animate: false

		}
	]
};

export {adminSet};
