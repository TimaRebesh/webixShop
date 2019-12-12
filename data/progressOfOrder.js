/* eslint-disable import/prefer-default-export */
import {prodacts} from "./prodacts";
// import {currentUser} from "./usersInfo";

const progressOfOrderServer = [
	{
		orderNumber: "22",
		prodactsId: "1",
		amount: "1",
		address: "Minsk",
		delivery: "Post",
		payment: "Cash",
		orderDate: new Date(2012, 11, 12),
		status: "Declined",
		reasonStatus: "Prodacts was lost somewhere, sorry",
		orderUserName: "mommy",
		mail: "james@gmail.com",
		tel: "474-544-33",
		userId: "1"
	},
	{
		orderNumber: "34",
		prodactsId: "9",
		amount: "1",
		address: "Krit",
		delivery: "Post",
		payment: "Card",
		orderDate: new Date(2019, 11, 12),
		status: "Declined",
		reasonStatus: "no product available",
		orderUserName: "DODo",
		mail: "bobmail@gmail.com",
		tel: "4345-545-666",
		userId: "2"
	}
];
const progressOfOrder = new webix.DataCollection({
	scheme: {
		$init: (object) => {
			const obj = object;
			prodacts.find((item) => {
				if (item.id === obj.prodactsId) {
					obj.prodact = `${item.value} ${item.model}`;
				}
				return true;
			});
		}
	},
	data: progressOfOrderServer
});

export {progressOfOrder};
