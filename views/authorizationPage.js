import { usersInfo, currentUser } from "../data/usersInfo";

export { authorization };

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
      click: function() {
        $$("windowLogin").show();
      }
    },
    {
      view: "button",
      label: "Register",
      width: 150,
      click: function() {
        $$("windowRegister").show();
      }
    }
  ]
};

webix
  .ui({
    view: "window",
    id: "windowLogin",
    modal: true,
    position: "center",
    //   label: {
    //     width: 140
    //   },
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
          click: function() {
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
            labelWidth: 150
          },
          elements: [
            {
              view: "text",
              id: "emailLogin",
              // type: "email",
              value: "james@gmail.com",
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
                { width: 150 },
                {
                  rows: [
                    {
                      view: "checkbox",
                      label: "Remember me",
                      width: 600
                      // height: 69
                    },
                    {
                      cols: [
                        {
                          view: "button",
                          value: "Login",
                          css: "webix_primary",
                          width: 120,
                          click: function() {
                            const values = $$("formWindowLogin").getValues();
                            let fined = false;
                            usersInfo.find(obj => {
                              //currentUser;

                              if (
                                values.email == obj.email &&
                                values.password == obj.password
                              ) {
                                fined = true;
                                currentUser.clearAll();
                                currentUser.add(obj);
                                $$("labelShowName").refresh();
                                $$("formWindowLogin").clear();
                                $$("windowLogin").hide();
                                $$("shopPage").show();
                              }
                            });
                            if (fined === false) {
                              webix.message("no match! Try again");
                              $$("passwordLogin").config.value = "";
                              $$("passwordLogin").refresh();
                            }
                          }
                        },
                        { template: "Forgot your Password?" }
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
    }
  })
  .show();

webix.ui({
  view: "window",
  id: "windowRegister",
  modal: true,
  position: "center",
  label: {
    width: 140
  },
  head: {
    view: "toolbar",
    type: "clean",
    // css: "window_toolbar",
    cols: [
      { template: "Register", css: "window_toolbar_progress" },
      {
        view: "icon",
        icon: "mdi mdi-close",
        css: "alter",
        hotkey: "esc",
        click: function() {
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
                click: function() {
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
                  } else {
                    return;
                  }
                }
              },
              {}
            ]
          }
        ],
        rules: {
          name: webix.rules.isNotEmpty,
          mail: function(value) {
            let flag = 0;
            usersInfo.find(obj => {
              if (obj.email == value) {
                $$("email").config.invalidMessage =
                  "The email has already been taken";
                flag = 1;
              } else {
                $$("email").config.invalidMessage = "The email is not correct";
              }
            });
            return webix.rules.isEmail(value) && flag != 1;
          },
          password: function(value) {
            return (
              webix.rules.isNotEmpty(value) &&
              value != "" &&
              value == $$("comfPassword").getValue()
            );
          },
          confPassword: function(value) {
            let password = $$("password").getValue();
            if (value != password) {
              $$("comfPassword").config.value = "";
            }
            return webix.rules.isNotEmpty(value) && value == password;
          }
        }
      },
      { width: 100 }
    ]
  }
});

let authorization = {
  id: "authorization",
  rows: [toolbar]
};
