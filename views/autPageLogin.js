import { usersInfo, currentUser } from "../data/usersInfo";

// eslint-disable-next-line no-undef
const windowLogin = webix.ui({
	view: "window",
	id: "windowLogin",
	modal: true,
	on: {
		onBeforeShow: function () {

			const arrCookies = (document.cookie).split(";");
			arrCookies.forEach(item => {
				const arrValues = item.split("=");
				arrValues.forEach((item, index) => {
					if (item === ` shopWebix` && arrValues[1] !== "0") {

						usersInfo.find(obj => {
							if (obj.email == arrValues[1]) {
								$$("checkboxLogin").hide();
								$$("emailLogin").config.value = obj.email;
								$$("passwordLogin").config.value = obj.password
								$$("emailLogin").refresh();
								$$("passwordLogin").refresh()
							}
						})
					}
				});
			})
		}
	},
	head: {
		view: "toolbar",
		type: "clean",
		cols: [
			{ template: "Login", css: "window_toolbar_progress" },
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowLogin").hide();
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
				id: "formWindowLogin",
				width: 500,
				elementsConfig: {
					labelWidth: 120
				},
				elements: [
					{
						view: "text",
						id: "emailLogin",
						label: "E-Mail Address",
						name: "email",
						attributes: {
							required: "true",
							title: "Enter your email"
						}
					},
					{
						view: "text",
						type: "password",
						id: "passwordLogin",
						label: "Password",
						name: "password",
						attributes: {
							required: "true",
							title: "Enter your password"
						}
					},
					{
						cols: [
							{ width: 120 },
							{
								rows: [
									{
										view: "checkbox",
										id: "checkboxLogin",
										labelRight: "Remember me",
										labelWidth: 0
									},
									{
										cols: [
											{
												view: "button",
												value: "Login",
												css: "webix_primary",
												width: 80,
												click() {
													const values = $$("formWindowLogin").getValues();
													const checkboxValue = $$("checkboxLogin").getValue();


													const name = "shopWebix";
													let value = 0;

													if (checkboxValue === 1) {
														value = values.email;
													}
													document.cookie = name + "=" + value;



													let isFound = false;
													usersInfo.find(obj => {
														// currentUser;

														if (
															values.email === obj.email && values.password === obj.password
														) {
															isFound = true;
															currentUser.clearAll();
															currentUser.add(obj);
															$$("labelShowName").refresh();
															$$("tableHistory").refresh();
															$$("formWindowLogin").clear();
															$$("windowLogin").hide();
															$$("shopPage").show();
														}
													});
													if (isFound === false) {
														webix.message("no match! Try again");
														$$("passwordLogin").config.value = "";
														$$("passwordLogin").refresh();
													}
												}
											},
											{
												view: "template",
												template:
													"Forgot your Password?",
												borderless: true,
												css: "template_login",
												onClick: {
													template_login() {
														$$("windowLogin").hide();
														$$("windowResetPass").show();
													}
												}
											}
										]
									}
								]
							}
						]
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

webix.ui({
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

export { windowLogin };
