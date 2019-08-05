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
	"./Bag.tsx": "./code/Bag.tsx",
	"./Button.tsx": "./code/Button.tsx",
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

/***/ "./code/Bag.tsx":
/*!**********************!*\
  !*** ./code/Bag.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CYWcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE0QztBQUM1Qyw2Q0FBeUM7QUFDekMsaURBQTJDO0FBRTNDLFNBQWdCLEdBQUcsQ0FBQyxLQUFLOztJQUNyQixNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDNUMsTUFBTSxXQUFXLEdBQUcscUJBQVksRUFBRSxDQUFBO0lBQ2xDLE1BQU0sUUFBUSxHQUFHO1FBQ2IsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxDQUFDO2FBQ1Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLEVBQUU7YUFDWDtTQUNKO0tBQ0osQ0FBQTtJQUNELElBQUksT0FBTyxHQUFHLE9BQU8sSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtJQUMzRCxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFCLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFDLEtBQUssRUFDVixJQUFJLEVBQUUsRUFBRSxFQUNSLFVBQVUsRUFBQyxNQUFNO1FBRWpCLG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsV0FBVyxFQUNoQixNQUFNLFFBQ04sUUFBUSxFQUFDLFFBQVEsRUFDakIsWUFBWSxFQUFFLEdBQUcsRUFDakIsT0FBTyxFQUFFLFdBQVcsRUFDcEIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQzVCLFVBQVUsRUFBRSx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQ3ZDLFVBQVUsRUFBQyxNQUFNO1lBRWpCLG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsYUFBYSxFQUNsQixJQUFJLEVBQUUsRUFBRSxFQUNSLE1BQU0sUUFDTixRQUFRLEVBQUMsUUFBUSxFQUNqQixVQUFVLEVBQUMsTUFBTTtnQkFFakIsb0JBQUMsMkJBQVcsT0FBRyxDQUNYO1lBQ1AsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsQ0FBQztnQkFDTixvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFDLFVBQVUsRUFDZixJQUFJLEVBQUUsRUFBRSxFQUNSLFlBQVksRUFBRSxHQUFHLEVBQ2pCLGVBQWUsRUFBRSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZDLEtBQUssRUFBQyxPQUFPLEVBQ2IsS0FBSyxFQUFFO3dCQUNILFFBQVEsRUFBRSxNQUFNO3dCQUNoQixVQUFVLEVBQUUsR0FBRzt3QkFDZixVQUFVLEVBQUUsRUFBRTtxQkFDakIsRUFDRCxNQUFNLFFBQ04sQ0FBQyxFQUFFLEVBQUUsRUFDTCxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBRUwsU0FBUyxDQUNOLENBRVIsQ0FDSixDQUNYLENBQUE7Q0FDSjtBQWhFRCxrQkFnRUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Primitives_1 = __webpack_require__(/*! ./Primitives */ "./code/Primitives.tsx");
const react_feather_1 = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
function Bag(props) {
    window["__checkBudget__"]();
    const { itemCount, hidable = false } = props;
    const aniControls = framer_1.useAnimation();
    const variants = {
        container: {
            hide: {
                size: 0
            },
            reveal: {
                size: 64
            },
        },
    };
    let initial = hidable && itemCount == 0 ? "hide" : "reveal";
    aniControls.start(initial);
    return (React.createElement(framer_1.Frame, { name: "Bag", size: 24, background: "null" },
        React.createElement(framer_1.Frame, { name: "Container", center: true, overflow: "hidden", borderRadius: 100, animate: aniControls, initial: initial, variants: variants.container, transition: Primitives_1.primitives.transitions.fast, background: "null" },
            React.createElement(framer_1.Frame, { name: "Icon Layout", size: 24, center: true, overflow: "hidden", background: "null" },
                React.createElement(react_feather_1.ShoppingBag, null)),
            itemCount == 0 && !hidable ?
                null :
                React.createElement(framer_1.Frame, { name: "Count BG", size: 20, borderRadius: 100, backgroundColor: Primitives_1.primitives.color.brand, color: "white", style: {
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: 20,
                    }, center: true, x: 10, y: -10 }, itemCount))));
}
exports.Bag = Bag;
exports.__info__ = [{ "name": "Bag", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Button.tsx":
/*!*************************!*\
  !*** ./code/Button.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE0QztBQUM1Qyw2Q0FBeUM7QUFDekMsaURBQTJDO0FBRTNDLFNBQWdCLE1BQU0sQ0FBQyxLQUFLOztJQUN4QixNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUM1QyxNQUFNLFdBQVcsR0FBRyxxQkFBWSxFQUFFLENBQUE7SUFDbEMsTUFBTSxRQUFRLEdBQUc7UUFDYixPQUFPLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ0wsZUFBZSxFQUFFLHVCQUFVLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQ3RDLE1BQU0sRUFBRSxrQ0FBa0M7Z0JBQzFDLEtBQUssRUFBRSxHQUFHO2dCQUNWLFVBQVUsRUFBRSx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJO2FBQzFDO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLGVBQWUsRUFBRSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUN2QyxNQUFNLEVBQUUsaUNBQWlDO2dCQUN6QyxVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSzthQUMzQztZQUNELE1BQU0sRUFBRTtnQkFDSixlQUFlLEVBQUUsdUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDdEMsTUFBTSxFQUFFLGtDQUFrQztnQkFDMUMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsVUFBVSxFQUFFLHVCQUFVLENBQUMsV0FBVyxDQUFDLElBQUk7YUFDMUM7U0FDSjtRQUNELFdBQVcsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixLQUFLLEVBQUUsRUFBRTtnQkFDVCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxJQUFJLEVBQUUsQ0FBQzthQUNWO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxFQUFFO2FBQ1g7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUUsa0NBQWtDO2dCQUMxQyxJQUFJLEVBQUUsRUFBRTtnQkFDUixHQUFHLEVBQUUsRUFBRTtnQkFDUCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSTthQUMxQztZQUNELGFBQWEsRUFBRTtnQkFDWCxNQUFNLEVBQUUsaUNBQWlDO2dCQUN6QyxVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSzthQUMzQztZQUNELE1BQU0sRUFBRTtnQkFDSixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUUsa0NBQWtDO2dCQUMxQyxJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsRUFBRTtnQkFDUixVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSTthQUMxQztTQUNKO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsT0FBTyxFQUFFO2dCQUNMLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDYjtTQUNKO0tBQ0osQ0FBQTtJQUNELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN4RCxPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxRQUFRLEVBQ2IsVUFBVSxFQUFDLE1BQU0sRUFDakIsTUFBTSxRQUNOLE1BQU0sRUFBQyxNQUFNLEVBQ2IsS0FBSyxFQUFFLEdBQUcsRUFDVixLQUFLLEVBQUU7WUFDSCxVQUFVLEVBQUUsV0FBVztTQUMxQjtRQUVELG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsa0JBQWtCLEVBQ3ZCLFVBQVUsRUFBQyxNQUFNLEVBQ2pCLFlBQVksRUFBRSxHQUFHLEVBQ2pCLEtBQUssRUFBRTtnQkFDSCxXQUFXLEVBQUUsdUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDbEMsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFdBQVcsRUFBRSxDQUFDO2FBQ2pCLEVBQ0QsT0FBTyxFQUFFLFdBQVcsRUFDcEIsT0FBTyxFQUFFLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUNoRCxRQUFRLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFDNUIsUUFBUSxFQUFDLFFBQVEsRUFDakIsVUFBVSxFQUFFLEdBQUcsRUFBRTs7Z0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTthQUNyQyxFQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7O2dCQUNSLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3RCO1lBRUQsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU07Z0JBQ3ZELG9CQUFDLHFCQUFLLE9BQUcsQ0FDTCxDQUNKO1FBQ1Isb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxnQkFBZ0IsRUFDckIsS0FBSyxFQUFFLENBQUMsRUFDUixZQUFZLEVBQUUsR0FBRyxFQUNqQixNQUFNLEVBQUMsTUFBTSxFQUNiLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLE9BQU8sRUFBRSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFDaEQsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQzFCLFVBQVUsRUFBRSxHQUFHLEVBQUU7O2dCQUNiLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDaEMsRUFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFOztnQkFDUixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDckI7WUFFRCxvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFDLHFCQUFxQixFQUMxQixVQUFVLEVBQUMsTUFBTSxFQUNqQixPQUFPLEVBQUUsV0FBVyxFQUNwQixPQUFPLEVBQUUsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQzlDLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUM5QixVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUN2QyxRQUFRLEVBQUMsUUFBUTtnQkFFakIsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU07b0JBQ3ZELG9CQUFDLG9CQUFJLElBQUMsS0FBSyxFQUFDLE9BQU8sR0FBRyxDQUNsQixDQUNKLENBQ0o7UUFDUixvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFDLFVBQVUsRUFDZixVQUFVLEVBQUMsTUFBTTtZQUNqQix3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLDJDQUEyQztZQUMzQyw4QkFBOEI7WUFDOUIsb0JBQW9CO1lBQ3BCLEtBQUssRUFBQyxPQUFPLEVBQ2IsTUFBTSxFQUFDLE1BQU0sRUFDYixLQUFLLEVBQUMsTUFBTTtZQUNaLFNBQVM7WUFDVCxLQUFLLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLEVBQUU7YUFDakIsSUFFQSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDdkMsQ0FDSixDQUNYLENBQUE7Q0FDSjtBQTdKRCx3QkE2SkMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Primitives_1 = __webpack_require__(/*! ./Primitives */ "./code/Primitives.tsx");
const react_feather_1 = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
function Button(props) {
    window["__checkBudget__"]();
    const { itemCount, changeItemCount } = props;
    const aniControls = framer_1.useAnimation();
    const variants = {
        primary: {
            default: {
                backgroundColor: Primitives_1.primitives.color.dark,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                width: 208,
                transition: Primitives_1.primitives.transitions.fast,
            },
            pressing: {
                backgroundColor: Primitives_1.primitives.color.brand,
                shadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                transition: Primitives_1.primitives.transitions.flash,
            },
            config: {
                backgroundColor: Primitives_1.primitives.color.dark,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                width: 144,
                transition: Primitives_1.primitives.transitions.fast,
            }
        },
        primaryIcon: {
            default: {
                opacity: 1,
                right: 24,
                top: 24,
                size: 0,
            },
            config: {
                opacity: 1,
                right: 0,
                top: 0,
                size: 48,
            }
        },
        secondary: {
            default: {
                opacity: 1,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                left: 24,
                top: 24,
                size: 0,
                transition: Primitives_1.primitives.transitions.fast,
            },
            pressingMinus: {
                shadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                transition: Primitives_1.primitives.transitions.flash,
            },
            config: {
                opacity: 1,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                left: 0,
                top: 0,
                size: 48,
                transition: Primitives_1.primitives.transitions.fast,
            }
        },
        textPre: {
            default: {
                y: 0,
                opacity: 1,
            },
            config: {
                y: 48,
                opacity: 0,
            },
        }
    };
    aniControls.start(itemCount == 0 ? "default" : "config");
    return (React.createElement(framer_1.Frame, { name: "Button", background: "null", center: true, height: "100%", width: 208, style: {
            fontFamily: "Open Sans"
        } },
        React.createElement(framer_1.Frame, { name: "Secondary Button", background: "null", borderRadius: 100, style: {
                borderColor: Primitives_1.primitives.color.dark,
                borderStyle: "solid",
                borderWidth: 2,
            }, animate: aniControls, initial: itemCount == 0 ? "default" : "pressing", variants: variants.secondary, overflow: "hidden", onTapStart: () => {
                window["__checkBudget__"]();
                aniControls.start("pressingMinus");
            }, onTap: () => {
                window["__checkBudget__"]();
                changeItemCount(-1);
            } },
            React.createElement(framer_1.Frame, { name: "Icon Frame", background: "null", size: 24, center: true },
                React.createElement(react_feather_1.Minus, null))),
        React.createElement(framer_1.Frame, { name: "Primary Button", right: 0, borderRadius: 100, height: "100%", animate: aniControls, initial: itemCount == 0 ? "default" : "pressing", variants: variants.primary, onTapStart: () => {
                window["__checkBudget__"]();
                aniControls.start("pressing");
            }, onTap: () => {
                window["__checkBudget__"]();
                changeItemCount(1);
            } },
            React.createElement(framer_1.Frame, { name: "Primary Button Icon", background: "null", animate: aniControls, initial: itemCount == 0 ? "default" : "config", variants: variants.primaryIcon, transition: Primitives_1.primitives.transitions.fast, overflow: "hidden" },
                React.createElement(framer_1.Frame, { name: "Icon Frame", background: "null", size: 24, center: true },
                    React.createElement(react_feather_1.Plus, { color: "white" })))),
        React.createElement(framer_1.Frame, { name: "Text Pre", background: "null", 
            // animate={aniControls}
            // initial="default"
            // transition={primitives.transitions.fast}
            // variants={variants.textPre}
            // overflow="hidden"
            color: "white", height: "100%", width: "100%", 
            // center
            style: {
                fontSize: 16,
                fontWeight: 700,
                lineHeight: 24,
            } }, itemCount == 0 ? "Add to Cart" : itemCount)));
}
exports.Button = Button;
exports.__info__ = [{ "name": "Button", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Index.tsx":
/*!************************!*\
  !*** ./code/Index.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBOEQ7QUFDOUQscUNBQWlDO0FBQ2pDLHlDQUFrRDtBQUNsRCwrQkFBMkI7QUFDM0IsaURBQXFFO0FBQ3JFLDZDQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFDZCxNQUFNLFVBQVUsR0FBRyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7QUFDakQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRTs7SUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDVCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1FBQ25CLElBQUksQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNYLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDUjthQUFNO1lBQ0gsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO2dCQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ1I7aUJBQU07Z0JBQ0gsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO2dCQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ1I7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQTtLQUN4QixDQUFDLENBQUE7Q0FDTCxDQUFBO0FBQ0QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUU7O0lBQ3pELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNyRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFBO0lBQzFCLE9BQU8sS0FBSyxDQUFBO0NBQ2YsQ0FBQTtBQUNELE1BQU0sT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsUUFBUSxFQUFFLFFBQVE7SUFDbEIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDdEIsU0FBUyxFQUFFLFVBQVU7Q0FDeEIsQ0FBQyxDQUFBO0FBRUYsTUFBTSxTQUFTLEdBQUcsc0JBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUU5QyxTQUFnQixHQUFHLENBQUMsS0FBSzs7SUFDckIsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzFELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqRCx1Q0FBdUM7SUFDdkMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxpQkFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUN2RCxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxHQUFHLGlCQUFRLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ3ZFLE1BQU0sY0FBYyxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUNyQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDakIsSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3pCLEtBQUssRUFBRSxDQUFBO1lBQ1AsU0FBUyxFQUFFLENBQUE7WUFDWCxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuSCxjQUFjLENBQUMsS0FBSyxDQUFDO2dCQUNqQixVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTztnQkFDMUMsQ0FBQyxFQUFFLENBQUMsTUFBTTthQUNiLENBQUMsQ0FBQTtTQUNMO0tBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNsRixNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO1FBQzVCLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTztRQUMxQixTQUFTLEVBQUUsS0FBSztLQUNuQixDQUFDLENBQUE7SUFDRixNQUFNLFFBQVEsR0FBRztRQUNiLE1BQU0sRUFBRTtZQUNKLFdBQVcsRUFBRTtnQkFDVCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNiO1lBQ0QsV0FBVyxFQUFFO2dCQUNULENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjtRQUNELE1BQU0sRUFBRTtZQUNKLFdBQVcsRUFBRTtnQkFDVCxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTthQUNoQztZQUNELFdBQVcsRUFBRTtnQkFDVCxNQUFNLEVBQUUsTUFBTTthQUNqQjtTQUNKO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsT0FBTyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxHQUFHO2FBQ1Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRzthQUNuRDtTQUNKO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ1gsTUFBTSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRztvQkFDakMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxFQUFFLENBQUM7aUJBQ2IsQ0FBQztnQkFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNYLE1BQU0sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLEtBQUssRUFBRSxLQUFLO29CQUNaLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUc7b0JBQzlCLENBQUMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQyxDQUFDO2FBQ0w7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFO29CQUNMLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQyxDQUFDO2FBQ0w7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxDQUFDO29CQUNULE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztvQkFDZixlQUFlLEVBQUUsdUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtpQkFDekM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQy9DLGVBQWUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJO2lCQUNqRyxDQUFDO2FBQ0w7WUFDRCxHQUFHLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsTUFBTSxFQUFFLEVBQUU7aUJBQ2IsQ0FBQztnQkFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNYLEtBQUssRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUMvQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDbkUsTUFBTSxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzdDLENBQUM7YUFDTDtZQUNELFNBQVMsRUFBRTtnQkFDUCxPQUFPLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLENBQUM7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2FBQ0o7WUFDRCxhQUFhLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDWCxNQUFNLEVBQUUsRUFBRTtvQkFDVixLQUFLLEVBQUUsR0FBRztvQkFDVix3Q0FBd0M7b0JBQ3hDLGNBQWM7b0JBQ2QsV0FBVyxFQUFFLEVBQUU7aUJBQ2xCLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN4RCxLQUFLLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztvQkFDMUMsK0NBQStDO29CQUMvQyw2Q0FBNkM7b0JBQzdDLFdBQVcsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUNqRCxDQUFDO2FBQ0w7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFFBQVEsRUFBRSxNQUFNO29CQUNoQixVQUFVLEVBQUUsR0FBRztvQkFDZixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDWCxRQUFRLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtvQkFDbkQsVUFBVSxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQy9DLFVBQVUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO2lCQUN4RCxDQUFDO2FBQ0w7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFO29CQUNMLFFBQVEsRUFBRSxNQUFNO29CQUNoQixVQUFVLEVBQUUsR0FBRztvQkFDZixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsU0FBUyxFQUFFLENBQUM7b0JBQ1osS0FBSyxFQUFFLE9BQU87aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ1gsUUFBUSxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07b0JBQ25ELFVBQVUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUMvQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtvQkFDckQsU0FBUyxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLEtBQUssRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPO2lCQUNwRSxDQUFDO2FBQ0w7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFO29CQUNMLENBQUMsRUFBRSxFQUFFO29CQUNMLE9BQU8sRUFBRSxDQUFDO29CQUNWLFVBQVUsRUFBRSxVQUFVO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNYLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU8sRUFBRSxDQUFDO29CQUNWLFVBQVUsRUFBRSx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5QyxDQUFDO2FBQ0w7U0FDSjtLQUNKLENBQUE7SUFFRCxNQUFNLEtBQUssR0FBRyxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3ZDLG9CQUFDLG1CQUFRLElBQ0wsSUFBSSxFQUFFLElBQUksRUFDVixHQUFHLEVBQUUsQ0FBQyxFQUNOLENBQUMsRUFBRSxDQUFDLEVBQ0osUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFOztZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUN0QixZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNyQzs7Z0JBQ0ksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQzFCLEVBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQzlELGVBQWUsRUFBRSxRQUFRLEVBQ3pCLFVBQVUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsRUFDbkMsU0FBUyxFQUFFLEdBQUcsRUFBRTs7WUFDWixZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO1NBQ25DLEdBQ0gsQ0FDTCxDQUFDLENBQUE7SUFFRixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUNGLE1BQU0sRUFBQyxNQUFNLEVBQ2IsS0FBSyxFQUFDLE1BQU0sRUFDWixVQUFVLEVBQUMsTUFBTSxFQUNqQixRQUFRLEVBQUMsVUFBVSxFQUNuQixPQUFPLEVBQUUsV0FBVyxFQUNwQixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO1FBRWxDLG9CQUFDLGVBQU0sSUFDSCxTQUFTLEVBQUUsQ0FBQyxvQkFBQywyQkFBVyxPQUFHLEVBQUUsb0JBQUMsb0JBQUksT0FBRyxDQUFDLEVBQ3RDLFVBQVUsRUFBRSxDQUFDLG9CQUFDLHFCQUFLLE9BQUcsRUFBRSxvQkFBQyxTQUFHLElBQUMsU0FBUyxFQUFFLFFBQVEsR0FBSSxDQUFDLEVBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQ3JCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUMzQjtRQUNGLG9CQUFDLGVBQU0sSUFDSCxNQUFNLEVBQUUsQ0FBQyxFQUNULEtBQUssRUFBQyxNQUFNLEVBQ1osT0FBTyxFQUFDLGFBQWEsRUFDckIsVUFBVSxFQUFFLHVCQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFDMUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQ3pCLGFBQWEsRUFBRSxjQUFjLEVBQzdCLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQ2pDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1lBRWxDLG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUMsV0FBVyxFQUNoQixVQUFVLEVBQUMsTUFBTSxFQUNqQixPQUFPLEVBQUMsU0FBUyxFQUNqQixVQUFVLEVBQUUsdUJBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUMzQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFDNUIsT0FBTyxFQUFFLE9BQU8sSUFFZixLQUFLLENBQ0YsQ0FDSCxDQUNMLENBQ1gsQ0FBQTtDQUNKO0FBL09ELGtCQStPQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const NavBar_1 = __webpack_require__(/*! ./NavBar */ "./code/NavBar.tsx");
const ItemCard_1 = __webpack_require__(/*! ./ItemCard */ "./code/ItemCard.tsx");
const Bag_1 = __webpack_require__(/*! ./Bag */ "./code/Bag.tsx");
const react_feather_1 = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
const Primitives_1 = __webpack_require__(/*! ./Primitives */ "./code/Primitives.tsx");
const gap = 24;
const transition = Primitives_1.primitives.transitions.default;
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
const toState = (hs, invokedI, isEnvoking) => ({
    invokedI: invokedI,
    configs: toConfigs(hs),
    isEnvoked: isEnvoking,
});
const defaultHs = ItemCard_1.itemConfigs.map(config => config.height);
const iniState = toState(defaultHs, -1, false);
function App(props) {
    window["__checkBudget__"]();
    const [viewState, setViewState] = React.useState(iniState);
    const [sumCount, setSumCount] = React.useState(0);
    // const itemSumCount = React.useRef(0)
    const [current, cycle] = framer_1.useCycle("initial", "envoked");
    const [current_out, cycle_out] = framer_1.useCycle("initial_out", "envoked_out");
    const scrollControls = framer_1.useAnimation();
    React.useEffect(() => {
        window["__checkBudget__"]();
        if (viewState.invokedI >= 0) {
            console.log("use effect");
            cycle();
            cycle_out();
            let offset = viewState.isEnvoked ? viewState.configs[viewState.invokedI].y : iniState.configs[viewState.invokedI].y;
            scrollControls.start({
                transition: Primitives_1.primitives.transitions.default,
                y: -offset,
            });
        }
    }, [viewState.isEnvoked]);
    const { height, width } = props;
    console.log("render");
    const subWidth = (width - gap * 3) / 2;
    const newStateForEnvoke = envokedI => toState(scaleHs(defaultHs, subWidth, width, envokedI, height), envokedI, true);
    const newStateForClose = () => ({
        invokedI: viewState.invokedI,
        configs: viewState.configs,
        isEnvoked: false,
    });
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
                top: [0, -40, 0],
                width: width - gap * 2,
                x: gap,
            },
            envoked: {
                top: [0, 80, 0],
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
                    backgroundColor: Primitives_1.primitives.color.tint,
                },
                envoked: i => ({
                    rotate: i == viewState.invokedI ? -86 : 4,
                    height: i == viewState.invokedI ? 414 : 120 * 2,
                    backgroundColor: i == viewState.invokedI ? Primitives_1.primitives.color.lightBrand : Primitives_1.primitives.color.tint,
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
            imgShadow: {
                initial: {
                    opacity: 0,
                },
                envoked: {
                    opacity: 1,
                },
            },
            specContainer: {
                initial: i => ({
                    height: 56,
                    width: 136,
                    // top: iniState.configs[i].h - 16 - 56,
                    // bottom: 16,
                    paddingLeft: 16,
                }),
                envoked: i => ({
                    height: i == viewState.invokedI ? height - 140 - 16 : 56,
                    width: i == viewState.invokedI ? 240 : 136,
                    // top: i == viewState.invokedI ? 140 : "auto",
                    // bottom: i == viewState.invokedI ? 16 : 16,
                    paddingLeft: i == viewState.invokedI ? 40 : 16,
                })
            },
            itemName: {
                initial: {
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "16px",
                },
                envoked: i => ({
                    fontSize: i == viewState.invokedI ? "32px" : "12px",
                    fontWeight: i == viewState.invokedI ? 800 : 600,
                    lineHeight: i == viewState.invokedI ? "40px" : "16px",
                }),
            },
            price: {
                initial: {
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: "24px",
                    marginTop: 0,
                    color: "black",
                },
                envoked: i => ({
                    fontSize: i == viewState.invokedI ? "20px" : "12px",
                    fontWeight: i == viewState.invokedI ? 800 : 300,
                    lineHeight: i == viewState.invokedI ? "40px" : "24px",
                    marginTop: i == viewState.invokedI ? 8 : 0,
                    color: i == viewState.invokedI ? Primitives_1.primitives.color.brand : "black",
                }),
            },
            delay: {
                initial: {
                    y: 56,
                    opacity: 0,
                    transition: transition,
                },
                envoked: i => ({
                    y: 0,
                    opacity: 1,
                    transition: Primitives_1.primitives.transitions.delay(i),
                }),
            },
        },
    };
    const items = ItemCard_1.itemConfigs.map((item, i) => (React.createElement(ItemCard_1.ItemCard, { item: item, key: i, i: i, variants: variants.item, initial: "initial", onTap: (e) => {
            window["__checkBudget__"]();
            if (!viewState.isEnvoked) {
                setViewState(newStateForEnvoke(i));
            }
            else
                e.preventDefault();
        }, changeItemSumCount: (change) => setSumCount(sumCount + change), currentSumCount: sumCount, justTapped: i == viewState.invokedI, closeFunc: () => {
            window["__checkBudget__"]();
            setViewState(newStateForClose());
        } })));
    return (React.createElement(framer_1.Frame, { height: "100%", width: "100%", background: "null", position: "relative", animate: current_out, style: { fontFamily: "Open Sans" } },
        React.createElement(NavBar_1.NavBar, { leftIcons: [React.createElement(react_feather_1.ChevronLeft, null), React.createElement(react_feather_1.Menu, null)], rightIcons: [React.createElement(react_feather_1.Heart, null), React.createElement(Bag_1.Bag, { itemCount: sumCount })], initial: "initial_out", transition: transition, variants: variants.navBar }),
        React.createElement(framer_1.Scroll, { bottom: 0, width: "100%", initial: "initial_out", transition: Primitives_1.primitives.transitions.default, variants: variants.scroll, scrollAnimate: scrollControls, dragEnabled: !viewState.isEnvoked, wheelEnabled: !viewState.isEnvoked },
            React.createElement(framer_1.Frame, { name: "container", background: "null", initial: "initial", transition: Primitives_1.primitives.transitions.default2, variants: variants.container, animate: current }, items))));
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUNhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0l0ZW1DYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBcUM7QUFDckMsOENBQXFDO0FBQ3JDLDZDQUF5QztBQUN6QyxxQ0FBaUM7QUFDakMsaURBQXdDO0FBQ3hDLHFDQUFpQztBQUNqQywrQkFBMkI7QUFFM0IsSUFBSSxVQUFVLEdBQUcsdUJBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFBO0FBRS9DLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUM3RyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ25FLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNuRCxpREFBaUQ7SUFDakQsd0RBQXdEO0lBQ3hELE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7O1FBQy9CLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFCLFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUE7S0FDbkMsQ0FBQTtJQUVELE1BQU0sS0FBSyxHQUNQLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsQ0FBQyxFQUNULEdBQUcsRUFBRSxDQUFDLEVBQ04sSUFBSSxFQUFFLEVBQUUsRUFDUixVQUFVLEVBQUMsTUFBTSxFQUNqQixRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUs7UUFFeEIsb0JBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const resource_1 = __webpack_require__(/*! framer/resource */ "framer/resource");
const Primitives_1 = __webpack_require__(/*! ./Primitives */ "./code/Primitives.tsx");
const NavBar_1 = __webpack_require__(/*! ./NavBar */ "./code/NavBar.tsx");
const react_feather_1 = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
const Button_1 = __webpack_require__(/*! ./Button */ "./code/Button.tsx");
const Bag_1 = __webpack_require__(/*! ./Bag */ "./code/Bag.tsx");
let transition = Primitives_1.primitives.transitions.default;
function ItemCard(props) {
    window["__checkBudget__"]();
    let { item, i, variants, initial, onTap, justTapped, closeFunc, changeItemSumCount, currentSumCount } = props;
    const { name, height, price, img, headline, detail, itemNo } = item;
    const [itemCount, setItemCount] = React.useState(0);
    // const sumCount = React.useRef(currentSumCount)
    // console.log(currentSumCount + ":" + sumCount.current)
    const changeItemCount = (change) => {
        window["__checkBudget__"]();
        changeItemSumCount(change);
        setItemCount(itemCount + change);
    };
    const heart = React.createElement(framer_1.Frame, { custom: 0, top: 8, size: 24, background: "null", variants: variants.delay },
        React.createElement(react_feather_1.Heart, null));
    const detailSpec = (React.createElement(framer_1.Stack, { name: "Detail Container", custom: 1, variants: variants.delay, distribution: "start", alignment: "start", width: 176, top: 64, gap: 0 },
        React.createElement(framer_1.Frame, { name: "Headline", height: "auto", width: "100%", background: "null", style: {
                fontSize: 20,
                fontWeight: 600,
                lineHeight: "32px",
                textTransform: "capitalize",
            } },
            React.createElement("span", null, headline)),
        React.createElement(framer_1.Frame, { name: "Detail", height: "auto", width: "100%", 
            // top={16}
            background: "null", style: {
                fontSize: 15,
                lineHeight: "24px",
                margin: "16px 0",
            } },
            React.createElement("span", null, detail)),
        React.createElement(framer_1.Frame, { name: "Item No.", height: "auto", width: "100%", background: "null", style: {
                fontSize: 12,
                lineHeight: "24px",
            } },
            React.createElement("span", null, itemNo))));
    const button = (React.createElement(framer_1.Frame, { name: "Button Container", custom: 2, variants: variants.delay, background: "null", height: 48, width: "100%", top: 792 },
        React.createElement(Button_1.Button, { itemCount: itemCount, changeItemCount: changeItemCount })));
    const closeButton = React.createElement(framer_1.Frame, { background: "null", size: 24, onClick: (event) => {
            window["__checkBudget__"]();
            event.stopPropagation();
            closeFunc();
        } },
        React.createElement(react_feather_1.X, null));
    const navBar = React.createElement(NavBar_1.NavBar, { i: i, leftIcons: [closeButton], rightIcons: [React.createElement(Bag_1.Bag, { itemCount: currentSumCount, hidable: true })], initial: initial, transition: transition, variants: variants.navBar });
    const imgShadow = React.createElement(framer_1.Frame, { name: "Img Shadow", variants: variants.imgShadow, transition: transition, height: "100%", width: "100%", right: 0, background: { src: img }, style: {
            filter: "drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.48))",
        } });
    return (React.createElement(framer_1.Frame, { name: "Container", overflow: "hidden", custom: i, variants: variants.container, initial: initial, transition: transition, onClick: onTap, background: "null" },
        React.createElement(framer_1.Frame, { name: "Deco Rect", custom: i, variants: variants.decoRect, initial: initial, transition: transition, background: Primitives_1.primitives.color.tint, width: "1000%", bottom: 0, right: 0, x: "50%", y: "50%" }),
        justTapped ? navBar : null,
        React.createElement(framer_1.Frame, { name: "Product Img", custom: i, variants: variants.img, transition: transition, right: 0, background: { src: img } }, justTapped ? imgShadow : null),
        React.createElement(framer_1.Stack, { name: "Spec Container", custom: i, variants: variants.specContainer, transition: transition, alignment: "start", distribution: "start", 
            // height={56}
            // width={120}
            bottom: 16, gap: 0 },
            React.createElement(framer_1.Frame, { name: "Name", custom: i, variants: variants.itemName, transition: transition, height: "auto", width: "100%", background: "null", style: {
                    // fontSize: 12,
                    // fontWeight: 600,
                    // lineHeight: "16px",
                    textTransform: "uppercase",
                } },
                React.createElement("span", null, name)),
            React.createElement(framer_1.Frame, { name: "Price", custom: i, variants: variants.price, transition: transition, height: "auto", width: "100%", background: "null" },
                React.createElement("span", null, price)),
            justTapped ? heart : null,
            justTapped ? detailSpec : null),
        justTapped ? button : null));
}
exports.ItemCard = ItemCard;
const item = (name, heightOffset, price, itemNo, headline, detail) => {
    window["__checkBudget__"]();
    return {
        name: name,
        height: 264 + heightOffset,
        price: `$${price}.00`,
        img: resource_1.url(`code/images/${name.toUpperCase()}.png`),
        itemNo: `Item No. ${itemNo}`,
        headline: headline,
        detail: detail,
    };
};
const configs = [
    item("MISTER PRISME PRIMER", 0, 127, "P090516", "MATTIFYING PRIMER", "A soft skin primer that can be used alone or under makeup for a velvety smooth matte complexion."),
    item("L'INTERDIT ÉDITION COUTURE", -72, 230, "P090495", "MATIFYING STICK", "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."),
    item("VOLUME DISTURBIA", -8, 250, "P072590", "VOLUME & CURVE MASCARA 24 HOURS WEAR", "Volume Disturbia Excessive Volume & Curve mascara – 24-hours wear #MADETODISTURB"),
    item("MISTER MATIFYING STICK", -16, 250, "P090495", "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT", "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."),
    item("MISTER ANGE OU DÉMON", 24, 230, "P037325", "EAU DE PARFUM", "A woman with a mystery whose aura intoxicates you. Enigmatic, fascinating, charming, elusive. An angel - or not at all? Only she truly knows. Optional Seduction is always a mystery."),
    item("MATISSIME VELVET FLUID", 0, 230, "P081931", "RADIANT MAT FLUID FOUNDATION", "Givenchy turns the light on for matte, in a radiant-matte fluid foundation. Just like velvet, it absorbs and reflects light and is comfortable and soft. Long-lasting coverage for normal to combination skins."),
    item("TEINT COUTURE PRIMER", 0, 230, "P090041", "EMBELLISHING CONCEALER", "A dual-toned practical concealer that hides imperfections and wakes up the eye area with light."),
    item("TEINT COUTURE RADIANT DROP", -24, 230, "P080463", "2-IN-1 HIGHLIGHTER", "With its two-in-one applicator, this liquid highlighter is applied in touches of light or all over the face for a dewy iridescent finish."),
    item("L'INTERDIT ÉDITION WHITE", -32, 230, "P069003", "SHOWER OIL", "L’Interdit Bath & Shower Oil leaves skin silky-soft hydrated and delicately scented with Givenchy’s new fragrance."),
];
exports.itemConfigs = [...configs, ...configs];
exports.__info__ = [{ "name": "ItemCard", "children": false, "type": "component" }];


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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheUdyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGxheUdyb3VuZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsaUNBQW1EO0FBQ25ELG1DQUEwRTtBQUUxRSx5QkFBeUI7QUFDekIsNENBQTRDO0FBRTVDLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQiw0Q0FBNEM7SUFDNUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQy9CLGlCQUFTLENBQUMsR0FBRyxFQUFFOztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEIsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsR0FBRyxFQUNYLEtBQUssRUFBRSxHQUFHLEVBQ1YsS0FBSyxFQUNELEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNSLEdBQUcsRUFBRTs7Z0JBQ0QsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNaLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3hCO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSTtRQUdaLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsR0FBRyxFQUNYLEtBQUssRUFBRSxHQUFHLEVBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O2dCQUNULFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDWCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDdkIsR0FDSCxDQUNFLENBQ1gsQ0FBQTtDQUNKO0FBbENELDRCQWtDQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function PlayItem(props) {
    window["__checkBudget__"]();
    // useEffect(() => console.log("hello"), [])
    const [state, setState] = react_1.useState(0);
    const { height, width } = props;
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        console.log("hi");
    });
    return (React.createElement(framer_1.Frame, { height: 300, width: 500, onTap: state == 0 ?
            () => {
                window["__checkBudget__"]();
                if (state == 0) {
                    setState(state + 1);
                    console.log("envoke");
                }
            } :
            null },
        React.createElement(framer_1.Frame, { height: 100, width: 100, onTap: (e) => {
                window["__checkBudget__"]();
                setState(0);
                e.stopPropagation();
                console.log("close");
            } })));
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWl0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUHJpbWl0aXZlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN0QixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixVQUFVLEVBQUUsU0FBUztRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxTQUFTO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFO2dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxTQUFTO2FBQ2xCO1NBQ0o7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxDQUFDO1lBQ1gsSUFBSSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxDQUFDO1lBQ1gsSUFBSSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO1NBQ3pCLENBQUM7UUFDRixTQUFTLEVBQUU7WUFDUCxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsSUFBSTtTQUNkO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLElBQUk7U0FDZDtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7S0FDSjtDQUNKLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
exports.primitives = {
    color: {
        brand: "#B133FF",
        lightBrand: "#DA9EFF",
        tint: "#F3F3F3",
        dark: "#272329",
    },
    transitions: {
        default: {
            type: "tween",
            duration: 0.48,
            ease: "easeOut"
        },
        default2: {
            top: {
                times: [0, 0.7, 1],
                ease: ["easeOut", "easeIn"]
            },
            default: {
                type: "tween",
                duration: 0.48,
                ease: "easeOut",
            },
        },
        fast: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut"
        },
        flash: {
            type: "tween",
            duration: 0,
            ease: "easeOut",
        },
        slow: {
            type: "tween",
            duration: 2,
            ease: "easeOut",
        },
        delay: (i) => ({
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.56 + i * 0.16,
        }),
        delyedBit: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.48,
        },
        delyed: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.64,
        },
        delyedMore: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.8,
        },
    }
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

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"f39012cf-34c0-4cbe-a2f8-0221fe4e033f\"},\"author\":\"YY Z\",\"dependencies\":{\"@framer/basiclines.map\":\"^1.2.0\",\"@framer/benjamin.icon-generator\":\"^1.15.0\",\"@framer/derlukas.scroll-away\":\"^1.8.0\",\"@framer/djfumberger.mockmatic\":\"^1.14.0\",\"@framer/gusso.magic-move\":\"^3.3.0\",\"@framer/ismael.google-maps\":\"^2.1.0\",\"@framer/kasimir.iphone-x-kit\":\"^1.21.0\",\"@framer/mapbox.mapbox\":\"^1.3.0\",\"@framer/mikejohnson.material-icons\":\"^1.3.0\",\"@framer/steveruizok.mapbox-static-map\":\"^1.16.0\",\"react-feather\":\"^2.0.3\"}}");

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