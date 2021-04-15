webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Filters.tsx":
/*!********************************!*\
  !*** ./components/Filters.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ValensSarajevo\\Desktop\\testApp\\movies\\components\\Filters.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var Filters = function Filters(_ref) {
  _s();

  var genres = _ref.genres;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedGenres = _useState[0],
      setSelectedGenres = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      selectedYear = _useState2[0],
      setSelectedYear = _useState2[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    setSelectedGenres(event.target.value);
  }, []);

  var handleSubmit = function handleSubmit() {
    window.location.href = "".concat(window.location.origin, "?genre=").concat(selectedGenres.join(","), "&year=").concat(selectedYear);
  };

  var handleInputChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    var enteredYear = event.target.value;
    setSelectedYear(enteredYear);
  }, []);

  var handleCloseMenu = function handleCloseMenu() {};

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var genresString = urlParams.get("genre");
    var year = urlParams.get("year");

    if (genresString) {
      setSelectedGenres(genresString.split(","));
    }

    if (year) {
      setSelectedYear(year);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "filters-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
        id: "demo-simple-select-label",
        className: "genre-label",
        children: "Choose genre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        labelId: "demo-mutiple-name-label",
        id: "demo-simple-select",
        onChange: handleChange,
        value: selectedGenres,
        multiple: true,
        input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 18
        }, _this),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: 'close',
          onClick: handleCloseMenu,
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), genres.map(function (genre) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
            value: genre.name,
            children: genre.name
          }, genre.id, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: 'Filter by year',
      onChange: handleInputChange,
      value: selectedYear
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: handleSubmit,
      children: "Select"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(Filters, "EUBnHaTd66WSvpYLfyXOqU30m9s=");

_c = Filters;
/* harmony default export */ __webpack_exports__["default"] = (Filters);

var _c;

$RefreshReg$(_c, "Filters");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzLnRzeCJdLCJuYW1lcyI6WyJGaWx0ZXJzIiwiZ2VucmVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZEdlbnJlcyIsInNldFNlbGVjdGVkR2VucmVzIiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3JpZ2luIiwiam9pbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZW50ZXJlZFllYXIiLCJoYW5kbGVDbG9zZU1lbnUiLCJ1c2VFZmZlY3QiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZW5yZXNTdHJpbmciLCJnZXQiLCJ5ZWFyIiwic3BsaXQiLCJtYXAiLCJnZW5yZSIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBT0EsSUFBTUEsT0FBdUMsR0FBRyxTQUExQ0EsT0FBMEMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFXLEVBQVgsQ0FEVTtBQUFBLE1BQ3ZEQyxjQUR1RDtBQUFBLE1BQ3ZDQyxpQkFEdUM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFTLEVBQVQsQ0FGYztBQUFBLE1BRXZERyxZQUZ1RDtBQUFBLE1BRXpDQyxlQUZ5Qzs7QUFHOUQsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBNEQ7QUFDM0ZMLHFCQUFpQixDQUFDSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFqQjtBQUNELEdBRitCLEVBRTdCLEVBRjZCLENBQWhDOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsYUFBMEJGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBMUMsb0JBQTBEYixjQUFjLENBQUNjLElBQWYsQ0FBb0IsR0FBcEIsQ0FBMUQsbUJBQTJGWixZQUEzRjtBQUNELEdBRkQ7O0FBSUEsTUFBTWEsaUJBQWlCLEdBQUdWLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFpRDtBQUNyRixRQUFNVSxXQUFXLEdBQUdWLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFqQztBQUNBTCxtQkFBZSxDQUFDYSxXQUFELENBQWY7QUFDRCxHQUhvQyxFQUduQyxFQUhtQyxDQUFyQzs7QUFJQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU0sQ0FFN0IsQ0FGRDs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0JWLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlUsTUFBcEMsQ0FBbEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdILFNBQVMsQ0FBQ0ksR0FBVixDQUFjLE9BQWQsQ0FBckI7QUFDQSxRQUFNQyxJQUFJLEdBQUdMLFNBQVMsQ0FBQ0ksR0FBVixDQUFjLE1BQWQsQ0FBYjs7QUFDQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2hCckIsdUJBQWlCLENBQUNxQixZQUFZLENBQUNHLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBRCxDQUFqQjtBQUNEOztBQUNELFFBQUlELElBQUosRUFBUztBQUNQckIscUJBQWUsQ0FBQ3FCLElBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFFLG1CQUFoQjtBQUFBLDRCQUNFLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0UscUVBQUMsNERBQUQ7QUFBWSxVQUFFLEVBQUMsMEJBQWY7QUFBMEMsaUJBQVMsRUFBRSxhQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsd0RBQUQ7QUFDRSxlQUFPLEVBQUMseUJBRFY7QUFFRSxVQUFFLEVBQUMsb0JBRkw7QUFHRSxnQkFBUSxFQUFFcEIsWUFIWjtBQUlFLGFBQUssRUFBRUosY0FKVDtBQUtFLGdCQUFRLE1BTFY7QUFNRSxhQUFLLGVBQUUscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOVDtBQUFBLGdDQVFFO0FBQUcsbUJBQVMsRUFBRSxPQUFkO0FBQXVCLGlCQUFPLEVBQUVpQixlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixFQVNHbkIsTUFBTSxDQUFDNEIsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSw4QkFDVixxRUFBQywwREFBRDtBQUFVLGlCQUFLLEVBQUVBLEtBQUssQ0FBQ0MsSUFBdkI7QUFBQSxzQkFDR0QsS0FBSyxDQUFDQztBQURULGFBQWtDRCxLQUFLLENBQUNFLEVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFYLENBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFzQkUscUVBQUMsdURBQUQ7QUFBTyxpQkFBVyxFQUFFLGdCQUFwQjtBQUF1QyxjQUFRLEVBQUVkLGlCQUFqRDtBQUFvRSxXQUFLLEVBQUViO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkYsZUF1QkUscUVBQUMsd0RBQUQ7QUFBUSxhQUFPLEVBQUVPLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBekREOztHQUFNWixPOztLQUFBQSxPO0FBMERTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YjRmMTNjZjkwZDc1YjY1MDIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSUdlbnJlIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lHZW5yZVwiO1xyXG5cclxudHlwZSBGaWx0ZXJQcm9wcyA9IHtcclxuICBnZW5yZXM6IElHZW5yZVtdO1xyXG59O1xyXG5cclxuY29uc3QgRmlsdGVyczogRnVuY3Rpb25Db21wb25lbnQ8RmlsdGVyUHJvcHM+ID0gKHsgZ2VucmVzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRHZW5yZXMsIHNldFNlbGVjdGVkR2VucmVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcgfT4pID0+IHtcclxuICAgIHNldFNlbGVjdGVkR2VucmVzKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmdbXSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59P2dlbnJlPSR7c2VsZWN0ZWRHZW5yZXMuam9pbihcIixcIil9JnllYXI9JHtzZWxlY3RlZFllYXJ9YDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmVkWWVhciA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VsZWN0ZWRZZWFyKGVudGVyZWRZZWFyKVxyXG4gIH0sW10pXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG5cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCBnZW5yZXNTdHJpbmcgPSB1cmxQYXJhbXMuZ2V0KFwiZ2VucmVcIik7XHJcbiAgICBjb25zdCB5ZWFyID0gdXJsUGFyYW1zLmdldChcInllYXJcIilcclxuICAgIGlmIChnZW5yZXNTdHJpbmcpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRHZW5yZXMoZ2VucmVzU3RyaW5nLnNwbGl0KFwiLFwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoeWVhcil7XHJcbiAgICAgIHNldFNlbGVjdGVkWWVhcih5ZWFyKVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImZpbHRlcnMtY29udGFpbmVyXCJ9PlxyXG4gICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIiBjbGFzc05hbWU9e1wiZ2VucmUtbGFiZWxcIn0+XHJcbiAgICAgICAgICBDaG9vc2UgZ2VucmVcclxuICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbGFiZWxJZD1cImRlbW8tbXV0aXBsZS1uYW1lLWxhYmVsXCJcclxuICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRHZW5yZXN9XHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9eydjbG9zZSd9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX0+WDwvcD5cclxuICAgICAgICAgIHtnZW5yZXMubWFwKChnZW5yZSkgPT4gKFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e2dlbnJlLm5hbWV9IGtleT17Z2VucmUuaWR9PlxyXG4gICAgICAgICAgICAgIHtnZW5yZS5uYW1lfVxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj17J0ZpbHRlciBieSB5ZWFyJyB9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e3NlbGVjdGVkWWVhcn0vPlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2VsZWN0PC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9