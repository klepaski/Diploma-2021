webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./components/Profile/UserContent.js":
/*!*******************************************!*\
  !*** ./components/Profile/UserContent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layouts_styledLayouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layouts/styledLayouts */ "./components/Layouts/styledLayouts.js");
/* harmony import */ var _components_StyledComponents_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/StyledComponents/Grid */ "./components/StyledComponents/Grid.js");
/* harmony import */ var _components_StyledComponents_Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/StyledComponents/Wrapper */ "./components/StyledComponents/Wrapper.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _components_StyledComponents_FlexBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/StyledComponents/FlexBlock */ "./components/StyledComponents/FlexBlock.js");
/* harmony import */ var _components_Profile_styledProfileHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Profile/styledProfileHeader */ "./components/Profile/styledProfileHeader.js");
/* harmony import */ var _utils_modifySrc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/modifySrc */ "./utils/modifySrc.js");
/* harmony import */ var _components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/StyledComponents/Text */ "./components/StyledComponents/Text.js");
/* harmony import */ var _components_controls_Button_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/controls/Button/Button */ "./components/controls/Button/Button.js");
/* harmony import */ var _components_StyledComponents_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/StyledComponents/Divider */ "./components/StyledComponents/Divider.js");
/* harmony import */ var _components_controls_Scroll_Scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/controls/Scroll/Scroll */ "./components/controls/Scroll/Scroll.js");
/* harmony import */ var _components_contextProviders_MainContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/contextProviders/MainContext */ "./components/contextProviders/MainContext.js");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/api */ "./actions/api.js");
/* harmony import */ var _components_Offer_cards_OfferCardItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Offer/cards/OfferCardItem */ "./components/Offer/cards/OfferCardItem.js");
/* harmony import */ var _components_Profile_styledUser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/Profile/styledUser */ "./components/Profile/styledUser.js");
/* harmony import */ var _components_controls_Button_ButtonWithIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/controls/Button/ButtonWithIcon */ "./components/controls/Button/ButtonWithIcon.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






















var UserContent = function UserContent(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      arrayPhotos = _useState[0],
      setArrayPhotos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      offers = _useState2[0],
      setOffers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      loadingOffers = _useState3[0],
      setLoadingOffers = _useState3[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_contextProviders_MainContext__WEBPACK_IMPORTED_MODULE_16__["MainContext"]),
      me = _useContext.me,
      setMe = _useContext.setMe;

  var refGallery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (user.photo && user.photo.length) {
      try {
        var coverUrl = user.coverPhoto && user.coverPhoto.photoUrl ? user.coverPhoto.photoUrl : null;
        var filteredPhoto = user.photo.filter(function (item) {
          return item.photoUrl && user.photoUrl !== coverUrl;
        });
        if (coverUrl) filteredPhoto.unshift({
          photoUrl: coverUrl
        });
        var images = filteredPhoto.map(function (item) {
          if (item.photoUrl) {
            return {
              original: Object(_utils_modifySrc__WEBPACK_IMPORTED_MODULE_11__["modifySrc"])(item.photoUrl, 'coverProfile')
            };
          }
        });
        setArrayPhotos(images);
      } catch (e) {
        setArrayPhotos([]);
      }
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (user.id) {
      setLoadingOffers(true);
      Object(_actions_api__WEBPACK_IMPORTED_MODULE_17__["apiGetListUserOffers"])(user.id).then(function (res) {
        setOffers(res.data);
        setLoadingOffers(false);
      })["catch"](function (e) {
        setLoadingOffers(false);
      });
    }
  }, [user.id]);
  var profilePhotoSrc = Object(_utils_modifySrc__WEBPACK_IMPORTED_MODULE_11__["modifySrc"])(user.profilePhotoURL, 'profile');
  var coverSrc = Object(_utils_modifySrc__WEBPACK_IMPORTED_MODULE_11__["modifySrc"])(user.coverPhoto && user.coverPhoto.photoUrl ? user.coverPhoto.photoUrl : null, 'coverProfile');

  var handleFullScreen = function handleFullScreen() {
    refGallery.current.fullScreen();
  };

  console.log('arrayPhotos', arrayPhotos);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Profile_styledUser__WEBPACK_IMPORTED_MODULE_19__["Wallpaper"], {
    src: coverSrc
  }, !!arrayPhotos.length && __jsx(_components_controls_Button_ButtonWithIcon__WEBPACK_IMPORTED_MODULE_20__["ButtonWithIcon"], {
    gallery: true,
    textRight: true,
    onClick: handleFullScreen
  }, "Gallery")), __jsx(react_image_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ref: refGallery,
    items: arrayPhotos,
    showThumbnails: false,
    showPlayButton: false,
    additionalClass: 'z-profile-gallery'
  }), __jsx(_components_StyledComponents_Grid__WEBPACK_IMPORTED_MODULE_5__["ContainerDesktop"], null, __jsx(_components_StyledComponents_Wrapper__WEBPACK_IMPORTED_MODULE_6__["Wrapper"], {
    pl: 16,
    pr: 16,
    pb: 50
  }, __jsx(_components_StyledComponents_FlexBlock__WEBPACK_IMPORTED_MODULE_9__["FlexBlock"], {
    left: true,
    mb: 30
  }, __jsx(_components_Profile_styledProfileHeader__WEBPACK_IMPORTED_MODULE_10__["ProfileAvatar"], {
    src: profilePhotoSrc,
    alt: 'logo'
  }), __jsx(_components_StyledComponents_FlexBlock__WEBPACK_IMPORTED_MODULE_9__["FlexBlock"], {
    column: true,
    nowidth: true,
    mt: 30,
    ml: 12
  }, __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    bold: true,
    fz: 18
  }, "".concat(user.firstName || '', " ").concat(user.lastName || '')), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    fz: 10
  }, "Joined ", moment_moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(user.createdAt), "YYYYMMDD").fromNow()))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, user.country && __jsx(_components_StyledComponents_FlexBlock__WEBPACK_IMPORTED_MODULE_9__["FlexBlock"], {
    left: true,
    ml: 25,
    mb: 20
  }, __jsx(_components_Profile_styledUser__WEBPACK_IMPORTED_MODULE_19__["DotList"], null), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    fz: 16
  }, "Lives in ", user.country)), user.phone && __jsx(_components_StyledComponents_FlexBlock__WEBPACK_IMPORTED_MODULE_9__["FlexBlock"], {
    left: true,
    ml: 25,
    mb: 20
  }, __jsx(_components_Profile_styledUser__WEBPACK_IMPORTED_MODULE_19__["DotList"], null), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    green2: true,
    fz: 16
  }, user.phone)), user.email && __jsx(_components_StyledComponents_FlexBlock__WEBPACK_IMPORTED_MODULE_9__["FlexBlock"], {
    left: true,
    ml: 25,
    mb: 20
  }, __jsx(_components_Profile_styledUser__WEBPACK_IMPORTED_MODULE_19__["DotList"], null), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    green2: true,
    fz: 16
  }, user.email))), __jsx(_components_StyledComponents_Divider__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
    grey: true,
    mt: 40,
    mb: 22
  }), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    bold: true,
    fz: 18
  }, "Education"), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    fz: 14,
    mt: 15
  }, user.education), __jsx(_components_StyledComponents_Divider__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
    grey: true,
    mt: 28,
    mb: 22
  }), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    bold: true,
    fz: 18
  }, "Experience"), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    fz: 14,
    mt: 15
  }, user.experience), __jsx(_components_StyledComponents_Divider__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
    grey: true,
    mt: 28,
    mb: 22
  }), __jsx(_components_Layouts_styledLayouts__WEBPACK_IMPORTED_MODULE_4__["CheckLabel"], {
    grbl: true,
    label: "Email address"
  }), __jsx(_components_StyledComponents_Divider__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
    grey: true,
    mt: 28,
    mb: 22
  }), __jsx(_components_StyledComponents_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    bold: true,
    fz: 18,
    mb: 30
  }, "".concat(user.firstName || '', " ").concat(user.lastName || ''), " offers"), loadingOffers ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Loading...") : __jsx(_components_controls_Scroll_Scroll__WEBPACK_IMPORTED_MODULE_15__["HorizontalScrollWrapper"], null, offers.map(function (item, key) {
    return __jsx(_components_controls_Scroll_Scroll__WEBPACK_IMPORTED_MODULE_15__["HorizontalScrollItem"], {
      key: key
    }, __jsx(_components_Offer_cards_OfferCardItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      offer: item
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserContent);

/***/ })

})
//# sourceMappingURL=profile.js.366473555ea6aae4031c.hot-update.js.map