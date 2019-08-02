(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("framer/resource"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer/resource", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("framer/resource"), require("react")) : factory(root["Framer"], root["framer/resource"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_resource__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./package.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Index.tsx": "./code/Index.tsx",
	"./ItemCard.tsx": "./code/ItemCard.tsx",
	"./NavBar.tsx": "./code/NavBar.tsx",
	"./PlayGround.tsx": "./code/PlayGround.tsx",
	"./Primitives.tsx": "./code/Primitives.tsx",
	"./Ref.tsx": "./code/Ref.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Index.tsx":
/*!************************!*\
  !*** ./code/Index.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBOEQ7QUFDOUQscUNBQWlDO0FBQ2pDLHlDQUFrRDtBQUNsRCxpREFBcUU7QUFFckUsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBO0FBQ2QsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRTs7SUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDVCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1FBQ25CLElBQUksQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNYLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDUjthQUFNO1lBQ0gsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO2dCQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ1I7aUJBQU07Z0JBQ0gsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO2dCQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ1I7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQTtLQUN4QixDQUFDLENBQUE7Q0FDTCxDQUFBO0FBQ0QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const NavBar_1 = __webpack_require__(/*! ./NavBar */ "./code/NavBar.tsx");
const ItemCard_1 = __webpack_require__(/*! ./ItemCard */ "./code/ItemCard.tsx");
const react_feather_1 = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
const gap = 24;
const IsEven = i => i % 2 == 0;
const toConfigs = hs => {
    window["__checkBudget__"]();
    let l = 0, r = 0;
    return hs.map((h, i) => {
        window["__checkBudget__"]();
        let y;
        if (i - 2 < 0) {
            y = 0;
        }
        else {
            if (IsEven(i)) {
                l += hs[i - 2] + gap;
                y = l;
            }
            else {
                r += hs[i - 2] + gap;
                y = r;
            }
        }
        return { h: h, y: y };
    });
};
const scaleHs = (iniHs, iniW, scaledW, envokedI, envokedH) => {
    window["__checkBudget__"]();
    let newHs = iniHs.map((h, i) => (h * scaledW) / iniW);
    newHs[envokedI] = envokedH;
    return newHs;
};
const toState = (hs, invokedI) => ({
    invokedI: invokedI,
    configs: toConfigs(hs),
});
const testHs = [
    50,
    350,
    72,
    230,
    180,
    100,
    210,
    250,
    90,
    82,
    120,
    50,
    50,
    350,
    72,
    230,
    180,
    100,
    210,
    250,
    90,
    82,
    120,
    50,
];
const defaultHs = ItemCard_1.itemConfigs.map(config => config.height);
const iniState = toState(defaultHs, -1);
function App(props) {
    window["__checkBudget__"]();
    const [viewState, setViewState] = React.useState(iniState);
    const [current, cycle] = framer_1.useCycle("initial", "envoked");
    const [current_out, cycle_out] = framer_1.useCycle("initial_out", "envoked_out");
    const scrollControls = framer_1.useAnimation();
    const { height, width } = props;
    const subWidth = (width - gap * 3) / 2;
    const newState = envokedI => toState(scaleHs(defaultHs, subWidth, width, envokedI, height), envokedI);
    const transition = { type: "tween", duration: 0.32, ease: "easeOut" };
    const variants = {
        navBar: {
            initial_out: {
                y: 56,
                opacity: 1,
            },
            envoked_out: {
                y: 0,
                opacity: 0,
            },
        },
        scroll: {
            initial_out: {
                height: height - 56 - 24 - 16,
            },
            envoked_out: {
                height: height,
            },
        },
        container: {
            initial: {
                width: width - gap * 2,
                x: gap,
            },
            envoked: {
                width: width,
                x: IsEven(viewState.invokedI) ? 0 : -width - gap,
            },
        },
        item: {
            container: {
                initial: i => ({
                    height: iniState.configs[i].h,
                    width: subWidth,
                    x: IsEven(i) ? 0 : subWidth + gap,
                    y: iniState.configs[i].y,
                    opacity: 1,
                }),
                envoked: i => ({
                    height: viewState.configs[i].h,
                    width: width,
                    x: IsEven(i) ? 0 : width + gap,
                    y: viewState.configs[i].y,
                    opacity: i == viewState.invokedI ? 1 : 0,
                }),
            },
            navBar: {
                initial: {
                    y: 0,
                    opacity: 0,
                },
                envoked: i => ({
                    y: i == viewState.invokedI ? 56 : 0,
                    opacity: i == viewState.invokedI ? 1 : 0,
                }),
            },
            decoRect: {
                initial: {
                    rotate: 4,
                    height: 120 * 2,
                },
                envoked: i => ({
                    rotate: i == viewState.invokedI ? -86 : 4,
                    height: i == viewState.invokedI ? 414 : 120 * 2,
                }),
            },
            img: {
                initial: i => ({
                    width: "100%",
                    height: iniState.configs[i].h - 80,
                    bottom: 80,
                }),
                envoked: i => ({
                    width: i == viewState.invokedI ? "50%" : "100%",
                    height: i == viewState.invokedI ? 530 : viewState.configs[i].h - 80,
                    bottom: i == viewState.invokedI ? 216 : 80,
                }),
            },
        },
    };
    const items = ItemCard_1.itemConfigs.map((item, i) => (React.createElement(ItemCard_1.ItemCard, { item: item, key: i, i: i, variants: variants.item, initial: "initial", transition: transition, onTap: () => {
            window["__checkBudget__"]();
            setViewState(newState(i));
            cycle();
            cycle_out();
        }, justTapped: i == viewState.invokedI })));
    if (viewState.invokedI >= 0) {
        scrollControls.start({
            y: -1 * viewState.configs[viewState.invokedI].y,
            transition: transition,
        });
    }
    return (React.createElement(framer_1.Frame, { height: "100%", width: "100%", background: "null", position: "relative", animate: current_out },
        React.createElement(NavBar_1.NavBar, { leftIcons: [React.createElement(react_feather_1.ChevronLeft, null), React.createElement(react_feather_1.Menu, null)], rightIcons: [React.createElement(react_feather_1.Heart, null), React.createElement(react_feather_1.ShoppingBag, null)], initial: "initial_out", transition: transition, variants: variants.navBar }),
        React.createElement(framer_1.Scroll, { bottom: 0, width: "100%", initial: "initial_out", transition: transition, variants: variants.scroll, scrollAnimate: scrollControls, dragEnabled: viewState.invokedI < 0, wheelEnabled: viewState.invokedI < 0 },
            React.createElement(framer_1.Frame, { name: "container", background: "null", initial: "initial", transition: transition, variants: variants.container, animate: current }, items))));
}
exports.App = App;
exports.__info__ = [{ "name": "App", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ItemCard.tsx":
/*!***************************!*\
  !*** ./code/ItemCard.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUNhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0l0ZW1DYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBNkI7QUFDN0IsOENBQXFDO0FBQ3JDLDZDQUF5QztBQUN6QyxxQ0FBaUM7QUFDakMsaURBQWlDO0FBRWpDLG1DQUFtQztBQUVuQyxTQUFnQixRQUFRLENBQUMsS0FBSzs7SUFDMUIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQzdELE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFFekMsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsV0FBVztRQUNoQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFFBQVEsRUFBQyxRQUFRLEVBQ2pCLE1BQU0sRUFBRSxDQUFDLEVBQ1QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQzVCLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLEtBQUssRUFBRSxLQUFLLEVBQ1osVUFBVSxFQUFDLE1BQU0sRUFDakIsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFO1FBRTNDLG9CQUFDLGVBQU0sSUFDSCxDQUFDLEVBQUUsQ0FBQyxFQUNKLFNBQVMsRUFBRSxDQUFDLG9CQUFDLGlCQUFDLE9BQUcsQ0FBQyxFQUNsQixVQUFVLEVBQUUsRUFBRSxFQUNkLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUMzQjtRQUNGLG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsV0FBVyxFQUNoQixNQUFNLEVBQUUsQ0FBQyxFQUNULFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUMzQixPQUFPLEVBQUUsT0FBTyxFQUNoQixVQUFVLEVBQUUsVUFBVSxFQUN0QixVQUFVLEVBQUUsdUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNqQyxLQUFLLEVBQUMsT0FBTyxFQUNiLE1BQU0sRUFBRSxDQUFDLEVBQ1QsS0FBSyxFQUFFLENBQUMsRUFDUixDQUFDLEVBQUMsS0FBSyxFQUNQLENBQUMsRUFBQyxLQUFLLEdBR1Q7UUFDRixvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFDLGFBQWEsRUFDbEIsTUFBTSxFQUFFLENBQUMsRUFDVCxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFDdEIsVUFBVSxFQUFFLFVBQVUsRUFDdEIsS0FBSyxFQUFFLENBQUMsRUFDUixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQzFCO1FBQ0Ysb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxnQkFBZ0IsRUFDckIsTUFBTSxFQUFFLEVBQUUsRUFDVixLQUFLLEVBQUUsR0FBRyxFQUNWLE1BQU0sRUFBRSxFQUFFLEVBQ1YsVUFBVSxFQUFDLE1BQU07WUFFakIsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxNQUFNLEVBQ1gsR0FBRyxFQUFFLENBQUMsRUFDTixNQUFNLEVBQUMsTUFBTSxFQUNiLEtBQUssRUFBQyxNQUFNLEVBQ1osVUFBVSxFQUFDLE1BQU0sRUFDakIsS0FBSyxFQUFFO29CQUNILFFBQVEsRUFBRSxFQUFFO29CQUNaLFVBQVUsRUFBRSxHQUFHO29CQUNmLFVBQVUsRUFBRSxNQUFNO29CQUNsQixhQUFhLEVBQUUsV0FBVztpQkFDN0I7Z0JBRUQsa0NBQU8sSUFBSSxDQUFRLENBQ2Y7WUFDUixvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFDLE9BQU8sRUFDWixHQUFHLEVBQUUsRUFBRSxFQUNQLE1BQU0sRUFBQyxNQUFNLEVBQ2IsS0FBSyxFQUFDLE1BQU0sRUFDWixVQUFVLEVBQUMsTUFBTSxFQUNqQixLQUFLLEVBQUU7b0JBQ0gsUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLEdBQUc7b0JBQ2YsVUFBVSxFQUFFLE1BQU07aUJBQ3JCO2dCQUVELGtDQUFPLEtBQUssQ0FBUSxDQUNoQixDQUNKLENBQ0osQ0FDWCxDQUFBO0NBQ0o7QUF4RkQsNEJBd0ZDO0FBRUQsU0FBZ0IsUUFBUTs7SUFDcEIsT0FBTyxvQkFBQyxRQUFRLElBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUksQ0FBQTtDQUM1QztBQUZELDRCQUVDO0FBRUQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFOztJQUNqRSxPQUFPO1FBQ0gsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsR0FBRyxHQUFHLFlBQVk7UUFDMUIsS0FBSyxFQUFFLElBQUksS0FBSyxLQUFLO1FBQ3JCLEdBQUcsRUFBRSxjQUFHLENBQUMsZUFBZSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztRQUNqRCxNQUFNLEVBQUUsWUFBWSxNQUFNLEVBQUU7UUFDNUIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsTUFBTSxFQUFFLE1BQU07S0FDakIsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRztJQUN2QixJQUFJLENBQ0Esc0JBQXNCLEVBQ3RCLENBQUMsRUFDRCxHQUFHLEVBQ0gsU0FBUyxFQUNULG1CQUFtQixFQUNuQixrR0FBa0csQ0FDckc7SUFDRCxJQUFJLENBQ0EsNEJBQTRCLEVBQzVCLENBQUMsRUFBRSxFQUNILEdBQUcsRUFDSCxTQUFTLEVBQ1QsK0RBQStELEVBQy9ELGdKQUFnSixDQUNuSjtJQUNELElBQUksQ0FDQSxrQkFBa0IsRUFDbEIsQ0FBQyxFQUNELEdBQUcsRUFDSCxTQUFTLEVBQ1Qsc0NBQXNDLEVBQ3RDLGtGQUFrRixDQUNyRjtJQUNELElBQUksQ0FDQSx3QkFBd0IsRUFDeEIsQ0FBQyxFQUNELEdBQUcsRUFDSCxTQUFTLEVBQ1QsK0RBQStELEVBQy9ELGdKQUFnSixDQUNuSjtJQUNELElBQUksQ0FDQSxvQkFBb0IsRUFDcEIsRUFBRSxFQUNGLEdBQUcsRUFDSCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGlPQUFpTyxDQUNwTztJQUNELElBQUksQ0FDQSx3QkFBd0IsRUFDeEIsQ0FBQyxFQUNELEdBQUcsRUFDSCxTQUFTLEVBQ1QsNkNBQTZDLEVBQzdDLGlOQUFpTixDQUNwTjtJQUNELElBQUksQ0FDQSxlQUFlLEVBQ2YsQ0FBQyxFQUNELEdBQUcsRUFDSCxTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLGlHQUFpRyxDQUNwRztJQUNELElBQUksQ0FDQSw0QkFBNEIsRUFDNUIsQ0FBQyxFQUNELEdBQUcsRUFDSCxTQUFTLEVBQ1Qsb0JBQW9CLEVBQ3BCLDJJQUEySSxDQUM5STtJQUNELElBQUksQ0FDQSxzQkFBc0IsRUFDdEIsQ0FBQyxFQUNELEdBQUcsRUFDSCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLGtHQUFrRyxDQUNyRztJQUNELElBQUksQ0FDQSw0QkFBNEIsRUFDNUIsQ0FBQyxFQUFFLEVBQ0gsR0FBRyxFQUNILFNBQVMsRUFDVCwrREFBK0QsRUFDL0QsZ0pBQWdKLENBQ25KO0lBQ0QsSUFBSSxDQUNBLGtCQUFrQixFQUNsQixDQUFDLEVBQ0QsR0FBRyxFQUNILFNBQVMsRUFDVCxzQ0FBc0MsRUFDdEMsa0ZBQWtGLENBQ3JGO0lBQ0QsSUFBSSxDQUNBLHdCQUF3QixFQUN4QixDQUFDLEVBQ0QsR0FBRyxFQUNILFNBQVMsRUFDVCwrREFBK0QsRUFDL0QsZ0pBQWdKLENBQ25KO0lBQ0QsSUFBSSxDQUNBLG9CQUFvQixFQUNwQixFQUFFLEVBQ0YsR0FBRyxFQUNILFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsaU9BQWlPLENBQ3BPO0lBQ0QsSUFBSSxDQUNBLHdCQUF3QixFQUN4QixDQUFDLEVBQ0QsR0FBRyxFQUNILFNBQVMsRUFDVCw2Q0FBNkMsRUFDN0MsaU5BQWlOLENBQ3BOO0lBQ0QsSUFBSSxDQUNBLGVBQWUsRUFDZixDQUFDLEVBQ0QsR0FBRyxFQUNILFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsaUdBQWlHLENBQ3BHO0lBQ0QsSUFBSSxDQUNBLDRCQUE0QixFQUM1QixDQUFDLEVBQ0QsR0FBRyxFQUNILFNBQVMsRUFDVCxvQkFBb0IsRUFDcEIsMklBQTJJLENBQzlJO0NBQ0osQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const resource_1 = __webpack_require__(/*! framer/resource */ "framer/resource");
const Primitives_1 = __webpack_require__(/*! ./Primitives */ "./code/Primitives.tsx");
const NavBar_1 = __webpack_require__(/*! ./NavBar */ "./code/NavBar.tsx");
const react_feather_1 = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
//i, variants, initial, transition,
function ItemCard(props) {
    window["__checkBudget__"]();
    let { item, i, variants, initial, transition, onTap } = props;
    const { name, height, price, img } = item;
    return (React.createElement(framer_1.Frame, { name: "Container", 
        // height={height}
        // width="100%"
        overflow: "hidden", custom: i, variants: variants.container, initial: initial, transition: transition, onTap: onTap, background: "null", style: { paddingLeft: 16, borderRadius: 0 } },
        React.createElement(NavBar_1.NavBar, { i: i, leftIcons: [React.createElement(react_feather_1.X, null)], rightIcons: [], initial: initial, transition: transition, variants: variants.navBar }),
        React.createElement(framer_1.Frame, { name: "Deco Rect", custom: i, variants: variants.decoRect, initial: initial, transition: transition, background: Primitives_1.primitives.color.tint, width: "1000%", bottom: 0, right: 0, x: "50%", y: "50%" }),
        React.createElement(framer_1.Frame, { name: "Product Img", custom: i, variants: variants.img, transition: transition, right: 0, background: { src: img } }),
        React.createElement(framer_1.Frame, { name: "Spec Container", height: 56, width: 120, bottom: 16, background: "null" },
            React.createElement(framer_1.Frame, { name: "Name", top: 0, height: "auto", width: "100%", background: "null", style: {
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16px",
                    textTransform: "uppercase",
                } },
                React.createElement("span", null, name)),
            React.createElement(framer_1.Frame, { name: "Price", top: 32, height: "auto", width: "100%", background: "null", style: {
                    fontSize: 12,
                    fontWeight: 300,
                    lineHeight: "24px",
                } },
                React.createElement("span", null, price)))));
}
exports.ItemCard = ItemCard;
function TestCard() {
    window["__checkBudget__"]();
    return React.createElement(ItemCard, { item: exports.itemConfigs[1] });
}
exports.TestCard = TestCard;
const item = (name, heightOffset, price, itemNo, headline, detail) => {
    window["__checkBudget__"]();
    return {
        name: name,
        height: 248 + heightOffset,
        price: `$${price}.00`,
        img: resource_1.url(`code/images/${name.toUpperCase()}.png`),
        itemNo: `Item No. ${itemNo}`,
        headline: headline,
        detail: detail,
    };
};
exports.itemConfigs = [
    item("MISTER PRISME PRIMER", 0, 127, "P090516", "MATTIFYING PRIMER", "A soft skin primer that can be used alone or under makeup for a velvety smooth matte complexion."),
    item("L'INTERDIT ÉDITION COUTURE", -48, 230, "P090495", "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT", "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."),
    item("VOLUME DISTURBIA", 0, 250, "P072590", "VOLUME & CURVE MASCARA 24 HOURS WEAR", "Volume Disturbia Excessive Volume & Curve mascara – 24-hours wear #MADETODISTURB"),
    item("MISTER MATIFYING STICK", 0, 250, "P090495", "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT", "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."),
    item("GENTLEMAN GIVENCHY", 32, 230, "P007085", "EAU DE TOILETTE", "Gentleman Givenchy Eau de Parfum, a new intensity for men who dance to their own beat. An elegant woody-floral Oriental reminiscent of nightfall, composed with an explosive signature. A floral played out in masculine notes."),
    item("MATISSIME VELVET FLUID", 0, 230, "P081931", "RADIANT MAT FLUID FOUNDATION SPF 20 - PA+++", "Givenchy turns the light on for matte, in a radiant-matte fluid foundation. Just like velvet, it absorbs and reflects light and is comfortable and soft. Long-lasting coverage for normal to combination skins."),
    item("TEINT COUTURE", 0, 230, "P090041", "EMBELLISHING CONCEALER", "A dual-toned practical concealer that hides imperfections and wakes up the eye area with light."),
    item("TEINT COUTURE RADIANT DROP", 0, 230, "P080463", "2-IN-1 HIGHLIGHTER", "With its two-in-one applicator, this liquid highlighter is applied in touches of light or all over the face for a dewy iridescent finish."),
    item("MISTER PRISME PRIMER", 0, 127, "P090516", "MATTIFYING PRIMER", "A soft skin primer that can be used alone or under makeup for a velvety smooth matte complexion."),
    item("L'INTERDIT ÉDITION COUTURE", -48, 230, "P090495", "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT", "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."),
    item("VOLUME DISTURBIA", 0, 250, "P072590", "VOLUME & CURVE MASCARA 24 HOURS WEAR", "Volume Disturbia Excessive Volume & Curve mascara – 24-hours wear #MADETODISTURB"),
    item("MISTER MATIFYING STICK", 0, 250, "P090495", "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT", "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."),
    item("GENTLEMAN GIVENCHY", 32, 230, "P007085", "EAU DE TOILETTE", "Gentleman Givenchy Eau de Parfum, a new intensity for men who dance to their own beat. An elegant woody-floral Oriental reminiscent of nightfall, composed with an explosive signature. A floral played out in masculine notes."),
    item("MATISSIME VELVET FLUID", 0, 230, "P081931", "RADIANT MAT FLUID FOUNDATION SPF 20 - PA+++", "Givenchy turns the light on for matte, in a radiant-matte fluid foundation. Just like velvet, it absorbs and reflects light and is comfortable and soft. Long-lasting coverage for normal to combination skins."),
    item("TEINT COUTURE", 0, 230, "P090041", "EMBELLISHING CONCEALER", "A dual-toned practical concealer that hides imperfections and wakes up the eye area with light."),
    item("TEINT COUTURE RADIANT DROP", 0, 230, "P080463", "2-IN-1 HIGHLIGHTER", "With its two-in-one applicator, this liquid highlighter is applied in touches of light or all over the face for a dewy iridescent finish."),
];
exports.__info__ = [{ "name": "ItemCard", "children": false, "type": "component" }, { "name": "TestCard", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/NavBar.tsx":
/*!*************************!*\
  !*** ./code/NavBar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2QmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9OYXZCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUErQztBQUUvQyxTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDeEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRXpFLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsTUFBTSxFQUFFLENBQUMsRUFDVCxJQUFJLEVBQUMsZ0JBQWdCLEVBQ3JCLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFlBQVksRUFBQyxlQUFlLEVBQzVCLE1BQU0sRUFBRSxFQUFFLEVBQ1YsS0FBSyxFQUFDLE1BQU0sRUFDWixPQUFPLEVBQUUsRUFBRSxFQUNYLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFFBQVEsRUFBRSxRQUFRO1FBRWxCLG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsWUFBWSxFQUNqQixTQUFTLEVBQUMsWUFBWSxFQUN0QixHQUFHLEVBQUUsRUFBRSxFQUNQLE1BQU0sRUFBQyxNQUFNLEVBQ2IsS0FBSyxFQUFDLE1BQU0sRUFDWixZQUFZLEVBQUMsT0FBTyxFQUNwQixVQUFVLEVBQUMscUJBQXFCLElBRTVCLFNBQVMsQ0FDVDtRQUNSLG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsYUFBYSxFQUNsQixTQUFTLEVBQUMsWUFBWSxFQUN0QixHQUFHLEVBQUUsRUFBRSxFQUNQLE1BQU0sRUFBQyxNQUFNLEVBQ2IsS0FBSyxFQUFDLE1BQU0sRUFDWixZQUFZLEVBQUMsS0FBSyxFQUNsQixVQUFVLEVBQUMscUJBQXFCLElBRTVCLFVBQVUsQ0FDVixDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBeENELHdCQXdDQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function NavBar(props) {
    window["__checkBudget__"]();
    const { leftIcons, rightIcons, initial, transition, variants, i } = props;
    return (React.createElement(framer_1.Stack, { custom: i, name: "Navigation Bar", direction: "horizontal", distribution: "space-between", height: 24, width: "100%", padding: 16, initial: initial, transition: transition, variants: variants },
        React.createElement(framer_1.Stack, { name: "Left Icons", direction: "horizontal", gap: 16, height: "100%", width: "auto", distribution: "start", background: "rgba(255, 0, 0, .5)" }, leftIcons),
        React.createElement(framer_1.Stack, { name: "Right Icons", direction: "horizontal", gap: 16, height: "100%", width: "auto", distribution: "end", background: "rgba(255, 0, 0, .5)" }, rightIcons)));
}
exports.NavBar = NavBar;
exports.__info__ = [{ "name": "NavBar", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/PlayGround.tsx":
/*!*****************************!*\
  !*** ./code/PlayGround.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheUdyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGxheUdyb3VuZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsaUNBQTJDO0FBQzNDLG1DQUEwRTtBQUUxRSx5QkFBeUI7QUFDekIsNENBQTRDO0FBRTVDLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixpQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDekMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFakIsT0FBTyxvQkFBQyxjQUFLLElBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFJLENBQUE7Q0FDNUM7QUFSRCw0QkFRQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function PlayItem(props) {
    window["__checkBudget__"]();
    react_1.useEffect(() => console.log("hello"), []);
    const [state, setState] = react_1.useState(0);
    const { height, width } = props;
    console.log("hi");
    return React.createElement(framer_1.Frame, { height: 300, width: 500 });
}
exports.PlayItem = PlayItem;
exports.__info__ = [{ "name": "PlayItem", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Primitives.tsx":
/*!*****************************!*\
  !*** ./code/Primitives.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWl0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUHJpbWl0aXZlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN0QixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsU0FBUztLQUNsQjtDQUNKLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
exports.primitives = {
    color: {
        brand: "#F0E5FF",
        tint: "#F3F3F3",
    },
};
exports.__info__ = [];


/***/ }),

/***/ "./code/Ref.tsx":
/*!**********************!*\
  !*** ./code/Ref.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9SZWYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTREO0FBRTVELE1BQU0sTUFBTSxHQUFHO0lBQ1gsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFNBQVM7Q0FDckIsQ0FBQTtBQUNELE1BQU0sTUFBTSxHQUFHO0lBQ1gsR0FBRyxFQUFFLEdBQUc7SUFDUixLQUFLLEVBQUUsR0FBRztDQUNiLENBQUE7QUFDRCxNQUFNLE9BQU8sR0FBRztJQUNaLEtBQUssRUFBRSxzQ0FBc0M7SUFDN0MsSUFBSSxFQUFFLHFDQUFxQztDQUM5QyxDQUFBO0FBRUQsTUFBTSxJQUFJLEdBQUcsYUFBSSxDQUFDO0lBQ2QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO0lBQ3BCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsTUFBTSxFQUFFLENBQUM7SUFDVCxTQUFTLEVBQUUsQ0FBQztJQUNaLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSztDQUN4QixDQUFDLENBQUE7QUFFRixTQUFnQixTQUFTOztJQUNyQixPQUFPO1FBQ0gsS0FBSyxFQUFFLEdBQUcsRUFBRTs7WUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7WUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7WUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7U0FDOUQ7S0FDSixDQUFBO0NBQ0o7QUFWRCw4QkFVQztBQUVELFNBQWdCLElBQUk7O0lBQ2hCLE9BQU87UUFDSCxPQUFPLEVBQUU7WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3pCO0tBQ0osQ0FBQTtDQUNKO0FBUEQsb0JBT0M7QUFFRCxTQUFnQixTQUFTOztJQUNyQixPQUFPO1FBQ0gsT0FBTyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2QsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQy9CO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsSUFBSTtTQUNqQjtLQUNKLENBQUE7Q0FDSjtBQVhELDhCQVdDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const colors = {
    enable: "#FF6888",
    disable: "#463D61",
};
const scales = {
    mid: 0.9,
    small: 0.7,
};
const shadows = {
    light: "0px 8px 32px rgba(255, 41, 87, 0.48)",
    dark: "0px 8px 32px rgba(70, 61, 98, 0.48)",
};
const data = framer_1.Data({
    color: colors.enable,
    toggleColor: "white",
    isEnable: true,
    transX: 0,
    cardScale: 1,
    shadow: shadows.light,
});
function TapToggle() {
    window["__checkBudget__"]();
    return {
        onTap: () => {
            window["__checkBudget__"]();
            data.isEnable = !data.isEnable;
            data.color = data.isEnable ? colors.enable : colors.disable;
            data.transX = data.isEnable ? 0 : 32;
            data.shadow = data.isEnable ? shadows.light : shadows.dark;
            data.toggleColor = data.isEnable ? "white" : colors.disable;
        },
    };
}
exports.TapToggle = TapToggle;
function Card() {
    window["__checkBudget__"]();
    return {
        animate: {
            background: data.color,
            boxShadow: data.shadow,
        },
    };
}
exports.Card = Card;
function AniToggle() {
    window["__checkBudget__"]();
    return {
        animate: {
            x: data.transX,
            background: data.toggleColor,
        },
        transition: {
            ease: "easeOut",
            duration: 0.24,
        },
    };
}
exports.AniToggle = AniToggle;
exports.__info__ = [{ "name": "TapToggle", "type": "override" }, { "name": "Card", "type": "override" }, { "name": "AniToggle", "type": "override" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.16","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.2","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.2.6","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/basiclines.map"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/basiclines.map */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/basiclines.map/dist/index.js")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.7.10"},"peerDependencies":{"framer":"^0.7.10","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"d721825f-84b6-498e-bb83-23730f4c9e8a","displayName":"Map"},"author":"basiclines","dependencies":{"apple-mapkit-js":"^6.0.1"},"keywords":["interactive","map","apple maps","google maps","mapbox"],"name":"@framer/basiclines.map","version":"1.2.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/benjamin.icon-generator"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/benjamin.icon-generator */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/benjamin.icon-generator/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/benjamin.icon-generator"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@framer/framer.device-hand-iphone-1":"^1.0.0","@framer/framer.device-skin-apple-iphone-x-silver":"^1.0.0","@types/react":"^16.8.23"},"peerDependencies":{"framer":"^0.10.0 || ^1","react":"^16.8.0","react-dom":"^16.8.0"},"framer":{"id":"f5829b53-b134-4faf-be07-21309a916749","displayName":"Icon Generator"},"author":"Benjamin den Boer","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.4","@fortawesome/free-regular-svg-icons":"^5.3.1","@fortawesome/react-fontawesome":"^0.1.2","@material-ui/core":"^4.2.1","feather-icons":"^4.21.0","react-feather":"^2.0.3","webfontloader":"^1.6.28"},"keywords":["icons","icon","feather","material","fontawesome","svg"],"name":"@framer/benjamin.icon-generator","version":"1.15.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/derlukas.scroll-away"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/derlukas.scroll-away */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/derlukas.scroll-away/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/derlukas.scroll-away"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31"},"peerDependencies":{"framer":"^0.9.5 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"d95c371a-401b-4b75-a2b1-e62ed2930459","displayName":"Scroll Away"},"author":"Lukas Guschlbauer","name":"@framer/derlukas.scroll-away","version":"1.8.0","dependencies":{"@framer/derlukas.scroll-away":"^1.2.0"}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/djfumberger.mockmatic"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/djfumberger.mockmatic */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/djfumberger.mockmatic/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/djfumberger.mockmatic"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"f41185db-0de0-423f-9d73-7621d8f42810","displayName":"Mockmatic"},"author":"Dave Fumberger","dependencies":{"three":"^0.105.2","three-obj-loader":"^1.1.3"},"name":"@framer/djfumberger.mockmatic","version":"1.14.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/gusso.magic-move"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/gusso.magic-move */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/gusso.magic-move/dist/index.js")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"312dcc85-8f45-492d-acf6-0c6d39046726","displayName":"Magic Move"},"author":"Henrique Gusso","name":"@framer/gusso.magic-move","version":"3.3.0","dependencies":{}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/ismael.google-maps"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/ismael.google-maps */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/ismael.google-maps/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/ismael.google-maps"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8","framer":"^1.0"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"cf50f147-14e5-4f9a-ab08-afe80b6dcb35","displayName":"Google Maps"},"author":"Ismael Martínez","name":"@framer/ismael.google-maps","version":"2.1.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/kasimir.iphone-x-kit"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/kasimir.iphone-x-kit */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/kasimir.iphone-x-kit"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","version":"1.21.0","devDependencies":{"@framer/framer.device-hand-iphone-2":"1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"0.10.1 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/mapbox.mapbox"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/mapbox.mapbox */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/mapbox.mapbox/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/mapbox.mapbox"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/enzyme":"^3.9.1","@types/jest":"^24.0.11","@types/react":"^16.4.16","@types/react-map-gl":"^4.1.1","enzyme":"^3.9.0","enzyme-adapter-react-16.3":"^1.6.2","jest":"^24.5.0","ts-jest":"^24.0.0","typescript":"^3.3.4000"},"peerDependencies":{"framer":"^0.10.5","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"e214905c-4c71-43de-b9a8-9fba272c32f8","displayName":"Mapbox"},"author":"Mapbox","dependencies":{"immer":"^2.1.0","react-map-gl":"^4.0.12","react-map-gl-geocoder":"^1.7.0"},"keywords":["map","interactive","geojson","markers","search","geocoder","Mapbox","location","animation","map camera","navigation","trending"],"name":"@framer/mapbox.mapbox","version":"1.3.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/mikejohnson.material-icons"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/mikejohnson.material-icons */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/mikejohnson.material-icons/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/mikejohnson.material-icons"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.1.27"},"peerDependencies":{"framer":"^0.1.27","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"fff8a168-2c22-447d-990a-ea224981af90","displayName":"Material Icons"},"author":"Mike Johnson","name":"@framer/mikejohnson.material-icons","version":"1.3.0","dependencies":{"styled-components":"^3.4.2"}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/steveruizok.mapbox-static-map"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/steveruizok.mapbox-static-map */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/steveruizok.mapbox-static-map/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/steveruizok.mapbox-static-map"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"82265c16-8bf4-4ec7-a557-3631095d89c3","displayName":"Mapbox Static Map"},"author":"Steve Ruiz","name":"@framer/steveruizok.mapbox-static-map","version":"1.16.0","dependencies":{"@mapbox/geo-viewport":"^0.4.0","geojson-extent":"^0.3.2"}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"f39012cf-34c0-4cbe-a2f8-0221fe4e033f\"},\"author\":\"YY Z\",\"dependencies\":{\"@framer/basiclines.map\":\"^1.2.0\",\"@framer/benjamin.icon-generator\":\"^1.15.0\",\"@framer/derlukas.scroll-away\":\"^1.8.0\",\"@framer/djfumberger.mockmatic\":\"^1.14.0\",\"@framer/gusso.magic-move\":\"^3.3.0\",\"@framer/ismael.google-maps\":\"^2.1.0\",\"@framer/kasimir.iphone-x-kit\":\"^1.21.0\",\"@framer/mapbox.mapbox\":\"^1.3.0\",\"@framer/mikejohnson.material-icons\":\"^1.3.0\",\"@framer/steveruizok.mapbox-static-map\":\"^1.16.0\",\"delay\":\"^4.3.0\",\"emotion\":\"^10.0.14\",\"react-3d-viewer\":\"^1.0.12\",\"react-feather\":\"^2.0.3\",\"react-stack-grid\":\"^0.7.1\",\"react-stonecutter\":\"^0.3.10\",\"react-three-fiber\":\"^2.2.13\",\"three\":\"^0.106.2\",\"three-gltf-loader\":\"^1.106.0\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer/resource":
/*!******************************************************************************************************************************!*\
  !*** external {"root":"framer/resource","commonjs2":"framer/resource","commonjs":"framer/resource","amd":"framer/resource"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer_resource__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});