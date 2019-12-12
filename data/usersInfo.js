const usersInfoServer = [
	{
		userId: "1",
		name: "James",
		email: "james@gmail.com",
		password: "1",
		created: new Date(2016, 5, 4),
		admin: true
	},
	{
		userId: "2",
		name: "Dilana",
		email: "bobmail@gmail.com",
		password: "2",
		created: new Date(2009, 11, 12)
	}
];

const usersInfo = new webix.DataCollection({data: usersInfoServer});

const exam = [{name: "user", userId: "0"}];

const currentUser = new webix.DataCollection({data: exam});

export {usersInfo, currentUser};
