import { adminClietsInfo } from "./clientsInfo"
import { adminOrders } from "./orders"
import { addNewProdact } from "./addNewProdact"

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

var adminNavigation = {
	view: "sidebar",
	id: "adminNavigation",
	width: 250,
	data: menuData,
	on: {
		onAfterSelect: function (id) {
			$$(id).show();
		}
	}
};

let adminSet = {
	id: "adminSet",
	cols: [
		adminNavigation,
		{
			cells: [adminClietsInfo, adminOrders, addNewProdact],
			animate: false,

		}
	]
};

export { adminSet }
