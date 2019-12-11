import { usersInfo } from "../../data/usersInfo";

const adminClietsInfo = {
	view: "datatable",
	id: "datatableCI",
	css: "data_style",
	editable: true,
	editaction: "dblclick",
	fixedRowHeight: false,
	rowHeight: 80,
	resizeColumn: true,
	data: usersInfo,
	columns: [
		{ id: "userId", header: "#", sort: "int", fillspace: 0.5 },
		{
			id: "name",
			header: ["Name", { content: "textFilter" }],
			sort: "string",
			fillspace: 1,
			editor: "text",
			template: obj => {
				if (obj.admin) {
					return `<div>admin</div>`;
				}
				return `<div>${obj.name}</div>`;
			}

		},
		{ id: "email", header: ["Email", { content: "textFilter" }], editor: "text", fillspace: 3 },
		{
			id: "created",
			header: "created at",
			sort: "int",
			format: webix.Date.dateToStr("%Y-%m-%d %H:%i"),
			editor: "date",
			fillspace: 1
		}
	]
}

export { adminClietsInfo }
