import { progressOfOrder } from "../../data/progressOfOrder";
import { prodacts } from "../../data/prodacts";
import { changeStatus } from "./changeStatus"



export const adminOrders = {
	view: "datatable",
	id: "datatableOrders",
	css: "data_style",
	select: true,
	fixedRowHeight: false,
	rowHeight: 80,
	data: progressOfOrder,
	columns: [
		{
			id: "orderNumber", header: "#", sort: "int", fillspace: 1,
		},
		{
			header: ["Product", { content: "textFilter" }],
			sort: "string",
			fillspace: 3,
			template: obj => {
				let value = "";
				prodacts.find(item => {
					if (item.id === obj.prodactsId) { value = item.value + " " + item.model }
				})
				return `<div>${value}</div>`;
			}

		},
		{ id: "amount", head: "Amount", fillspace: 1, },
		{ id: "orderUserName", header: ["Buyer name", { content: "textFilter" }], fillspace: 1 },
		{ id: "tel", header: "Phone", fillspace: 1 },
		{ id: "address", header: "Address", fillspace: 1 },
		{ id: "delivery", header: "Delivery", fillspace: 1 },
		{ id: "payment", header: "Payment", fillspace: 1 },
		{ id: "orderDate", header: "Order date", fillspace: 2, format: webix.Date.dateToStr("%Y-%m-%d %H:%i"), },
		{ id: "status", header: "Status", fillspace: 1, css: "status_admin_change" },
	],
	onClick: {
		"status_admin_change": function () {
			curentUser = this.getSelectedItem();
			$$("adminForm").refresh();
			changeStatus.show();
		}
	}
}


