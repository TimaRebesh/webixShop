import { usersInfo, currentUser } from "../data/usersInfo";

let windowLogin = webix.ui({
  view: "window",
  id: "windowLogin",
  modal: true,
  position: "center",
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
          labelWidth: 120
        },
        elements: [
          {
            view: "text",
            id: "emailLogin",
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
              { width: 120 },
              {
                rows: [
                  {
                    view: "checkbox",
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
                              $$("tableHistory").refresh();
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
                      {
                        view: "template",
                        template: "Forgot your Password?",
                        borderless: true,
                        css: "template_login",
                        onClick: {
                          template_login: function() {
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
  position: function(state) {
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
        click: function() {
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
            click: function() {}
          }
        ]
      },
      { width: 100 }
    ]
  },
  position: function(state) {
    state.top = 100;
  }
});

export { windowLogin };
