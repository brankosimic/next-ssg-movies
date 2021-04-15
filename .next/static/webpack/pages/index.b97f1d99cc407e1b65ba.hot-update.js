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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(popularMovies),
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
    children: movies.map(function (movie, index) {
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

_s(MoviesList, "j6J5Xp8HhVtCeHbDNRN3wVE4iM0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUxpc3QudHN4Il0sIm5hbWVzIjpbIk1vdmllc0xpc3QiLCJwb3B1bGFyTW92aWVzIiwidXNlU3RhdGUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJnZXRNb3ZpZXNCeUdlbnJlIiwiZ2VucmVzIiwieWVhciIsImFwaSIsImdldEFsbEdlbnJlcyIsImdlbnJlc0xvb2t1cCIsImdlbnJlSWRzIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwibmFtZSIsIm1hcCIsImlkIiwiZ2V0RmlsdGVyZWRNb3ZpZXMiLCJqb2luIiwiZGF0YSIsInVzZUVmZmVjdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2VucmVzU3RyaW5nIiwiZ2V0Iiwic3BsaXQiLCJtb3ZpZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQU1BLElBQU1BLFVBQThDLEdBQUcsU0FBakRBLFVBQWlELE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSxrQkFDaERDLHNEQUFRLENBQW9CRCxhQUFwQixDQUR3QztBQUFBLE1BQ3JFRSxNQURxRTtBQUFBLE1BQzdEQyxTQUQ2RDs7QUFHNUUsTUFBTUMsZ0JBQWdCO0FBQUEseVZBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUJDLGtCQUF6QiwyREFBd0MsRUFBeEM7QUFBQTtBQUFBLHFCQUNJQyxxREFBRyxDQUFDQyxZQUFKLEVBREo7O0FBQUE7QUFDakJDLDBCQURpQjtBQUVqQkMsc0JBRmlCLEdBRU5ELFlBQVksQ0FBQ0UsTUFBYixDQUFvQixVQUFDQyxDQUFEO0FBQUEsdUJBQU9QLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkQsQ0FBQyxDQUFDRSxJQUFsQixDQUFQO0FBQUEsZUFBcEIsRUFBb0RDLEdBQXBELENBQXdELFVBQUNILENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxDQUFDSSxFQUFUO0FBQUEsZUFBeEQsQ0FGTTtBQUFBO0FBQUEscUJBR0pULHFEQUFHLENBQUNVLGlCQUFKLENBQXNCUCxRQUFRLENBQUNRLElBQVQsQ0FBYyxHQUFkLENBQXRCLEVBQTBDWixJQUExQyxDQUhJOztBQUFBO0FBR2pCYSxrQkFIaUI7QUFJdkJoQix1QkFBUyxDQUFDZ0IsSUFBRCxDQUFUOztBQUp1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQmYsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQU9BZ0IseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBcEMsQ0FBbEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdMLFNBQVMsQ0FBQ00sR0FBVixDQUFjLE9BQWQsQ0FBckI7QUFDQSxRQUFNckIsSUFBSSxHQUFHZSxTQUFTLENBQUNNLEdBQVYsQ0FBYyxNQUFkLENBQWI7O0FBQ0EsUUFBSUQsWUFBSixFQUFrQjtBQUNoQnRCLHNCQUFnQixDQUFDc0IsWUFBWSxDQUFDRSxLQUFiLENBQW1CLEdBQW5CLENBQUQsRUFBMEJ0QixJQUExQixDQUFoQjtBQUNEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFLGlCQUFoQjtBQUFBLGNBQ0dKLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXLFVBQUNjLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM1QiwwQkFBTyxxRUFBQyw2Q0FBRDtBQUFXLGFBQUssRUFBRUQ7QUFBbEIsU0FBOEJDLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTFCRDs7R0FBTS9CLFU7O0tBQUFBLFU7QUE0QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5N2YxZDk5Y2M0MDdlMWI2NWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgTW92aWVzSW50ZXJmYWNlIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lNb3ZpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxudHlwZSBNb3ZpZXNMaXN0UHJvcHMgPSB7XHJcbiAgcG9wdWxhck1vdmllczogTW92aWVzSW50ZXJmYWNlW107XHJcbn07XHJcblxyXG5jb25zdCBNb3ZpZXNMaXN0OiBGdW5jdGlvbkNvbXBvbmVudDxNb3ZpZXNMaXN0UHJvcHM+ID0gKHsgcG9wdWxhck1vdmllcyB9KSA9PiB7XHJcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllc0ludGVyZmFjZVtdPihwb3B1bGFyTW92aWVzKTtcclxuXHJcbiAgY29uc3QgZ2V0TW92aWVzQnlHZW5yZSA9IGFzeW5jIChnZW5yZXM6IHN0cmluZ1tdLCB5ZWFyOiBzdHJpbmcgPSAnJykgPT4ge1xyXG4gICAgY29uc3QgZ2VucmVzTG9va3VwID0gYXdhaXQgYXBpLmdldEFsbEdlbnJlcygpO1xyXG4gICAgY29uc3QgZ2VucmVJZHMgPSBnZW5yZXNMb29rdXAuZmlsdGVyKCh4KSA9PiBnZW5yZXMuaW5jbHVkZXMoeC5uYW1lKSkubWFwKCh4KSA9PiB4LmlkKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0RmlsdGVyZWRNb3ZpZXMoZ2VucmVJZHMuam9pbihcIixcIiksIHllYXIpO1xyXG4gICAgc2V0TW92aWVzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgY29uc3QgZ2VucmVzU3RyaW5nID0gdXJsUGFyYW1zLmdldChcImdlbnJlXCIpO1xyXG4gICAgY29uc3QgeWVhciA9IHVybFBhcmFtcy5nZXQoXCJ5ZWFyXCIpXHJcbiAgICBpZiAoZ2VucmVzU3RyaW5nKSB7XHJcbiAgICAgIGdldE1vdmllc0J5R2VucmUoZ2VucmVzU3RyaW5nLnNwbGl0KFwiLFwiKSwgeWVhcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibWVkaWEtY29udGFpbmVyXCJ9PlxyXG4gICAgICB7bW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZWRpYUNhcmQgbW92aWU9e21vdmllfSBrZXk9e2luZGV4fSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==