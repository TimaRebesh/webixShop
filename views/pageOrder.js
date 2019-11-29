export { pageOrder };

let form = {
  view: "form",

  scroll: false,

  elements: [
    {
      view: "text",
      label: "Your Name",
      placeholder: "Type your name",
      required: true,
      name: "text1",
      invalidMessage: "Yor Name can not be empty"
    },
    {
      view: "text",
      label: "Email",
      placeholder: "Type your email",
      required: true,
      name: "text2",
      invalidMessage: "Incorrect email"
    },
    {
      view: "text",
      label: "Phone",
      placeholder: "Type your phone number",
      required: true,
      name: "text3",
      invalidMessage: "Incorrect phone"
    },
    {
      view: "combo",
      label: "Delivery type",
      options: ["Master", "Post"]
    },
    {
      view: "text",
      label: "Delivery address",
      placeholder: "Type your adress",
      required: true,
      name: "text4",
      invalidMessage: "Delivery address can not be empty"
    },
    {
      view: "richselect",
      label: "Payment type",
      options: ["Card", "Post", "Cash"]
    },
    {
      view: "button",
      css: "webix_primary",
      value: "Checkout",
      click: function() {
        // this.getParentView().validate();
        $$("buttonBage").config.badge = "";
        $$("buttonBage").refresh();
        $$("tableHistory").show();
      }
    }
  ],
  rules: {
    // text1: webix.rules.isNotEmpty,
    // text2: webix.rules.isEmail,
    // text3: webix.rules.isNotEmpty,
    // text3: webix.rules.isNotEmpty
  },
  elementsConfig: {
    labelWidth: 200
  }
};

let pageOrder = {
  id: "pageOrder",
  type: "clean",
  cols: [
    { width: 50 },
    { type: "clean", rows: [{ height: 50 }, form, { fillspace: 1 }] },
    { maxWidth: 650 }
  ]
};
