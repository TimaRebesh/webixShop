/* eslint-disable import/prefer-default-export */
export const windowProgress = webix.ui({
	view: "window",
	id: "windowProgress",
	modal: true,
	position: "center",
	head: {
		view: "toolbar",
		type: "clean",
		css: "webix_primary",
		elements: [
			{template: "Decline reason", css: "window_toolbar_progress"},
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowProgress").hide();
				}
			}
		]
	},
	body: {
		view: "template",
		id: "progressDetails",
		details: "",
		template: () => `<p class="window_progress_text">${$$("progressDetails").config.details}</p>`
	}
});
