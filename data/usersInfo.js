const usersInfoServer = [
	{
		userId: 1,
		name: "James",
		email: "james@gmail.com",
		password: "1"
	},
	{
		userId: 2,
		name: "Dilan",
		email: "bobmail@gmail.com",
		password: "2",
		admin: true
	}
];

let usersInfo = new webix.DataCollection({ data: usersInfoServer });

// const exam = [{ name: "user", userId: 0 }];

let currentUser = new webix.DataCollection({ data: usersInfo });

export { usersInfo, currentUser };
