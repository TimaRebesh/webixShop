// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/prodacts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phones = exports.prodacts = void 0;
var prodactsServer = [{
  id: "1",
  value: "Samsung",
  model: "Galaxy S10",
  price: 300,
  rating: 76,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://content2.onliner.by/catalog/device/header@2/4385b1fb60327eabd0a9c3ca4b9628fa.jpeg"
}, {
  id: "2",
  value: "Samsung",
  model: "Galaxy A50 SM-A505F",
  price: 200,
  rating: 65,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://i1.foxtrot.com.ua/product/MediumImages/6471315_0.jpg"
}, {
  id: "4",
  value: "iPhone",
  model: "X",
  price: 500,
  rating: 90,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://content2.onliner.by/catalog/device/header@2/8fd4a8620203c93247745025142c1f67.jpeg"
}, {
  id: "3",
  value: "Samsung",
  model: "Galaxy A6",
  price: 300,
  rating: 25,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "data:image/jpeg;base64,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"
}, {
  id: "5",
  value: "iPhone",
  model: "XR",
  price: 700,
  rating: 40,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://www.att.com/shopcms/media/att/2018/shop/360s/9240254/6589B_3.jpg"
}, {
  id: "6",
  value: "iPhone",
  model: "11",
  price: 800,
  rating: 11,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://content2.onliner.by/catalog/device/header@2/e2189f90f9088975c553ec33431fc186.jpeg"
}, {
  id: "7",
  value: "Nokia",
  model: "6.1 Plus",
  price: 300,
  rating: 22,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://5element.by/upload/5element/8de/8defbcc2308168584b36cd1ca71a7ae4.jpg"
}, {
  id: "8",
  value: "Nokia",
  model: "1 Dual",
  price: 400,
  rating: 44,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://static.svyaznoy.ru/upload/iblock/27b/12.jpg/resize/483x483/hq/"
}, {
  id: "9",
  value: "Nokia",
  model: "3310",
  price: 3800,
  rating: 110,
  orderedAmount: 0,
  sum: 0,
  amount: 0,
  image: "https://mobidevices.ru/images/2014/04/Nokia-33101.jpg"
}];
var prodacts = new webix.DataCollection({
  data: prodactsServer
}); // convert data of prodacts to data of phones

exports.prodacts = prodacts;
var phones = [{
  id: 1,
  // open: true,
  value: "Phones",
  data: []
}];
exports.phones = phones;

function createPhonesData() {
  var set = new Set();
  var idFirstNum = 1.1;
  prodactsServer.forEach(function (obj) {
    var newObject = {};

    if (!set.has(obj.value)) {
      set.add(obj.value);
      idFirstNum = idFirstNum + 0.1;
      newObject.id = String(idFirstNum.toFixed(1));
      newObject.value = obj.value;
      phones[0].data.push(newObject);
    }
  });
}

createPhonesData(); // сonvert all data of prodacts to all treedata

var prodactsTreeData = [];
var set = new Set();
var idFirstNum = 0;
var idSecondNum = 0;
prodactsServer.forEach(function (obj) {
  var objTree = {};
  var value = obj.value;

  if (!set.has(obj.value)) {
    set.add(obj.value);
    idFirstNum++;
    idSecondNum++;
    objTree.id = String(idFirstNum);
    objTree.value = obj.value;
    var objBranch = {};
    objBranch.id = String(idFirstNum + "." + idSecondNum);
    objBranch.value = obj.model;
    objBranch.price = obj.price;
    objBranch.rating = obj.rating;
    objTree.data = [];
    objTree.data.push(objBranch);
    prodactsTreeData.push(objTree);
  } else {
    prodactsTreeData.forEach(function (item) {
      if (item.value == value) {
        var createId = function createId() {
          var idPreviousObj = item.data[item.data.length - 1].id;
          var mark = false;
          var arr = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = idPreviousObj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var letter = _step.value;

              if (mark == true) {
                arr.push(letter);
              }

              if (letter == ".") {
                mark = true;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var NumberOfLast = Number(arr.join("")) + 1;
          var mark2 = false;
          var arr2 = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = idPreviousObj[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _letter = _step2.value;

              if (mark2 == false) {
                arr2.push(_letter);
              }

              if (_letter == ".") {
                mark2 = true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var createId = arr2.join("") + String(NumberOfLast);
          return createId;
        };

        var _objBranch = {};
        _objBranch.id = createId();
        _objBranch.value = obj.model;
        _objBranch.price = obj.price;
        _objBranch.rating = obj.rating;
        item.data.push(_objBranch);
      }
    });
  }

  idSecondNum = 0;
});
},{}],"data/order.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userOrder = void 0;
var userOrderServer = [];
var userOrder = new webix.DataCollection({
  data: userOrderServer
});
exports.userOrder = userOrder;
},{}],"views/datatable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datatable = void 0;

var _prodacts = require("../data/prodacts");

var _order = require("../data/order");

var _script = require("../script");

var defaultPhoto = "https://docplayer.ru/docs-images/61/45953296/images/5-2.png";
var curentSelectedItem = 0;
var datatable = {
  view: "datatable",
  id: "myDatatable",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 100,
  data: _prodacts.prodacts,
  select: true,
  columns: [{
    id: "image",
    css: "style_for_image",
    header: "Images",
    fillspace: 2,
    template: function template(obj) {
      return "\n          <image class=\"image\" src=\"".concat(obj.image || defaultPhoto, "\" />\n        ");
    }
  }, {
    template: function template(obj) {
      return "<div>".concat(obj.value, " ").concat(obj.model, "</div>");
    },
    header: [{
      text: "Name"
    }, {
      content: "textFilter"
    }],
    fillspace: 8
  }, {
    id: "price",
    header: "Price",
    fillspace: 2
  }, {
    id: "rating",
    header: "Rating",
    fillspace: 2
  }, {
    id: "amount",
    header: "Amount",
    width: 140,
    template: "{common.myCounter()}"
  }, {
    header: "Buy",
    width: 100,
    template: "<image class='image_buy' src='http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG3.png'></image>"
  }],
  type: {
    myCounter: function myCounter(obj, common, value, column, index) {
      value = 0;
      return "<div class='webix_el_group'>\n              <button type='button' class='webix_inp_counter_prev' tabindex='-1' >-</button>\n              \n              <input type='text' readonly class='webix_inp_counter_value' value=".concat(obj.amount, "></input>\n              <button type='button' class='webix_inp_counter_next' tabindex='-1'>+</button>\n              </div>");
    }
  },
  onClick: {
    webix_inp_counter_prev: function webix_inp_counter_prev(e, id, node) {
      if (this.getSelectedItem().amount == 0) return;
      this.getSelectedItem().amount--;
      $$("myDatatable").refresh();
    },
    webix_inp_counter_next: function webix_inp_counter_next(event, cell, target) {
      this.getSelectedItem().amount++;
      $$("myDatatable").refresh();
    },
    image_buy: function image_buy() {
      var selected = this.getSelectedItem();
      if (selected.amount == undefined || selected.amount === 0) return;

      for (var i = 1; i <= selected.amount; i++) {
        selected.orderedAmount = selected.amount;
      }

      selected.sum = selected.price * selected.orderedAmount;

      if (_order.userOrder.exists(selected.id)) {
        _order.userOrder.updateItem(selected.id, selected);
      } else {
        _order.userOrder.add(selected, -1);
      }

      var count = 0;

      var a = _order.userOrder.filter(function (obj) {
        return count += obj.orderedAmount;
      });

      $$("buttonBage").config.badge = count;
      $$("buttonBage").refresh();
      var name = selected.value + selected.model;
      webix.message("<b>".concat(name, "</b> has been added to your bag"));
      selected.amount = 0;
      $$("myDatatable").refresh();
    }
  },
  on: {
    onItemDblClick: function onItemDblClick(obj) {
      $$("window").show();
    },
    onAfterSelect: function onAfterSelect(id) {
      curentSelectedItem = this.getItem(id);
      $$("windowHead").setValues({
        FirstName: this.getItem(id).value + " " + this.getItem(id).model
      });
      $$("formInWindow").setValues({
        Name: {
          name: this.getItem(id).value + " " + this.getItem(id).model
        },
        Rating: {
          rating: this.getSelectedItem().rating
        },
        Price: {
          price: this.getItem(id).price
        },
        Image: {
          picture: this.getItem(id).image
        }
      });
    }
  }
};
exports.datatable = datatable;
webix.protoUI({
  name: "mytemplate",
  getValue: function getValue() {
    return this.getValues();
  },
  setValue: function setValue(values) {
    this.setValues(values);
  }
}, webix.ui.template);
webix.ui({
  view: "window",
  id: "window",
  modal: true,
  position: "center",
  label: {
    width: 140
  },
  on: {
    onBeforeShow: function onBeforeShow() {
      if (curentSelectedItem.star === 1) {
        $$("iconView").config.icon = "mdi mdi-star star_gold";
        $$("iconView").refresh();
      } else {
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
    cols: [{
      view: "label",
      name: "FirstName",
      css: "text_in_windowHead"
    }, {
      view: "icon",
      icon: "mdi mdi-close",
      css: "alter",
      hotkey: "esc",
      click: function click() {
        $$("window").hide();
      }
    }]
  },
  body: {
    view: "form",
    id: "formInWindow",
    width: 700,
    elementsConfig: {
      labelWidth: 40
    },
    elements: [{
      type: "clean",
      cols: [{
        view: "mytemplate",
        template: "<img class='image_for_window' src='#picture#'/>",
        name: "Image",
        height: 400
      }, {
        type: "clean",
        rows: [{
          view: "mytemplate",
          template: "<p class='text_winow'><b>Name</b> #name#</p>",
          name: "Name",
          height: 100
        }, {
          view: "mytemplate",
          template: "<p class='text_winow'><b>Price</b> #price#</p>",
          name: "Price",
          height: 100
        }, {
          type: "clean",
          cols: [{
            view: "template",
            ratingValue: "",
            template: function template(obj, view) {
              return "<p class='text_winow'><b>Rating</b> ".concat(view.config.ratingValue, "</p>");
            },
            name: "Price",
            id: "ratingWindow"
          }, {
            view: "icon",
            id: "iconView",
            css: "icon_view_star",
            height: 100,
            align: "left",
            icon: "",
            click: function click() {
              if (curentSelectedItem.star === 1) {
                curentSelectedItem.star = 0;
                curentSelectedItem.rating--;
                this.config.icon = "mdi mdi-star star_grey";
                this.refresh();
                $$("ratingWindow").config.ratingValue = curentSelectedItem.rating;
                $$("myDatatable").refresh();
                $$("ratingWindow").refresh();
              } else {
                curentSelectedItem.star = 1;
                curentSelectedItem.rating++;
                this.config.icon = "mdi mdi-star star_gold";
                this.refresh();
                $$("ratingWindow").config.ratingValue = curentSelectedItem.rating;
                $$("myDatatable").refresh();
                $$("ratingWindow").refresh();
              }
            }
          }, {}]
        }]
      }]
    }]
  }
});
},{"../data/prodacts":"data/prodacts.js","../data/order":"data/order.js","../script":"script.js"}],"data/progressOfOrder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressOfOrder = void 0;

var _prodacts = require("./prodacts");

var progressOfOrderServer = [{
  prodactsId: "1",
  amount: 1,
  address: "Minsk",
  delivery: "Post",
  payment: "Card",
  orderDate: new Date(2012, 11, 12),
  status: "Declined",
  orderUserName: "",
  mail: "",
  tel: "",
  userIdLogin: 123
}];
var progressOfOrder = new webix.DataCollection({
  scheme: {
    $init: function $init(obj) {
      _prodacts.prodacts.find(function (item) {
        if (item.id == obj.prodactsId) {
          obj.prodact = item.value + " " + item.model;
        }
      });
    }
  },
  data: progressOfOrderServer
});
exports.progressOfOrder = progressOfOrder;
},{"./prodacts":"data/prodacts.js"}],"views/pageOrder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageOrder = void 0;

var _order = require("../data/order");

var _progressOfOrder = require("../data/progressOfOrder");

var form = {
  view: "form",
  id: "formСheckout",
  scroll: false,
  elements: [{
    view: "text",
    label: "Your Name",
    placeholder: "Type your name",
    required: true,
    name: "text1",
    invalidMessage: "Yor Name can not be empty"
  }, {
    view: "text",
    label: "Email",
    placeholder: "Type your email",
    required: true,
    name: "text2",
    invalidMessage: "Incorrect email"
  }, {
    view: "text",
    label: "Phone",
    placeholder: "Type your phone number",
    required: true,
    name: "text3",
    invalidMessage: "Incorrect phone"
  }, {
    view: "combo",
    id: "combo",
    label: "Delivery type",
    options: ["Master", "Post"]
  }, {
    view: "text",
    label: "Delivery address",
    placeholder: "Type your adress",
    required: true,
    name: "text4",
    invalidMessage: "Delivery address can not be empty"
  }, {
    view: "richselect",
    id: "richselect",
    label: "Payment type",
    options: ["Card", "Post", "Cash"]
  }, {
    view: "button",
    css: "webix_primary",
    value: "Checkout",
    click: function click() {
      // this.getParentView().validate();
      //  create order progress
      _order.userOrder.find(function (obj) {
        var newObj = {};
        newObj.prodactsId = obj.id;
        newObj.amount = obj.orderedAmount;
        var formValue = $$("formСheckout").getValues();
        newObj.orderUserName = formValue.text1;
        newObj.mail = formValue.text2;
        newObj.tel = formValue.text3;
        newObj.address = formValue.text4;
        newObj.payment = $$("richselect").getValue();
        newObj.delivery = $$("combo").getValue();
        newObj.orderDate = new Date();
        newObj.status = "In progress";

        _progressOfOrder.progressOfOrder.add(newObj, -1);
      }); //
      //


      _order.userOrder.clearAll();

      $$("buttonBage").config.badge = "";
      $$("buttonBage").refresh();
      $$("tableHistory").refresh();
      $$("tableHistory").show();
    }
  }],
  rules: {// text1: webix.rules.isNotEmpty,
    // text2: webix.rules.isEmail,
    // text3: webix.rules.isNotEmpty,
    // text3: webix.rules.isNotEmpty
  },
  elementsConfig: {
    labelWidth: 200
  }
};
var pageOrder = {
  id: "pageOrder",
  type: "clean",
  cols: [{
    width: 50
  }, {
    type: "clean",
    rows: [{
      height: 50
    }, form, {
      fillspace: 1
    }]
  }, {
    maxWidth: 650
  }]
};
exports.pageOrder = pageOrder;
},{"../data/order":"data/order.js","../data/progressOfOrder":"data/progressOfOrder.js"}],"views/pageGoods.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.table = exports.pageGoods = void 0;

var _pageOrder = require("./pageOrder");

var _prodacts = require("../data/prodacts");

var _order = require("../data/order");

var defaultPhoto = "https://docplayer.ru/docs-images/61/45953296/images/5-2.png";
var table = {
  view: "datatable",
  id: "tableOrdered",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 100,
  footer: true,
  data: _order.userOrder,
  scheme: {
    $init: function $init(obj) {
      obj.name = "".concat(obj.value, " ").concat(obj.model);
    }
  },
  select: true,
  columns: [{
    id: "image",
    css: "style_for_image",
    header: "Images",
    fillspace: 2,
    footer: {
      text: "Total",
      colspan: 1
    },
    template: function template(obj) {
      return " <image class=\"image\" src=\"".concat(obj.image || defaultPhoto, "\" />");
    }
  }, {
    template: function template(obj) {
      return "<div>".concat(obj.value, " ").concat(obj.model, "</div>");
    },
    header: "Name",
    fillspace: 8
  }, {
    id: "orderedAmount",
    header: "Amount"
  }, {
    id: "price",
    header: "Price",
    fillspace: 2
  }, {
    id: "sum",
    header: "Sum",
    fillspace: 2,
    footer: {
      content: "summColumn"
    }
  }, {
    id: "",
    template: "{common.trashIcon()}",
    width: 40
  }],
  onClick: {
    "wxi-trash": function wxiTrash(e, id) {
      webix.confirm({
        text: "Are you sure?",
        ok: "Delete",
        cancel: "Cancel"
      }).then(function () {
        _order.userOrder.remove(id);

        var count = 0;

        var a = _order.userOrder.filter(function (obj) {
          return count += obj.orderedAmount;
        });

        $$("buttonBage").config.badge = count;
        $$("buttonBage").refresh();
      });
      return false;
    }
  }
};
exports.table = table;
var buttons = {
  cols: [{
    view: "button",
    css: "webix_primary",
    value: "Make order",
    width: 200,
    click: function click() {
      var checkTable = $$("tableOrdered").getFirstId();

      if (checkTable === undefined) {
        webix.message("select prodacts to order");
      } else {
        $$("pageOrder").show();
      }
    }
  }, {
    view: "button",
    value: "Back to Shop",
    width: 200,
    click: function click() {
      $$("myDatatable").show();
    }
  }, {}]
};
var pageGoods = {
  id: "pageGoods",
  rows: [table, buttons]
};
exports.pageGoods = pageGoods;
},{"./pageOrder":"views/pageOrder.js","../data/prodacts":"data/prodacts.js","../data/order":"data/order.js"}],"views/pageHistory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableHistory = void 0;

var _progressOfOrder = require("../data/progressOfOrder");

var tableHistory = {
  view: "datatable",
  id: "tableHistory",
  css: "data_style",
  fixedRowHeight: false,
  rowHeight: 50,
  data: _progressOfOrder.progressOfOrder,
  // scheme: {
  //   $init: function(obj) {
  //     obj.name = `${obj.value} ${obj.model}`;
  //   }
  // },
  columns: [{
    id: "prodact",
    header: [{
      text: "Prodacts"
    }, {
      content: "textFilter"
    }],
    fillspace: 2.5
  }, {
    id: "amount",
    header: "Amount",
    fillspace: 0.5
  }, {
    id: "address",
    header: "Address",
    fillspace: 1
  }, {
    id: "delivery",
    header: "Delivery",
    fillspace: 1
  }, {
    id: "payment",
    header: "Payment",
    fillspace: 1
  }, {
    id: "orderDate",
    header: "Order date",
    format: webix.Date.dateToStr("%Y-%m-%d %H:%i"),
    fillspace: 1
  }, {
    id: "status",
    header: "Status",
    fillspace: 1
  }]
};
exports.tableHistory = tableHistory;
},{"../data/progressOfOrder":"data/progressOfOrder.js"}],"script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toolbar = void 0;

var _prodacts = require("./data/prodacts");

var _datatable = require("./views/datatable");

var _pageGoods = require("./views/pageGoods");

var _pageOrder = require("./views/pageOrder");

var _pageHistory = require("./views/pageHistory");

var toolbar = {
  view: "toolbar",
  id: "toolbar",
  css: "webix_primary",
  padding: 3,
  elements: [{
    view: "label",
    label: "Phone Shop"
  }, {}, {
    view: "label",
    label: "Hi, user!"
  }, {}, {
    view: "button",
    label: "Logout",
    width: 150
  }, {
    view: "button",
    label: "History",
    width: 150,
    click: function click() {
      $$("tableHistory").show();
    }
  }, {
    view: "button",
    label: "Bag",
    id: "buttonBage",
    badge: "",
    width: 90,
    click: function click() {
      $$("tableOrdered").filter(function (obj) {
        return obj.orderedAmount > 0;
      });
      $$("tableOrdered").refresh();
      $$("pageGoods").show();
    }
  }]
};
exports.toolbar = toolbar;
var treeNavigation = {
  view: "tree",
  select: true,
  data: _prodacts.phones,
  width: 180,
  on: {
    onAfterSelect: function onAfterSelect() {
      var selectedItem = this.getSelectedItem().value;

      if (selectedItem == "Phones") {
        $$("myDatatable").filter(function (obj) {
          return obj.value;
        });
      } else {
        $$("myDatatable").filter(function (obj) {
          return obj.value === selectedItem;
        });
      }
    },
    onItemClick: function onItemClick() {
      $$("myDatatable").show();
    }
  }
};
webix.ready(function () {
  webix.ui({
    rows: [toolbar, {
      cols: [treeNavigation, {
        animate: false,
        cells: [_datatable.datatable, _pageGoods.pageGoods, _pageOrder.pageOrder, _pageHistory.tableHistory]
      }]
    }]
  });
});
},{"./data/prodacts":"data/prodacts.js","./views/datatable":"views/datatable.js","./views/pageGoods":"views/pageGoods.js","./views/pageOrder":"views/pageOrder.js","./views/pageHistory":"views/pageHistory.js"}],"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54171" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map