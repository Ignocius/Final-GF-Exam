/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports) {

eval("/* eslint quote-props: [\"error\", \"always\"] */\n/* eslint-env es6 */\nconst alma = 'alma';\n\nconst fa = (cica) => {\n  const gyumolcs = cica + 1;\n  console.log(gyumolcs);\n};\nfa(alma);\n\nfunction Animal(sound) {\n  this.sound = sound;\n}\n\nAnimal.prototype.say = function (sound) {\n  return this.sound;\n};\n\nconst dog = new Animal('woof');\nconst cat = new Animal('miau');\n\nconsole.log(dog.say());\nconsole.log(cat.say());\n\nconsole.group('------Filter--------');\n\nconst data = [1, 2, 3, 4, 5, 6, 1, 78, 86, 8, 10];\nconsole.log(data.filter(function (num) {\n  return num > 20;\n}));\nconsole.groupEnd('------Filter-END-------');\n\nconst someObject = {\n  'part1': {\n    'name': 'Part 1',\n    'size': '20',\n    'qty': '50',\n    'array': [1, 2, 5, 10, 11],\n  },\n  'part2': {\n    'name': 'Part 2',\n    'size': '15',\n    'qty': '60',\n  },\n};\n// console.log(someObject.part1.array.length);\n\n// # Create a function that takes a list as a parameter,\n// # and returns a new list with every second element from the original list.\n// # It should raise an error if the parameter is not a list.\n// # Example: with the input [1, 2, 3, 4, 5] it should return [2, 4].\n\nconst input = [1, 2, 3, 4, 5];\nconst arrayMap = function EverySecondElemFromArray(item) {\n  const returnedArray = [];\n  if (typeof item === 'object') {\n    for (let i = 1; i < item.length; i++) {\n      if (i % 2 === 0) {\n        returnedArray.push(i);\n      }\n    }\n  } else {\n    throw Error;\n  }\n  return returnedArray;\n};\n\nconst newArr = input.filter((value, index) => {\n  return index % 2 === 1;\n});\n\nconst newInput = input.map((item, index) => {\n  console.log(item);\n  return (index % 2 === 1) ? item : 'map this';\n});\n\nconsole.log(arrayMap(input));\nconsole.log(newInput);\nconsole.log('yoo', newArr);\narrayMap('asas');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYWx3YXlzXCJdICovXG4vKiBlc2xpbnQtZW52IGVzNiAqL1xuY29uc3QgYWxtYSA9ICdhbG1hJztcblxuY29uc3QgZmEgPSAoY2ljYSkgPT4ge1xuICBjb25zdCBneXVtb2xjcyA9IGNpY2EgKyAxO1xuICBjb25zb2xlLmxvZyhneXVtb2xjcyk7XG59O1xuZmEoYWxtYSk7XG5cbmZ1bmN0aW9uIEFuaW1hbChzb3VuZCkge1xuICB0aGlzLnNvdW5kID0gc291bmQ7XG59XG5cbkFuaW1hbC5wcm90b3R5cGUuc2F5ID0gZnVuY3Rpb24gKHNvdW5kKSB7XG4gIHJldHVybiB0aGlzLnNvdW5kO1xufTtcblxuY29uc3QgZG9nID0gbmV3IEFuaW1hbCgnd29vZicpO1xuY29uc3QgY2F0ID0gbmV3IEFuaW1hbCgnbWlhdScpO1xuXG5jb25zb2xlLmxvZyhkb2cuc2F5KCkpO1xuY29uc29sZS5sb2coY2F0LnNheSgpKTtcblxuY29uc29sZS5ncm91cCgnLS0tLS0tRmlsdGVyLS0tLS0tLS0nKTtcblxuY29uc3QgZGF0YSA9IFsxLCAyLCAzLCA0LCA1LCA2LCAxLCA3OCwgODYsIDgsIDEwXTtcbmNvbnNvbGUubG9nKGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIG51bSA+IDIwO1xufSkpO1xuY29uc29sZS5ncm91cEVuZCgnLS0tLS0tRmlsdGVyLUVORC0tLS0tLS0nKTtcblxuY29uc3Qgc29tZU9iamVjdCA9IHtcbiAgJ3BhcnQxJzoge1xuICAgICduYW1lJzogJ1BhcnQgMScsXG4gICAgJ3NpemUnOiAnMjAnLFxuICAgICdxdHknOiAnNTAnLFxuICAgICdhcnJheSc6IFsxLCAyLCA1LCAxMCwgMTFdLFxuICB9LFxuICAncGFydDInOiB7XG4gICAgJ25hbWUnOiAnUGFydCAyJyxcbiAgICAnc2l6ZSc6ICcxNScsXG4gICAgJ3F0eSc6ICc2MCcsXG4gIH0sXG59O1xuLy8gY29uc29sZS5sb2coc29tZU9iamVjdC5wYXJ0MS5hcnJheS5sZW5ndGgpO1xuXG4vLyAjIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBsaXN0IGFzIGEgcGFyYW1ldGVyLFxuLy8gIyBhbmQgcmV0dXJucyBhIG5ldyBsaXN0IHdpdGggZXZlcnkgc2Vjb25kIGVsZW1lbnQgZnJvbSB0aGUgb3JpZ2luYWwgbGlzdC5cbi8vICMgSXQgc2hvdWxkIHJhaXNlIGFuIGVycm9yIGlmIHRoZSBwYXJhbWV0ZXIgaXMgbm90IGEgbGlzdC5cbi8vICMgRXhhbXBsZTogd2l0aCB0aGUgaW5wdXQgWzEsIDIsIDMsIDQsIDVdIGl0IHNob3VsZCByZXR1cm4gWzIsIDRdLlxuXG5jb25zdCBpbnB1dCA9IFsxLCAyLCAzLCA0LCA1XTtcbmNvbnN0IGFycmF5TWFwID0gZnVuY3Rpb24gRXZlcnlTZWNvbmRFbGVtRnJvbUFycmF5KGl0ZW0pIHtcbiAgY29uc3QgcmV0dXJuZWRBcnJheSA9IFtdO1xuICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuZWRBcnJheS5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcjtcbiAgfVxuICByZXR1cm4gcmV0dXJuZWRBcnJheTtcbn07XG5cbmNvbnN0IG5ld0FyciA9IGlucHV0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gIHJldHVybiBpbmRleCAlIDIgPT09IDE7XG59KTtcblxuY29uc3QgbmV3SW5wdXQgPSBpbnB1dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xuICByZXR1cm4gKGluZGV4ICUgMiA9PT0gMSkgPyBpdGVtIDogJ21hcCB0aGlzJztcbn0pO1xuXG5jb25zb2xlLmxvZyhhcnJheU1hcChpbnB1dCkpO1xuY29uc29sZS5sb2cobmV3SW5wdXQpO1xuY29uc29sZS5sb2coJ3lvbycsIG5ld0Fycik7XG5hcnJheU1hcCgnYXNhcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);