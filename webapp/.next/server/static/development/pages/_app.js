module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/api.js":
/*!************************!*\
  !*** ./actions/api.js ***!
  \************************/
/*! exports provided: apiCreateUser, apiLoginUser, apiGetMe, apiGetUnreadMessages, apiGetUserById, apiEditMe, apiEditProfilePhoto, apiDeleteProfilePhoto, apiGetListUserOffers, apiGetListUserOffersLiked, apiChangePassword, apiKyc, apiGoogleLogin, apiSendProfilePhotos, apiGetProfilePhotos, apiRemoveProfilePhoto, apiSendProfileCoverPhoto, apiCreateProgrammer, apiGetProgrammerCategories, apiGetParamsCategory, apiCreateCompany, apiCreateOffer, apiEditOffer, apiDeleteOffer, apiGetOfferById, apiGetListOffers, apiGetPopularCategories, apiCreateOfferParams, apiGetOfferPhoto, apiRemoveOfferPhoto, apiEditOfferPhoto, apiSetOfferCoverPhoto, apiGetEventTypes, apiCreateEventOffer, apiOfferPhotos, apiOfferRegulations, apiAddPerformanceDetails, apiOfferCreateCalendar, apiOfferUpdateDisabled, apiOfferCreatePrice, apiOfferCreateDiscounts, apiSendInvitatons, apiReservOffer, apiCloneOffer, apiCreateChatOffer, apiOfferLike, apiGetOfferReviews, apiJoinToOffer, apiGetListChats, apiGetChatById, apiGetChatMessages, apiSendMessage, apiGetPreChat, apiGetPreChatMessages, apiSendPreChatMessage, apiReadMessages, apiApprove, apiDeclineBooking, apiSendReview, apiAdminProgrammerCategories, apiAdminCategoriesParams, apiCreateEventType, apiCreateParam, apiEditParam, apiGetParams, apiGetFrontCategories, apiEditCategoryTemplare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateUser", function() { return apiCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiLoginUser", function() { return apiLoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetMe", function() { return apiGetMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetUnreadMessages", function() { return apiGetUnreadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetUserById", function() { return apiGetUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEditMe", function() { return apiEditMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEditProfilePhoto", function() { return apiEditProfilePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDeleteProfilePhoto", function() { return apiDeleteProfilePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetListUserOffers", function() { return apiGetListUserOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetListUserOffersLiked", function() { return apiGetListUserOffersLiked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiChangePassword", function() { return apiChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKyc", function() { return apiKyc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGoogleLogin", function() { return apiGoogleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSendProfilePhotos", function() { return apiSendProfilePhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetProfilePhotos", function() { return apiGetProfilePhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRemoveProfilePhoto", function() { return apiRemoveProfilePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSendProfileCoverPhoto", function() { return apiSendProfileCoverPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateProgrammer", function() { return apiCreateProgrammer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetProgrammerCategories", function() { return apiGetProgrammerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetParamsCategory", function() { return apiGetParamsCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateCompany", function() { return apiCreateCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateOffer", function() { return apiCreateOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEditOffer", function() { return apiEditOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDeleteOffer", function() { return apiDeleteOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetOfferById", function() { return apiGetOfferById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetListOffers", function() { return apiGetListOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetPopularCategories", function() { return apiGetPopularCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateOfferParams", function() { return apiCreateOfferParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetOfferPhoto", function() { return apiGetOfferPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRemoveOfferPhoto", function() { return apiRemoveOfferPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEditOfferPhoto", function() { return apiEditOfferPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSetOfferCoverPhoto", function() { return apiSetOfferCoverPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetEventTypes", function() { return apiGetEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateEventOffer", function() { return apiCreateEventOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferPhotos", function() { return apiOfferPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferRegulations", function() { return apiOfferRegulations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAddPerformanceDetails", function() { return apiAddPerformanceDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferCreateCalendar", function() { return apiOfferCreateCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferUpdateDisabled", function() { return apiOfferUpdateDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferCreatePrice", function() { return apiOfferCreatePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferCreateDiscounts", function() { return apiOfferCreateDiscounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSendInvitatons", function() { return apiSendInvitatons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiReservOffer", function() { return apiReservOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCloneOffer", function() { return apiCloneOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateChatOffer", function() { return apiCreateChatOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiOfferLike", function() { return apiOfferLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetOfferReviews", function() { return apiGetOfferReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiJoinToOffer", function() { return apiJoinToOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetListChats", function() { return apiGetListChats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetChatById", function() { return apiGetChatById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetChatMessages", function() { return apiGetChatMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSendMessage", function() { return apiSendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetPreChat", function() { return apiGetPreChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetPreChatMessages", function() { return apiGetPreChatMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSendPreChatMessage", function() { return apiSendPreChatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiReadMessages", function() { return apiReadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiApprove", function() { return apiApprove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDeclineBooking", function() { return apiDeclineBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSendReview", function() { return apiSendReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAdminProgrammerCategories", function() { return apiAdminProgrammerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAdminCategoriesParams", function() { return apiAdminCategoriesParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateEventType", function() { return apiCreateEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCreateParam", function() { return apiCreateParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEditParam", function() { return apiEditParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetParams", function() { return apiGetParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGetFrontCategories", function() { return apiGetFrontCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEditCategoryTemplare", function() { return apiEditCategoryTemplare; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // ====== USER  ======

const apiCreateUser = user => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user`, user);
};
const apiLoginUser = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user/auth`, data);
};
const apiGetMe = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/profile`);
};
const apiGetUnreadMessages = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/unreadMessages`);
};
const apiGetUserById = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/${id}`);
};
const apiEditMe = user => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/user/profile`, user);
};
const apiEditProfilePhoto = (id, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user/${id}/profilePhoto`, data);
};
const apiDeleteProfilePhoto = (id, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/v1/user/${id}/profilePhoto`);
};
const apiGetListUserOffers = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/${id}/offers`);
};
const apiGetListUserOffersLiked = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/myLikeOffers`);
};
const apiChangePassword = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/user/updatePassword`, data);
};
const apiKyc = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/user/documents`, data);
};
const apiGoogleLogin = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/auth/google`);
};
const apiSendProfilePhotos = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user/photo`, data);
};
const apiGetProfilePhotos = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/photo`);
};
const apiRemoveProfilePhoto = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/v1/user/photo/${id}`);
};
const apiSendProfileCoverPhoto = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/user/photo/${id}/coverPhoto`);
}; // =====================
// ====== PROGRAMMER  ======

const apiCreateProgrammer = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user/programmer`, data);
};
const apiGetProgrammerCategories = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/programmerCategories`);
};
const apiGetParamsCategory = category => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/admin/frontCategories?category=${category}`);
}; // =====================
// ====== COMPANY  ======

const apiCreateCompany = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user/organiser`, data);
}; // =====================
// ====== OFFER  ======

const apiCreateOffer = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer`, data);
};
const apiEditOffer = (id, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${id}`, data);
};
const apiDeleteOffer = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/v1/offer/${id}`);
};
const apiGetOfferById = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/offer/${id}`);
};
const apiGetListOffers = params => {
  if (!params) params = {};
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/client/offer?search=${params.search || ''}&from=${params.from || ''}&to=${params.to || ''}&country=${params.country || ''}&last=${params.last || ''}&type=${params.type || ''}`);
};
const apiGetPopularCategories = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/offers/popularCategories`);
};
const apiCreateOfferParams = (id, obj) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${id}/categoryOptions`, obj);
};
const apiGetOfferPhoto = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/offer/details/photo?offerId=${id}`);
};
const apiRemoveOfferPhoto = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/v1/offer/details/photo/${id}`);
};
const apiEditOfferPhoto = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/details/photo/${data.id}`, data);
};
const apiSetOfferCoverPhoto = (offerId, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${offerId}/setAvatar`, data);
};
const apiGetEventTypes = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/eventTypes`);
};
const apiCreateEventOffer = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer/event`, data);
};
const apiOfferPhotos = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer/details/photo`, data);
};
const apiOfferRegulations = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${data.offerId}/regulations`, data);
};
const apiAddPerformanceDetails = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${data.offerId}/performanceDetails`, data);
};
const apiOfferCreateCalendar = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer/${data.offerId}/calendar`, data);
};
const apiOfferUpdateDisabled = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer/${data.offerId}/calendar/disabledDays`, data);
};
const apiOfferCreatePrice = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${data.offerId}/price`, data);
};
const apiOfferCreateDiscounts = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${data.offerId}/discounts`, data);
};
const apiSendInvitatons = (id, list) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer/${id}/inviteParticipants`, list);
};
const apiReservOffer = (id, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/client/${id}/reservation`, data);
};
const apiCloneOffer = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/offer/copyOffer`, {
    id: id
  });
};
const apiCreateChatOffer = (offerId, text) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/preChat`, {
    offerId: offerId,
    text: text
  });
};
const apiOfferLike = offerId => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/user/${offerId}/like `);
};
const apiGetOfferReviews = offerId => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/user/offer/${offerId}/reviews`);
};
const apiJoinToOffer = ioid => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/user/confirmOffer`, {
    offerParticipantsId: ioid
  });
}; // =====================
// ====== CHAT  ======

const apiGetListChats = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/chats`);
};
const apiGetChatById = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/chat/${id}`);
};
const apiGetChatMessages = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/chat/${id}/messages`);
};
const apiSendMessage = (chatId, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/chat/${chatId}/messages`, data);
};
const apiGetPreChat = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/preChat/${id}`);
};
const apiGetPreChatMessages = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/preChat/${id}/messages`);
};
const apiSendPreChatMessage = (chatId, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/preChat/${chatId}/messages`, data);
};
const apiReadMessages = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/chats/updateStatus`, {
    id: data
  });
}; // =====================
// BOOKING

const apiApprove = (offerId, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${offerId}/approve`, data);
};
const apiDeclineBooking = (offerId, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/offer/${offerId}/decline`, data);
};
const apiSendReview = (bookingId, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/client/${bookingId}/review`, data);
}; //========================
// ====== ADMIN  ======

const apiAdminProgrammerCategories = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/admin/newUploadProgrammerCategories`, data);
};
const apiAdminCategoriesParams = (id, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/admin/frontCategories/csv/${id}`, data);
};
const apiCreateEventType = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/admin/createEventTypes`, data);
};
const apiCreateParam = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/v1/admin/frontTemplates`, data);
};
const apiEditParam = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/admin/frontTemplates`, data);
};
const apiGetParams = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/admin/frontTemplates`, data);
};
const apiGetFrontCategories = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/admin/frontCategoriesTemplates`, data);
};
const apiEditCategoryTemplare = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/v1/admin/frontCategoriesTemplates`, data);
}; // =====================

/***/ }),

/***/ "./components/PageHead.js":
/*!********************************!*\
  !*** ./components/PageHead.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const PageHead = ({
  title,
  description,
  url,
  imgLink = ``
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-4063532284"
}), __jsx("meta", {
  httpEquiv: "content-language",
  content: "en",
  className: "jsx-4063532284"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover",
  className: "jsx-4063532284"
}), __jsx("title", {
  className: "jsx-4063532284"
}, title || 'Programmerbooking'), __jsx("meta", {
  name: "description",
  content: description,
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:url",
  content: url,
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:site_name",
  content: 'Programmerbooking',
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:title",
  content: title || 'Programmerbooking',
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:description",
  content: description,
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:image",
  content: imgLink,
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:image:type",
  content: "image/png",
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:image:height",
  content: "1200",
  className: "jsx-4063532284"
}), __jsx("link", {
  rel: "canonical",
  href: url,
  className: "jsx-4063532284"
}), __jsx("link", {
  rel: "shortlink",
  href: url,
  className: "jsx-4063532284"
}), __jsx("meta", {
  property: "og:type",
  content: "article",
  className: "jsx-4063532284"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "../static/css/image-gallery.css",
  className: "jsx-4063532284"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "../static/css/_datepicker.css",
  className: "jsx-4063532284"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "../static/css/removeProd.css",
  className: "jsx-4063532284"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4063532284"
}, "@font-face{font-family:'CircularProBook';font-style:normal;font-weight:300;src:url(\"/static/fonts/CircularPro/CircularPro-Book.otf\");}@font-face{font-family:'CircularProBold';font-style:normal;font-weight:400;src:url(\"/static/fonts/CircularPro/CircularPro-Bold.otf\");}body,textarea{margin:0;font-family:'CircularProBook';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFw0XFzQtNC40L/Qu9C+0LxcXHdlYmFwcCDigJQg0LrQvtC/0LjRj1xcY29tcG9uZW50c1xcUGFnZUhlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0MrQixBQUdxRCxBQU1BLEFBTXZCLFNBQ3FCLHFCQVpWLEFBTUEsU0FPMUIsU0Fad0IsQUFNQSxnQkFMMEMsQUFNQSwwREFMaEUsQUFNQSIsImZpbGUiOiJEOlxcNFxc0LTQuNC/0LvQvtC8XFx3ZWJhcHAg4oCUINC60L7Qv9C40Y9cXGNvbXBvbmVudHNcXFBhZ2VIZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgUGFnZUhlYWQgPSAoe3RpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCBpbWdMaW5rPWBgIH0pID0+IChcclxuICAgIDw+XHJcblx0PEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9J2NvbnRlbnQtbGFuZ3VhZ2UnIGNvbnRlbnQ9J2VuJy8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIHZpZXdwb3J0LWZpdD1jb3ZlclwiIC8+XHJcblxyXG4gICAgICAgIDx0aXRsZT57dGl0bGUgfHwgJ1Byb2dyYW1tZXJib29raW5nJ308L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9eydQcm9ncmFtbWVyYm9va2luZyd9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlIHx8ICdQcm9ncmFtbWVyYm9va2luZyd9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWdMaW5rfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMTIwMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e3VybH0gLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGxpbmtcIiBocmVmPXt1cmx9IC8+XHJcblxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cclxuXHJcbiAgICAgICAgPGxpbmsgcmVsID0gXCJzdHlsZXNoZWV0XCIgdHlwZSA9IFwidGV4dC9jc3NcIiBocmVmID0gXCIuLi9zdGF0aWMvY3NzL2ltYWdlLWdhbGxlcnkuY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWwgPSBcInN0eWxlc2hlZXRcIiB0eXBlID0gXCJ0ZXh0L2Nzc1wiIGhyZWYgPSBcIi4uL3N0YXRpYy9jc3MvX2RhdGVwaWNrZXIuY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWwgPSBcInN0eWxlc2hlZXRcIiB0eXBlID0gXCJ0ZXh0L2Nzc1wiIGhyZWYgPSBcIi4uL3N0YXRpYy9jc3MvcmVtb3ZlUHJvZC5jc3NcIiAvPlxyXG5cclxuXHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NpcmN1bGFyUHJvQm9vayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0NpcmN1bGFyUHJvL0NpcmN1bGFyUHJvLUJvb2sub3RmXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDaXJjdWxhclByb0JvbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9DaXJjdWxhclByby9DaXJjdWxhclByby1Cb2xkLm90ZlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBib2R5LCB0ZXh0YXJlYSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NpcmN1bGFyUHJvQm9vayc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWQ7Il19 */\n/*@ sourceURL=D:\\\\4\\\\\u0434\u0438\u043F\u043B\u043E\u043C\\\\webapp \u2014 \u043A\u043E\u043F\u0438\u044F\\\\components\\\\PageHead.js */"));

/* harmony default export */ __webpack_exports__["default"] = (PageHead);

/***/ }),

/***/ "./components/contextProviders/MainContext.js":
/*!****************************************************!*\
  !*** ./components/contextProviders/MainContext.js ***!
  \****************************************************/
/*! exports provided: default, MainConsumer, MainContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainConsumer", function() { return MainConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContext", function() { return MainContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/api */ "./actions/api.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





let token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token');
const MainContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
const MainConsumer = MainContext.Consumer;
/* Then create a provider Component */

class MainProvider extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getMe", () => {
      Object(_actions_api__WEBPACK_IMPORTED_MODULE_4__["apiGetMe"])().then(res => {
        this.setState({
          me: res.data,
          checkedMe: true
        });
      }).catch(() => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getUnreadMessages", () => {
      Object(_actions_api__WEBPACK_IMPORTED_MODULE_4__["apiGetUnreadMessages"])().then(res => {
        this.setState({
          unreadMessages: res.data
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "setMe", me => {
      let clone = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, me);

      this.setState({
        me: me
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "setOffer", offer => {
      this.setState({
        offer: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, offer)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleChangeUnreadMessages", (count = 0) => {
      let unread = this.state.unreadMessages - count;
      if (unread < 0) unread = 0;
      this.setState({
        unreadMessages: unread
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      me: {},
      unreadMessages: 0,
      offer: {
        categoryOptions: []
      },
      checkedMe: false,
      setMe: this.setMe,
      setOffer: this.setOffer,
      handleChangeUnreadMessages: this.handleChangeUnreadMessages,
      listOffers: []
    });
  }

  componentDidMount() {
    if (token) {
      this.getMe();
      this.getUnreadMessages();
    } else {
      this.setState({
        checkedMe: true
      });
    }
  }

  render() {
    return __jsx(MainContext.Provider, {
      value: this.state
    }, this.props.children);
  }

} // MainProvider.getInitialProps = async ({ req }) => {
//     const node_env = process.env.NODE_ENV
//     console.log('test', node_env)
//     const host =  req.headers.host
//     return { node_env }
// }


/* harmony default export */ __webpack_exports__["default"] = (MainProvider);


/***/ }),

/***/ "./config/axios.js":
/*!*************************!*\
  !*** ./config/axios.js ***!
  \*************************/
/*! exports provided: initAxios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAxios", function() { return initAxios; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");




const initAxios = cb => {
  let token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');

  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.response.use(async response => {
    return response;
  }, async error => {
    const status = error.response.status;

    if (status === 401) {
      debugger;
      delete axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["Authorization"];
      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__["logout"])();
    }

    if (status === 403) {
      window.location.href = '/';
    }

    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  cb();
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notifications */ "react-notifications");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reatom/core */ "@reatom/core");
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reatom_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reatom/react */ "@reatom/react");
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reatom_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_contextProviders_MainContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contextProviders/MainContext */ "./components/contextProviders/MainContext.js");
/* harmony import */ var _components_PageHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageHead */ "./components/PageHead.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/axios */ "./config/axios.js");
/* harmony import */ var _static_css_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/css/styles.css */ "./static/css/styles.css");
/* harmony import */ var _static_css_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_css_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_css_media_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/css/media-styles.css */ "./static/css/media-styles.css");
/* harmony import */ var _static_css_media_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_media_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_css_notification_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/css/notification.css */ "./static/css/notification.css");
/* harmony import */ var _static_css_notification_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_notification_css__WEBPACK_IMPORTED_MODULE_11__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false
    };
  }

  componentDidMount() {
    Object(_config_axios__WEBPACK_IMPORTED_MODULE_8__["initAxios"])(() => {
      this.setState({
        initialized: true
      });
    });
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const store = Object(_reatom_core__WEBPACK_IMPORTED_MODULE_4__["createStore"])();
    if (!this.state.initialized) return null;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(_components_contextProviders_MainContext__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_components_PageHead__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(Component, pageProps)), __jsx(react_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationContainer"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./static/css/media-styles.css":
/*!*************************************!*\
  !*** ./static/css/media-styles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/notification.css":
/*!*************************************!*\
  !*** ./static/css/notification.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/styles.css":
/*!*******************************!*\
  !*** ./static/css/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, logout, withAuthSync, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







function login({
  token,
  id
}) {
  localStorage.setItem('userId', id);
  js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('token', token, {
    expires: 1
  }); // Router.push('/profile')
}

function logout() {
  console.log('logout user');
  delete axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.common["Authorization"];
  js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('token');
  localStorage.removeItem('userId'); // to support logging out from all windows

  window.localStorage.setItem('logout', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_7___default()());
  window.location.href = '/';
} // Gets the display name of a JSX component for dev tools


const getDisplayName = Component => Component.displayName || Component.name || 'Component';

function withAuthSync(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = class extends react__WEBPACK_IMPORTED_MODULE_8__["Component"] {
    static async getInitialProps(ctx) {
      const token = auth(ctx);
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      return _objectSpread({}, componentProps, {
        token
      });
    }

    constructor(props) {
      super(props);
      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');
      }
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "displayName", `withAuthSync(${getDisplayName(WrappedComponent)})`), _temp;
}

function auth(ctx) {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_10___default()(ctx);
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');
  }

  return token;
}



/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: hasError, modifyForReactSealect, addOrRemove, isIncludesThisId, urlSearchParams, modifyToBr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyForReactSealect", function() { return modifyForReactSealect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrRemove", function() { return addOrRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIncludesThisId", function() { return isIncludesThisId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlSearchParams", function() { return urlSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyToBr", function() { return modifyToBr; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

const hasError = errors => {
  let hasError = false;

  for (let key in errors) {
    if (errors[key]) hasError = true;
  }

  return hasError;
};
const modifyForReactSealect = (options = []) => {
  let arr = [];
  options.map(item => {
    arr.push({
      label: item,
      value: item
    });
  });
  return arr;
};
const addOrRemove = (array, value) => {
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(array)) return array;
  let index = array.findIndex(item => item.id === value.id);

  if (index === -1) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }

  return array;
};
const isIncludesThisId = (array, id) => {
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(array)) return array;
  let found = false;
  array.map(item => {
    if (item.id === id) found = true;
  });
  return found;
};
const urlSearchParams = () => {
  if (false) {} else {
    return {};
  }
};
const modifyToBr = value => {
  try {
    let modified = value.replace(/(\r\n|\n)/g, "<br/>");
    return {
      __html: modified
    };
  } catch (e) {
    return {
      __html: value || ''
    };
  }
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@reatom/core":
/*!*******************************!*\
  !*** external "@reatom/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reatom/core");

/***/ }),

/***/ "@reatom/react":
/*!********************************!*\
  !*** external "@reatom/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reatom/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-notifications":
/*!**************************************!*\
  !*** external "react-notifications" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-notifications");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map