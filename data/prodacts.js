/* eslint-disable no-undef */
const prodactsServer = [
	{
		id: "1",
		value: "Samsung",
		model: "Galaxy S10",
		price: 300,
		rating: 76,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"https://content2.onliner.by/catalog/device/header@2/4385b1fb60327eabd0a9c3ca4b9628fa.jpeg"
	},
	{
		id: "2",
		value: "Samsung",
		model: "Galaxy A50 SM-A505F",
		price: 200,
		rating: 65,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image: "https://i1.foxtrot.com.ua/product/MediumImages/6471315_0.jpg"
	},
	{
		id: "4",
		value: "iPhone",
		model: "X",
		price: 500,
		rating: 90,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"https://content2.onliner.by/catalog/device/header@2/8fd4a8620203c93247745025142c1f67.jpeg"
	},
	{
		id: "3",
		value: "Samsung",
		model: "Galaxy A6",
		price: 300,
		rating: 25,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"data:image/jpeg;base64,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"
	},

	{
		id: "5",
		value: "iPhone",
		model: "XR",
		price: 700,
		rating: 40,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"https://www.att.com/shopcms/media/att/2018/shop/360s/9240254/6589B_3.jpg"
	},
	{
		id: "6",
		value: "iPhone",
		model: "11",
		price: 800,
		rating: 11,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"https://content2.onliner.by/catalog/device/header@2/e2189f90f9088975c553ec33431fc186.jpeg"
	},
	{
		id: "7",
		value: "Nokia",
		model: "6.1 Plus",
		price: 300,
		rating: 22,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"https://5element.by/upload/5element/8de/8defbcc2308168584b36cd1ca71a7ae4.jpg"
	},
	{
		id: "8",
		value: "Nokia",
		model: "1 Dual",
		price: 400,
		rating: 44,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image:
			"https://static.svyaznoy.ru/upload/iblock/27b/12.jpg/resize/483x483/hq/"
	},
	{
		id: "9",
		value: "Nokia",
		model: "3310",
		price: 3800,
		rating: 110,
		orderedAmount: 0,
		sum: 0,
		amount: 0,
		image: "https://mobidevices.ru/images/2014/04/Nokia-33101.jpg"
	},

];

const prodacts = new webix.DataCollection({ data: prodactsServer });

// convert data of prodacts to data of phones
function createPhonesData() {
	const objTree = [
		{
			id: 1,
			value: "Phones",
			data: []
		}
	];
	let getUniqueValues = new Set();
	const jasonformat = prodacts.serialize()
	jasonformat.forEach((obj) => {
		if (!getUniqueValues.has(obj.value)) {
			getUniqueValues.add(obj.value);
			let newObject = {
				id: webix.uid(),
				value: obj.value
			};
			objTree[0].data.push(newObject);
		}
	});
	return objTree
}

let phones = new webix.DataCollection({ data: createPhonesData() });

export { prodacts, phones };
