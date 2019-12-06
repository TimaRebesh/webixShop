import {prodacts} from "./prodacts";
import {currentUser} from "./usersInfo";

const progressOfOrderServer = [
	{
		prodactsId: 1,
		amount: 1,
		address: "Minsk",
		delivery: "Post",
		payment: "Card",
		orderDate: new Date(2012, 11, 12),
		status: "Declined",
		orderUserName: "",
		mail: "",
		tel: "",
		userId: 1
	},
	{
		prodactsId: 9,
		amount: 1,
		address: "Krit",
		delivery: "Post",
		payment: "Card",
		orderDate: new Date(2019, 11, 12),
		status: "Declined",
		orderUserName: "",
		mail: "",
		tel: "",
		userId: 2
	}
];
const progressOfOrder = new webix.DataCollection({
	scheme: {
		$init: (obj) => {
			prodacts.find((item) => {
				if (item.id === obj.prodactsId) {
					// eslint-disable-next-line no-param-reassign
					obj.prodact = `${item.value} ${item.model}`;
				}
			});
		}
	},
	data: progressOfOrderServer
});

export {progressOfOrder};
