import { windowRegister } from "./register/register"
import { windowLogin } from "./login/login"

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
				windowLogin.show();
			}
		},
		{
			view: "button",
			label: "Register",
			width: 150,
			click() {
				windowRegister.show();
			}
		}
	]
};

export const authorization = {
	id: "authorization",
	rows: [
		toolbar,
		{
			view: "template",
			position: "center",
			template: "<img class='image_on_start_page' src='https://img.global.news.samsung.com/global/wp-content/uploads/2018/05/Samsung-Themes_main_1.jpg'/>"

		}
	]
};
