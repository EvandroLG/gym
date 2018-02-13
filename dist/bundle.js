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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(1);


document.addEventListener('DOMContentLoaded', function() {
  const db = new __WEBPACK_IMPORTED_MODULE_0__db__["a" /* default */]();
  db.createScheme();

  db.insert({
    title: 'Shoulders',
    exercises: [
      {
        name: 'Dumbbell shoulders press',
        repetitions: '10',
        weight: '25kg',
      },
      {
        name: 'Seated Bent-Over Rear Delt Raise',
        repetitions: '8/8/8',
        weight: '10kg/8kg/6kg'
      }
    ]
  });

  db.insert({
    title: 'Back',
    exercises: [
      {
        name: 'Wide-Grip Pull-Up',
        repetitions: '8',
        weight: null
      },
      {
        name: 'Close-Grip Pull-Down',
        repetitions: '10',
        weight: '65kg'
      }
    ]
  });

  db.find(1, (obj) => {
    console.log(obj);
  });

  db.findAll((obj) => {
    console.log(obj);
  });

}, false);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DB {
  constructor() {
    this.request = window.indexedDB;

    this.request.deleteDatabase('gym');
    this.open = this.request.open('gym', 1);
  }

  createScheme() {
    this.open.onupgradeneeded = (e) => {
      let db = e.target.result;
      let store = db.createObjectStore('Training', { keyPath: 'id', autoIncrement:true });

      store.createIndex('IndexTitle', 'title', { unique : true });
      store.createIndex('IndexExercises', 'exercises');
    };

    this._onSuccess();
  }

  _onSuccess() {
    this.open.onsuccess = (e) => {
      this.db = e.target.result;
    };
  }

  _wait(callback) {
    let attempt = window.setInterval(() => {
      if (this.db) {
        callback.call(this);
        window.clearInterval(attempt);
      }
    }, 100);
  }

  getObjectStore() {
    return this.db.transaction(['Training'], 'readwrite')
                  .objectStore('Training');
  }

  insert(params) {
    this._wait(() => {
      this.getObjectStore().put(params);
    });
  }

  find(id, callback = function() {}) {
    this._wait(() => {
      this.getObjectStore().get(id).onsuccess = function(e) {
        callback(e.target.result);
      };
    });
  }

  findAll(callback = function() {}) {
    this._wait(function() {
      this.getObjectStore().getAll().onsuccess = function(e) {
        callback(e.target.result);
      };
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (DB);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTUwMjU3ZWNmYTAxOGE1Zjk4NDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQzs7Ozs7Ozs7QUM5Q0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0NBQW9DOztBQUV4RixnREFBZ0QsZ0JBQWdCO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk1MDI1N2VjZmEwMThhNWY5ODQ4IiwiaW1wb3J0IERCIGZyb20gJy4vZGInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRiID0gbmV3IERCKCk7XG4gIGRiLmNyZWF0ZVNjaGVtZSgpO1xuXG4gIGRiLmluc2VydCh7XG4gICAgdGl0bGU6ICdTaG91bGRlcnMnLFxuICAgIGV4ZXJjaXNlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRHVtYmJlbGwgc2hvdWxkZXJzIHByZXNzJyxcbiAgICAgICAgcmVwZXRpdGlvbnM6ICcxMCcsXG4gICAgICAgIHdlaWdodDogJzI1a2cnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NlYXRlZCBCZW50LU92ZXIgUmVhciBEZWx0IFJhaXNlJyxcbiAgICAgICAgcmVwZXRpdGlvbnM6ICc4LzgvOCcsXG4gICAgICAgIHdlaWdodDogJzEwa2cvOGtnLzZrZydcbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIGRiLmluc2VydCh7XG4gICAgdGl0bGU6ICdCYWNrJyxcbiAgICBleGVyY2lzZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1dpZGUtR3JpcCBQdWxsLVVwJyxcbiAgICAgICAgcmVwZXRpdGlvbnM6ICc4JyxcbiAgICAgICAgd2VpZ2h0OiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2xvc2UtR3JpcCBQdWxsLURvd24nLFxuICAgICAgICByZXBldGl0aW9uczogJzEwJyxcbiAgICAgICAgd2VpZ2h0OiAnNjVrZydcbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIGRiLmZpbmQoMSwgKG9iaikgPT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG4gIH0pO1xuXG4gIGRiLmZpbmRBbGwoKG9iaikgPT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG4gIH0pO1xuXG59LCBmYWxzZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgREIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCO1xuXG4gICAgdGhpcy5yZXF1ZXN0LmRlbGV0ZURhdGFiYXNlKCdneW0nKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnJlcXVlc3Qub3BlbignZ3ltJywgMSk7XG4gIH1cblxuICBjcmVhdGVTY2hlbWUoKSB7XG4gICAgdGhpcy5vcGVuLm9udXBncmFkZW5lZWRlZCA9IChlKSA9PiB7XG4gICAgICBsZXQgZGIgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBsZXQgc3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgnVHJhaW5pbmcnLCB7IGtleVBhdGg6ICdpZCcsIGF1dG9JbmNyZW1lbnQ6dHJ1ZSB9KTtcblxuICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ0luZGV4VGl0bGUnLCAndGl0bGUnLCB7IHVuaXF1ZSA6IHRydWUgfSk7XG4gICAgICBzdG9yZS5jcmVhdGVJbmRleCgnSW5kZXhFeGVyY2lzZXMnLCAnZXhlcmNpc2VzJyk7XG4gICAgfTtcblxuICAgIHRoaXMuX29uU3VjY2VzcygpO1xuICB9XG5cbiAgX29uU3VjY2VzcygpIHtcbiAgICB0aGlzLm9wZW4ub25zdWNjZXNzID0gKGUpID0+IHtcbiAgICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgfTtcbiAgfVxuXG4gIF93YWl0KGNhbGxiYWNrKSB7XG4gICAgbGV0IGF0dGVtcHQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGIpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoYXR0ZW1wdCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGdldE9iamVjdFN0b3JlKCkge1xuICAgIHJldHVybiB0aGlzLmRiLnRyYW5zYWN0aW9uKFsnVHJhaW5pbmcnXSwgJ3JlYWR3cml0ZScpXG4gICAgICAgICAgICAgICAgICAub2JqZWN0U3RvcmUoJ1RyYWluaW5nJyk7XG4gIH1cblxuICBpbnNlcnQocGFyYW1zKSB7XG4gICAgdGhpcy5fd2FpdCgoKSA9PiB7XG4gICAgICB0aGlzLmdldE9iamVjdFN0b3JlKCkucHV0KHBhcmFtcyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kKGlkLCBjYWxsYmFjayA9IGZ1bmN0aW9uKCkge30pIHtcbiAgICB0aGlzLl93YWl0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0T2JqZWN0U3RvcmUoKS5nZXQoaWQpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2FsbGJhY2soZS50YXJnZXQucmVzdWx0KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQWxsKGNhbGxiYWNrID0gZnVuY3Rpb24oKSB7fSkge1xuICAgIHRoaXMuX3dhaXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmdldE9iamVjdFN0b3JlKCkuZ2V0QWxsKCkub25zdWNjZXNzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBjYWxsYmFjayhlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgREI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9