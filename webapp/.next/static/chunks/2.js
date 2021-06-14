(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/controls/Calendar/Calendar.js":
/*!**************************************************!*\
  !*** ./components/controls/Calendar/Calendar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_calendar_multiday__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-calendar-multiday */ "./node_modules/react-calendar-multiday/lib/app.min.js");
/* harmony import */ var react_calendar_multiday__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_calendar_multiday__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar.css */ "./components/controls/Calendar/calendar.css");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_calendar_css__WEBPACK_IMPORTED_MODULE_12__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
// import 'babel-polyfill' /* Support for IE11 */







var PositionDay = function PositionDay(props) {
  var day = moment__WEBPACK_IMPORTED_MODULE_10___default()(props.date.moment).toDate();
  var endDate = new Date(props.endDate);
  var isFuture = false;

  if (day.getTime() > endDate.getTime()) {
    isFuture = true;
  }

  var onClick = function onClick(e) {
    if (isFuture || props.isInThePast || !props.enabledAll || props.noEditable) {
      e.stopPropagation();
    }
  };

  return __jsx("div", {
    onClick: onClick,
    className: getStyle(props),
    style: getInline(isFuture ? {
      isInThePast: true
    } : props)
  }, props.label);
};

var getStyle = function getStyle(_ref) {
  var date = _ref.date,
      isSelected = _ref.isSelected;
  return "".concat(isSelected ? 'o_selected-day' : '', " ").concat(date.type, "-day");
};

var getInline = function getInline(_ref2) {
  var isToday = _ref2.isToday,
      isInThePast = _ref2.isInThePast;
  return {
    cursor: isInThePast ? 'not-allowed' : 'inherit',
    borderColor: 'rgb(228, 231, 231) !important',
    color: isInThePast ? 'rgb(202, 204, 205)' : 'inherit',
    background: isToday ? 'inherit' : isInThePast ? 'rgb(255, 255, 255)' : 'inherit'
  };
};

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onReset", function () {
      _this.setState({
        channels: {},
        currentChannel: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "reactToChange", function (obj) {
      if (_this.props.enabledAll && _this.props.setSelected) {
        _this.props.setSelected(obj.selected);
      }
    });

    _this.state = {
      currentChannel: 0,
      channels: {},
      selectedDays: []
    };
    return _this;
  } // componentDidUpdate(prevProps, prevState, snapshot) {
  //     if(prevProps.selectedDays.length == this.props.selectedDays.length) return
  //     this.setState({selectedDays: this.props.selectedDays})
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      if (false) {}
      console.log('this.props.selectedDays', this.props.selectedDays);
      return __jsx("div", {
        className: "z-calendar-wrapper ".concat(this.props.enabledAll ? 'enabled-all' : 'disabled-all')
      }, __jsx(react_calendar_multiday__WEBPACK_IMPORTED_MODULE_9___default.a, {
        isMultiple: true // reset={true}
        ,
        selected: this.props.selectedDays,
        onChange: this.reactToChange,
        DayComponent: __jsx(PositionDay, {
          enabledAll: this.props.enabledAll,
          noEditable: this.props.noEditable,
          endDate: this.props.endDate
        })
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./node_modules/moment-range/dist/moment-range.js":
/*!********************************************************!*\
  !*** ./node_modules/moment-range/dist/moment-range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(5)(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(18)() ? Symbol : __webpack_require__(20);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.extendMoment = extendMoment;

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _es6Symbol = __webpack_require__(1);

var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//-----------------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------------

var INTERVALS = {
  year: true,
  quarter: true,
  month: true,
  week: true,
  day: true,
  hour: true,
  minute: true,
  second: true
};

//-----------------------------------------------------------------------------
// Date Ranges
//-----------------------------------------------------------------------------

var DateRange = exports.DateRange = function () {
  function DateRange(start, end) {
    _classCallCheck(this, DateRange);

    var s = start;
    var e = end;

    if (arguments.length === 1 || end === undefined) {
      if ((typeof start === 'undefined' ? 'undefined' : _typeof(start)) === 'object' && start.length === 2) {
        var _start = _slicedToArray(start, 2);

        s = _start[0];
        e = _start[1];
      } else if (typeof start === 'string') {
        var _isoSplit = isoSplit(start);

        var _isoSplit2 = _slicedToArray(_isoSplit, 2);

        s = _isoSplit2[0];
        e = _isoSplit2[1];
      }
    }

    this.start = s || s === 0 ? (0, _moment2.default)(s) : (0, _moment2.default)(-8640000000000000);
    this.end = e || e === 0 ? (0, _moment2.default)(e) : (0, _moment2.default)(8640000000000000);
  }

  _createClass(DateRange, [{
    key: 'adjacent',
    value: function adjacent(other) {
      var sameStartEnd = this.start.isSame(other.end);
      var sameEndStart = this.end.isSame(other.start);

      return sameStartEnd && other.start.valueOf() <= this.start.valueOf() || sameEndStart && other.end.valueOf() >= this.end.valueOf();
    }
  }, {
    key: 'add',
    value: function add(other) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { adjacent: false };

      if (this.overlaps(other, options)) {
        return new this.constructor(_moment2.default.min(this.start, other.start), _moment2.default.max(this.end, other.end));
      }

      return null;
    }
  }, {
    key: 'by',
    value: function by(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        var exclusive = options.exclusive || false;
        var step = options.step || 1;
        var diff = Math.abs(range.start.diff(range.end, interval)) / step;
        var iteration = 0;

        return {
          next: function next() {
            var current = range.start.clone().add(iteration * step, interval);
            var done = exclusive ? !(iteration < diff) : !(iteration <= diff);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'byRange',
    value: function byRange(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;
      var step = options.step || 1;
      var diff = this.valueOf() / interval.valueOf() / step;
      var exclusive = options.exclusive || false;
      var unit = Math.floor(diff);
      var iteration = 0;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        if (unit === Infinity) {
          return { done: true };
        }

        return {
          next: function next() {
            var current = (0, _moment2.default)(range.start.valueOf() + interval.valueOf() * iteration * step);
            var done = unit === diff && exclusive ? !(iteration < unit) : !(iteration <= unit);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'center',
    value: function center() {
      var center = this.start.valueOf() + this.diff() / 2;

      return (0, _moment2.default)(center);
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor(this.start, this.end);
    }
  }, {
    key: 'contains',
    value: function contains(other) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false };

      var start = this.start.valueOf();
      var end = this.end.valueOf();
      var oStart = other.valueOf();
      var oEnd = other.valueOf();

      if (other instanceof DateRange) {
        oStart = other.start.valueOf();
        oEnd = other.end.valueOf();
      }

      var startInRange = start < oStart || start <= oStart && !options.exclusive;
      var endInRange = end > oEnd || end >= oEnd && !options.exclusive;

      return startInRange && endInRange;
    }
  }, {
    key: 'diff',
    value: function diff(unit, rounded) {
      return this.end.diff(this.start, unit, rounded);
    }
  }, {
    key: 'duration',
    value: function duration(unit, rounded) {
      return this.diff(unit, rounded);
    }
  }, {
    key: 'intersect',
    value: function intersect(other) {
      var start = this.start.valueOf();
      var end = this.end.valueOf();
      var otherStart = other.start.valueOf();
      var otherEnd = other.end.valueOf();
      var isZeroLength = start == end;
      var isOtherZeroLength = otherStart == otherEnd;

      // Zero-length ranges
      if (isZeroLength) {
        var point = start;

        if (point == otherStart || point == otherEnd) {
          return null;
        } else if (point > otherStart && point < otherEnd) {
          return this;
        }
      } else if (isOtherZeroLength) {
        var _point = otherStart;

        if (_point == start || _point == end) {
          return null;
        } else if (_point > start && _point < end) {
          return other;
        }
      }

      // Non zero-length ranges
      if (start <= otherStart && otherStart < end && end < otherEnd) {
        return new this.constructor(otherStart, end);
      } else if (otherStart < start && start < otherEnd && otherEnd <= end) {
        return new this.constructor(start, otherEnd);
      } else if (otherStart < start && start <= end && end < otherEnd) {
        return this;
      } else if (start <= otherStart && otherStart <= otherEnd && otherEnd <= end) {
        return other;
      }

      return null;
    }
  }, {
    key: 'isEqual',
    value: function isEqual(other) {
      return this.start.isSame(other.start) && this.end.isSame(other.end);
    }
  }, {
    key: 'isSame',
    value: function isSame(other) {
      return this.isEqual(other);
    }
  }, {
    key: 'overlaps',
    value: function overlaps(other) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { adjacent: false };

      var intersect = this.intersect(other) !== null;

      if (options.adjacent && !intersect) {
        return this.adjacent(other);
      }

      return intersect;
    }
  }, {
    key: 'reverseBy',
    value: function reverseBy(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        var exclusive = options.exclusive || false;
        var step = options.step || 1;
        var diff = Math.abs(range.start.diff(range.end, interval)) / step;
        var iteration = 0;

        return {
          next: function next() {
            var current = range.end.clone().subtract(iteration * step, interval);
            var done = exclusive ? !(iteration < diff) : !(iteration <= diff);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'reverseByRange',
    value: function reverseByRange(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;
      var step = options.step || 1;
      var diff = this.valueOf() / interval.valueOf() / step;
      var exclusive = options.exclusive || false;
      var unit = Math.floor(diff);
      var iteration = 0;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        if (unit === Infinity) {
          return { done: true };
        }

        return {
          next: function next() {
            var current = (0, _moment2.default)(range.end.valueOf() - interval.valueOf() * iteration * step);
            var done = unit === diff && exclusive ? !(iteration < unit) : !(iteration <= unit);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'subtract',
    value: function subtract(other) {
      var start = this.start.valueOf();
      var end = this.end.valueOf();
      var oStart = other.start.valueOf();
      var oEnd = other.end.valueOf();

      if (this.intersect(other) === null) {
        return [this];
      } else if (oStart <= start && start < end && end <= oEnd) {
        return [];
      } else if (oStart <= start && start < oEnd && oEnd < end) {
        return [new this.constructor(oEnd, end)];
      } else if (start < oStart && oStart < end && end <= oEnd) {
        return [new this.constructor(start, oStart)];
      } else if (start < oStart && oStart < oEnd && oEnd < end) {
        return [new this.constructor(start, oStart), new this.constructor(oEnd, end)];
      } else if (start < oStart && oStart < end && oEnd < end) {
        return [new this.constructor(start, oStart), new this.constructor(oStart, end)];
      }

      return [];
    }
  }, {
    key: 'toDate',
    value: function toDate() {
      return [this.start.toDate(), this.end.toDate()];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.start.format() + '/' + this.end.format();
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.end.valueOf() - this.start.valueOf();
    }
  }]);

  return DateRange;
}();

//-----------------------------------------------------------------------------
// Moment Extensions
//-----------------------------------------------------------------------------

function extendMoment(moment) {
  /**
   * Build a date range.
   */
  moment.range = function range(start, end) {
    var m = this;

    if (INTERVALS.hasOwnProperty(start)) {
      return new DateRange(moment(m).startOf(start), moment(m).endOf(start));
    }

    return new DateRange(start, end);
  };

  /**
   * Build a date range between a date (or now) and a specified interval.
   * @param {String} interval The type of interval
   * @param {Number} [count=1] The number of intervals (positive or negative)
   * @param {Moment|Date} [date=moment()] The date to use
   * @return {DateRange}
   */
  moment.rangeFromInterval = function (interval) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : moment();

    if (!moment.isMoment(date)) date = moment(date);
    if (!date.isValid()) throw new Error('Invalid date.');

    var dateWithInterval = date.clone().add(count, interval);

    // Handle negative interval counts by assembling the dates in chronological order.
    var dates = [];
    dates.push(moment.min(date, dateWithInterval));
    dates.push(moment.max(date, dateWithInterval));

    return new DateRange(dates);
  };

  /**
   * Uses moment.parseZone on both the start and end of the given time interval
   * to preserve the time zones on the resulting DateRange object.
   * @param {string} isoTimeInterval the timeInterval to be parsed
   * @return {DateRange} constructed using moments that will preserve the time zones
   */
  moment.parseZoneRange = function (isoTimeInterval) {
    var momentStrings = isoSplit(isoTimeInterval);
    var start = moment.parseZone(momentStrings[0]);
    var end = moment.parseZone(momentStrings[1]);
    return new DateRange(start, end);
  };

  /**
   * Alias of static constructor.
   */
  moment.fn.range = moment.range;

  /**
   * Expose constructor
   */
  moment.range.constructor = DateRange;

  /**
   * Check if the current object is a date range.
   */
  moment.isRange = function (range) {
    return range instanceof DateRange;
  };

  /**
   * Check if the current moment is within a given date range.
   */
  moment.fn.within = function (range) {
    return range.contains(this.toDate());
  };

  return moment;
}

//-----------------------------------------------------------------------------
// Utility Functions
//-----------------------------------------------------------------------------

/**
 * Splits an iso string into two strings.
 */
function isoSplit(isoString) {
  return isoString.split('/');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(6)
  , normalizeOpts = __webpack_require__(13)
  , isCallable    = __webpack_require__(9)
  , contains      = __webpack_require__(15)

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(7)()
	? Object.assign
	: __webpack_require__(8);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(10)
  , value = __webpack_require__(14)
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(11)()
	? Object.keys
	: __webpack_require__(12);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
 return false;
}
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(0);

var keys = Object.keys;

module.exports = function (object) {
	return keys(isValue(object) ? Object(object) : object);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(0);

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(0);

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(16)()
	? String.prototype.contains
	: __webpack_require__(17);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d              = __webpack_require__(4)
  , validateSymbol = __webpack_require__(21)

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(19);

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=moment-range.js.map

/***/ }),

/***/ "./node_modules/ramda/index.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  F: __webpack_require__(/*! ./src/F */ "./node_modules/ramda/src/F.js"),
  T: __webpack_require__(/*! ./src/T */ "./node_modules/ramda/src/T.js"),
  __: __webpack_require__(/*! ./src/__ */ "./node_modules/ramda/src/__.js"),
  add: __webpack_require__(/*! ./src/add */ "./node_modules/ramda/src/add.js"),
  addIndex: __webpack_require__(/*! ./src/addIndex */ "./node_modules/ramda/src/addIndex.js"),
  adjust: __webpack_require__(/*! ./src/adjust */ "./node_modules/ramda/src/adjust.js"),
  all: __webpack_require__(/*! ./src/all */ "./node_modules/ramda/src/all.js"),
  allPass: __webpack_require__(/*! ./src/allPass */ "./node_modules/ramda/src/allPass.js"),
  always: __webpack_require__(/*! ./src/always */ "./node_modules/ramda/src/always.js"),
  and: __webpack_require__(/*! ./src/and */ "./node_modules/ramda/src/and.js"),
  any: __webpack_require__(/*! ./src/any */ "./node_modules/ramda/src/any.js"),
  anyPass: __webpack_require__(/*! ./src/anyPass */ "./node_modules/ramda/src/anyPass.js"),
  ap: __webpack_require__(/*! ./src/ap */ "./node_modules/ramda/src/ap.js"),
  aperture: __webpack_require__(/*! ./src/aperture */ "./node_modules/ramda/src/aperture.js"),
  append: __webpack_require__(/*! ./src/append */ "./node_modules/ramda/src/append.js"),
  apply: __webpack_require__(/*! ./src/apply */ "./node_modules/ramda/src/apply.js"),
  applySpec: __webpack_require__(/*! ./src/applySpec */ "./node_modules/ramda/src/applySpec.js"),
  ascend: __webpack_require__(/*! ./src/ascend */ "./node_modules/ramda/src/ascend.js"),
  assoc: __webpack_require__(/*! ./src/assoc */ "./node_modules/ramda/src/assoc.js"),
  assocPath: __webpack_require__(/*! ./src/assocPath */ "./node_modules/ramda/src/assocPath.js"),
  binary: __webpack_require__(/*! ./src/binary */ "./node_modules/ramda/src/binary.js"),
  bind: __webpack_require__(/*! ./src/bind */ "./node_modules/ramda/src/bind.js"),
  both: __webpack_require__(/*! ./src/both */ "./node_modules/ramda/src/both.js"),
  call: __webpack_require__(/*! ./src/call */ "./node_modules/ramda/src/call.js"),
  chain: __webpack_require__(/*! ./src/chain */ "./node_modules/ramda/src/chain.js"),
  clamp: __webpack_require__(/*! ./src/clamp */ "./node_modules/ramda/src/clamp.js"),
  clone: __webpack_require__(/*! ./src/clone */ "./node_modules/ramda/src/clone.js"),
  comparator: __webpack_require__(/*! ./src/comparator */ "./node_modules/ramda/src/comparator.js"),
  complement: __webpack_require__(/*! ./src/complement */ "./node_modules/ramda/src/complement.js"),
  compose: __webpack_require__(/*! ./src/compose */ "./node_modules/ramda/src/compose.js"),
  composeK: __webpack_require__(/*! ./src/composeK */ "./node_modules/ramda/src/composeK.js"),
  composeP: __webpack_require__(/*! ./src/composeP */ "./node_modules/ramda/src/composeP.js"),
  concat: __webpack_require__(/*! ./src/concat */ "./node_modules/ramda/src/concat.js"),
  cond: __webpack_require__(/*! ./src/cond */ "./node_modules/ramda/src/cond.js"),
  construct: __webpack_require__(/*! ./src/construct */ "./node_modules/ramda/src/construct.js"),
  constructN: __webpack_require__(/*! ./src/constructN */ "./node_modules/ramda/src/constructN.js"),
  contains: __webpack_require__(/*! ./src/contains */ "./node_modules/ramda/src/contains.js"),
  converge: __webpack_require__(/*! ./src/converge */ "./node_modules/ramda/src/converge.js"),
  countBy: __webpack_require__(/*! ./src/countBy */ "./node_modules/ramda/src/countBy.js"),
  curry: __webpack_require__(/*! ./src/curry */ "./node_modules/ramda/src/curry.js"),
  curryN: __webpack_require__(/*! ./src/curryN */ "./node_modules/ramda/src/curryN.js"),
  dec: __webpack_require__(/*! ./src/dec */ "./node_modules/ramda/src/dec.js"),
  defaultTo: __webpack_require__(/*! ./src/defaultTo */ "./node_modules/ramda/src/defaultTo.js"),
  descend: __webpack_require__(/*! ./src/descend */ "./node_modules/ramda/src/descend.js"),
  difference: __webpack_require__(/*! ./src/difference */ "./node_modules/ramda/src/difference.js"),
  differenceWith: __webpack_require__(/*! ./src/differenceWith */ "./node_modules/ramda/src/differenceWith.js"),
  dissoc: __webpack_require__(/*! ./src/dissoc */ "./node_modules/ramda/src/dissoc.js"),
  dissocPath: __webpack_require__(/*! ./src/dissocPath */ "./node_modules/ramda/src/dissocPath.js"),
  divide: __webpack_require__(/*! ./src/divide */ "./node_modules/ramda/src/divide.js"),
  drop: __webpack_require__(/*! ./src/drop */ "./node_modules/ramda/src/drop.js"),
  dropLast: __webpack_require__(/*! ./src/dropLast */ "./node_modules/ramda/src/dropLast.js"),
  dropLastWhile: __webpack_require__(/*! ./src/dropLastWhile */ "./node_modules/ramda/src/dropLastWhile.js"),
  dropRepeats: __webpack_require__(/*! ./src/dropRepeats */ "./node_modules/ramda/src/dropRepeats.js"),
  dropRepeatsWith: __webpack_require__(/*! ./src/dropRepeatsWith */ "./node_modules/ramda/src/dropRepeatsWith.js"),
  dropWhile: __webpack_require__(/*! ./src/dropWhile */ "./node_modules/ramda/src/dropWhile.js"),
  either: __webpack_require__(/*! ./src/either */ "./node_modules/ramda/src/either.js"),
  empty: __webpack_require__(/*! ./src/empty */ "./node_modules/ramda/src/empty.js"),
  endsWith: __webpack_require__(/*! ./src/endsWith */ "./node_modules/ramda/src/endsWith.js"),
  eqBy: __webpack_require__(/*! ./src/eqBy */ "./node_modules/ramda/src/eqBy.js"),
  eqProps: __webpack_require__(/*! ./src/eqProps */ "./node_modules/ramda/src/eqProps.js"),
  equals: __webpack_require__(/*! ./src/equals */ "./node_modules/ramda/src/equals.js"),
  evolve: __webpack_require__(/*! ./src/evolve */ "./node_modules/ramda/src/evolve.js"),
  filter: __webpack_require__(/*! ./src/filter */ "./node_modules/ramda/src/filter.js"),
  find: __webpack_require__(/*! ./src/find */ "./node_modules/ramda/src/find.js"),
  findIndex: __webpack_require__(/*! ./src/findIndex */ "./node_modules/ramda/src/findIndex.js"),
  findLast: __webpack_require__(/*! ./src/findLast */ "./node_modules/ramda/src/findLast.js"),
  findLastIndex: __webpack_require__(/*! ./src/findLastIndex */ "./node_modules/ramda/src/findLastIndex.js"),
  flatten: __webpack_require__(/*! ./src/flatten */ "./node_modules/ramda/src/flatten.js"),
  flip: __webpack_require__(/*! ./src/flip */ "./node_modules/ramda/src/flip.js"),
  forEach: __webpack_require__(/*! ./src/forEach */ "./node_modules/ramda/src/forEach.js"),
  forEachObjIndexed: __webpack_require__(/*! ./src/forEachObjIndexed */ "./node_modules/ramda/src/forEachObjIndexed.js"),
  fromPairs: __webpack_require__(/*! ./src/fromPairs */ "./node_modules/ramda/src/fromPairs.js"),
  groupBy: __webpack_require__(/*! ./src/groupBy */ "./node_modules/ramda/src/groupBy.js"),
  groupWith: __webpack_require__(/*! ./src/groupWith */ "./node_modules/ramda/src/groupWith.js"),
  gt: __webpack_require__(/*! ./src/gt */ "./node_modules/ramda/src/gt.js"),
  gte: __webpack_require__(/*! ./src/gte */ "./node_modules/ramda/src/gte.js"),
  has: __webpack_require__(/*! ./src/has */ "./node_modules/ramda/src/has.js"),
  hasIn: __webpack_require__(/*! ./src/hasIn */ "./node_modules/ramda/src/hasIn.js"),
  head: __webpack_require__(/*! ./src/head */ "./node_modules/ramda/src/head.js"),
  identical: __webpack_require__(/*! ./src/identical */ "./node_modules/ramda/src/identical.js"),
  identity: __webpack_require__(/*! ./src/identity */ "./node_modules/ramda/src/identity.js"),
  ifElse: __webpack_require__(/*! ./src/ifElse */ "./node_modules/ramda/src/ifElse.js"),
  inc: __webpack_require__(/*! ./src/inc */ "./node_modules/ramda/src/inc.js"),
  indexBy: __webpack_require__(/*! ./src/indexBy */ "./node_modules/ramda/src/indexBy.js"),
  indexOf: __webpack_require__(/*! ./src/indexOf */ "./node_modules/ramda/src/indexOf.js"),
  init: __webpack_require__(/*! ./src/init */ "./node_modules/ramda/src/init.js"),
  innerJoin: __webpack_require__(/*! ./src/innerJoin */ "./node_modules/ramda/src/innerJoin.js"),
  insert: __webpack_require__(/*! ./src/insert */ "./node_modules/ramda/src/insert.js"),
  insertAll: __webpack_require__(/*! ./src/insertAll */ "./node_modules/ramda/src/insertAll.js"),
  intersection: __webpack_require__(/*! ./src/intersection */ "./node_modules/ramda/src/intersection.js"),
  intersectionWith: __webpack_require__(/*! ./src/intersectionWith */ "./node_modules/ramda/src/intersectionWith.js"),
  intersperse: __webpack_require__(/*! ./src/intersperse */ "./node_modules/ramda/src/intersperse.js"),
  into: __webpack_require__(/*! ./src/into */ "./node_modules/ramda/src/into.js"),
  invert: __webpack_require__(/*! ./src/invert */ "./node_modules/ramda/src/invert.js"),
  invertObj: __webpack_require__(/*! ./src/invertObj */ "./node_modules/ramda/src/invertObj.js"),
  invoker: __webpack_require__(/*! ./src/invoker */ "./node_modules/ramda/src/invoker.js"),
  is: __webpack_require__(/*! ./src/is */ "./node_modules/ramda/src/is.js"),
  isEmpty: __webpack_require__(/*! ./src/isEmpty */ "./node_modules/ramda/src/isEmpty.js"),
  isNil: __webpack_require__(/*! ./src/isNil */ "./node_modules/ramda/src/isNil.js"),
  join: __webpack_require__(/*! ./src/join */ "./node_modules/ramda/src/join.js"),
  juxt: __webpack_require__(/*! ./src/juxt */ "./node_modules/ramda/src/juxt.js"),
  keys: __webpack_require__(/*! ./src/keys */ "./node_modules/ramda/src/keys.js"),
  keysIn: __webpack_require__(/*! ./src/keysIn */ "./node_modules/ramda/src/keysIn.js"),
  last: __webpack_require__(/*! ./src/last */ "./node_modules/ramda/src/last.js"),
  lastIndexOf: __webpack_require__(/*! ./src/lastIndexOf */ "./node_modules/ramda/src/lastIndexOf.js"),
  length: __webpack_require__(/*! ./src/length */ "./node_modules/ramda/src/length.js"),
  lens: __webpack_require__(/*! ./src/lens */ "./node_modules/ramda/src/lens.js"),
  lensIndex: __webpack_require__(/*! ./src/lensIndex */ "./node_modules/ramda/src/lensIndex.js"),
  lensPath: __webpack_require__(/*! ./src/lensPath */ "./node_modules/ramda/src/lensPath.js"),
  lensProp: __webpack_require__(/*! ./src/lensProp */ "./node_modules/ramda/src/lensProp.js"),
  lift: __webpack_require__(/*! ./src/lift */ "./node_modules/ramda/src/lift.js"),
  liftN: __webpack_require__(/*! ./src/liftN */ "./node_modules/ramda/src/liftN.js"),
  lt: __webpack_require__(/*! ./src/lt */ "./node_modules/ramda/src/lt.js"),
  lte: __webpack_require__(/*! ./src/lte */ "./node_modules/ramda/src/lte.js"),
  map: __webpack_require__(/*! ./src/map */ "./node_modules/ramda/src/map.js"),
  mapAccum: __webpack_require__(/*! ./src/mapAccum */ "./node_modules/ramda/src/mapAccum.js"),
  mapAccumRight: __webpack_require__(/*! ./src/mapAccumRight */ "./node_modules/ramda/src/mapAccumRight.js"),
  mapObjIndexed: __webpack_require__(/*! ./src/mapObjIndexed */ "./node_modules/ramda/src/mapObjIndexed.js"),
  match: __webpack_require__(/*! ./src/match */ "./node_modules/ramda/src/match.js"),
  mathMod: __webpack_require__(/*! ./src/mathMod */ "./node_modules/ramda/src/mathMod.js"),
  max: __webpack_require__(/*! ./src/max */ "./node_modules/ramda/src/max.js"),
  maxBy: __webpack_require__(/*! ./src/maxBy */ "./node_modules/ramda/src/maxBy.js"),
  mean: __webpack_require__(/*! ./src/mean */ "./node_modules/ramda/src/mean.js"),
  median: __webpack_require__(/*! ./src/median */ "./node_modules/ramda/src/median.js"),
  memoize: __webpack_require__(/*! ./src/memoize */ "./node_modules/ramda/src/memoize.js"),
  memoizeWith: __webpack_require__(/*! ./src/memoizeWith */ "./node_modules/ramda/src/memoizeWith.js"),
  merge: __webpack_require__(/*! ./src/merge */ "./node_modules/ramda/src/merge.js"),
  mergeAll: __webpack_require__(/*! ./src/mergeAll */ "./node_modules/ramda/src/mergeAll.js"),
  mergeDeepLeft: __webpack_require__(/*! ./src/mergeDeepLeft */ "./node_modules/ramda/src/mergeDeepLeft.js"),
  mergeDeepRight: __webpack_require__(/*! ./src/mergeDeepRight */ "./node_modules/ramda/src/mergeDeepRight.js"),
  mergeDeepWith: __webpack_require__(/*! ./src/mergeDeepWith */ "./node_modules/ramda/src/mergeDeepWith.js"),
  mergeDeepWithKey: __webpack_require__(/*! ./src/mergeDeepWithKey */ "./node_modules/ramda/src/mergeDeepWithKey.js"),
  mergeWith: __webpack_require__(/*! ./src/mergeWith */ "./node_modules/ramda/src/mergeWith.js"),
  mergeWithKey: __webpack_require__(/*! ./src/mergeWithKey */ "./node_modules/ramda/src/mergeWithKey.js"),
  min: __webpack_require__(/*! ./src/min */ "./node_modules/ramda/src/min.js"),
  minBy: __webpack_require__(/*! ./src/minBy */ "./node_modules/ramda/src/minBy.js"),
  modulo: __webpack_require__(/*! ./src/modulo */ "./node_modules/ramda/src/modulo.js"),
  multiply: __webpack_require__(/*! ./src/multiply */ "./node_modules/ramda/src/multiply.js"),
  nAry: __webpack_require__(/*! ./src/nAry */ "./node_modules/ramda/src/nAry.js"),
  negate: __webpack_require__(/*! ./src/negate */ "./node_modules/ramda/src/negate.js"),
  none: __webpack_require__(/*! ./src/none */ "./node_modules/ramda/src/none.js"),
  not: __webpack_require__(/*! ./src/not */ "./node_modules/ramda/src/not.js"),
  nth: __webpack_require__(/*! ./src/nth */ "./node_modules/ramda/src/nth.js"),
  nthArg: __webpack_require__(/*! ./src/nthArg */ "./node_modules/ramda/src/nthArg.js"),
  o: __webpack_require__(/*! ./src/o */ "./node_modules/ramda/src/o.js"),
  objOf: __webpack_require__(/*! ./src/objOf */ "./node_modules/ramda/src/objOf.js"),
  of: __webpack_require__(/*! ./src/of */ "./node_modules/ramda/src/of.js"),
  omit: __webpack_require__(/*! ./src/omit */ "./node_modules/ramda/src/omit.js"),
  once: __webpack_require__(/*! ./src/once */ "./node_modules/ramda/src/once.js"),
  or: __webpack_require__(/*! ./src/or */ "./node_modules/ramda/src/or.js"),
  over: __webpack_require__(/*! ./src/over */ "./node_modules/ramda/src/over.js"),
  pair: __webpack_require__(/*! ./src/pair */ "./node_modules/ramda/src/pair.js"),
  partial: __webpack_require__(/*! ./src/partial */ "./node_modules/ramda/src/partial.js"),
  partialRight: __webpack_require__(/*! ./src/partialRight */ "./node_modules/ramda/src/partialRight.js"),
  partition: __webpack_require__(/*! ./src/partition */ "./node_modules/ramda/src/partition.js"),
  path: __webpack_require__(/*! ./src/path */ "./node_modules/ramda/src/path.js"),
  pathEq: __webpack_require__(/*! ./src/pathEq */ "./node_modules/ramda/src/pathEq.js"),
  pathOr: __webpack_require__(/*! ./src/pathOr */ "./node_modules/ramda/src/pathOr.js"),
  pathSatisfies: __webpack_require__(/*! ./src/pathSatisfies */ "./node_modules/ramda/src/pathSatisfies.js"),
  pick: __webpack_require__(/*! ./src/pick */ "./node_modules/ramda/src/pick.js"),
  pickAll: __webpack_require__(/*! ./src/pickAll */ "./node_modules/ramda/src/pickAll.js"),
  pickBy: __webpack_require__(/*! ./src/pickBy */ "./node_modules/ramda/src/pickBy.js"),
  pipe: __webpack_require__(/*! ./src/pipe */ "./node_modules/ramda/src/pipe.js"),
  pipeK: __webpack_require__(/*! ./src/pipeK */ "./node_modules/ramda/src/pipeK.js"),
  pipeP: __webpack_require__(/*! ./src/pipeP */ "./node_modules/ramda/src/pipeP.js"),
  pluck: __webpack_require__(/*! ./src/pluck */ "./node_modules/ramda/src/pluck.js"),
  prepend: __webpack_require__(/*! ./src/prepend */ "./node_modules/ramda/src/prepend.js"),
  product: __webpack_require__(/*! ./src/product */ "./node_modules/ramda/src/product.js"),
  project: __webpack_require__(/*! ./src/project */ "./node_modules/ramda/src/project.js"),
  prop: __webpack_require__(/*! ./src/prop */ "./node_modules/ramda/src/prop.js"),
  propEq: __webpack_require__(/*! ./src/propEq */ "./node_modules/ramda/src/propEq.js"),
  propIs: __webpack_require__(/*! ./src/propIs */ "./node_modules/ramda/src/propIs.js"),
  propOr: __webpack_require__(/*! ./src/propOr */ "./node_modules/ramda/src/propOr.js"),
  propSatisfies: __webpack_require__(/*! ./src/propSatisfies */ "./node_modules/ramda/src/propSatisfies.js"),
  props: __webpack_require__(/*! ./src/props */ "./node_modules/ramda/src/props.js"),
  range: __webpack_require__(/*! ./src/range */ "./node_modules/ramda/src/range.js"),
  reduce: __webpack_require__(/*! ./src/reduce */ "./node_modules/ramda/src/reduce.js"),
  reduceBy: __webpack_require__(/*! ./src/reduceBy */ "./node_modules/ramda/src/reduceBy.js"),
  reduceRight: __webpack_require__(/*! ./src/reduceRight */ "./node_modules/ramda/src/reduceRight.js"),
  reduceWhile: __webpack_require__(/*! ./src/reduceWhile */ "./node_modules/ramda/src/reduceWhile.js"),
  reduced: __webpack_require__(/*! ./src/reduced */ "./node_modules/ramda/src/reduced.js"),
  reject: __webpack_require__(/*! ./src/reject */ "./node_modules/ramda/src/reject.js"),
  remove: __webpack_require__(/*! ./src/remove */ "./node_modules/ramda/src/remove.js"),
  repeat: __webpack_require__(/*! ./src/repeat */ "./node_modules/ramda/src/repeat.js"),
  replace: __webpack_require__(/*! ./src/replace */ "./node_modules/ramda/src/replace.js"),
  reverse: __webpack_require__(/*! ./src/reverse */ "./node_modules/ramda/src/reverse.js"),
  scan: __webpack_require__(/*! ./src/scan */ "./node_modules/ramda/src/scan.js"),
  sequence: __webpack_require__(/*! ./src/sequence */ "./node_modules/ramda/src/sequence.js"),
  set: __webpack_require__(/*! ./src/set */ "./node_modules/ramda/src/set.js"),
  slice: __webpack_require__(/*! ./src/slice */ "./node_modules/ramda/src/slice.js"),
  sort: __webpack_require__(/*! ./src/sort */ "./node_modules/ramda/src/sort.js"),
  sortBy: __webpack_require__(/*! ./src/sortBy */ "./node_modules/ramda/src/sortBy.js"),
  sortWith: __webpack_require__(/*! ./src/sortWith */ "./node_modules/ramda/src/sortWith.js"),
  split: __webpack_require__(/*! ./src/split */ "./node_modules/ramda/src/split.js"),
  splitAt: __webpack_require__(/*! ./src/splitAt */ "./node_modules/ramda/src/splitAt.js"),
  splitEvery: __webpack_require__(/*! ./src/splitEvery */ "./node_modules/ramda/src/splitEvery.js"),
  splitWhen: __webpack_require__(/*! ./src/splitWhen */ "./node_modules/ramda/src/splitWhen.js"),
  startsWith: __webpack_require__(/*! ./src/startsWith */ "./node_modules/ramda/src/startsWith.js"),
  subtract: __webpack_require__(/*! ./src/subtract */ "./node_modules/ramda/src/subtract.js"),
  sum: __webpack_require__(/*! ./src/sum */ "./node_modules/ramda/src/sum.js"),
  symmetricDifference: __webpack_require__(/*! ./src/symmetricDifference */ "./node_modules/ramda/src/symmetricDifference.js"),
  symmetricDifferenceWith: __webpack_require__(/*! ./src/symmetricDifferenceWith */ "./node_modules/ramda/src/symmetricDifferenceWith.js"),
  tail: __webpack_require__(/*! ./src/tail */ "./node_modules/ramda/src/tail.js"),
  take: __webpack_require__(/*! ./src/take */ "./node_modules/ramda/src/take.js"),
  takeLast: __webpack_require__(/*! ./src/takeLast */ "./node_modules/ramda/src/takeLast.js"),
  takeLastWhile: __webpack_require__(/*! ./src/takeLastWhile */ "./node_modules/ramda/src/takeLastWhile.js"),
  takeWhile: __webpack_require__(/*! ./src/takeWhile */ "./node_modules/ramda/src/takeWhile.js"),
  tap: __webpack_require__(/*! ./src/tap */ "./node_modules/ramda/src/tap.js"),
  test: __webpack_require__(/*! ./src/test */ "./node_modules/ramda/src/test.js"),
  times: __webpack_require__(/*! ./src/times */ "./node_modules/ramda/src/times.js"),
  toLower: __webpack_require__(/*! ./src/toLower */ "./node_modules/ramda/src/toLower.js"),
  toPairs: __webpack_require__(/*! ./src/toPairs */ "./node_modules/ramda/src/toPairs.js"),
  toPairsIn: __webpack_require__(/*! ./src/toPairsIn */ "./node_modules/ramda/src/toPairsIn.js"),
  toString: __webpack_require__(/*! ./src/toString */ "./node_modules/ramda/src/toString.js"),
  toUpper: __webpack_require__(/*! ./src/toUpper */ "./node_modules/ramda/src/toUpper.js"),
  transduce: __webpack_require__(/*! ./src/transduce */ "./node_modules/ramda/src/transduce.js"),
  transpose: __webpack_require__(/*! ./src/transpose */ "./node_modules/ramda/src/transpose.js"),
  traverse: __webpack_require__(/*! ./src/traverse */ "./node_modules/ramda/src/traverse.js"),
  trim: __webpack_require__(/*! ./src/trim */ "./node_modules/ramda/src/trim.js"),
  tryCatch: __webpack_require__(/*! ./src/tryCatch */ "./node_modules/ramda/src/tryCatch.js"),
  type: __webpack_require__(/*! ./src/type */ "./node_modules/ramda/src/type.js"),
  unapply: __webpack_require__(/*! ./src/unapply */ "./node_modules/ramda/src/unapply.js"),
  unary: __webpack_require__(/*! ./src/unary */ "./node_modules/ramda/src/unary.js"),
  uncurryN: __webpack_require__(/*! ./src/uncurryN */ "./node_modules/ramda/src/uncurryN.js"),
  unfold: __webpack_require__(/*! ./src/unfold */ "./node_modules/ramda/src/unfold.js"),
  union: __webpack_require__(/*! ./src/union */ "./node_modules/ramda/src/union.js"),
  unionWith: __webpack_require__(/*! ./src/unionWith */ "./node_modules/ramda/src/unionWith.js"),
  uniq: __webpack_require__(/*! ./src/uniq */ "./node_modules/ramda/src/uniq.js"),
  uniqBy: __webpack_require__(/*! ./src/uniqBy */ "./node_modules/ramda/src/uniqBy.js"),
  uniqWith: __webpack_require__(/*! ./src/uniqWith */ "./node_modules/ramda/src/uniqWith.js"),
  unless: __webpack_require__(/*! ./src/unless */ "./node_modules/ramda/src/unless.js"),
  unnest: __webpack_require__(/*! ./src/unnest */ "./node_modules/ramda/src/unnest.js"),
  until: __webpack_require__(/*! ./src/until */ "./node_modules/ramda/src/until.js"),
  update: __webpack_require__(/*! ./src/update */ "./node_modules/ramda/src/update.js"),
  useWith: __webpack_require__(/*! ./src/useWith */ "./node_modules/ramda/src/useWith.js"),
  values: __webpack_require__(/*! ./src/values */ "./node_modules/ramda/src/values.js"),
  valuesIn: __webpack_require__(/*! ./src/valuesIn */ "./node_modules/ramda/src/valuesIn.js"),
  view: __webpack_require__(/*! ./src/view */ "./node_modules/ramda/src/view.js"),
  when: __webpack_require__(/*! ./src/when */ "./node_modules/ramda/src/when.js"),
  where: __webpack_require__(/*! ./src/where */ "./node_modules/ramda/src/where.js"),
  whereEq: __webpack_require__(/*! ./src/whereEq */ "./node_modules/ramda/src/whereEq.js"),
  without: __webpack_require__(/*! ./src/without */ "./node_modules/ramda/src/without.js"),
  xprod: __webpack_require__(/*! ./src/xprod */ "./node_modules/ramda/src/xprod.js"),
  zip: __webpack_require__(/*! ./src/zip */ "./node_modules/ramda/src/zip.js"),
  zipObj: __webpack_require__(/*! ./src/zipObj */ "./node_modules/ramda/src/zipObj.js"),
  zipWith: __webpack_require__(/*! ./src/zipWith */ "./node_modules/ramda/src/zipWith.js")
};


/***/ }),

/***/ "./node_modules/ramda/src/F.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/src/F.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(/*! ./always */ "./node_modules/ramda/src/always.js");


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
module.exports = always(false);


/***/ }),

/***/ "./node_modules/ramda/src/T.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/src/T.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(/*! ./always */ "./node_modules/ramda/src/always.js");


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
module.exports = always(true);


/***/ }),

/***/ "./node_modules/ramda/src/__.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/__.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {'@@functional/placeholder': true};


/***/ }),

/***/ "./node_modules/ramda/src/add.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/add.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
module.exports = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});


/***/ }),

/***/ "./node_modules/ramda/src/addIndex.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/addIndex.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/adjust.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/adjust.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
module.exports = _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});


/***/ }),

/***/ "./node_modules/ramda/src/all.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/all.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xall = __webpack_require__(/*! ./internal/_xall */ "./node_modules/ramda/src/internal/_xall.js");


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));


/***/ }),

/***/ "./node_modules/ramda/src/allPass.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/allPass.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var max = __webpack_require__(/*! ./max */ "./node_modules/ramda/src/max.js");
var pluck = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/src/pluck.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
module.exports = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/always.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/always.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});


/***/ }),

/***/ "./node_modules/ramda/src/and.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/and.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
module.exports = _curry2(function and(a, b) {
  return a && b;
});


/***/ }),

/***/ "./node_modules/ramda/src/any.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/any.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xany = __webpack_require__(/*! ./internal/_xany */ "./node_modules/ramda/src/internal/_xany.js");


/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));


/***/ }),

/***/ "./node_modules/ramda/src/anyPass.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/anyPass.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var max = __webpack_require__(/*! ./max */ "./node_modules/ramda/src/max.js");
var pluck = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/src/pluck.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
module.exports = _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/ap.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/ap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");


/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
module.exports = _curry2(function ap(applyF, applyX) {
  return (
    typeof applyX['fantasy-land/ap'] === 'function' ?
      applyX['fantasy-land/ap'](applyF) :
    typeof applyF.ap === 'function' ?
      applyF.ap(applyX) :
    typeof applyF === 'function' ?
      function(x) { return applyF(x)(applyX(x)); } :
    // else
      _reduce(function(acc, f) { return _concat(acc, map(f, applyX)); }, [], applyF)
  );
});


/***/ }),

/***/ "./node_modules/ramda/src/aperture.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/aperture.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _aperture = __webpack_require__(/*! ./internal/_aperture */ "./node_modules/ramda/src/internal/_aperture.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xaperture = __webpack_require__(/*! ./internal/_xaperture */ "./node_modules/ramda/src/internal/_xaperture.js");


/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));


/***/ }),

/***/ "./node_modules/ramda/src/append.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/append.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});


/***/ }),

/***/ "./node_modules/ramda/src/apply.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/apply.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
module.exports = _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});


/***/ }),

/***/ "./node_modules/ramda/src/applySpec.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/applySpec.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var apply = __webpack_require__(/*! ./apply */ "./node_modules/ramda/src/apply.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");
var max = __webpack_require__(/*! ./max */ "./node_modules/ramda/src/max.js");
var pluck = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/src/pluck.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");
var values = __webpack_require__(/*! ./values */ "./node_modules/ramda/src/values.js");


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v); },
             spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))),
                function() {
                  var args = arguments;
                  return map(function(f) { return apply(f, args); }, spec);
                });
});


/***/ }),

/***/ "./node_modules/ramda/src/ascend.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/ascend.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});


/***/ }),

/***/ "./node_modules/ramda/src/assoc.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/assoc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/assocPath.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/assocPath.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");
var _isArray = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/src/internal/_isArray.js");
var _isInteger = __webpack_require__(/*! ./internal/_isInteger */ "./node_modules/ramda/src/internal/_isInteger.js");
var assoc = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/src/assoc.js");
var isNil = __webpack_require__(/*! ./isNil */ "./node_modules/ramda/src/isNil.js");


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
module.exports = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});


/***/ }),

/***/ "./node_modules/ramda/src/binary.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/binary.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var nAry = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/src/nAry.js");


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
module.exports = _curry1(function binary(fn) {
  return nAry(2, fn);
});


/***/ }),

/***/ "./node_modules/ramda/src/bind.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/bind.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/both.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/both.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isFunction = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/src/internal/_isFunction.js");
var and = __webpack_require__(/*! ./and */ "./node_modules/ramda/src/and.js");
var lift = __webpack_require__(/*! ./lift */ "./node_modules/ramda/src/lift.js");


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});


/***/ }),

/***/ "./node_modules/ramda/src/call.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/call.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var curry = __webpack_require__(/*! ./curry */ "./node_modules/ramda/src/curry.js");


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});


/***/ }),

/***/ "./node_modules/ramda/src/chain.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/chain.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _makeFlat = __webpack_require__(/*! ./internal/_makeFlat */ "./node_modules/ramda/src/internal/_makeFlat.js");
var _xchain = __webpack_require__(/*! ./internal/_xchain */ "./node_modules/ramda/src/internal/_xchain.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
module.exports = _curry2(_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));


/***/ }),

/***/ "./node_modules/ramda/src/clamp.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/clamp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
module.exports = _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min :
         value > max ? max :
         value;
});


/***/ }),

/***/ "./node_modules/ramda/src/clone.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/clone.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(/*! ./internal/_clone */ "./node_modules/ramda/src/internal/_clone.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});


/***/ }),

/***/ "./node_modules/ramda/src/comparator.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/comparator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = _curry1(function comparator(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});


/***/ }),

/***/ "./node_modules/ramda/src/complement.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/complement.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var lift = __webpack_require__(/*! ./lift */ "./node_modules/ramda/src/lift.js");
var not = __webpack_require__(/*! ./not */ "./node_modules/ramda/src/not.js");


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
module.exports = lift(not);


/***/ }),

/***/ "./node_modules/ramda/src/compose.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/compose.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pipe = __webpack_require__(/*! ./pipe */ "./node_modules/ramda/src/pipe.js");
var reverse = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/src/reverse.js");


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};


/***/ }),

/***/ "./node_modules/ramda/src/composeK.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/composeK.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var chain = __webpack_require__(/*! ./chain */ "./node_modules/ramda/src/chain.js");
var compose = __webpack_require__(/*! ./compose */ "./node_modules/ramda/src/compose.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
module.exports = function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, map(chain, init)), last);
};


/***/ }),

/***/ "./node_modules/ramda/src/composeP.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/composeP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pipeP = __webpack_require__(/*! ./pipeP */ "./node_modules/ramda/src/pipeP.js");
var reverse = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/src/reverse.js");


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
module.exports = function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return pipeP.apply(this, reverse(arguments));
};


/***/ }),

/***/ "./node_modules/ramda/src/concat.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/concat.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isArray = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/src/internal/_isArray.js");
var _isFunction = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/src/internal/_isFunction.js");
var _isString = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/src/internal/_isString.js");
var toString = __webpack_require__(/*! ./toString */ "./node_modules/ramda/src/toString.js");


/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
module.exports = _curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});


/***/ }),

/***/ "./node_modules/ramda/src/cond.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/cond.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");
var max = __webpack_require__(/*! ./max */ "./node_modules/ramda/src/max.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
module.exports = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/construct.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/construct.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var constructN = __webpack_require__(/*! ./constructN */ "./node_modules/ramda/src/constructN.js");


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
module.exports = _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});


/***/ }),

/***/ "./node_modules/ramda/src/constructN.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/constructN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var curry = __webpack_require__(/*! ./curry */ "./node_modules/ramda/src/curry.js");
var nAry = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/src/nAry.js");


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
module.exports = _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function() { return new Fn(); };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case  1: return new Fn($0);
      case  2: return new Fn($0, $1);
      case  3: return new Fn($0, $1, $2);
      case  4: return new Fn($0, $1, $2, $3);
      case  5: return new Fn($0, $1, $2, $3, $4);
      case  6: return new Fn($0, $1, $2, $3, $4, $5);
      case  7: return new Fn($0, $1, $2, $3, $4, $5, $6);
      case  8: return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case  9: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});


/***/ }),

/***/ "./node_modules/ramda/src/contains.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/contains.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/src/internal/_contains.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);


/***/ }),

/***/ "./node_modules/ramda/src/converge.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/converge.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _map = __webpack_require__(/*! ./internal/_map */ "./node_modules/ramda/src/internal/_map.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var max = __webpack_require__(/*! ./max */ "./node_modules/ramda/src/max.js");
var pluck = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/src/pluck.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
module.exports = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/countBy.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/countBy.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/src/reduceBy.js");


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
module.exports = reduceBy(function(acc, elem) { return acc + 1; }, 0);


/***/ }),

/***/ "./node_modules/ramda/src/curry.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/curry.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});


/***/ }),

/***/ "./node_modules/ramda/src/curryN.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/curryN.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _curryN = __webpack_require__(/*! ./internal/_curryN */ "./node_modules/ramda/src/internal/_curryN.js");


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});


/***/ }),

/***/ "./node_modules/ramda/src/dec.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/dec.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(/*! ./add */ "./node_modules/ramda/src/add.js");


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);


/***/ }),

/***/ "./node_modules/ramda/src/defaultTo.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/defaultTo.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});


/***/ }),

/***/ "./node_modules/ramda/src/descend.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/descend.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});


/***/ }),

/***/ "./node_modules/ramda/src/difference.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/difference.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/src/internal/_contains.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
module.exports = _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});


/***/ }),

/***/ "./node_modules/ramda/src/differenceWith.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/differenceWith.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/src/internal/_containsWith.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
module.exports = _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) &&
        !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});


/***/ }),

/***/ "./node_modules/ramda/src/dissoc.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/dissoc.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/dissocPath.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/dissocPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isInteger = __webpack_require__(/*! ./internal/_isInteger */ "./node_modules/ramda/src/internal/_isInteger.js");
var assoc = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/src/assoc.js");
var dissoc = __webpack_require__(/*! ./dissoc */ "./node_modules/ramda/src/dissoc.js");
var remove = __webpack_require__(/*! ./remove */ "./node_modules/ramda/src/remove.js");
var update = __webpack_require__(/*! ./update */ "./node_modules/ramda/src/update.js");


/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
module.exports = _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path[0]) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (_isInteger(path[0])) {
        return update(head, dissocPath(tail, obj[head]), obj);
      } else {
        return assoc(head, dissocPath(tail, obj[head]), obj);
      }
  }
});


/***/ }),

/***/ "./node_modules/ramda/src/divide.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/divide.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
module.exports = _curry2(function divide(a, b) { return a / b; });


/***/ }),

/***/ "./node_modules/ramda/src/drop.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/drop.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xdrop = __webpack_require__(/*! ./internal/_xdrop */ "./node_modules/ramda/src/internal/_xdrop.js");
var slice = __webpack_require__(/*! ./slice */ "./node_modules/ramda/src/slice.js");


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));


/***/ }),

/***/ "./node_modules/ramda/src/dropLast.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/dropLast.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _dropLast = __webpack_require__(/*! ./internal/_dropLast */ "./node_modules/ramda/src/internal/_dropLast.js");
var _xdropLast = __webpack_require__(/*! ./internal/_xdropLast */ "./node_modules/ramda/src/internal/_xdropLast.js");


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));


/***/ }),

/***/ "./node_modules/ramda/src/dropLastWhile.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/dropLastWhile.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _dropLastWhile = __webpack_require__(/*! ./internal/_dropLastWhile */ "./node_modules/ramda/src/internal/_dropLastWhile.js");
var _xdropLastWhile = __webpack_require__(/*! ./internal/_xdropLastWhile */ "./node_modules/ramda/src/internal/_xdropLastWhile.js");


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));


/***/ }),

/***/ "./node_modules/ramda/src/dropRepeats.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/src/dropRepeats.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xdropRepeatsWith = __webpack_require__(/*! ./internal/_xdropRepeatsWith */ "./node_modules/ramda/src/internal/_xdropRepeatsWith.js");
var dropRepeatsWith = __webpack_require__(/*! ./dropRepeatsWith */ "./node_modules/ramda/src/dropRepeatsWith.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");


/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));


/***/ }),

/***/ "./node_modules/ramda/src/dropRepeatsWith.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/dropRepeatsWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xdropRepeatsWith = __webpack_require__(/*! ./internal/_xdropRepeatsWith */ "./node_modules/ramda/src/internal/_xdropRepeatsWith.js");
var last = __webpack_require__(/*! ./last */ "./node_modules/ramda/src/last.js");


/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));



/***/ }),

/***/ "./node_modules/ramda/src/dropWhile.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/dropWhile.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xdropWhile = __webpack_require__(/*! ./internal/_xdropWhile */ "./node_modules/ramda/src/internal/_xdropWhile.js");


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && pred(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, idx);
}));


/***/ }),

/***/ "./node_modules/ramda/src/either.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/either.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isFunction = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/src/internal/_isFunction.js");
var lift = __webpack_require__(/*! ./lift */ "./node_modules/ramda/src/lift.js");
var or = __webpack_require__(/*! ./or */ "./node_modules/ramda/src/or.js");


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
module.exports = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});


/***/ }),

/***/ "./node_modules/ramda/src/empty.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/empty.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _isArguments = __webpack_require__(/*! ./internal/_isArguments */ "./node_modules/ramda/src/internal/_isArguments.js");
var _isArray = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/src/internal/_isArray.js");
var _isObject = __webpack_require__(/*! ./internal/_isObject */ "./node_modules/ramda/src/internal/_isObject.js");
var _isString = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/src/internal/_isString.js");


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x['fantasy-land/empty'] === 'function') ?
      x['fantasy-land/empty']() :
    (x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function') ?
      x.constructor['fantasy-land/empty']() :
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});


/***/ }),

/***/ "./node_modules/ramda/src/endsWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/endsWith.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");
var takeLast = __webpack_require__(/*! ./takeLast */ "./node_modules/ramda/src/takeLast.js");

/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});


/***/ }),

/***/ "./node_modules/ramda/src/eqBy.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/eqBy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});


/***/ }),

/***/ "./node_modules/ramda/src/eqProps.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/eqProps.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");


/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
module.exports = _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});


/***/ }),

/***/ "./node_modules/ramda/src/equals.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/equals.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _equals = __webpack_require__(/*! ./internal/_equals */ "./node_modules/ramda/src/internal/_equals.js");


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});


/***/ }),

/***/ "./node_modules/ramda/src/evolve.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/evolve.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
module.exports = _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'                 ? transformation(object[key])
                : transformation && type === 'object' ? evolve(transformation, object[key])
                                                      : object[key];
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/filter.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/filter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _filter = __webpack_require__(/*! ./internal/_filter */ "./node_modules/ramda/src/internal/_filter.js");
var _isObject = __webpack_require__(/*! ./internal/_isObject */ "./node_modules/ramda/src/internal/_isObject.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _xfilter = __webpack_require__(/*! ./internal/_xfilter */ "./node_modules/ramda/src/internal/_xfilter.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));


/***/ }),

/***/ "./node_modules/ramda/src/find.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/find.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xfind = __webpack_require__(/*! ./internal/_xfind */ "./node_modules/ramda/src/internal/_xfind.js");


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));


/***/ }),

/***/ "./node_modules/ramda/src/findIndex.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/findIndex.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xfindIndex = __webpack_require__(/*! ./internal/_xfindIndex */ "./node_modules/ramda/src/internal/_xfindIndex.js");


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));


/***/ }),

/***/ "./node_modules/ramda/src/findLast.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/findLast.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xfindLast = __webpack_require__(/*! ./internal/_xfindLast */ "./node_modules/ramda/src/internal/_xfindLast.js");


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));


/***/ }),

/***/ "./node_modules/ramda/src/findLastIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/findLastIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xfindLastIndex = __webpack_require__(/*! ./internal/_xfindLastIndex */ "./node_modules/ramda/src/internal/_xfindLastIndex.js");


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));


/***/ }),

/***/ "./node_modules/ramda/src/flatten.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/flatten.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _makeFlat = __webpack_require__(/*! ./internal/_makeFlat */ "./node_modules/ramda/src/internal/_makeFlat.js");


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
module.exports = _curry1(_makeFlat(true));


/***/ }),

/***/ "./node_modules/ramda/src/flip.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/flip.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var curry = __webpack_require__(/*! ./curry */ "./node_modules/ramda/src/curry.js");


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/forEach.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/forEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/src/internal/_checkForMethod.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));


/***/ }),

/***/ "./node_modules/ramda/src/forEachObjIndexed.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/forEachObjIndexed.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
module.exports = _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});


/***/ }),

/***/ "./node_modules/ramda/src/fromPairs.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/fromPairs.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/groupBy.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/groupBy.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/src/internal/_checkForMethod.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var reduceBy = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/src/reduceBy.js");

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));


/***/ }),

/***/ "./node_modules/ramda/src/groupWith.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/groupWith.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
module.exports = _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});


/***/ }),

/***/ "./node_modules/ramda/src/gt.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/gt.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
module.exports = _curry2(function gt(a, b) { return a > b; });


/***/ }),

/***/ "./node_modules/ramda/src/gte.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/gte.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
module.exports = _curry2(function gte(a, b) { return a >= b; });


/***/ }),

/***/ "./node_modules/ramda/src/has.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/has.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
module.exports = _curry2(_has);


/***/ }),

/***/ "./node_modules/ramda/src/hasIn.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/hasIn.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
module.exports = _curry2(function hasIn(prop, obj) {
  return prop in obj;
});


/***/ }),

/***/ "./node_modules/ramda/src/head.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/head.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(/*! ./nth */ "./node_modules/ramda/src/nth.js");


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
module.exports = nth(0);


/***/ }),

/***/ "./node_modules/ramda/src/identical.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/identical.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});


/***/ }),

/***/ "./node_modules/ramda/src/identity.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/identity.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _identity = __webpack_require__(/*! ./internal/_identity */ "./node_modules/ramda/src/internal/_identity.js");


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);


/***/ }),

/***/ "./node_modules/ramda/src/ifElse.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/ifElse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
    function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    }
  );
});


/***/ }),

/***/ "./node_modules/ramda/src/inc.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/inc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(/*! ./add */ "./node_modules/ramda/src/add.js");


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
module.exports = add(1);


/***/ }),

/***/ "./node_modules/ramda/src/indexBy.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/indexBy.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/src/reduceBy.js");


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);


/***/ }),

/***/ "./node_modules/ramda/src/indexOf.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/indexOf.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _indexOf = __webpack_require__(/*! ./internal/_indexOf */ "./node_modules/ramda/src/internal/_indexOf.js");
var _isArray = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/src/internal/_isArray.js");


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});


/***/ }),

/***/ "./node_modules/ramda/src/init.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ./slice */ "./node_modules/ramda/src/slice.js");


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
module.exports = slice(0, -1);


/***/ }),

/***/ "./node_modules/ramda/src/innerJoin.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/innerJoin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/src/internal/_containsWith.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _filter = __webpack_require__(/*! ./internal/_filter */ "./node_modules/ramda/src/internal/_filter.js");


/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig (a -> b -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function innerJoin(pred, xs, ys) {
  return _filter(function(x) { return _containsWith(pred, x, ys); }, xs);
});


/***/ }),

/***/ "./node_modules/ramda/src/insert.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/insert.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
module.exports = _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/insertAll.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/insertAll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
module.exports = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx),
                   elts,
                   Array.prototype.slice.call(list, idx));
});


/***/ }),

/***/ "./node_modules/ramda/src/internal/_Set.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_Set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./_contains */ "./node_modules/ramda/src/internal/_contains.js");


// A simple Set type that honours R.equals semantics
module.exports = (function() {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_contains(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  return _Set;
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_aperture.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_aperture.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_arity.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_arrayFromIterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arrayFromIterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_assign.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_assign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _objectAssign = __webpack_require__(/*! ./_objectAssign */ "./node_modules/ramda/src/internal/_objectAssign.js");

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;


/***/ }),

/***/ "./node_modules/ramda/src/internal/_checkForMethod.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_checkForMethod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(/*! ./_isArray */ "./node_modules/ramda/src/internal/_isArray.js");


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_clone.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_clone.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/ramda/src/internal/_cloneRegExp.js");
var type = __webpack_require__(/*! ../type */ "./node_modules/ramda/src/type.js");


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
module.exports = function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':  return copy({});
    case 'Array':   return copy([]);
    case 'Date':    return new Date(value.valueOf());
    case 'RegExp':  return _cloneRegExp(value);
    default:        return value;
  }
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_cloneRegExp.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_cloneRegExp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                    (pattern.ignoreCase ? 'i' : '') +
                                    (pattern.multiline  ? 'm' : '') +
                                    (pattern.sticky     ? 'y' : '') +
                                    (pattern.unicode    ? 'u' : ''));
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_complement.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_complement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_concat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_concat.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_contains.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_contains.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _indexOf = __webpack_require__(/*! ./_indexOf */ "./node_modules/ramda/src/internal/_indexOf.js");


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_containsWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_containsWith.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_createPartialApplicator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_createPartialApplicator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry1.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/src/internal/_isPlaceholder.js");


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/src/internal/_isPlaceholder.js");


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry3.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry3.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/src/internal/_isPlaceholder.js");


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curryN.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curryN.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/src/internal/_isPlaceholder.js");


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_dispatchable.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_dispatchable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(/*! ./_isArray */ "./node_modules/ramda/src/internal/_isArray.js");
var _isTransformer = __webpack_require__(/*! ./_isTransformer */ "./node_modules/ramda/src/internal/_isTransformer.js");


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_dropLast.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_dropLast.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var take = __webpack_require__(/*! ../take */ "./node_modules/ramda/src/take.js");

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_dropLastWhile.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_dropLastWhile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_equals.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_equals.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arrayFromIterator = __webpack_require__(/*! ./_arrayFromIterator */ "./node_modules/ramda/src/internal/_arrayFromIterator.js");
var _functionName = __webpack_require__(/*! ./_functionName */ "./node_modules/ramda/src/internal/_functionName.js");
var _has = __webpack_require__(/*! ./_has */ "./node_modules/ramda/src/internal/_has.js");
var identical = __webpack_require__(/*! ../identical */ "./node_modules/ramda/src/identical.js");
var keys = __webpack_require__(/*! ../keys */ "./node_modules/ramda/src/keys.js");
var type = __webpack_require__(/*! ../type */ "./node_modules/ramda/src/type.js");


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) &&
           typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_filter.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_filter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_flatCat.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_flatCat.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _forceReduced = __webpack_require__(/*! ./_forceReduced */ "./node_modules/ramda/src/internal/_forceReduced.js");
var _isArrayLike = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/src/internal/_isArrayLike.js");
var _reduce = __webpack_require__(/*! ./_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_forceReduced.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_forceReduced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_functionName.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_functionName.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_has.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_identity.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_identity.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _identity(x) { return x; };


/***/ }),

/***/ "./node_modules/ramda/src/internal/_indexOf.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_indexOf.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var equals = __webpack_require__(/*! ../equals */ "./node_modules/ramda/src/equals.js");


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArguments.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArguments.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(/*! ./_has */ "./node_modules/ramda/src/internal/_has.js");


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArray.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArrayLike.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _isArray = __webpack_require__(/*! ./_isArray */ "./node_modules/ramda/src/internal/_isArray.js");
var _isString = __webpack_require__(/*! ./_isString */ "./node_modules/ramda/src/internal/_isString.js");


/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isFunction.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isFunction.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isInteger.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isInteger.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isNumber.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isNumber.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isObject.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isObject.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isPlaceholder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isRegExp.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isRegExp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isTransformer.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isTransformer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_makeFlat.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_makeFlat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/src/internal/_isArrayLike.js");


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
module.exports = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_map.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_objectAssign.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_objectAssign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(/*! ./_has */ "./node_modules/ramda/src/internal/_has.js");

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_of.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/src/internal/_of.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _of(x) { return [x]; };


/***/ }),

/***/ "./node_modules/ramda/src/internal/_pipe.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_pipe.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_pipeP.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_pipeP.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_quote.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_quote.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_reduce.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_reduce.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/src/internal/_isArrayLike.js");
var _xwrap = __webpack_require__(/*! ./_xwrap */ "./node_modules/ramda/src/internal/_xwrap.js");
var bind = __webpack_require__(/*! ../bind */ "./node_modules/ramda/src/bind.js");


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  };
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_reduced.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_reduced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_stepCat.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_stepCat.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(/*! ./_assign */ "./node_modules/ramda/src/internal/_assign.js");
var _identity = __webpack_require__(/*! ./_identity */ "./node_modules/ramda/src/internal/_identity.js");
var _isArrayLike = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/src/internal/_isArrayLike.js");
var _isTransformer = __webpack_require__(/*! ./_isTransformer */ "./node_modules/ramda/src/internal/_isTransformer.js");
var objOf = __webpack_require__(/*! ../objOf */ "./node_modules/ramda/src/objOf.js");


module.exports = (function() {
  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function(a, b) { return a + b; },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function(result, input) {
      return _assign(
        result,
        _isArrayLike(input) ? objOf(input[0], input[1]) : input
      );
    },
    '@@transducer/result': _identity
  };

  return function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  };
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_toISOString.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_toISOString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_toString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_toString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./_contains */ "./node_modules/ramda/src/internal/_contains.js");
var _map = __webpack_require__(/*! ./_map */ "./node_modules/ramda/src/internal/_map.js");
var _quote = __webpack_require__(/*! ./_quote */ "./node_modules/ramda/src/internal/_quote.js");
var _toISOString = __webpack_require__(/*! ./_toISOString */ "./node_modules/ramda/src/internal/_toISOString.js");
var keys = __webpack_require__(/*! ../keys */ "./node_modules/ramda/src/keys.js");
var reject = __webpack_require__(/*! ../reject */ "./node_modules/ramda/src/reject.js");


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xall.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xall.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduced = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/src/internal/_reduced.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function(result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return _curry2(function _xall(f, xf) { return new XAll(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xany.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xany.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduced = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/src/internal/_reduced.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function(result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return _curry2(function _xany(f, xf) { return new XAny(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xaperture.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xaperture.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function(result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos),
                   Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return _curry2(function _xaperture(n, xf) { return new XAperture(n, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xchain.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xchain.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _flatCat = __webpack_require__(/*! ./_flatCat */ "./node_modules/ramda/src/internal/_flatCat.js");
var map = __webpack_require__(/*! ../map */ "./node_modules/ramda/src/map.js");


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xdrop.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xdrop.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdrop(n, xf) { return new XDrop(n, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xdropLast.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xdropLast.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] =  function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return _curry2(function _xdropLast(n, xf) { return new XDropLast(n, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xdropLastWhile.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xdropLastWhile.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduce = __webpack_require__(/*! ./_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");

module.exports = (function() {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function(result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _reduce(
      this.xf['@@transducer/step'],
      result,
      this.retained
    );
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };

  return _curry2(function _xdropLastWhile(fn, xf) { return new XDropLastWhile(fn, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xdropRepeatsWith.js":
/*!**************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xdropRepeatsWith.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropRepeatsWith(pred, xf) { return new XDropRepeatsWith(pred, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xdropWhile.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xdropWhile.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropWhile(f, xf) { return new XDropWhile(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfBase.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfBase.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfilter.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfilter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfind.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfind.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduced = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/src/internal/_reduced.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfindIndex.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfindIndex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduced = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/src/internal/_reduced.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return _curry2(function _xfindIndex(f, xf) { return new XFindIndex(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfindLast.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfindLast.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return _curry2(function _xfindLast(f, xf) { return new XFindLast(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfindLastIndex.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfindLastIndex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return _curry2(function _xfindLastIndex(f, xf) { return new XFindLastIndex(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xmap.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xmap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xreduceBy.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xreduceBy.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(/*! ./_curryN */ "./node_modules/ramda/src/internal/_curryN.js");
var _has = __webpack_require__(/*! ./_has */ "./node_modules/ramda/src/internal/_has.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [],
                 function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
                   return new XReduceBy(valueFn, valueAcc, keyFn, xf);
                 });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xtake.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xtake.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduced = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/src/internal/_reduced.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");

module.exports = (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xtakeWhile.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xtakeWhile.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduced = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/src/internal/_reduced.js");
var _xfBase = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/src/internal/_xfBase.js");


module.exports = (function() {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  return _curry2(function _xtakeWhile(f, xf) { return new XTakeWhile(f, xf); });
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_xwrap.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xwrap.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());


/***/ }),

/***/ "./node_modules/ramda/src/intersection.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/src/intersection.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/src/internal/_contains.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _filter = __webpack_require__(/*! ./internal/_filter */ "./node_modules/ramda/src/internal/_filter.js");
var flip = __webpack_require__(/*! ./flip */ "./node_modules/ramda/src/flip.js");
var uniq = __webpack_require__(/*! ./uniq */ "./node_modules/ramda/src/uniq.js");


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
module.exports = _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});


/***/ }),

/***/ "./node_modules/ramda/src/intersectionWith.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/intersectionWith.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/src/internal/_containsWith.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var uniqWith = __webpack_require__(/*! ./uniqWith */ "./node_modules/ramda/src/uniqWith.js");


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.innerJoin
 * @deprecated since v0.24.0
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});


/***/ }),

/***/ "./node_modules/ramda/src/intersperse.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/src/intersperse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/src/internal/_checkForMethod.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));


/***/ }),

/***/ "./node_modules/ramda/src/into.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/into.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(/*! ./internal/_clone */ "./node_modules/ramda/src/internal/_clone.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _isTransformer = __webpack_require__(/*! ./internal/_isTransformer */ "./node_modules/ramda/src/internal/_isTransformer.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _stepCat = __webpack_require__(/*! ./internal/_stepCat */ "./node_modules/ramda/src/internal/_stepCat.js");


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});


/***/ }),

/***/ "./node_modules/ramda/src/invert.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/invert.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
module.exports = _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : (out[val] = []);
    list[list.length] = key;
    idx += 1;
  }
  return out;
});


/***/ }),

/***/ "./node_modules/ramda/src/invertObj.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/invertObj.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});


/***/ }),

/***/ "./node_modules/ramda/src/invoker.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/invoker.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isFunction = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/src/internal/_isFunction.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var toString = __webpack_require__(/*! ./toString */ "./node_modules/ramda/src/toString.js");


/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
module.exports = _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/is.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/is.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
module.exports = _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});


/***/ }),

/***/ "./node_modules/ramda/src/isEmpty.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/isEmpty.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var empty = __webpack_require__(/*! ./empty */ "./node_modules/ramda/src/empty.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
module.exports = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});


/***/ }),

/***/ "./node_modules/ramda/src/isNil.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/isNil.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
module.exports = _curry1(function isNil(x) { return x == null; });


/***/ }),

/***/ "./node_modules/ramda/src/join.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/join.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/src/invoker.js");


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
module.exports = invoker(1, 'join');


/***/ }),

/***/ "./node_modules/ramda/src/juxt.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/juxt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var converge = __webpack_require__(/*! ./converge */ "./node_modules/ramda/src/converge.js");


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
module.exports = _curry1(function juxt(fns) {
  return converge(function() { return Array.prototype.slice.call(arguments, 0); }, fns);
});


/***/ }),

/***/ "./node_modules/ramda/src/keys.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/keys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");
var _isArguments = __webpack_require__(/*! ./internal/_isArguments */ "./node_modules/ramda/src/internal/_isArguments.js");


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),

/***/ "./node_modules/ramda/src/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/keysIn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
module.exports = _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});


/***/ }),

/***/ "./node_modules/ramda/src/last.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/last.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(/*! ./nth */ "./node_modules/ramda/src/nth.js");


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
module.exports = nth(-1);


/***/ }),

/***/ "./node_modules/ramda/src/lastIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/src/lastIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isArray = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/src/internal/_isArray.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/ramda/src/length.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/length.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _isNumber = __webpack_require__(/*! ./internal/_isNumber */ "./node_modules/ramda/src/internal/_isNumber.js");


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});


/***/ }),

/***/ "./node_modules/ramda/src/lens.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/lens.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry2(function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus, target);
        },
        toFunctorFn(getter(target))
      );
    };
  };
});


/***/ }),

/***/ "./node_modules/ramda/src/lensIndex.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/lensIndex.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var lens = __webpack_require__(/*! ./lens */ "./node_modules/ramda/src/lens.js");
var nth = __webpack_require__(/*! ./nth */ "./node_modules/ramda/src/nth.js");
var update = __webpack_require__(/*! ./update */ "./node_modules/ramda/src/update.js");


/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
module.exports = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});


/***/ }),

/***/ "./node_modules/ramda/src/lensPath.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/lensPath.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var assocPath = __webpack_require__(/*! ./assocPath */ "./node_modules/ramda/src/assocPath.js");
var lens = __webpack_require__(/*! ./lens */ "./node_modules/ramda/src/lens.js");
var path = __webpack_require__(/*! ./path */ "./node_modules/ramda/src/path.js");


/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
module.exports = _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});


/***/ }),

/***/ "./node_modules/ramda/src/lensProp.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/lensProp.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var assoc = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/src/assoc.js");
var lens = __webpack_require__(/*! ./lens */ "./node_modules/ramda/src/lens.js");
var prop = __webpack_require__(/*! ./prop */ "./node_modules/ramda/src/prop.js");


/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});


/***/ }),

/***/ "./node_modules/ramda/src/lift.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/lift.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var liftN = __webpack_require__(/*! ./liftN */ "./node_modules/ramda/src/liftN.js");


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
module.exports = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});


/***/ }),

/***/ "./node_modules/ramda/src/liftN.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/liftN.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var ap = __webpack_require__(/*! ./ap */ "./node_modules/ramda/src/ap.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
module.exports = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/lt.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/lt.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
module.exports = _curry2(function lt(a, b) { return a < b; });


/***/ }),

/***/ "./node_modules/ramda/src/lte.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/lte.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
module.exports = _curry2(function lte(a, b) { return a <= b; });


/***/ }),

/***/ "./node_modules/ramda/src/map.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _map = __webpack_require__(/*! ./internal/_map */ "./node_modules/ramda/src/internal/_map.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _xmap = __webpack_require__(/*! ./internal/_xmap */ "./node_modules/ramda/src/internal/_xmap.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
module.exports = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));


/***/ }),

/***/ "./node_modules/ramda/src/mapAccum.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/mapAccum.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
module.exports = _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});


/***/ }),

/***/ "./node_modules/ramda/src/mapAccumRight.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/mapAccumRight.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});


/***/ }),

/***/ "./node_modules/ramda/src/mapObjIndexed.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/mapObjIndexed.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
module.exports = _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});


/***/ }),

/***/ "./node_modules/ramda/src/match.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/match.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = _curry2(function match(rx, str) {
  return str.match(rx) || [];
});


/***/ }),

/***/ "./node_modules/ramda/src/mathMod.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/mathMod.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isInteger = __webpack_require__(/*! ./internal/_isInteger */ "./node_modules/ramda/src/internal/_isInteger.js");


/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
module.exports = _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) { return NaN; }
  if (!_isInteger(p) || p < 1) { return NaN; }
  return ((m % p) + p) % p;
});


/***/ }),

/***/ "./node_modules/ramda/src/max.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/max.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
module.exports = _curry2(function max(a, b) { return b > a ? b : a; });


/***/ }),

/***/ "./node_modules/ramda/src/maxBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/maxBy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
module.exports = _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});


/***/ }),

/***/ "./node_modules/ramda/src/mean.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/mean.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var sum = __webpack_require__(/*! ./sum */ "./node_modules/ramda/src/sum.js");


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
module.exports = _curry1(function mean(list) {
  return sum(list) / list.length;
});


/***/ }),

/***/ "./node_modules/ramda/src/median.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/median.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var mean = __webpack_require__(/*! ./mean */ "./node_modules/ramda/src/mean.js");


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
module.exports = _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});


/***/ }),

/***/ "./node_modules/ramda/src/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/memoize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeWith = __webpack_require__(/*! ./memoizeWith */ "./node_modules/ramda/src/memoizeWith.js");
var toString = __webpack_require__(/*! ./toString */ "./node_modules/ramda/src/toString.js");


/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = memoizeWith(function() {
  return toString(arguments);
});


/***/ }),

/***/ "./node_modules/ramda/src/memoizeWith.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/src/memoizeWith.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");


/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = _curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/merge.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/merge.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(/*! ./internal/_assign */ "./node_modules/ramda/src/internal/_assign.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeAll.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/mergeAll.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(/*! ./internal/_assign */ "./node_modules/ramda/src/internal/_assign.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeDeepLeft.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/mergeDeepLeft.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var mergeDeepWithKey = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/src/mergeDeepWithKey.js");


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
module.exports = _curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeDeepRight.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/mergeDeepRight.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var mergeDeepWithKey = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/src/mergeDeepWithKey.js");


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
module.exports = _curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeDeepWith.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/mergeDeepWith.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var mergeDeepWithKey = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/src/mergeDeepWithKey.js");


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeDeepWithKey.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/mergeDeepWithKey.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _isObject = __webpack_require__(/*! ./internal/_isObject */ "./node_modules/ramda/src/internal/_isObject.js");
var mergeWithKey = __webpack_require__(/*! ./mergeWithKey */ "./node_modules/ramda/src/mergeWithKey.js");


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeWith.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/mergeWith.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var mergeWithKey = __webpack_require__(/*! ./mergeWithKey */ "./node_modules/ramda/src/mergeWithKey.js");


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});


/***/ }),

/***/ "./node_modules/ramda/src/mergeWithKey.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/src/mergeWithKey.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
module.exports = _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !(_has(k, result))) {
      result[k] = r[k];
    }
  }

  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/min.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
module.exports = _curry2(function min(a, b) { return b < a ? b : a; });


/***/ }),

/***/ "./node_modules/ramda/src/minBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/minBy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
module.exports = _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});


/***/ }),

/***/ "./node_modules/ramda/src/modulo.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/modulo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
module.exports = _curry2(function modulo(a, b) { return a % b; });


/***/ }),

/***/ "./node_modules/ramda/src/multiply.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/multiply.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
module.exports = _curry2(function multiply(a, b) { return a * b; });


/***/ }),

/***/ "./node_modules/ramda/src/nAry.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/nAry.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
module.exports = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0: return function() {return fn.call(this);};
    case 1: return function(a0) {return fn.call(this, a0);};
    case 2: return function(a0, a1) {return fn.call(this, a0, a1);};
    case 3: return function(a0, a1, a2) {return fn.call(this, a0, a1, a2);};
    case 4: return function(a0, a1, a2, a3) {return fn.call(this, a0, a1, a2, a3);};
    case 5: return function(a0, a1, a2, a3, a4) {return fn.call(this, a0, a1, a2, a3, a4);};
    case 6: return function(a0, a1, a2, a3, a4, a5) {return fn.call(this, a0, a1, a2, a3, a4, a5);};
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6);};
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);};
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);};
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);};
    default: throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});


/***/ }),

/***/ "./node_modules/ramda/src/negate.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/negate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });


/***/ }),

/***/ "./node_modules/ramda/src/none.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/none.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(/*! ./internal/_complement */ "./node_modules/ramda/src/internal/_complement.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xany = __webpack_require__(/*! ./internal/_xany */ "./node_modules/ramda/src/internal/_xany.js");
var any = __webpack_require__(/*! ./any */ "./node_modules/ramda/src/any.js");


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));


/***/ }),

/***/ "./node_modules/ramda/src/not.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/not.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
module.exports = _curry1(function not(a) {
  return !a;
});


/***/ }),

/***/ "./node_modules/ramda/src/nth.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/nth.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isString = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/src/internal/_isString.js");


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
module.exports = _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});


/***/ }),

/***/ "./node_modules/ramda/src/nthArg.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/nthArg.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");
var nth = __webpack_require__(/*! ./nth */ "./node_modules/ramda/src/nth.js");


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/o.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/src/o.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + lastName
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
module.exports = _curry3(function o(f, g, x) {
  return f(g(x));
});


/***/ }),

/***/ "./node_modules/ramda/src/objOf.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/objOf.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
module.exports = _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});


/***/ }),

/***/ "./node_modules/ramda/src/of.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/of.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _of = __webpack_require__(/*! ./internal/_of */ "./node_modules/ramda/src/internal/_of.js");


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
module.exports = _curry1(_of);


/***/ }),

/***/ "./node_modules/ramda/src/omit.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/omit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/src/internal/_contains.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
module.exports = _curry2(function omit(names, obj) {
  var result = {};
  for (var prop in obj) {
    if (!_contains(prop, names)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/once.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/once.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/or.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/or.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
module.exports = _curry2(function or(a, b) {
  return a || b;
});


/***/ }),

/***/ "./node_modules/ramda/src/over.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/over.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
module.exports = (function() {
  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function(x) {
    return {value: x, map: function(f) { return Identity(f(x)); }};
  };

  return _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) { return Identity(f(y)); })(x).value;
  });
}());


/***/ }),

/***/ "./node_modules/ramda/src/pair.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/pair.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
module.exports = _curry2(function pair(fst, snd) { return [fst, snd]; });


/***/ }),

/***/ "./node_modules/ramda/src/partial.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/partial.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _createPartialApplicator = __webpack_require__(/*! ./internal/_createPartialApplicator */ "./node_modules/ramda/src/internal/_createPartialApplicator.js");


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
module.exports = _createPartialApplicator(_concat);


/***/ }),

/***/ "./node_modules/ramda/src/partialRight.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/src/partialRight.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _createPartialApplicator = __webpack_require__(/*! ./internal/_createPartialApplicator */ "./node_modules/ramda/src/internal/_createPartialApplicator.js");
var flip = __webpack_require__(/*! ./flip */ "./node_modules/ramda/src/flip.js");


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));


/***/ }),

/***/ "./node_modules/ramda/src/partition.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/partition.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ./filter */ "./node_modules/ramda/src/filter.js");
var juxt = __webpack_require__(/*! ./juxt */ "./node_modules/ramda/src/juxt.js");
var reject = __webpack_require__(/*! ./reject */ "./node_modules/ramda/src/reject.js");


/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
module.exports = juxt([filter, reject]);


/***/ }),

/***/ "./node_modules/ramda/src/path.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/path.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
module.exports = _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});


/***/ }),

/***/ "./node_modules/ramda/src/pathEq.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/pathEq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");
var path = __webpack_require__(/*! ./path */ "./node_modules/ramda/src/path.js");


/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});


/***/ }),

/***/ "./node_modules/ramda/src/pathOr.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/pathOr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var defaultTo = __webpack_require__(/*! ./defaultTo */ "./node_modules/ramda/src/defaultTo.js");
var path = __webpack_require__(/*! ./path */ "./node_modules/ramda/src/path.js");


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
module.exports = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});


/***/ }),

/***/ "./node_modules/ramda/src/pathSatisfies.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/pathSatisfies.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var path = __webpack_require__(/*! ./path */ "./node_modules/ramda/src/path.js");


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});


/***/ }),

/***/ "./node_modules/ramda/src/pick.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/pick.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/pickAll.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/pickAll.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
module.exports = _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/pickBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/pickBy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/pipe.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/pipe.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _pipe = __webpack_require__(/*! ./internal/_pipe */ "./node_modules/ramda/src/internal/_pipe.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");
var tail = __webpack_require__(/*! ./tail */ "./node_modules/ramda/src/tail.js");


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};


/***/ }),

/***/ "./node_modules/ramda/src/pipeK.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/pipeK.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var composeK = __webpack_require__(/*! ./composeK */ "./node_modules/ramda/src/composeK.js");
var reverse = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/src/reverse.js");

/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};


/***/ }),

/***/ "./node_modules/ramda/src/pipeP.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/pipeP.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _pipeP = __webpack_require__(/*! ./internal/_pipeP */ "./node_modules/ramda/src/internal/_pipeP.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");
var tail = __webpack_require__(/*! ./tail */ "./node_modules/ramda/src/tail.js");


/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipeP, arguments[0], tail(arguments)));
};


/***/ }),

/***/ "./node_modules/ramda/src/pluck.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/pluck.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");
var prop = __webpack_require__(/*! ./prop */ "./node_modules/ramda/src/prop.js");


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
module.exports = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});


/***/ }),

/***/ "./node_modules/ramda/src/prepend.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/prepend.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
module.exports = _curry2(function prepend(el, list) {
  return _concat([el], list);
});


/***/ }),

/***/ "./node_modules/ramda/src/product.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/product.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var multiply = __webpack_require__(/*! ./multiply */ "./node_modules/ramda/src/multiply.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
module.exports = reduce(multiply, 1);


/***/ }),

/***/ "./node_modules/ramda/src/project.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/project.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _map = __webpack_require__(/*! ./internal/_map */ "./node_modules/ramda/src/internal/_map.js");
var identity = __webpack_require__(/*! ./identity */ "./node_modules/ramda/src/identity.js");
var pickAll = __webpack_require__(/*! ./pickAll */ "./node_modules/ramda/src/pickAll.js");
var useWith = __webpack_require__(/*! ./useWith */ "./node_modules/ramda/src/useWith.js");


/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity


/***/ }),

/***/ "./node_modules/ramda/src/prop.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/prop.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });


/***/ }),

/***/ "./node_modules/ramda/src/propEq.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/propEq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");


/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
module.exports = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});


/***/ }),

/***/ "./node_modules/ramda/src/propIs.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/propIs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var is = __webpack_require__(/*! ./is */ "./node_modules/ramda/src/is.js");


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});


/***/ }),

/***/ "./node_modules/ramda/src/propOr.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/propOr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
module.exports = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});


/***/ }),

/***/ "./node_modules/ramda/src/propSatisfies.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/propSatisfies.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
module.exports = _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});


/***/ }),

/***/ "./node_modules/ramda/src/props.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/props.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});


/***/ }),

/***/ "./node_modules/ramda/src/range.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/range.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isNumber = __webpack_require__(/*! ./internal/_isNumber */ "./node_modules/ramda/src/internal/_isNumber.js");


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
module.exports = _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/reduce.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reduce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);


/***/ }),

/***/ "./node_modules/ramda/src/reduceBy.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/reduceBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(/*! ./internal/_curryN */ "./node_modules/ramda/src/internal/_curryN.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _xreduceBy = __webpack_require__(/*! ./internal/_xreduceBy */ "./node_modules/ramda/src/internal/_xreduceBy.js");


/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));


/***/ }),

/***/ "./node_modules/ramda/src/reduceRight.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/src/reduceRight.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});


/***/ }),

/***/ "./node_modules/ramda/src/reduceWhile.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/src/reduceWhile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(/*! ./internal/_curryN */ "./node_modules/ramda/src/internal/_curryN.js");
var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _reduced = __webpack_require__(/*! ./internal/_reduced */ "./node_modules/ramda/src/internal/_reduced.js");


/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});


/***/ }),

/***/ "./node_modules/ramda/src/reduced.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/reduced.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _reduced = __webpack_require__(/*! ./internal/_reduced */ "./node_modules/ramda/src/internal/_reduced.js");

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */

module.exports = _curry1(_reduced);


/***/ }),

/***/ "./node_modules/ramda/src/reject.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(/*! ./internal/_complement */ "./node_modules/ramda/src/internal/_complement.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var filter = __webpack_require__(/*! ./filter */ "./node_modules/ramda/src/filter.js");


/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});


/***/ }),

/***/ "./node_modules/ramda/src/remove.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/remove.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/repeat.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/repeat.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var always = __webpack_require__(/*! ./always */ "./node_modules/ramda/src/always.js");
var times = __webpack_require__(/*! ./times */ "./node_modules/ramda/src/times.js");


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
module.exports = _curry2(function repeat(value, n) {
  return times(always(value), n);
});


/***/ }),

/***/ "./node_modules/ramda/src/replace.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/replace.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
module.exports = _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});


/***/ }),

/***/ "./node_modules/ramda/src/reverse.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/reverse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _isString = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/src/internal/_isString.js");


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});


/***/ }),

/***/ "./node_modules/ramda/src/scan.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/scan.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
module.exports = _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/sequence.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/sequence.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var ap = __webpack_require__(/*! ./ap */ "./node_modules/ramda/src/ap.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");
var prepend = __webpack_require__(/*! ./prepend */ "./node_modules/ramda/src/prepend.js");
var reduceRight = __webpack_require__(/*! ./reduceRight */ "./node_modules/ramda/src/reduceRight.js");


/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
module.exports = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(function(x, acc) { return ap(map(prepend, x), acc); },
                of([]),
                traversable);
});


/***/ }),

/***/ "./node_modules/ramda/src/set.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/set.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var always = __webpack_require__(/*! ./always */ "./node_modules/ramda/src/always.js");
var over = __webpack_require__(/*! ./over */ "./node_modules/ramda/src/over.js");


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
module.exports = _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});


/***/ }),

/***/ "./node_modules/ramda/src/slice.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/slice.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/src/internal/_checkForMethod.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));


/***/ }),

/***/ "./node_modules/ramda/src/sort.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/sort.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});


/***/ }),

/***/ "./node_modules/ramda/src/sortBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/sortBy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
module.exports = _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/sortWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/sortWith.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/split.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/split.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/src/invoker.js");


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
module.exports = invoker(1, 'split');


/***/ }),

/***/ "./node_modules/ramda/src/splitAt.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/splitAt.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var length = __webpack_require__(/*! ./length */ "./node_modules/ramda/src/length.js");
var slice = __webpack_require__(/*! ./slice */ "./node_modules/ramda/src/slice.js");


/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
module.exports = _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});


/***/ }),

/***/ "./node_modules/ramda/src/splitEvery.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/splitEvery.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var slice = __webpack_require__(/*! ./slice */ "./node_modules/ramda/src/slice.js");


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
module.exports = _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/splitWhen.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/splitWhen.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});


/***/ }),

/***/ "./node_modules/ramda/src/startsWith.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/startsWith.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");
var take = __webpack_require__(/*! ./take */ "./node_modules/ramda/src/take.js");

/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(prefix, list) {
  return equals(take(prefix.length, list), prefix);
});


/***/ }),

/***/ "./node_modules/ramda/src/subtract.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/subtract.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
module.exports = _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});


/***/ }),

/***/ "./node_modules/ramda/src/sum.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/sum.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(/*! ./add */ "./node_modules/ramda/src/add.js");
var reduce = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/src/reduce.js");


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);


/***/ }),

/***/ "./node_modules/ramda/src/symmetricDifference.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/src/symmetricDifference.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var concat = __webpack_require__(/*! ./concat */ "./node_modules/ramda/src/concat.js");
var difference = __webpack_require__(/*! ./difference */ "./node_modules/ramda/src/difference.js");


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
module.exports = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});


/***/ }),

/***/ "./node_modules/ramda/src/symmetricDifferenceWith.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/symmetricDifferenceWith.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var concat = __webpack_require__(/*! ./concat */ "./node_modules/ramda/src/concat.js");
var differenceWith = __webpack_require__(/*! ./differenceWith */ "./node_modules/ramda/src/differenceWith.js");


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});


/***/ }),

/***/ "./node_modules/ramda/src/tail.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/tail.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/src/internal/_checkForMethod.js");
var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var slice = __webpack_require__(/*! ./slice */ "./node_modules/ramda/src/slice.js");


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ }),

/***/ "./node_modules/ramda/src/take.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/take.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xtake = __webpack_require__(/*! ./internal/_xtake */ "./node_modules/ramda/src/internal/_xtake.js");
var slice = __webpack_require__(/*! ./slice */ "./node_modules/ramda/src/slice.js");


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));


/***/ }),

/***/ "./node_modules/ramda/src/takeLast.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/takeLast.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var drop = __webpack_require__(/*! ./drop */ "./node_modules/ramda/src/drop.js");


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
module.exports = _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});


/***/ }),

/***/ "./node_modules/ramda/src/takeLastWhile.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/takeLastWhile.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});


/***/ }),

/***/ "./node_modules/ramda/src/takeWhile.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/takeWhile.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/src/internal/_dispatchable.js");
var _xtakeWhile = __webpack_require__(/*! ./internal/_xtakeWhile */ "./node_modules/ramda/src/internal/_xtakeWhile.js");


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && fn(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, 0, idx);
}));


/***/ }),

/***/ "./node_modules/ramda/src/tap.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/tap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
module.exports = _curry2(function tap(fn, x) {
  fn(x);
  return x;
});


/***/ }),

/***/ "./node_modules/ramda/src/test.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/test.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(/*! ./internal/_cloneRegExp */ "./node_modules/ramda/src/internal/_cloneRegExp.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _isRegExp = __webpack_require__(/*! ./internal/_isRegExp */ "./node_modules/ramda/src/internal/_isRegExp.js");
var toString = __webpack_require__(/*! ./toString */ "./node_modules/ramda/src/toString.js");


/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
module.exports = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});


/***/ }),

/***/ "./node_modules/ramda/src/times.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/times.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});


/***/ }),

/***/ "./node_modules/ramda/src/toLower.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/toLower.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/src/invoker.js");


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
module.exports = invoker(0, 'toLowerCase');


/***/ }),

/***/ "./node_modules/ramda/src/toPairs.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/toPairs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});


/***/ }),

/***/ "./node_modules/ramda/src/toPairsIn.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/toPairsIn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
module.exports = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});


/***/ }),

/***/ "./node_modules/ramda/src/toString.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/toString.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _toString = __webpack_require__(/*! ./internal/_toString */ "./node_modules/ramda/src/internal/_toString.js");


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });


/***/ }),

/***/ "./node_modules/ramda/src/toUpper.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/toUpper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/src/invoker.js");


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
module.exports = invoker(0, 'toUpperCase');


/***/ }),

/***/ "./node_modules/ramda/src/transduce.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/transduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _reduce = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/src/internal/_reduce.js");
var _xwrap = __webpack_require__(/*! ./internal/_xwrap */ "./node_modules/ramda/src/internal/_xwrap.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});


/***/ }),

/***/ "./node_modules/ramda/src/transpose.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/transpose.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
module.exports = _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/traverse.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/traverse.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");
var sequence = __webpack_require__(/*! ./sequence */ "./node_modules/ramda/src/sequence.js");


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ?
    traversable['fantasy-land/traverse'](f, of) :
    sequence(of, map(f, traversable));
});


/***/ }),

/***/ "./node_modules/ramda/src/trim.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/trim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
module.exports = (function() {
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
           '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
           '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = (typeof String.prototype.trim === 'function');
  if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
    return _curry1(function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    });
  } else {
    return _curry1(function trim(str) {
      return str.trim();
    });
  }
}());


/***/ }),

/***/ "./node_modules/ramda/src/tryCatch.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/tryCatch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/src/internal/_arity.js");
var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/type.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});


/***/ }),

/***/ "./node_modules/ramda/src/unapply.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/unapply.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});


/***/ }),

/***/ "./node_modules/ramda/src/unary.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/unary.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var nAry = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/src/nAry.js");


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});


/***/ }),

/***/ "./node_modules/ramda/src/uncurryN.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/uncurryN.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
module.exports = _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/unfold.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/unfold.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/union.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/union.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var compose = __webpack_require__(/*! ./compose */ "./node_modules/ramda/src/compose.js");
var uniq = __webpack_require__(/*! ./uniq */ "./node_modules/ramda/src/uniq.js");


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));


/***/ }),

/***/ "./node_modules/ramda/src/unionWith.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/unionWith.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/src/internal/_concat.js");
var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var uniqWith = __webpack_require__(/*! ./uniqWith */ "./node_modules/ramda/src/uniqWith.js");


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});


/***/ }),

/***/ "./node_modules/ramda/src/uniq.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/uniq.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/ramda/src/identity.js");
var uniqBy = __webpack_require__(/*! ./uniqBy */ "./node_modules/ramda/src/uniqBy.js");


/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = uniqBy(identity);


/***/ }),

/***/ "./node_modules/ramda/src/uniqBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/uniqBy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Set = __webpack_require__(/*! ./internal/_Set */ "./node_modules/ramda/src/internal/_Set.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/uniqWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/uniqWith.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/src/internal/_containsWith.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
module.exports = _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/unless.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/unless.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});


/***/ }),

/***/ "./node_modules/ramda/src/unnest.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/unnest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _identity = __webpack_require__(/*! ./internal/_identity */ "./node_modules/ramda/src/internal/_identity.js");
var chain = __webpack_require__(/*! ./chain */ "./node_modules/ramda/src/chain.js");


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
module.exports = chain(_identity);


/***/ }),

/***/ "./node_modules/ramda/src/until.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/until.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});


/***/ }),

/***/ "./node_modules/ramda/src/update.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/update.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");
var adjust = __webpack_require__(/*! ./adjust */ "./node_modules/ramda/src/adjust.js");
var always = __webpack_require__(/*! ./always */ "./node_modules/ramda/src/always.js");


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
module.exports = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});


/***/ }),

/***/ "./node_modules/ramda/src/useWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/useWith.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var curryN = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/src/curryN.js");


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
module.exports = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});


/***/ }),

/***/ "./node_modules/ramda/src/values.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/values.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/ramda/src/keys.js");


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});


/***/ }),

/***/ "./node_modules/ramda/src/valuesIn.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/valuesIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});


/***/ }),

/***/ "./node_modules/ramda/src/view.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
module.exports = (function() {
  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function(x) {
    return {value: x, 'fantasy-land/map': function() { return this; }};
  };

  return _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });
}());


/***/ }),

/***/ "./node_modules/ramda/src/when.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/when.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});


/***/ }),

/***/ "./node_modules/ramda/src/where.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/where.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});


/***/ }),

/***/ "./node_modules/ramda/src/whereEq.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/whereEq.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var equals = __webpack_require__(/*! ./equals */ "./node_modules/ramda/src/equals.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/ramda/src/map.js");
var where = __webpack_require__(/*! ./where */ "./node_modules/ramda/src/where.js");


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
module.exports = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});


/***/ }),

/***/ "./node_modules/ramda/src/without.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/without.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/src/internal/_contains.js");
var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");
var flip = __webpack_require__(/*! ./flip */ "./node_modules/ramda/src/flip.js");
var reject = __webpack_require__(/*! ./reject */ "./node_modules/ramda/src/reject.js");


/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});


/***/ }),

/***/ "./node_modules/ramda/src/xprod.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/xprod.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
module.exports = _curry2(function xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/zip.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/zip.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});


/***/ }),

/***/ "./node_modules/ramda/src/zipObj.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/zipObj.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});


/***/ }),

/***/ "./node_modules/ramda/src/zipWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/zipWith.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/src/internal/_curry3.js");


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});


/***/ }),

/***/ "./node_modules/react-calendar-multiday/lib/app.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar-multiday/lib/app.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! ramda */ "./node_modules/ramda/index.js"),__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"),__webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js")):undefined}(this,function(t,e,n,r){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=57)}([function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(28)("wks"),o=n(17),i=n(3).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(3),o=n(0),i=n(22),a=n(7),u=function(t,e,n){var c,s,f,l=t&u.F,d=t&u.G,p=t&u.S,y=t&u.P,h=t&u.B,v=t&u.W,m=d?o:o[e]||(o[e]={}),b=m.prototype,g=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(s=!l&&g&&void 0!==g[c])&&c in m||(f=s?g[c]:n[c],m[c]=d&&"function"!=typeof g[c]?n[c]:h&&s?i(f,r):v&&g[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):y&&"function"==typeof f?i(Function.call,f):f,y&&((m.virtual||(m.virtual={}))[c]=f,t&u.R&&b&&!b[c]&&a(b,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(8),o=n(42),i=n(23),a=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),o=n(12);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(46),o=n(25);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(45),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports={}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){h&&p&&(h=!1,p.length?y=p.concat(y):v=-1,y.length&&u())}function u(){if(!h){var t=o(a);h=!0;for(var e=y.length;e;){for(p=y,y=[];++v<e;)p&&p[v].run();v=-1,e=y.length}p=null,h=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function s(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,y=[],h=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];y.push(new c(t,e)),1!==y.length||h||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){e.f={}.propertyIsEnumerable},function(e,n){e.exports=t},function(t,e,n){(function(e){if("production"!==e.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r};t.exports=n(105)(o,!0)}else t.exports=n(108)()}).call(e,n(16))},function(t,n){t.exports=e},function(t,e,n){var r=n(62);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28)("keys"),o=n(17);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(3),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e){t.exports=!0},function(t,e,n){var r=n(8),o=n(81),i=n(29),a=n(27)("IE_PROTO"),u=function(){},c=function(){var t,e=n(43)("iframe"),r=i.length;for(e.style.display="none",n(82).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(4).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(1)},function(t,e,n){var r=n(3),o=n(0),i=n(32),a=n(35),u=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";(function(e){function n(t,e,n,o,i,a,u,c){if(r(e),!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,i,a,u,c],l=0;s=new Error(e.replace(/%s/g,function(){return f[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(t){};"production"!==e.env.NODE_ENV&&(r=function(t){if(void 0===t)throw new Error("invariant requires an error message argument")}),t.exports=n}).call(e,n(16))},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){t.exports=n},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){t.exports=!n(5)&&!n(9)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(63),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){var r=n(6),o=n(10),i=n(67)(!1),a=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(2),o=n(0),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){var r=n(6),o=n(14),i=n(27)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(77),i=r(o),a=n(87),u=r(a),c="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,e,n){"use strict";var r=n(79)(!0);n(52)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(32),o=n(2),i=n(53),a=n(7),u=n(6),c=n(15),s=n(80),f=n(34),l=n(49),d=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,e,n,h,v,m,b){s(n,e,h);var g,_,x,w=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",k="values"==v,S=!1,j=t.prototype,E=j[d]||j["@@iterator"]||v&&j[v],M=E||w(v),T=v?k?w("entries"):M:void 0,C="Array"==e?j.entries||E:E;if(C&&(x=l(C.call(new t)))!==Object.prototype&&x.next&&(f(x,O,!0),r||u(x,d)||a(x,d,y)),k&&E&&"values"!==E.name&&(S=!0,M=function(){return E.call(this)}),r&&!b||!p&&!S&&j[d]||a(j,d,M),c[e]=M,c[O]=y,v)if(g={values:k?M:w("values"),keys:m?M:w("keys"),entries:T},b)for(_ in g)_ in j||i(j,_,g[_]);else o(o.P+o.F*(p||S),e,g);return g}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(45),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(18),o=n(12),i=n(10),a=n(23),u=n(6),c=n(42),s=Object.getOwnPropertyDescriptor;e.f=n(5)?s:function(t,e){if(t=i(t),e=a(e,!0),c)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";(function(e){var r=n(37),o=r;if("production"!==e.env.NODE_ENV){var i=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+t.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(t){}};o=function(t,e){if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==e.indexOf("Failed Composite propType: ")&&!t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[e].concat(r))}}}t.exports=o}).call(e,n(16))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(58),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n(123),e.default=o.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(59),i=r(o),a=n(44),u=r(a),c=n(31),s=r(c),f=n(71),l=r(f),d=n(74),p=r(d),y=n(75),h=r(y),v=n(76),m=r(v),b=n(97),g=r(b),_=n(19),x=r(_),w=n(20),O=r(w),k=n(109),S=r(k),j=n(40),E=r(j),M=n(112),T=n(21),C=n(113),P=function(t){function e(t){(0,p.default)(this,e);var n=(0,m.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));n.moment=(0,M.extendMoment)(E.default);var r=n.props,o=r.selected,i=r.channels,a=n.moment((0,C.getRealMonthAndYear)(n.props.month,n.props.year));return n.state={defaultDate:a,selected:(0,C.normalize)(o,n.moment),monthDays:(0,C.setMonthDays)(a,n.moment),channels:i,currentChannel:t.currentChannel||0},n.nextMonth=n.nextMonth.bind(n),n.prevMonth=n.prevMonth.bind(n),n.onClick=n.onClick.bind(n),n.retrieveSelected=n.retrieveSelected.bind(n),n.reset=n.reset.bind(n),n.addChannel=n.addChannel.bind(n),n.addOrRemoveDateToChannel=n.addOrRemoveDateToChannel.bind(n),n}return(0,g.default)(e,t),(0,h.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.props.selected.length!==t.selected.length&&this.setState({selected:(0,C.normalize)(t.selected,this.moment)}),this.state.currentChannel!==t.currentChannel&&this.setState({currentChannel:t.currentChannel}),(0,T.equals)(this.props.channels,t.channels)||this.setState({channels:t.channels})}},{key:"nextMonth",value:function(){var t=(0,C.incMonth)(this.state.defaultDate);this.setState({defaultDate:t,monthDays:(0,C.setMonthDays)(t,this.moment)})}},{key:"prevMonth",value:function(){var t=(0,C.decMonth)(this.state.defaultDate);this.setState({defaultDate:t,monthDays:(0,C.setMonthDays)(t,this.moment)})}},{key:"reset",value:function(){var t=this,e=this.state.selected,n=(0,s.default)(e).length;this.setState({selected:n?{}:(0,C.normalize)(e,this.moment),channels:(0,T.isNil)(this.props.channels)?null:{},currentChannel:0},function(){return!t.props.onReset||t.props.onReset()})}},{key:"onClick",value:function(t){var e=this,n=t.moment.format(),r=(0,C.getKey)(t.moment),o=this.state,a=o.selected,c=o.defaultDate,s=o.monthDays,f=(0,T.cond)([[(0,T.equals)(C.TYPE.NEXT),function(){return(0,C.incMonth)(c)}],[(0,T.equals)(C.TYPE.PREV),function(){return(0,C.decMonth)(c)}],[T.T,function(){return c}]])(t.type);this.setState({channels:(0,T.isNil)(this.props.channels)?this.props.channels:this.addOrRemoveDateToChannel(t),selected:this.props.isMultiple?(0,u.default)({},a,(0,i.default)({},r,(0,T.isEmpty)((0,T.or)(a[r],{}))?t.moment:{})):[t.moment],defaultDate:f,monthDays:(0,T.cond)([[(0,T.equals)(C.TYPE.NEXT),function(){return(0,C.setMonthDays)(f,e.moment)}],[(0,T.equals)(C.TYPE.PREV),function(){return(0,C.setMonthDays)(f,e.moment)}],[T.T,function(){return s}]])(t.type)},function(){e.props.onChange({channels:e.state.channels,current:n,selected:(0,T.reject)(T.isEmpty,(0,T.values)(e.state.selected)).map(function(t){return t.format()})})})}},{key:"retrieveSelected",value:function(){var t=this.moment(this.state.defaultDate).add(1,"months"),e=this.moment(this.state.defaultDate).subtract(1,"months").subtract(7,"days");return(0,T.reject)(T.isEmpty,(0,T.values)(this.state.selected)).filter(function(n){return n.isBetween(e,t)})}},{key:"addOrRemoveDateToChannel",value:function(t){var e=this.state,n=e.channels,r=e.currentChannel;return n[r]||(n[r]=[]),n[r].some(function(e){return e.isSame(t.moment,"day")})?n[r]=n[r].filter(function(e){return!e.isSame(t.moment,"day")}):n[r]=n[r].concat([t.moment]),n}},{key:"addChannel",value:function(){var t=this,e=this.state,n=e.channels,r=e.currentChannel,o=(0,s.default)(n).reduce(function(t,e){return Math.max(t,e)},0);if(r===o&&0===n[o].length)return!1;this.setState({channels:n,currentChannel:(0,T.isEmpty)(n[o])?o:Number(o)+1},function(){return!t.props.onAddChannel||t.props.onAddChannel({channels:t.state.channels,currentChannel:t.state.currentChannel})})}},{key:"render",value:function(){var t=this.state,e=t.defaultDate,n=t.monthDays,r=t.currentChannel,o=t.channels,i=this.props.reset?this.reset:null,a=(0,T.isNil)(this.props.channels)?null:this.addChannel;return x.default.createElement(S.default,{currentChannel:r,channels:o,dayNames:E.default.weekdaysMin(),days:n,selected:this.retrieveSelected(),defaultDate:e,onClick:this.onClick,reset:i,addChannel:a,nextMonth:this.nextMonth,DayComponent:this.props.DayComponent,prevMonth:this.prevMonth})}}]),e}(_.Component);P.defaultProps={year:(0,E.default)().get("year"),month:(0,E.default)().get("month"),isMultiple:!1,selected:[],channels:null},P.propTypes={channels:O.default.object,DayComponent:O.default.node,onChange:O.default.func.isRequired,onReset:O.default.func,onAddChannel:O.default.func,selected:O.default.array,month:O.default.number,year:O.default.number,currentChannel:O.default.number,reset:O.default.bool,isMultiple:O.default.bool},e.default=P},function(t,e,n){"use strict";e.__esModule=!0;var r=n(41),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(61);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(2);r(r.S+r.F*!n(5),"Object",{defineProperty:n(4).f})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){n(65),t.exports=n(0).Object.assign},function(t,e,n){var r=n(2);r(r.S+r.F,"Object",{assign:n(66)})},function(t,e,n){"use strict";var r=n(13),o=n(30),i=n(18),a=n(14),u=n(46),c=Object.assign;t.exports=!c||n(9)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,s=1,f=o.f,l=i.f;c>s;)for(var d,p=u(arguments[s++]),y=f?r(p).concat(f(p)):r(p),h=y.length,v=0;h>v;)l.call(p,d=y[v++])&&(n[d]=p[d]);return n}:c},function(t,e,n){var r=n(10),o=n(47),i=n(68);t.exports=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){n(70),t.exports=n(0).Object.keys},function(t,e,n){var r=n(14),o=n(13);n(48)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){t.exports={default:n(72),__esModule:!0}},function(t,e,n){n(73),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){var r=n(14),o=n(49);n(48)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(41),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(50),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){t.exports={default:n(78),__esModule:!0}},function(t,e,n){n(51),n(83),t.exports=n(35).f("iterator")},function(t,e,n){var r=n(26),o=n(25);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(33),o=n(12),i=n(34),a={};n(7)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(8),i=n(13);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,c=0;u>c;)r.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var r=n(3).document;t.exports=r&&r.documentElement},function(t,e,n){n(84);for(var r=n(3),o=n(7),i=n(15),a=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var s=u[c],f=r[s],l=f&&f.prototype;l&&!l[a]&&o(l,a,s),i[s]=i.Array}},function(t,e,n){"use strict";var r=n(85),o=n(86),i=n(15),a=n(10);t.exports=n(52)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(88),__esModule:!0}},function(t,e,n){n(89),n(94),n(95),n(96),t.exports=n(0).Symbol},function(t,e,n){"use strict";var r=n(3),o=n(6),i=n(5),a=n(2),u=n(53),c=n(90).KEY,s=n(9),f=n(28),l=n(34),d=n(17),p=n(1),y=n(35),h=n(36),v=n(91),m=n(92),b=n(8),g=n(10),_=n(23),x=n(12),w=n(33),O=n(93),k=n(55),S=n(4),j=n(13),E=k.f,M=S.f,T=O.f,C=r.Symbol,P=r.JSON,N=P&&P.stringify,R=p("_hidden"),D=p("toPrimitive"),A={}.propertyIsEnumerable,L=f("symbol-registry"),I=f("symbols"),Y=f("op-symbols"),F=Object.prototype,q="function"==typeof C,U=r.QObject,V=!U||!U.prototype||!U.prototype.findChild,B=i&&s(function(){return 7!=w(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(F,e);r&&delete F[e],M(t,e,n),r&&t!==F&&M(F,e,r)}:M,z=function(t){var e=I[t]=w(C.prototype);return e._k=t,e},G=q&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},J=function(t,e,n){return t===F&&J(Y,e,n),b(t),e=_(e,!0),b(n),o(I,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=w(n,{enumerable:x(0,!1)})):(o(t,R)||M(t,R,x(1,{})),t[R][e]=!0),B(t,e,n)):M(t,e,n)},W=function(t,e){b(t);for(var n,r=v(e=g(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},H=function(t,e){return void 0===e?w(t):W(w(t),e)},K=function(t){var e=A.call(this,t=_(t,!0));return!(this===F&&o(I,t)&&!o(Y,t))&&(!(e||!o(this,t)||!o(I,t)||o(this,R)&&this[R][t])||e)},$=function(t,e){if(t=g(t),e=_(e,!0),t!==F||!o(I,e)||o(Y,e)){var n=E(t,e);return!n||!o(I,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=T(g(t)),r=[],i=0;n.length>i;)o(I,e=n[i++])||e==R||e==c||r.push(e);return r},Q=function(t){for(var e,n=t===F,r=T(n?Y:g(t)),i=[],a=0;r.length>a;)!o(I,e=r[a++])||n&&!o(F,e)||i.push(I[e]);return i};q||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(Y,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),B(this,t,x(1,n))};return i&&V&&B(F,t,{configurable:!0,set:e}),z(t)},u(C.prototype,"toString",function(){return this._k}),k.f=$,S.f=J,n(54).f=O.f=X,n(18).f=K,n(30).f=Q,i&&!n(32)&&u(F,"propertyIsEnumerable",K,!0),y.f=function(t){return z(p(t))}),a(a.G+a.W+a.F*!q,{Symbol:C});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)p(Z[tt++]);for(var et=j(p.store),nt=0;et.length>nt;)h(et[nt++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=C(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!q,"Object",{create:H,defineProperty:J,defineProperties:W,getOwnPropertyDescriptor:$,getOwnPropertyNames:X,getOwnPropertySymbols:Q}),P&&a(a.S+a.F*(!q||s(function(){var t=C();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!G(e))return e}),r[1]=e,N.apply(P,r)}}}),C.prototype[D]||n(7)(C.prototype,D,C.prototype.valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(17)("meta"),o=n(11),i=n(6),a=n(4).f,u=0,c=Object.isExtensible||function(){return!0},s=!n(9)(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return s&&y.NEED&&c(t)&&!i(t,r)&&f(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(13),o=n(30),i=n(18);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),c=i.f,s=0;u.length>s;)c.call(t,a=u[s++])&&e.push(a);return e}},function(t,e,n){var r=n(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(10),o=n(54).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e){},function(t,e,n){n(36)("asyncIterator")},function(t,e,n){n(36)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(98),i=r(o),a=n(102),u=r(a),c=n(50),s=r(c);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,s.default)(e)));t.prototype=(0,u.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(99),__esModule:!0}},function(t,e,n){n(100),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){var r=n(2);r(r.S,"Object",{setPrototypeOf:n(101).set})},function(t,e,n){var r=n(11),o=n(8),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(22)(Function.call,n(55).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(103),__esModule:!0}},function(t,e,n){n(104);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(2);r(r.S,"Object",{create:n(33)})},function(t,e,n){"use strict";(function(e){var r=n(37),o=n(38),i=n(56),a=n(106),u=n(39),c=n(107);t.exports=function(t,n){function s(t){var e=t&&(E&&t[E]||t[M]);if("function"==typeof e)return e}function f(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}function l(t){this.message=t,this.stack=""}function d(t){function r(r,s,f,d,p,y,h){if(d=d||T,y=y||f,h!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==e.env.NODE_ENV&&"undefined"!=typeof console){var v=d+":"+f;!a[v]&&c<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,d),a[v]=!0,c++)}return null==s[f]?r?new l(null===s[f]?"The "+p+" `"+y+"` is marked as required in `"+d+"`, but its value is `null`.":"The "+p+" `"+y+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:t(s,f,d,p,y)}if("production"!==e.env.NODE_ENV)var a={},c=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function p(t){function e(e,n,r,o,i,a){var u=e[n];if(O(u)!==t)return new l("Invalid "+o+" `"+i+"` of type `"+k(u)+"` supplied to `"+r+"`, expected `"+t+"`.");return null}return d(e)}function y(t){function e(e,n,r,o,i){if("function"!=typeof t)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[n];if(!Array.isArray(a)){return new l("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<a.length;c++){var s=t(a,c,r,o,i+"["+c+"]",u);if(s instanceof Error)return s}return null}return d(e)}function h(t){function e(e,n,r,o,i){if(!(e[n]instanceof t)){var a=t.name||T;return new l("Invalid "+o+" `"+i+"` of type `"+j(e[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return d(e)}function v(t){function n(e,n,r,o,i){for(var a=e[n],u=0;u<t.length;u++)if(f(a,t[u]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(t)+".")}return Array.isArray(t)?d(n):("production"!==e.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function m(t){function e(e,n,r,o,i){if("function"!=typeof t)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[n],c=O(a);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in a)if(a.hasOwnProperty(s)){var f=t(a,s,r,o,i+"."+s,u);if(f instanceof Error)return f}return null}return d(e)}function b(t){function n(e,n,r,o,i){for(var a=0;a<t.length;a++){if(null==(0,t[a])(e,n,r,o,i,u))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(t))return"production"!==e.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<t.length;o++){var a=t[o];if("function"!=typeof a)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",S(a),o),r.thatReturnsNull}return d(n)}function g(t){function e(e,n,r,o,i){var a=e[n],c=O(a);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in t){var f=t[s];if(f){var d=f(a,s,r,o,i+"."+s,u);if(d)return d}}return null}return d(e)}function _(t){function e(e,n,r,o,i){var c=e[n],s=O(c);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=a({},e[n],t);for(var d in f){var p=t[d];if(!p)return new l("Invalid "+o+" `"+i+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(t),null,"  "));var y=p(c,d,r,o,i+"."+d,u);if(y)return y}return null}return d(e)}function x(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(x);if(null===e||t(e))return!0;var n=s(e);if(!n)return!1;var r,o=n.call(e);if(n!==e.entries){for(;!(r=o.next()).done;)if(!x(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!x(i[1]))return!1}return!0;default:return!1}}function w(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function O(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":w(e,t)?"symbol":e}function k(t){if(void 0===t||null===t)return""+t;var e=O(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function S(t){var e=k(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function j(t){return t.constructor&&t.constructor.name?t.constructor.name:T}var E="function"==typeof Symbol&&Symbol.iterator,M="@@iterator",T="<<anonymous>>",C={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return d(r.thatReturnsNull)}(),arrayOf:y,element:function(){function e(e,n,r,o,i){var a=e[n];if(!t(a)){return new l("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(e)}(),instanceOf:h,node:function(){function t(t,e,n,r,o){return x(t[e])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(t)}(),objectOf:m,oneOf:v,oneOfType:b,shape:g,exact:_};return l.prototype=Error.prototype,C.checkPropTypes=c,C.PropTypes=C,C}}).call(e,n(16))},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,c=r(t),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var f in n)i.call(n,f)&&(c[f]=n[f]);if(o){u=o(n);for(var l=0;l<u.length;l++)a.call(n,u[l])&&(c[u[l]]=n[u[l]])}}return c}},function(t,e,n){"use strict";(function(e){function r(t,n,r,c,s){if("production"!==e.env.NODE_ENV)for(var f in t)if(t.hasOwnProperty(f)){var l;try{o("function"==typeof t[f],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",r,f,typeof t[f]),l=t[f](n,f,c,r,null,a)}catch(t){l=t}if(i(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,f,typeof l),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var d=s?s():"";i(!1,"Failed %s type: %s%s",r,l.message,null!=d?d:"")}}}if("production"!==e.env.NODE_ENV)var o=n(38),i=n(56),a=n(39),u={};t.exports=r}).call(e,n(16))},function(t,e,n){"use strict";var r=n(37),o=n(38),i=n(39);t.exports=function(){function t(t,e,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),a=n(20),u=r(a),c=n(21),s=n(110),f=r(s),l=n(40),d=r(l),p=function(t){var e=t.days,n=t.dayNames,r=t.selected,o=t.nextMonth,a=t.prevMonth,u=t.defaultDate,s=t.onClick,l=t.reset,p=t.DayComponent,y=t.addChannel,h=t.channels,v=t.currentChannel,m=(0,c.splitEvery)(7,e);return i.default.createElement("div",{className:"o_day-picker"},i.default.createElement("div",{className:"e_day-picker-buttons"},i.default.createElement("div",{onClick:a,className:"e_day-picker-arrow-container"},i.default.createElement("div",{className:"i_day-picker-arrow-left"})),i.default.createElement("div",{className:"i_day-picker-title"},u.format("MMMM YYYY")),i.default.createElement("div",{onClick:o,className:"e_day-picker-arrow-container"},i.default.createElement("div",{className:"i_day-picker-arrow-right"}))),i.default.createElement("div",{className:"i_day-picker-header"},n.map(function(t){return i.default.createElement("div",{key:t},t)})," "),i.default.createElement("div",{className:"i_day-picker-body"},m.map(function(t,e){return i.default.createElement("div",{key:e,className:"i_day-picker-row"},t.map(function(t,e){return i.default.createElement(f.default,{key:e,label:t.moment.date(),date:t,isToday:(0,d.default)().format("YYYY-MM-DD")===t.moment.format("YYYY-MM-DD"),isInThePast:t.moment.isBefore((0,d.default)(),"day"),selected:r,channels:h,currentChannel:v,onClick:s},p)}))})),i.default.createElement("div",{className:"i_day-picker-actions"},l&&i.default.createElement("button",{className:"i_day-picker-reset",onClick:l},"reset"),y&&i.default.createElement("button",{className:"i_day-picker-add-channel",onClick:y,disabled:(0,c.isNil)(h[v])||(0,c.isEmpty)(h[v])},"save channel")))};p.propTypes={days:u.default.array,dayNames:u.default.array,selected:u.default.array,onClick:u.default.func,nextMonth:u.default.func,prevMonth:u.default.func,reset:u.default.func,defaultDate:u.default.object,DayComponent:u.default.node,type:u.default.string,channels:u.default.object,currentChannel:u.default.number},e.default=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.isCurrentChannelSelected=e.isSelected=void 0;var o=n(31),i=r(o),a=n(44),u=r(a),c=n(19),s=r(c),f=n(20),l=r(f),d=n(111),p=r(d),y=n(21),h=function(t){var e=(0,u.default)({},t,{isSelected:v(t),isCurrentChannelSelected:m(t)});return s.default.createElement("div",{"data-date":t.date.moment.format("MM-DD"),onClick:function(){return t.onClick(t.date)}},t.children&&s.default.cloneElement(t.children,(0,u.default)({},e))||s.default.createElement(p.default,e))},v=e.isSelected=function(t){var e=t.date,n=t.selected,r=t.channels;return(0,y.isNil)(r)?n.some(function(t){return t.isSame(e.moment,"day")}):(0,y.flatten)((0,i.default)(r).map(function(t){return r[t]})).some(function(t){return t.isSame(e.moment,"day")})},m=e.isCurrentChannelSelected=function(t){var e=t.date,n=t.selected,r=t.channels,o=t.currentChannel;return(0,y.isNil)(r)?n.some(function(t){return t.isSame(e.moment,"day")}):!(0,y.isNil)(r[o])&&r[o].some(function(t){return t.isSame(e.moment,"day")})};h.propTypes={date:l.default.object,children:l.default.node,selected:l.default.array,onClick:l.default.func,channels:l.default.object,currentChannel:l.default.number},e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getStyle=void 0;var o=n(19),i=r(o),a=n(20),u=r(a),c=n(40),s=r(c),f=function(t,e){return{cursor:e?"not-allowed":"inherit",background:t?"rgba(141, 224, 229, 0.5)":e?"rgba(155, 155, 155, .2)":"inherit"}},l=function(t){var e=t.label,n=t.date,r=t.isToday,o=t.isInThePast,a=t.isCurrentChannelSelected,u=t.isSelected,c=n.moment.isBefore((0,s.default)(),"day"),l=function(t){(c||!a&&u)&&t.stopPropagation()};return i.default.createElement("div",{onClick:l,className:d(t),style:f(r,o),disabled:o},e)};l.propTypes={label:u.default.number,date:u.default.object,isToday:u.default.bool,isInThePast:u.default.bool};var d=e.getStyle=function(t){var e=t.date,n=t.isSelected;return(t.isCurrentChannelSelected?"o_selected-current-channel-day":n?"o_selected-day":"")+" "+e.type+"-day"};e.default=l},function(t,e){t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getRealMonthAndYear=e.decMonth=e.incMonth=e.getKey=e.getMonthRange=e.normalize=e.setMonthDays=e.KEY_FORMAT=e.TYPE=void 0;var o=n(31),i=r(o),a=n(114),u=r(a),c=n(21),s=e.TYPE={MONTH:"month",NEXT:"next-month",PREV:"prev-month"},f=e.KEY_FORMAT="YYYY-MM-DD",l=(e.setMonthDays=function(t,e){var n=(0,u.default)(l(p(e(t)),e).by("day")),r=(0,u.default)(l(y(e(t)),e).by("day")),o=(0,u.default)(l(t,e).by("day")).map(function(t){return{moment:t,type:s.MONTH}}),i=o.map(function(t){return t.moment.day()}),a=(0,c.take)((0,c.subtract)(6,(0,c.last)(i)),n).map(function(t){return{moment:t,type:s.NEXT}});return(0,c.takeLast)((0,c.head)(i),r).map(function(t){return{moment:t,type:s.PREV}}).concat(o,a)},e.normalize=function(t,e){return(0,i.default)(t).map(function(e){return t[e]}).reduce(function(t,n){var r=e(n);return t[d(r)]=r,t},{})},e.getMonthRange=function(t,e){var n=e(t.startOf("month")),r=t.endOf("month");return e.range(n,r)}),d=e.getKey=function(t){return t.format(f)},p=e.incMonth=function(t){return t.add(1,"months")},y=e.decMonth=function(t){return t.subtract(1,"months")};e.getRealMonthAndYear=function(t,e){return[(0,c.cond)([[(0,c.lte)(12),function(){return e+1}],[c.T,function(){return e}]])(t),(0,c.cond)([[(0,c.lte)(12),function(){return t-12}],[c.T,function(){return t}]])(t)]}},function(t,e,n){t.exports={default:n(115),__esModule:!0}},function(t,e,n){n(51),n(116),t.exports=n(0).Array.from},function(t,e,n){"use strict";var r=n(22),o=n(2),i=n(14),a=n(117),u=n(118),c=n(47),s=n(119),f=n(120);o(o.S+o.F*!n(122)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,d=i(t),p="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,m=0,b=f(d);if(v&&(h=r(h,y>2?arguments[2]:void 0,2)),void 0==b||p==Array&&u(b))for(e=c(d.length),n=new p(e);e>m;m++)s(n,m,v?h(d[m],m):d[m]);else for(l=b.call(d),n=new p;!(o=l.next()).done;m++)s(n,m,v?a(l,h,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var r=n(8);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(15),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(4),o=n(12);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(121),o=n(1)("iterator"),i=n(15);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(24),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){var r=n(124);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(126)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(125)(void 0),e.push([t.i,'.o_day-picker {\n\tcolor: #333333;\n}\n\n.o_day-picker .e_day-picker-buttons {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\tbackground-color: white;\n}\n\n.o_day-picker .i_day-picker-title {\n\tpadding: 10px;\n\ttext-align: center;\n\tfont-size: 1.1em;\n}\n\n.o_day-picker .e_day-picker-arrow-container {\n\tcursor: pointer;\n\tpadding: 10px;\n}\n\n.o_day-picker .i_day-picker-arrow-left {\n\twidth: 0;\n\theight: 0;\n\tborder-top: 5px solid transparent;\n\tborder-bottom: 5px solid transparent;\n\tborder-right:5px solid black;\n}\n\n.o_day-picker .i_day-picker-arrow-right {\n\twidth: 0;\n\theight: 0;\n\tborder-top: 5px solid transparent;\n\tborder-bottom: 5px solid transparent;\n\tborder-left: 5px solid black;\n}\n\n\n.o_day-picker .i_day-picker-header {\n\tdisplay: flex;\n\tbackground: #cccccc;\n\tcolor: white;\n}\n\n.o_day-picker .i_day-picker-header  div {\n\tpadding: 5px;\n\twidth: 20%;\n\theight: 20%;\n\ttext-align: center;\n\tfont-size: 0.8em;\n}\n\n.o_day-picker .i_day-picker-body {\n\tcursor: pointer;\n\tbackground-color: white;\n}\n\n.o_day-picker .i_day-picker-row {\n\tdisplay: flex;\n\ttext-align: center;\n\tborder: solid #eaecec;\n\tborder-width: 0 0 0 1px;\n}\n\n.o_day-picker .i_day-picker-row > div {\n\tborder: solid #cccccc;\n\tborder-width:  0  1px 1px  0;\n\twidth: 20%;\n}\n\n.o_day-picker .i_day-picker-row [class*="-day"] {\n\tpadding: 5px;\n\ttext-align: left;\n\tfont-size: 0.7em;\n\tmin-height: 4em;\n\ttransition: .1s background linear;\n\toutline: none;\n}\n\n.o_day-picker .i_day-picker-row [class*="-day"]:hover {\n\tbackground-color: rgba(184, 233, 134, .4) !important;\n}\n\n.o_day-picker .i_day-picker-row .selected-day {\n\tcolor: white;\n\tbackground-color: #70bde2;\n}\n\n.o_day-picker .i_day-picker-row .prev-month-day {\n\tcolor: #b3b3b3;\n}\n\n.o_day-picker .i_day-picker-row .next-month-day {\n\tcolor: #b3b3b3;\n}\n\n.i_day-picker-actions button{\n\tcursor: pointer;\n\tborder-radius: 3px;\n\tmargin-top: 25px;\n\ttext-align: center;\n\tpadding: .4em 1.5em;\n\tfont-size: 1em;\n\ttext-transform: uppercase;\n\tmargin-right: 20px;\n\tmin-width: 150px;\n\toutline: none;\n}\n.o_day-picker  .i_day-picker-reset {\n\tborder: 2px solid #8f8f8f;\n\tcolor: #8f8f8f;\n}\n\n.o_day-picker  .i_day-picker-reset:hover {\n\tbackground: #8f8f8f;\n\tcolor: #fff;\n}\n\n.o_day-picker  .i_day-picker-add-channel {\n\t border: 2px solid #38b0ed;\n\t color: #38b0ed;\n}\n\n.o_day-picker  .i_day-picker-add-channel:disabled {\n\topacity: .2 !important;\n}\n\n.o_day-picker  .i_day-picker-add-channel:hover {\n\tbackground: #38b0ed;\n\tcolor: #fff;\n}\n\n.o_day-picker .i_day-picker-row .o_selected-day,\n.o_day-picker .i_day-picker-row .o_selected-day:hover,\n.o_day-picker .i_day-picker-row [class*="-day"][disabled]:hover{\n\tbackground: rgba(155, 155, 155, .2) !important;\n\tcolor: #000 !important;\n\tcursor: not-allowed !important;\n}\n\n.o_selected-current-channel-day {\n\tbackground: #b8e986 !important;\n\tcolor: #000 !important;\n}\n\n\n',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=y[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));y[r.id]={id:r.id,refs:1,parts:a}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],u=i[1],c=i[2],s=i[3],f={css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=v(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function u(t){var e=document.createElement("style");return t.attrs.type="text/css",s(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",s(e,t.attrs),i(t,e),e}function s(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function f(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=b++;n=m||(m=u(e)),r=l.bind(null,n,s,!1),o=l.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=p.bind(null,n,e),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),r=d.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}var y={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){if(void 0===e[n]){var r=t.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[n]=r}return e[n]}}(function(t){return document.querySelector(t)}),m=null,b=0,g=[],_=n(127);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var u=n[a],c=y[u.id];c.refs--,i.push(c)}if(t){r(o(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete y[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});

/***/ })

}]);
//# sourceMappingURL=2.js.map