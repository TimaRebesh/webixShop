import { userOrder } from "../../data/order";
import { progressOfOrder } from "../../data/progressOfOrder";
import { currentUser } from "../../data/usersInfo";

let form = {
	view: "form",
	id: "formСheckout",
	scroll: false,
	elements: [
		{
			view: "text",
			label: "Your Name",
			placeholder: "Type your name",
			required: true,
			name: "text1",
			invalidMessage: "Yor Name can not be empty"
		},
		{
			view: "text",
			label: "Email",
			placeholder: "Type your email",
			required: true,
			name: "text2",
			invalidMessage: "Incorrect email"
		},
		{
			view: "text",
			label: "Phone",
			placeholder: "Type your phone number",
			required: true,
			name: "text3",
			invalidMessage: "Incorrect phone"
		},
		{
			view: "combo",
			id: "combo",
			label: "Delivery type",
			options: ["Master", "Post"]
		},
		{
			view: "text",
			label: "Delivery address",
			placeholder: "Type your adress",
			required: true,
			name: "text4",
			invalidMessage: "Delivery address can not be empty"
		},
		{
			view: "richselect",
			id: "richselect",
			label: "Payment type",
			options: ["Card", "Post", "Cash"]
		},
		{
			view: "button",
			css: "webix_primary",
			value: "Checkout",
			click: function () {
				if (this.getParentView().validate()) {
					//  create order progress
					userOrder.find(obj => {
						let newObj = {};
						newObj.prodactsId = obj.id;
						newObj.amount = obj.orderedAmount;

						let formValue = $$("formСheckout").getValues();
						let item = currentUser.serialize();

						newObj.orderNumber = webix.uid();
						newObj.orderUserName = formValue.text1;
						newObj.mail = formValue.text2;
						newObj.tel = formValue.text3;
						newObj.address = formValue.text4;
						newObj.payment = $$("richselect").getValue();
						newObj.delivery = $$("combo").getValue();
						newObj.orderDate = new Date();
						newObj.status = "In progress";
						newObj.userId = item[0].userId;

						progressOfOrder.add(newObj, -1);
					});
					//
					$$("tableHistory").filter(function (obj) {
						const item = currentUser.serialize();
						if (obj.userId === item[0].userId) {
							return true;
						} return false;
					});
					//
					userOrder.clearAll();
					$$("buttonBage").config.badge = "";
					$$("buttonBage").refresh();
					$$("tableHistory").refresh();
					$$("tableHistory").show();
				}
			}
		}
	],
	rules: {
		text1: webix.rules.isNotEmpty,
		text2: webix.rules.isEmail,
		text3: webix.rules.isNotEmpty,
		text3: webix.rules.isNotEmpty
	},
	elementsConfig: {
		labelWidth: 200
	}
};

let pageOrder = {
	id: "pageOrder",
	type: "clean",
	cols: [
		{ width: 50 },
		{ type: "clean", rows: [{ height: 50 }, form, { fillspace: 1 }] },
		{ maxWidth: 650 }
	]
};

export { pageOrder };
