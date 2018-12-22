/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! exports provided: Builder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Builder\", function() { return Builder; });\n\n\nclass Builder {\n\n    static createNewElement(tag, innerContent = null, classStr = null, attr = null) {\n        var el = document.createElement(tag);\n        el.innerHTML = (innerContent) ? innerContent : \"\";\n        el.className = (classStr) ? classStr : \"\";\n\n        if (attr) {\n            attr.map((attr_rl) => el.setAttribute(attr_rl.name, attr_rl.value));\n        }\n\n        return el;\n    }\n\n\n\n    static attachChilderToParent(html, array_el) {\n        array_el.map((el) => html.appendChild(el));\n        return html;\n    };\n\n\n}\n\n//# sourceURL=webpack:///./src/builder.js?");

/***/ }),

/***/ "./src/fun_log.js":
/*!************************!*\
  !*** ./src/fun_log.js ***!
  \************************/
/*! exports provided: FunctionLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FunctionLog\", function() { return FunctionLog; });\n\n\nclass FunctionLog {\n    \n     isSubmitDog(pass){\n        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(pass);\n    }\n\n\n//password\n     isLowerWord(pass) {\n        return /[a-z]/.test(pass)\n    }\n     isUpperWord(pass) {\n        return /[A-Z]/.test(pass)\n    }\n     isNumber(pass) {\n        return /[1-9]/.test(pass)\n    }\n}\n\n//# sourceURL=webpack:///./src/fun_log.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLogin */ \"./src/isLogin.js\");\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show */ \"./src/show.js\");\n\n\n\nconst isLogin = new _isLogin__WEBPACK_IMPORTED_MODULE_0__[\"IsLogin\"]();\n\nlet show = new _show__WEBPACK_IMPORTED_MODULE_1__[\"Show\"]();\n\nconst products = [\n    {\n        \"name\": \"Snikers #1\",\n        \"price\": 205.50,\n        \"data\": 1,\n        \"sex\": \"women\",\n        \"data-check\": 1,\n        \"image\": \"bg-01.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n    },\n    {\n        \"name\": \"Snikers #2\",\n        \"price\": 152.14,\n        \"data\": 2,\n        \"sex\": \"men\",\n        \"data-check\": 2,\n        \"image\": \"bg-02.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n    },\n    {\n        \"name\": \"Snikers #3\",\n        \"price\": 103.22,\n        \"data\": 3,\n        \"sex\": \"women\",\n        \"data-check\": 3,\n        \"image\": \"bg-03.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n    },\n    {\n        \"name\": \"Snikers #4\",\n        \"price\": 240.00,\n        \"data\": 4,\n        \"sex\": \"women\",\n        \"data-check\": 4,\n        \"image\": \"bg-04.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n    },\n    {\n        \"name\": \"Snikers #5\",\n        \"price\": 180.30,\n        \"data\": 5,\n        \"sex\": \"women\",\n        \"data-check\": 5,\n        \"image\": \"bg-05.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Snikers #6\",\n        \"price\": 186.50,\n        \"data\": 6,\n        \"sex\": \"children\",\n        \"data-check\": 6,\n        \"image\": \"bg-06.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n\n    {\n        \"name\": \"Snikers #7\",\n        \"price\": 111.60,\n        \"data\": 7,\n        \"sex\": \"men\",\n        \"data-check\": 7,\n        \"image\": \"bg-07.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Snikers #8\",\n        \"price\": 169.64,\n        \"data\": 8,\n        \"sex\": \"women\",\n        \"data-check\": 8,\n        \"image\": \"bg-08.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"LeBron 16 #9\",\n        \"price\": 215.20,\n        \"data\": 9,\n        \"sex\": \"women\",\n        \"data-check\": 9,\n        \"image\": \"bg-09.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Nike Zoom KD11 #10\",\n        \"price\": 245.00,\n        \"data\": 10,\n        \"sex\": \"men\",\n        \"data-check\": 10,\n        \"image\": \"bg-10.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Snikers #11\",\n        \"price\": 109.30,\n        \"data\": 11,\n        \"sex\": \"children\",\n        \"data-check\": 11,\n        \"image\": \"bg-05.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Snikers #12\",\n        \"price\": 198.50,\n        \"data\": 12,\n        \"sex\": \"women\",\n        \"data-check\": 12,\n        \"image\": \"bg-06.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n\n    {\n        \"name\": \"Snikers #13\",\n        \"price\": 128.69,\n        \"data\": 13,\n        \"sex\": \"women\",\n        \"data-check\": 13,\n        \"image\": \"bg-01.jpg\",\n        \"description\": \"These are very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Snikers #14\",\n        \"price\": 179.00,\n        \"data\": 14,\n        \"sex\": \"men\",\n        \"data-check\": 14,\n        \"image\": \"bg-02.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n    {\n        \"name\": \"Snikers #15\",\n        \"price\": 260.20,\n        \"data\": 15,\n        \"sex\": \"children\",\n        \"data-check\": 15,\n        \"image\": \"bg-03.jpg\",\n        \"description\": \"This is very cool snikers. Nice beautiful and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n\n    {\n        \"name\": \"Snikers #16\",\n        \"price\": 301.20,\n        \"data\": 16,\n        \"sex\": \"men\",\n        \"data-check\": 16,\n        \"image\": \"bg-03.jpg\",\n        \"description\": \"This is very cool snikers. Nice colorfull and quality\",\n        \"more_description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolor eaque magnam ut! Nam, temporibus vitae! Aspernatur dolores excepturi maiores neque numquam quasi voluptatibus.\"\n\n    },\n];\n\nconst storage = localStorage.getItem(\"isLogin\", \"true_el\")\n\n\n//PAGINATION & SHOW ONLY 6 ITEMS\n\n\nlet per_page = 6;\nlet current = 0;\n\nlet pag_buttons = document.getElementsByClassName(\"page-link\");\nlet pagination = document.getElementById(\"pagination\");\nlet s = document.getElementById(\"s\");\nlet countText = document.getElementById(\"count\");\nlet numberGander = 0;\nlet prodArr = products;\n\n\ncountText.innerHTML = \"quantity in this store: \" + products.length;\n\n\n// func - createPag\nfunction createPag(array_products) {\n    let link, li, ul;\n    let activeEl;\n\n    pagination.innerHTML = \"\"; // add\n\n    ul = createNewElement(\"ul\", null, \"pagination\");\n    for (let i = 0; i < Math.ceil(array_products.length / per_page); i++) {\n        link = createNewElement(\"a\", i + 1, \"page-link\", [{\"name\": \"data-link\", \"value\": i}]);\n\n        activeEl = (i == current) ? \"page-item active\" : \"page-item\";\n        li = attachChilderToParent(createNewElement(\"li\", null, activeEl), [link]);\n        ul.appendChild(li);\n    }\n    ;\n\n    // pagination.innerHTML = \"\";\n    pagination.appendChild(ul);\n\n    Array.from(pag_buttons).map((el) => {\n        el.addEventListener(\"click\", (e) => {\n            console.log(e.target.dataset.link);\n            current = e.target.dataset.link;\n            renderProducts(array_products); // сдесь была ошибка - генереровались кнопки только от главного массива\n        });\n    });\n};\n\n\n// CREATE POU PAP\nfunction CreatePouPap() {\n    let buttonClass = document.getElementsByClassName(\"add_card\");\n\n\n    let button;\n    let coastP;\n    let boxDesc;\n    let rowSecond;\n    let buyBox;\n    let imgP;\n    let name;\n    let buttonExit;\n    let buttonExitIcon;\n    let frontPage;\n    let colLeft, colRight;\n    let firstRow;\n    let blockDescription;\n    let mainBlockDescription = document.getElementById(\"main_box_ppu_pap\");\n    let buttonExitIconGet\n\n    Array.from(buttonClass).map((el) => {\n        el.addEventListener(\"click\", (e) => {\n            for (let i = 0; i < products.length; i++) {\n                if (el.name == products[i].data) {\n                    console.log(\"kjhg\");\n\n                    name = createNewElement(\"h5\", products[i].name, \"nameSnickers\");\n                    button = createNewElement(\"button\", \"Add to cart\", \"buy btn btn-primary\");\n                    coastP = createNewElement(\"h5\", \"Coast: \" + products[i].price + \" $\", \"coast\", [{\n                        \"name\": \"href\",\n                        \"value\": \"#\"\n                    }]);\n                    buyBox = attachChilderToParent(createNewElement(\"div\", null, \"buyBox col-xs-4 col-md-12 col-sm-12\"), [button, coastP]);\n\n                    boxDesc = createNewElement(\"div\", products[i].more_description, \"description col-xs-8 col-md-12 col-sm-12\");\n\n                    rowSecond = attachChilderToParent(createNewElement(\"div\", null, \"row\"), [boxDesc, buyBox]);\n\n                    imgP = createNewElement(\"img\", \"\", \"img_snickers\", [{\n                        \"name\": \"src\",\n                        \"value\": \"images/\" + products[i].image\n                    }]);\n\n                    buttonExitIcon = createNewElement(\"i\", \"\", \"fas fa-plus\");\n                    buttonExit = attachChilderToParent(createNewElement(\"div\", null, \"exit\", [{\n                        \"name\": \"id\",\n                        \"value\": \"exitBox\"\n                    }]), [buttonExitIcon]);\n\n                    colLeft = createNewElement(\"div\", \"\", \"col-xs-3 col-md-3 col-sm-3\");\n\n                    colRight = createNewElement(\"div\", \"\", \"col-xs-3 col-md-3 col-sm-3\");\n\n                    frontPage = attachChilderToParent(createNewElement(\"div\", null, \"front col-xs-6 col-md-6 col-sm-6\"), [buttonExit, imgP, name, rowSecond]);\n\n                    firstRow = attachChilderToParent(createNewElement(\"div\", null, \"row\"), [colLeft, frontPage, colRight]);\n\n\n                    blockDescription = attachChilderToParent(createNewElement(\"div\", null, \"block_description col-xs-12 col-md-12 col-sm-12\"), [firstRow]);\n\n                    mainBlockDescription.appendChild(blockDescription)\n\n\n                    buttonExitIconGet = document.getElementById(\"exitBox\");\n                    buttonExitIconGet.addEventListener(\"click\", (e) => {\n                        mainBlockDescription.innerHTML = \"\";\n                        console.log(\"close\");\n                    });\n                }\n                ;\n            }\n            ;\n        });\n    });\n}\n\n\n// SEARCH\n\nconst search_button = document.getElementById(\"search\");\n\nsearch_button.addEventListener(\"click\", (e) => {\n    // console.log(\"khjghj\");\n    search_touch()\n});\n\ns.addEventListener(\"keypress\", (e) => {\n    if (e.keyCode == 13) {\n        // console.log(\"jakjc\");\n        search_touch();\n    }\n    ;\n});\n\n\nfunction search_touch() {\n    let products_filter;\n    const reg = new RegExp(s.value);\n    current = 0;\n    s.value = \"\";\n\n    if (numberGander == 1 || numberGander == 2) {\n        console.log(\"men\");\n        products_filter = products_fil.filter((el) => reg.test(el.name) || reg.test(el.description));\n        renderProducts(products_filter); // add\n        countText.innerHTML = \"your choose compose from:   \" + products_filter.length + \"  items\";\n    } else {\n        products_filter = products.filter((el) => reg.test(el.name) || reg.test(el.description));\n        current = 0;\n        s.value = \"\";\n        renderProducts(products_filter); // add\n        // createPag(products_filter);// add\n\n        countText.innerHTML = \"your choose compose from:   \" + products_filter.length + \"  items\";\n        // let y = document.getElementById(\"x\");\n        // console.log(y);\n    }\n\n\n};\n\n\nfunction firstI() {\n    return current * per_page;\n};\n\nfunction secondI(i, array_products) {\n    return i < current * per_page + per_page && i < array_products.length;\n};\n\n\n//RENDER PRODUCTS\n\nvar catalog = document.getElementById(\"catalog\");\n\nfunction renderProducts(array_products) {\n    catalog.innerHTML = \"\";\n    for (var i = firstI(); secondI(i, array_products); i++) {\n        catalog.appendChild(createCard(array_products[i]));\n    }\n    ;\n\n    //PAGINATION\n    createPag(array_products);\n\n    //POU-PAP\n    CreatePouPap()\n\n};\n\n\n//==================\n\nlet z = document.getElementsByClassName(\"search_gender\");\nlet products_fil = products;\nlet men = \"men\";\nlet women = \"women\";\nlet child = \"children\";\nlet temp;\n\nlet buttonCoast = document.getElementById(\"4\");\n\nlet y = Array.from(z).map((el) => {\n    el.addEventListener(\"click\", (e) => {\n        if (el.id == 1) {\n            console.log(\"click\");\n            filter_sex(men);\n            numberGander = 1;\n            console.log(numberGander);\n\n        } else if (el.id == 2) {\n            filter_sex(women);\n            numberGander = 2;\n            console.log(numberGander);\n            // createPag(products_fil);// add\n\n\n        } else if (el.id == 3) {\n            priceForNumber()\n            numberGander = 3;\n            console.log(numberGander);\n            countText.innerHTML = \"quantity in this store: \" + products.length;\n        } else if (el.id == 4) {\n            priceToTop(products_fil)\n        } else if (el.id == 5) {\n            priceToBottom(products_fil)\n        }\n    })\n})\n\n\nfunction filter_sex(sex) {\n    current = 0;\n    products_fil = products.filter((el) => el.sex == sex);\n    renderProducts(products_fil); // add\n    createPag(products_fil);// add\n    countText.innerHTML = \"your choose compose from:   \" + products_fil.length + \"  items\";\n}\n\n\nfunction priceToTop(prodArr) {\n    // let prodArr = products;\n    current = 0;\n\n    for (let i = 0; i < prodArr.length; i++) {\n        // console.log(prodArr[i].price);\n        for (let j = 0; j < i; j++) {\n            if (prodArr[i].price < prodArr[j].price) {\n                temp = prodArr[i];\n                prodArr[i] = prodArr[j];\n                prodArr[j] = temp\n            }\n        }\n    }\n    renderProducts(prodArr);\n    countText.innerHTML = \"quantity in this store: \" + prodArr.length;\n}\n\nfunction priceToBottom(prodArr) {\n    // let prodArr = products;\n    current = 0;\n\n    for (let i = 0; i < prodArr.length; i++) {\n        // console.log(prodArr[i].price);\n        for (let j = 0; j < i; j++) {\n            if (prodArr[i].price > prodArr[j].price) {\n                temp = prodArr[i];\n                prodArr[i] = prodArr[j];\n                prodArr[j] = temp\n            }\n        }\n    }\n    renderProducts(prodArr);\n    countText.innerHTML = \"quantity in this store: \" + prodArr.length;\n}\n\nfunction priceForNumber(prodArr) {\n    prodArr = products;\n    current = 0;\n\n    for (let i = 0; i < prodArr.length; i++) {\n        // console.log(prodArr[i].data);\n        for (let j = 0; j < i; j++) {\n            if (prodArr[i].data < prodArr[j].data) {\n                temp = prodArr[i];\n                prodArr[i] = prodArr[j];\n                prodArr[j] = temp\n            }\n        }\n    }\n    renderProducts(prodArr);\n    countText.innerHTML = \"quantity in this store: \" + prodArr.length;\n    // console.log(prodArr);\n}\n\n////////////////////// Search ^\n\n\n//==================\n\n// CREATE NEW ELEMENT\n\nfunction createNewElement(tag, innerContent = null, classStr = null, attr = null) {\n    var el = document.createElement(tag);\n    el.innerHTML = (innerContent) ? innerContent : \"\";\n    el.className = (classStr) ? classStr : \"\";\n\n    if (attr) {\n        attr.map((attr_rl) => el.setAttribute(attr_rl.name, attr_rl.value));\n    }\n\n    return el;\n}\n\n\n//CREATE CARD\n\nfunction createCard(product) {\n\n    var link = createNewElement(\"a\", \"Add to cart\", \"btn btn-primary add_card\", [{\"name\": \"href\", \"value\": \"#\"}]);\n    link.setAttribute(\"name\", product.data);\n\n\n    var p = createNewElement(\"p\", product.description, \"card-text\");\n    var title = createNewElement(\"h5\", product.name, \"card-title\");\n    var coast = createNewElement(\"h3\", \"$ \" + product.price, \"\");\n\n\n    var cardBody = attachChilderToParent(createNewElement(\"div\", null, \"card-body\"), [title, p, coast]);\n\n    cardBody.appendChild(link)\n\n\n    var image = createNewElement(\"img\", null, \"card-img-top\", [{\n        \"name\": \"src\",\n        \"value\": \"images/\" + product.image\n    }, {\"name\": \"alt\", \"value\": product.name}]);\n\n    var card = attachChilderToParent(createNewElement(\"div\", null, \"card\"), [image, cardBody]);\n\n    var catalogItem = attachChilderToParent(createNewElement(\"div\", null, \"col-lg-3 col-md-6 mb-2 catalog-item\"), [card]);\n\n    return catalogItem;\n};\n\n\n//CREATE PARRENTS\n\nfunction attachChilderToParent(html, array_el) {\n    array_el.map((el) => html.appendChild(el));\n    return html;\n};\n\n\n///////////// LOGIN\n\nlet log_form = document.getElementById(\"login_form\")\n\n// function createHtmlElement() {\n//\n//     const labelEmail = createNewElement(\"label\", \"Email address\", null, [{\n//         \"name\": \"for\",\n//         \"value\": \"exampleInputEmail1\"\n//     }]);\n//     const emailInput = createNewElement(\"input\", null, \"form-control\", [\n//         {\"name\": \"id\", \"value\": \"exampleInputEmail1\"},\n//         {\"name\": \"placeholder\", \"value\": \"Enter email\"}\n//     ]);\n//     const small = createNewElement(\"small\", \"We'll never share your email with anyone else.\", \"form-text text-muted\", [{\n//         \"name\": \"id\",\n//         \"value\": \"emailHelp\"\n//     }]);\n//\n//     let divEmail = attachChilderToParent(createNewElement(\"div\", null, \"form-group\"), [labelEmail, emailInput, small]);\n//\n//\n//     const labelPass = createNewElement(\"label\", \"Password\", null, [{\"name\": \"for\", \"value\": \"exampleInputPassword1\"}]);\n//     const passInput = createNewElement(\"input\", null, \"form-control\", [\n//         {\"name\": \"id\", \"value\": \"exampleInputPassword1\"},\n//         {\"name\": \"placeholder\", \"value\": \"Password\"},\n//         {\"name\": \"type\", \"value\": \"password\"},\n//     ]);\n//\n//     let divPass = attachChilderToParent(createNewElement(\"div\", null, \"form-group\"), [labelPass, passInput]);\n//\n//     const button = createNewElement(\"button\", \"Login\", \"btn btn-primary\", [{\"name\": \"type\", \"value\": \"submit\"}]);\n//\n//     let form = attachChilderToParent(createNewElement(\"form\", null, null, [{\n//         \"name\": \"id\",\n//         \"value\": \"login_form\"\n//     }]), [divEmail, divPass, button]);\n//\n//     log_form.appendChild(form);\n//\n//     document.getElementById(\"login_form\").addEventListener(\"submit\", submit(), false);\n// }\n// function submit() {\n//     console.log(\"submit\");\n//     localStorage.setItem(\"isLogin\", true);\n// }\n////////\n\n\ndocument.getElementById(\"log_out\").style.display = \"none\"\n\nlet l = document.getElementById(\"log_out\");\nl.addEventListener(\"click\", (e) => {\n    localStorage.removeItem(\"isLogin\");\n    location = location.origin;\n});\n\n\n/////////// IF LOGIN\n\nif (storage) {\n    show.showButtonSearch();\n    document.getElementById(\"title\").innerHTML = \"Catalog\"\n    renderProducts(products);\n    console.log(\"local\");\n    document.getElementById(\"log_out\").style.display = \"block\"\n}\nelse {\n    isLogin.createHtmlElement();\n    document.getElementById(\"title\").innerHTML = \"login\"\n}\n\nconsole.log(localStorage);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/isLogin.js":
/*!************************!*\
  !*** ./src/isLogin.js ***!
  \************************/
/*! exports provided: IsLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsLogin\", function() { return IsLogin; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _fun_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fun_log */ \"./src/fun_log.js\");\n\n\n\nconst fun_log = new _fun_log__WEBPACK_IMPORTED_MODULE_1__[\"FunctionLog\"]();\n\nclass IsLogin {\n    constructor() {\n        this.log_form = document.getElementById(\"login_form\");\n\n    }\n\n\n\n    createHtmlElement() {\n\n        const labelEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Email address\", null, [{\n            \"name\": \"for\",\n            \"value\": \"exampleInputEmail1\"\n        }]);\n        const emailInput = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control\", [\n            {\"name\": \"id\", \"value\": \"exampleInputEmail1\"},\n            {\"name\": \"placeholder\", \"value\": \"Enter email\"}\n        ]);\n        const small = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"small\", \"We'll never share your email with anyone else.\", \"form-text text-muted\", [{\n            \"name\": \"id\",\n            \"value\": \"emailHelp\"\n        }]);\n\n\n        // <div class=\"invalid-feedback\" id=\"error_text_email\"></div>\n        const errorEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", \"kjjkhhjhh\", \"invalid-feedback \", [{\n            \"name\": \"id\",\n            \"value\": \"error_text_email\"\n        }]);\n\n        let divEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelEmail, emailInput, small, errorEmail]);\n\n\n        const labelPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Password\", null, [{\n            \"name\": \"for\",\n            \"value\": \"exampleInputPassword1\"\n        }]);\n        const passInput = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control\", [\n            {\"name\": \"id\", \"value\": \"exampleInputPassword1\"},\n            {\"name\": \"placeholder\", \"value\": \"Password\"},\n            {\"name\": \"type\", \"value\": \"password\"},\n        ]);\n        const errorPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", \"\", \"invalid-feedback\", [{\n            \"name\": \"id\",\n            \"value\": \"error_text_password\"\n        }]);\n\n        let divPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelPass, passInput, errorPass]);\n\n        const button = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"button\", \"Login\", \"btn btn-primary\", [{\n            \"name\": \"type\",\n            \"value\": \"submit\"\n        }]);\n\n        let form = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"form\", null, null, [{\n            \"name\": \"id\",\n            \"value\": \"login_form\"\n        }]), [divEmail, divPass, button]);\n\n        this.log_form.appendChild(form);\n\n        this.log_form.addEventListener(\"submit\", this.submit, false);\n    }\n\n    submit(e) {\n\n        e.preventDefault();\n        // localStorage.setItem(\"isLogin\", true);\n        const password = document.getElementById(\"exampleInputPassword1\").value;\n\n        let errorList = [\"Please\"];/////\n\n        const submitEmail = document.getElementById(\"exampleInputEmail1\").value;\n\n        let errorEmail = [\"Please\"];\n\n        if (! fun_log.isLowerWord(password)){\n            errorList.push(\" enter a-z \");\n        }\n        if (! fun_log.isUpperWord(password)){\n            errorList.push(\" enter A-Z \")\n        }\n        if (! fun_log.isNumber(password)){\n            errorList.push(\" enter 0-9 \");\n        }\n\n        if (errorList.length > 1){\n            const redText = document.getElementById(\"error_text_password\");\n            redText.innerHTML = errorList.join(\" \");\n            document.getElementById(\"exampleInputPassword1\").classList.add(\"is-invalid\")\n        }else{\n            document.getElementById(\"exampleInputPassword1\").classList.remove(\"is-invalid\")\n        }\n\n\n\n\n        if (! fun_log.isSubmitDog(submitEmail)){\n            errorEmail.push(\" Your email was wrong\");\n        }\n\n        if (errorEmail.length > 1 ){\n            const redEmail = document.getElementById(\"error_text_email\");\n            document.getElementById(\"emailHelp\").style.display = \"none\";\n            redEmail.innerHTML = errorEmail.join(\" \");\n            document.getElementById(\"exampleInputEmail1\").classList.add(\"is-invalid\")\n        }else{\n            document.getElementById(\"exampleInputEmail1\").classList.remove(\"is-invalid\")\n        }\n\n        if(errorList.length > 1 && errorEmail.length > 1 ){\n            localStorage.setItem(\"isLogin\", true);\n            location = location.origin;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/isLogin.js?");

/***/ }),

/***/ "./src/show.js":
/*!*********************!*\
  !*** ./src/show.js ***!
  \*********************/
/*! exports provided: Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Show\", function() { return Show; });\nclass Show {\n\n    constructor(){\n        this.your_chose = document.getElementById(\"your_chose\");\n        this.searchBox = document.getElementById(\"searchBox\");\n        this.count = document.getElementById(\"count\")\n    }\n\n    showButtonSearch(){\n        this.your_chose.style.display = \"block\";\n        this.searchBox.style.display = \"block\";\n        this.count.style.display = \"block\";\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/show.js?");

/***/ })

/******/ });