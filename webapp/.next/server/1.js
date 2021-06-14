exports.ids = [1];
exports.modules = {

/***/ "./components/controls/Calendar/CalendarAirbnb.js":
/*!********************************************************!*\
  !*** ./components/controls/Calendar/CalendarAirbnb.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dates/initialize */ "react-dates/initialize");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dates */ "react-dates");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar.css */ "./components/controls/Calendar/calendar.css");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_calendar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contextProviders_MainContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contextProviders/MainContext */ "./components/contextProviders/MainContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Calendar from 'react-calendar-multiday'







class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDatesChange", (startDate, endDate) => {
      // this.setState({ startDate, endDate })
      this.props.onChangeDates({
        startDate: moment__WEBPACK_IMPORTED_MODULE_4___default()(startDate).toDate(),
        endDate: moment__WEBPACK_IMPORTED_MODULE_4___default()(endDate).toDate()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isSameDay", (d1, d2) => {
      return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isDisabledDay", mDay => {
      let isDisable = false;
      this.props.calendar.map((item, key) => {
        if (item.status == 'disabled' || item.status == 'reserved' && this.props.userId != item.clientId) {
          if (this.isSameDay(mDay, moment__WEBPACK_IMPORTED_MODULE_4___default()(item.date).toDate())) {
            isDisable = true;
          }
        }
      });
      return isDisable;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isDayReservedByMe", day => {
      let mDay = moment__WEBPACK_IMPORTED_MODULE_4___default()(day).toDate();
      let isReserved = false;
      this.props.calendar.map((item, key) => {
        if (item.status == 'reserved' && this.props.userId == item.clientId) {
          if (this.isSameDay(mDay, moment__WEBPACK_IMPORTED_MODULE_4___default()(item.date).toDate())) {
            isReserved = true;
          }
        }
      });
      return isReserved;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isOutsideRange", day => {
      const todayDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().toDate();
      let mDay = moment__WEBPACK_IMPORTED_MODULE_4___default()(day).toDate();
      let endDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.endDateOffer).toDate();

      if (this.isSameDay(new Date(todayDate), new Date(mDay))) {
        return false;
      }

      if (mDay < todayDate || mDay > endDate) {
        return true;
      }

      if (this.isDisabledDay(mDay)) {
        return true;
      }

      return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isDayBlocked", day => {
      // const todayDate = moment().toDate()
      // let mDay = moment(day).toDate()
      // let endDate = moment(this.props.endDate).toDate()
      //
      // if(mDay < endDate) {
      //     return true
      // }
      return false;
    });

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  componentDidMount() {
    console.log(this.props.calendar);
    console.log(this.props.endDateOffer);
    console.log(this.props.userId);
  }

  render() {
    if (true) return null;
    let campaignStartDate = '23/10/2019';
    let campaignEndDate = '29/10/2019';
    let startDate = this.props.bookingDates.startDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.bookingDates.startDate) : null,
        endDate = this.props.bookingDates.endDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.bookingDates.endDate) : null;
    return __jsx("div", {
      className: "z-wrapper-airnb-calendar"
    }, __jsx(react_dates__WEBPACK_IMPORTED_MODULE_3__["DateRangePicker"], {
      startDate: startDate // momentPropTypes.momentObj or null,
      ,
      endDate: endDate // momentPropTypes.momentObj or null,
      ,
      onDatesChange: ({
        startDate,
        endDate
      }) => this.onDatesChange(startDate, endDate),
      startDateId: "your_unique_start_date_id" // PropTypes.string.isRequired,
      ,
      endDateId: "your_unique_end_date_id" // PropTypes.string.isRequired,
      ,
      focusedInput: this.state.focusedInput // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      ,
      onFocusChange: focusedInput => this.setState({
        focusedInput
      }) // PropTypes.func.isRequired,
      ,
      numberOfMonths: 1,
      minimumNights: 0,
      isOutsideRange: date => this.isOutsideRange(date),
      isDayBlocked: date => this.isDayBlocked(date),
      isDayHighlighted: date => this.isDayReservedByMe(date),
      enableOutsideDays: true,
      displayFormat: () => "DD/MM/YYYY"
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



/***/ }),

/***/ "./node_modules/react-dates/lib/css/_datepicker.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-dates/lib/css/_datepicker.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=1.js.map