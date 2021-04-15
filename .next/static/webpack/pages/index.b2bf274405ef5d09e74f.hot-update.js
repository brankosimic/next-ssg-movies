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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
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
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        labelId: "demo-mutiple-name-label",
        id: "demo-simple-select",
        onChange: handleChange,
        value: selectedGenres,
        multiple: true,
        input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 18
        }, _this),
        children: genres.map(function (genre) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
            value: genre.name,
            children: genre.name
          }, genre.id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Filter by year",
      onChange: handleInputChange,
      value: selectedYear
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: handleSubmit,
      children: "Select"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(Filters, "E3bClvtyJdXDD3Q99bCEl4mKlW0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzLnRzeCJdLCJuYW1lcyI6WyJGaWx0ZXJzIiwiZ2VucmVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZEdlbnJlcyIsInNldFNlbGVjdGVkR2VucmVzIiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3JpZ2luIiwiam9pbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZW50ZXJlZFllYXIiLCJ1c2VFZmZlY3QiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZW5yZXNTdHJpbmciLCJnZXQiLCJ5ZWFyIiwic3BsaXQiLCJtYXAiLCJnZW5yZSIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBT0EsSUFBTUEsT0FBdUMsR0FBRyxTQUExQ0EsT0FBMEMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFXLEVBQVgsQ0FEVTtBQUFBLE1BQ3ZEQyxjQUR1RDtBQUFBLE1BQ3ZDQyxpQkFEdUM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFTLEVBQVQsQ0FGYztBQUFBLE1BRXZERyxZQUZ1RDtBQUFBLE1BRXpDQyxlQUZ5Qzs7QUFHOUQsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBNEQ7QUFDM0ZMLHFCQUFpQixDQUFDSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFqQjtBQUNELEdBRitCLEVBRTdCLEVBRjZCLENBQWhDOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsYUFBMEJGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBMUMsb0JBQTBEYixjQUFjLENBQUNjLElBQWYsQ0FBb0IsR0FBcEIsQ0FBMUQsbUJBQTJGWixZQUEzRjtBQUNELEdBRkQ7O0FBSUEsTUFBTWEsaUJBQWlCLEdBQUdWLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFpRDtBQUNyRixRQUFNVSxXQUFXLEdBQUdWLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFqQztBQUNBTCxtQkFBZSxDQUFDYSxXQUFELENBQWY7QUFDRCxHQUhvQyxFQUdsQyxFQUhrQyxDQUFyQztBQUlBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQlQsTUFBTSxDQUFDQyxRQUFQLENBQWdCUyxNQUFwQyxDQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBR0gsU0FBUyxDQUFDSSxHQUFWLENBQWMsT0FBZCxDQUFyQjtBQUNBLFFBQU1DLElBQUksR0FBR0wsU0FBUyxDQUFDSSxHQUFWLENBQWMsTUFBZCxDQUFiOztBQUNBLFFBQUlELFlBQUosRUFBa0I7QUFDaEJwQix1QkFBaUIsQ0FBQ29CLFlBQVksQ0FBQ0csS0FBYixDQUFtQixHQUFuQixDQUFELENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSUQsSUFBSixFQUFVO0FBQ1JwQixxQkFBZSxDQUFDb0IsSUFBRCxDQUFmO0FBQ0Q7QUFDRixHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUUsbUJBQWhCO0FBQUEsNEJBQ0UscUVBQUMsNkRBQUQ7QUFBQSw4QkFDRSxxRUFBQyw0REFBRDtBQUFZLFVBQUUsRUFBQywwQkFBZjtBQUEwQyxpQkFBUyxFQUFFLGFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSxxRUFBQyx3REFBRDtBQUNFLGVBQU8sRUFBQyx5QkFEVjtBQUVFLFVBQUUsRUFBQyxvQkFGTDtBQUdFLGdCQUFRLEVBQUVuQixZQUhaO0FBSUUsYUFBSyxFQUFFSixjQUpUO0FBS0UsZ0JBQVEsTUFMVjtBQU1FLGFBQUssZUFBRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5UO0FBQUEsa0JBUUdGLE1BQU0sQ0FBQzJCLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsOEJBQ1YscUVBQUMsMERBQUQ7QUFBVSxpQkFBSyxFQUFFQSxLQUFLLENBQUNDLElBQXZCO0FBQUEsc0JBQ0dELEtBQUssQ0FBQ0M7QUFEVCxhQUFrQ0QsS0FBSyxDQUFDRSxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBWDtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXFCRSxxRUFBQyx1REFBRDtBQUFPLGlCQUFXLEVBQUUsZ0JBQXBCO0FBQXNDLGNBQVEsRUFBRWIsaUJBQWhEO0FBQW1FLFdBQUssRUFBRWI7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQXNCRSxxRUFBQyx3REFBRDtBQUFRLGFBQU8sRUFBRU8sWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FyREQ7O0dBQU1aLE87O0tBQUFBLE87QUFzRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyYmYyNzQ0MDVlZjVkMDllNzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJR2VucmUgZnJvbSBcIi4uL2ludGVyZmFjZXMvSUdlbnJlXCI7XHJcblxyXG50eXBlIEZpbHRlclByb3BzID0ge1xyXG4gIGdlbnJlczogSUdlbnJlW107XHJcbn07XHJcblxyXG5jb25zdCBGaWx0ZXJzOiBGdW5jdGlvbkNvbXBvbmVudDxGaWx0ZXJQcm9wcz4gPSAoeyBnZW5yZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEdlbnJlcywgc2V0U2VsZWN0ZWRHZW5yZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRZZWFyLCBzZXRTZWxlY3RlZFllYXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nIH0+KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEdlbnJlcyhldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nW10pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufT9nZW5yZT0ke3NlbGVjdGVkR2VucmVzLmpvaW4oXCIsXCIpfSZ5ZWFyPSR7c2VsZWN0ZWRZZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHN0cmluZyB9PikgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJlZFllYXIgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTZWxlY3RlZFllYXIoZW50ZXJlZFllYXIpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGNvbnN0IGdlbnJlc1N0cmluZyA9IHVybFBhcmFtcy5nZXQoXCJnZW5yZVwiKTtcclxuICAgIGNvbnN0IHllYXIgPSB1cmxQYXJhbXMuZ2V0KFwieWVhclwiKTtcclxuICAgIGlmIChnZW5yZXNTdHJpbmcpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRHZW5yZXMoZ2VucmVzU3RyaW5nLnNwbGl0KFwiLFwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoeWVhcikge1xyXG4gICAgICBzZXRTZWxlY3RlZFllYXIoeWVhcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiZmlsdGVycy1jb250YWluZXJcIn0+XHJcbiAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiIGNsYXNzTmFtZT17XCJnZW5yZS1sYWJlbFwifT5cclxuICAgICAgICAgIENob29zZSBnZW5yZVxyXG4gICAgICAgIDwvSW5wdXRMYWJlbD5cclxuXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbGFiZWxJZD1cImRlbW8tbXV0aXBsZS1uYW1lLWxhYmVsXCJcclxuICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRHZW5yZXN9XHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Z2VucmVzLm1hcCgoZ2VucmUpID0+IChcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtnZW5yZS5uYW1lfSBrZXk9e2dlbnJlLmlkfT5cclxuICAgICAgICAgICAgICB7Z2VucmUubmFtZX1cclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9e1wiRmlsdGVyIGJ5IHllYXJcIn0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17c2VsZWN0ZWRZZWFyfSAvPlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2VsZWN0PC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9