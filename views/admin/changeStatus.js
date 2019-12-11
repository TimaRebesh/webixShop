import { usersInfo } from "../../data/usersInfo"
import { curentUser } from "./orders"
import { progressOfOrder } from "../../data/progressOfOrder";


const changeStatus = webix.ui({
	view: "window",
	id: "windowOrdersAdmin",
	modal: true,
	position: "center",
	head: {
		view: "toolbar",
		type: "clean",
		cols: [
			{ template: "Change status", css: "window_toolbar_progress" },
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowOrdersAdmin").hide();
					$$("adminForm").clear();
					$$("textareaAdminWindow").hide()
				}
			}
		]
	},
	body: {
		type: "clean",
		cols: [
			{ width: 100 },
			{
				view: "form",
				id: "adminForm",
				width: 500,
				elementsConfig: {
					labelWidth: 120
				},
				elements: [
					{
						view: "combo",
						id: "comboInForm",
						name: "status",
						label: "Choose status",
						options: {
							body: {
								data: [
									{ id: 1, value: "in progress" },
									{ id: 2, value: "Declined" },
								],
								on: {
									"onItemClick": function (id) {
										if (id === "2") {
											$$("textareaAdminWindow").config.value = curentUser.reasonStatus;
											$$("textareaAdminWindow").show();

										} else {
											$$("textareaAdminWindow").hide()
										}
									}
								}
							}
						}

					},
					{
						view: "textarea",
						name: "reason",
						id: "textareaAdminWindow",
						label: "Indicate reason",
					},
					{
						view: "button",
						value: "Save",
						css: "webix_primary",
						click() {
							const value = $$("textareaAdminWindow").getValue();
							const comboValue = $$("comboInForm").getText();
							progressOfOrder.find(item => {
								if (item.orderNumber === curentUser.orderNumber) {
									item.reasonStatus = value;
									item.status = comboValue;
								}
							})
							$$("adminForm").clear();
							$$("windowOrdersAdmin").hide();
							$$("datatableOrders").refresh();
							$$("textareaAdminWindow").hide()
						}
					}
				],
			},
			{ width: 100 }
		]
	},
});

export { changeStatus, curentUser }
