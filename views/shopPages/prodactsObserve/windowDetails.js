/* eslint-disable import/prefer-default-export */
import {curentSelectedItem} from "./selectProdacts";

webix.protoUI(
	{
		name: "mytemplate",
		getValue() {
			return this.getValues();
		},
		setValue(values) {
			this.setValues(values);
		}
	},
	webix.ui.template
);

export const windowDetails = webix.ui({
	view: "window",
	id: "window",
	modal: true,
	position: "center",
	label: {
		width: 140
	},
	on: {
		onBeforeShow() {
			if (curentSelectedItem.star === 1) {
				$$("iconView").config.icon = "mdi mdi-star star_gold";
				$$("iconView").refresh();
			}
			else {
				$$("iconView").config.icon = "mdi mdi-star star_grey";
				$$("iconView").refresh();
			}
			$$("ratingWindow").config.ratingValue = curentSelectedItem.rating;
			$$("ratingWindow").refresh();
		}
	},
	head: {
		view: "toolbar",
		id: "windowHead",
		css: "window_toolbar",
		cols: [
			{view: "label", name: "FirstName", css: "text_in_windowHead"},
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("window").hide();
				}
			}
		]
	},
	body: {
		view: "form",
		id: "formInWindow",
		width: 700,
		elementsConfig: {
			labelWidth: 40
		},
		elements: [
			{
				type: "clean",
				cols: [
					{
						view: "mytemplate",
						template: "<img class='image_for_window' src='#picture#'/>",
						name: "Image",
						height: 400
					},
					{
						type: "clean",
						rows: [
							{
								view: "mytemplate",
								template: "<p class='text_winow'><b>Name</b> #name#</p>",
								name: "Name",
								height: 100
							},
							{
								view: "mytemplate",
								template: "<p class='text_winow'><b>Price</b> #price#</p>",
								name: "Price",
								height: 100
							},
							{
								type: "clean",

								cols: [
									{
										view: "template",
										ratingValue: "",
										template: (obj, view) => `<p class='text_winow'><b>Rating</b> ${view.config.ratingValue}</p>`,
										name: "Price",
										id: "ratingWindow"
									},
									{
										view: "icon",
										id: "iconView",
										css: "icon_view_star",
										height: 100,
										align: "left",
										icon: "",
										click() {
											if (curentSelectedItem.star === 1) {
												curentSelectedItem.star = 0;
												curentSelectedItem.rating--;
												this.config.icon = "mdi mdi-star star_grey";
												this.refresh();
												$$("ratingWindow").config.ratingValue =
													curentSelectedItem.rating;
												$$("myDatatable").refresh();
												$$("ratingWindow").refresh();
											}
											else {
												curentSelectedItem.star = 1;
												curentSelectedItem.rating++;
												this.config.icon = "mdi mdi-star star_gold";
												this.refresh();
												$$("ratingWindow").config.ratingValue =
													curentSelectedItem.rating;
												$$("myDatatable").refresh();
												$$("ratingWindow").refresh();
											}
										}
									},
									{}
								]
							}
						]
					}
				]
			}
		]
	}
});
