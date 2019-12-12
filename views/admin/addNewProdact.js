import { prodacts, createPhonesData, phones } from "../../data/prodacts"

let currentPhoto = "";

export const addNewProdact = {
	id: "addNewProdact",
	type: "clean",
	rows: [
		{
			view: "form",
			id: "formAddNewProdact",
			width: 500,
			elementsConfig: {
				labelWidth: 150
			},
			elements: [
				{
					view: "text",
					label: "Company",
					name: "company",
					type: "text",
					placeholder: "Type company name",
					required: true
				},
				{
					view: "text",
					label: "Model",
					name: "model",
					type: "text",
					placeholder: "Type model name",
					required: true
				},
				{
					view: "text",
					label: "Price",
					name: "price",
					type: "number",
					placeholder: "Type price",
					required: true
				},
				{
					cols: [
						{
							view: "label",
							label: "Picture:",
							width: 150
						},
						{
							view: "uploader",
							value: "Add picture",
							// name: "loadImage",
							accept: "image/jpeg, image/png",
							autosend: false,
							multiple: false,
							on: {
								onBeforeFileAdd: function (upload) {
									var file = upload.file;
									var reader = new FileReader();
									reader.onload = function (event) {
										currentPhoto = event.target.result;
										$$("imagePreview").setValues({ src: event.target.result });

									};
									reader.readAsDataURL(file)
									return false;
								}
							}
						},
					]
				},
				{
					view: "template",
					id: "imagePreview",
					template: "<img src='#src#' class='fit_image'></img>",
				},
				{
					cols: [
						{
							view: "button",
							value: "Add new product",
							css: "webix_primary",
							width: 300,
							click: function () {
								// let form = this.getParentView();
								let form = $$("formAddNewProdact")
								if (form.validate()) {
									const getValuesFromForm = $$("formAddNewProdact").getValues();

									const saveNewProduct = {
										id: webix.uid(),
										value: getValuesFromForm.company,
										model: getValuesFromForm.model,
										price: getValuesFromForm.price,
										rating: 0,
										orderedAmount: 0,
										sum: 0,
										amount: 0,
										image: currentPhoto
									}
									prodacts.add(saveNewProduct, -1);
									webix.message("new product has been added")
									$$("formAddNewProdact").clear();
									$$("imagePreview").setValues({ src: "" });
									currentPhoto = "";
									//  add info in tree
									let ifExist = false;
									$$("treeNavigation").find((obj) => {
										if (obj.value === saveNewProduct.value) ifExist = true;
									});
									if (ifExist === false) {
										const first = $$("treeNavigation").getFirstId();
										$$("treeNavigation").add({
											id: saveNewProduct.id,
											value: saveNewProduct.value,
										}, -1, first);
									}
									$$("treeNavigation").refresh();
								}
							}
						},
						{
							view: "button",
							value: "Clear form",
							click: function () {
								$$("formAddNewProdact").clear()
								$$("imagePreview").setValues({ src: "" });
								currentPhoto = ""
							}
						}
					]
				}
			],
			rules: {
				"company": webix.rules.isNotEmpty,
				"model": webix.rules.isNotEmpty,
				"price": webix.rules.isNotEmpty,
			},
		},
		{}
	]
}



