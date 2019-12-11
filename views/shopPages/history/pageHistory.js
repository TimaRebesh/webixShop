import { progressOfOrder } from "../../../data/progressOfOrder";
import { windowProgress } from "./windowProgress"
// import { currentUser } from "../../../data/usersInfo";

// let selectProdactOfOrdered = "";

export const tableHistory = {
	view: "datatable",
	id: "tableHistory",
	css: "data_style",
	fixedRowHeight: false,
	select: true,
	rowHeight: 50,
	tooltip: true,
	data: progressOfOrder,
	columns: [
		{
			id: "prodact",
			header: [{ text: "Prodacts" }, { content: "textFilter" }],
			fillspace: 2.5
		},
		{
			id: "amount",
			header: "Amount",
			fillspace: 0.5,
			tooltip: false
		},
		{
			id: "address",
			header: "Address",
			fillspace: 1,
			tooltip: false
		},
		{
			id: "delivery",
			header: "Delivery",
			fillspace: 1,
			tooltip: false
		},
		{
			id: "payment",
			header: "Payment",
			fillspace: 1,
			tooltip: false
		},
		{
			id: "orderDate",
			header: "Order date",
			format: webix.Date.dateToStr("%Y-%m-%d %H:%i"),
			fillspace: 1,
			tooltip: false
		},
		{
			header: "Status",
			template: "{common.status()}",
			fillspace: 1,
			tooltip: "click to see the reason"
		}
	],
	type: {
		status: function (obj) {
			if (obj.status !== "Declined") {
				return obj.status;
			}
			return `
              <button type='button' class='button_status' tabindex='-1' gridId=${obj.id} >${obj.status}</button>
              `;
		}
	},
	onClick: {
		button_status: function (ev, cellInfo) {
			const selectedOrderedProdact = this.getItem(cellInfo.row);
			if (selectedOrderedProdact.status === "Declined") {
				$$("progressDetails").config.details = selectedOrderedProdact.reasonStatus;
				$$("progressDetails").refresh();
				windowProgress.show();
			} return
		}
	}
};



