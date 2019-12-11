export const windowResetPass = webix.ui({
	view: "window",
	id: "windowResetPass",
	modal: true,
	position: "center",
	head: {
		view: "toolbar",
		type: "clean",
		cols: [
			{ template: "Reset Password", css: "window_toolbar_progress" },
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowResetPass").hide();
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
				id: "formWindowResetPass",
				width: 500,
				elementsConfig: {
					labelWidth: 120
				},
				elements: [
					{
						view: "text",
						label: "E-Mail Address",
						name: "email",
						attributes: {
							required: "true",
							title: "Enter your email"
						}
					},
					{
						view: "button",
						value: "Send Password Reset Link",
						css: "webix_primary button_reset",
						width: 250,
						click() { }
					}
				]
			},
			{ width: 100 }
		]
	},
	position(state) {
		state.top = 100;
	}
});
