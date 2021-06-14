exports.ids = [0];
exports.modules = {

/***/ "./components/controls/Calendar/Calendar.js":
/*!**************************************************!*\
  !*** ./components/controls/Calendar/Calendar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_calendar_multiday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendar-multiday */ "react-calendar-multiday");
/* harmony import */ var react_calendar_multiday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_calendar_multiday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.css */ "./components/controls/Calendar/calendar.css");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_calendar_css__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import 'babel-polyfill' /* Support for IE11 */







const PositionDay = props => {
  let day = moment__WEBPACK_IMPORTED_MODULE_4___default()(props.date.moment).toDate();
  let endDate = new Date(props.endDate);
  let isFuture = false;

  if (day.getTime() > endDate.getTime()) {
    isFuture = true;
  }

  const onClick = e => {
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

const getStyle = function ({
  date,
  isSelected
}) {
  return `${isSelected ? 'o_selected-day' : ''} ${date.type}-day`;
};

const getInline = ({
  isToday,
  isInThePast
}) => ({
  cursor: isInThePast ? 'not-allowed' : 'inherit',
  borderColor: 'rgb(228, 231, 231) !important',
  color: isInThePast ? 'rgb(202, 204, 205)' : 'inherit',
  background: isToday ? 'inherit' : isInThePast ? 'rgb(255, 255, 255)' : 'inherit'
});

class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onReset", () => {
      this.setState({
        channels: {},
        currentChannel: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reactToChange", obj => {
      if (this.props.enabledAll && this.props.setSelected) {
        this.props.setSelected(obj.selected);
      }
    });

    this.state = {
      currentChannel: 0,
      channels: {},
      selectedDays: []
    };
  } // componentDidUpdate(prevProps, prevState, snapshot) {
  //     if(prevProps.selectedDays.length == this.props.selectedDays.length) return
  //     this.setState({selectedDays: this.props.selectedDays})
  // }


  render() {
    if (true) return null;
    console.log('this.props.selectedDays', this.props.selectedDays);
    return __jsx("div", {
      className: `z-calendar-wrapper ${this.props.enabledAll ? 'enabled-all' : 'disabled-all'}`
    }, __jsx(react_calendar_multiday__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

}

/***/ }),

/***/ "./components/controls/Calendar/calendar.css":
/*!***************************************************!*\
  !*** ./components/controls/Calendar/calendar.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map