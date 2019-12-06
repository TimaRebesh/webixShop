/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import { usersInfo, currentUser } from "../data/usersInfo";
import { windowLogin } from "./autPageLogin";

const toolbar = {
	view: "toolbar",
	id: "toolbarAuthorization",
	padding: 3,
	elements: [
		{
			view: "label",
			label: "<span class='label_color'>Phone Shop</span>"
		},
		{},
		{
			view: "button",
			label: "Login",
			width: 90,
			click() {
				$$("windowLogin").show();
			}
		},
		{
			view: "button",
			label: "Register",
			width: 150,
			click() {
				$$("windowRegister").show();
			}
		}
	]
};

webix.ui({
	view: "window",
	id: "windowRegister",
	modal: true,
	label: {
		width: 140
	},
	head: {
		view: "toolbar",
		type: "clean",
		cols: [
			{ template: "Register", css: "window_toolbar_progress" },
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowRegister").hide();
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
				id: "formInWindowRegister",
				width: 500,
				elementsConfig: {
					labelWidth: 150
				},
				elements: [
					{
						view: "text",
						label: "Name",
						type: "text",
						name: "name",
						attributes: {
							required: "true",
							title: "Enter your name",
							maxlength: 22
						}
					},
					{
						view: "text",
						type: "email",
						value: "newuser@gmail.com",
						label: "E-Mail Address",
						id: "email",
						name: "mail",
						attributes: {
							required: "true",
							title: "Enter your email"
						},
						invalidMessage: ""
					},
					{
						view: "text",
						type: "password",
						id: "password",
						label: "Password",
						name: "password",
						attributes: {
							required: "true",
							title: "Create your password"
						},
						invalidMessage: "The password confirmation does not match"
					},
					{
						view: "text",
						type: "password",
						id: "comfPassword",
						label: "Confirm Password",
						name: "confPassword",
						attributes: {
							required: "true",
							title: "repeat password"
						},
						invalidMessage: ""
					},
					{
						cols: [
							{ width: 150 },
							{
								view: "button",
								value: "Register",
								css: "webix_primary",
								width: 150,
								click() {
									let form = $$("formInWindowRegister");
									if (form.validate()) {
										// create userInsfo
										const values = form.getValues();

										let newObj = {};

										const arr = usersInfo.serialize();
										const lastId = arr[arr.length - 1].userId;
										const newId = lastId + 1;

										newObj.userId = newId;
										newObj.name = values.name;
										newObj.email = values.mail;
										newObj.password = values.password;

										usersInfo.add(newObj, -1);
										currentUser.clearAll();
										currentUser.add(newObj);
										$$("labelShowName").refresh();
										//
										$$("formInWindowRegister").clear();
										$$("windowRegister").hide();
										$$("shopPage").show();
									}
								}
							},
							{}
						]
					}
				],
				rules: {
					name: webix.rules.isNotEmpty,
					mail(value) {
						let flag = 0;
						usersInfo.find((obj) => {
							if (obj.email === value) {
								$$("email").config.invalidMessage =
									"The email has already been taken";
								flag = 1;
							}
							else {
								$$("email").config.invalidMessage = "The email is not correct";
							}
						});
						return webix.rules.isEmail(value) && flag !== 1;
					},
					password(value) {
						return (
							webix.rules.isNotEmpty(value) &&
							value !== "" &&
							value === $$("comfPassword").getValue()
						);
					},
					confPassword(value) {
						let password = $$("password").getValue();
						if (value !== password) {
							$$("comfPassword").config.value = "";
						}
						return webix.rules.isNotEmpty(value) && value === password;
					}
				}
			},
			{ width: 100 }
		]
	},
	position(state) {
		state.top = 100;
	}
});

// eslint-disable-next-line import/prefer-default-export
export const authorization = {
	id: "authorization",
	rows: [toolbar]
};

