webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MovieList.tsx":
/*!**********************************!*\
  !*** ./components/MovieList.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./services/api.ts");




var _jsxFileName = "C:\\Users\\ValensSarajevo\\Desktop\\testApp\\movies\\components\\MovieList.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var MoviesList = function MoviesList(_ref) {
  _s();

  var popularMovies = _ref.popularMovies;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      movies = _useState[0],
      setMovies = _useState[1];

  var getMoviesByGenre = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(genres) {
      var year,
          genresLookup,
          genreIds,
          data,
          _args = arguments;
      return C_Users_ValensSarajevo_Desktop_testApp_movies_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              year = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
              _context.next = 3;
              return _services_api__WEBPACK_IMPORTED_MODULE_5__["default"].getAllGenres();

            case 3:
              genresLookup = _context.sent;
              genreIds = genresLookup.filter(function (x) {
                return genres.includes(x.name);
              }).map(function (x) {
                return x.id;
              });
              _context.next = 7;
              return _services_api__WEBPACK_IMPORTED_MODULE_5__["default"].getFilteredMovies(genreIds.join(","), year);

            case 7:
              data = _context.sent;
              setMovies(data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMoviesByGenre(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var genresString = urlParams.get("genre");
    var year = urlParams.get("year");

    if (genresString) {
      getMoviesByGenre(genresString.split(","), year);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "media-container",
    children: (movies || popularMovies).map(function (movie, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        movie: movie
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(MoviesList, "DsXWz4eQ6qRZ9Cx7rzTltn/5uKY=");

_c = MoviesList;
/* harmony default export */ __webpack_exports__["default"] = (MoviesList);

var _c;

$RefreshReg$(_c, "MoviesList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUxpc3QudHN4Il0sIm5hbWVzIjpbIk1vdmllc0xpc3QiLCJwb3B1bGFyTW92aWVzIiwidXNlU3RhdGUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJnZXRNb3ZpZXNCeUdlbnJlIiwiZ2VucmVzIiwieWVhciIsImFwaSIsImdldEFsbEdlbnJlcyIsImdlbnJlc0xvb2t1cCIsImdlbnJlSWRzIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwibmFtZSIsIm1hcCIsImlkIiwiZ2V0RmlsdGVyZWRNb3ZpZXMiLCJqb2luIiwiZGF0YSIsInVzZUVmZmVjdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2VucmVzU3RyaW5nIiwiZ2V0Iiwic3BsaXQiLCJtb3ZpZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQU1BLElBQU1BLFVBQThDLEdBQUcsU0FBakRBLFVBQWlELE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSxrQkFDaERDLHNEQUFRLEVBRHdDO0FBQUEsTUFDckVDLE1BRHFFO0FBQUEsTUFDN0RDLFNBRDZEOztBQUc1RSxNQUFNQyxnQkFBZ0I7QUFBQSx5VkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QkMsa0JBQXpCLDJEQUF3QyxFQUF4QztBQUFBO0FBQUEscUJBQ0lDLHFEQUFHLENBQUNDLFlBQUosRUFESjs7QUFBQTtBQUNqQkMsMEJBRGlCO0FBRWpCQyxzQkFGaUIsR0FFTkQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLFVBQUNDLENBQUQ7QUFBQSx1QkFBT1AsTUFBTSxDQUFDUSxRQUFQLENBQWdCRCxDQUFDLENBQUNFLElBQWxCLENBQVA7QUFBQSxlQUFwQixFQUFvREMsR0FBcEQsQ0FBd0QsVUFBQ0gsQ0FBRDtBQUFBLHVCQUFPQSxDQUFDLENBQUNJLEVBQVQ7QUFBQSxlQUF4RCxDQUZNO0FBQUE7QUFBQSxxQkFHSlQscURBQUcsQ0FBQ1UsaUJBQUosQ0FBc0JQLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjLEdBQWQsQ0FBdEIsRUFBMENaLElBQTFDLENBSEk7O0FBQUE7QUFHakJhLGtCQUhpQjtBQUl2QmhCLHVCQUFTLENBQUNnQixJQUFELENBQVQ7O0FBSnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCZixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBT0FnQix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFwQyxDQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxHQUFWLENBQWMsT0FBZCxDQUFyQjtBQUNBLFFBQU1yQixJQUFJLEdBQUdlLFNBQVMsQ0FBQ00sR0FBVixDQUFjLE1BQWQsQ0FBYjs7QUFDQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2hCdEIsc0JBQWdCLENBQUNzQixZQUFZLENBQUNFLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBRCxFQUEwQnRCLElBQTFCLENBQWhCO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUUsaUJBQWhCO0FBQUEsY0FDRyxDQUFDSixNQUFNLElBQUlGLGFBQVgsRUFBMEJlLEdBQTFCLENBQThCLFVBQUNjLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMvQywwQkFBTyxxRUFBQyw2Q0FBRDtBQUFXLGFBQUssRUFBRUQ7QUFBbEIsU0FBOEJDLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTFCRDs7R0FBTS9CLFU7O0tBQUFBLFU7QUE0QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE1NTVmMjkxOTE1NTI1YmEyOTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgTW92aWVzSW50ZXJmYWNlIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lNb3ZpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxudHlwZSBNb3ZpZXNMaXN0UHJvcHMgPSB7XHJcbiAgcG9wdWxhck1vdmllczogTW92aWVzSW50ZXJmYWNlW107XHJcbn07XHJcblxyXG5jb25zdCBNb3ZpZXNMaXN0OiBGdW5jdGlvbkNvbXBvbmVudDxNb3ZpZXNMaXN0UHJvcHM+ID0gKHsgcG9wdWxhck1vdmllcyB9KSA9PiB7XHJcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllc0ludGVyZmFjZVtdPigpO1xyXG5cclxuICBjb25zdCBnZXRNb3ZpZXNCeUdlbnJlID0gYXN5bmMgKGdlbnJlczogc3RyaW5nW10sIHllYXI6IHN0cmluZyA9ICcnKSA9PiB7XHJcbiAgICBjb25zdCBnZW5yZXNMb29rdXAgPSBhd2FpdCBhcGkuZ2V0QWxsR2VucmVzKCk7XHJcbiAgICBjb25zdCBnZW5yZUlkcyA9IGdlbnJlc0xvb2t1cC5maWx0ZXIoKHgpID0+IGdlbnJlcy5pbmNsdWRlcyh4Lm5hbWUpKS5tYXAoKHgpID0+IHguaWQpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRGaWx0ZXJlZE1vdmllcyhnZW5yZUlkcy5qb2luKFwiLFwiKSwgeWVhcik7XHJcbiAgICBzZXRNb3ZpZXMoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCBnZW5yZXNTdHJpbmcgPSB1cmxQYXJhbXMuZ2V0KFwiZ2VucmVcIik7XHJcbiAgICBjb25zdCB5ZWFyID0gdXJsUGFyYW1zLmdldChcInllYXJcIilcclxuICAgIGlmIChnZW5yZXNTdHJpbmcpIHtcclxuICAgICAgZ2V0TW92aWVzQnlHZW5yZShnZW5yZXNTdHJpbmcuc3BsaXQoXCIsXCIpLCB5ZWFyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJtZWRpYS1jb250YWluZXJcIn0+XHJcbiAgICAgIHsobW92aWVzIHx8IHBvcHVsYXJNb3ZpZXMpLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZWRpYUNhcmQgbW92aWU9e21vdmllfSBrZXk9e2luZGV4fSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==