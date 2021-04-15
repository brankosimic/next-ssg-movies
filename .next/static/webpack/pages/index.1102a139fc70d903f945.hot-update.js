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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      dataLoaded = _useState[0],
      setDataLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(popularMovies),
      movies = _useState2[0],
      setMovies = _useState2[1];

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
        lineNumber: 34,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(MoviesList, "wASzOkZBM0YsO4p1D4HUzzKXnec=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUxpc3QudHN4Il0sIm5hbWVzIjpbIk1vdmllc0xpc3QiLCJwb3B1bGFyTW92aWVzIiwidXNlU3RhdGUiLCJkYXRhTG9hZGVkIiwic2V0RGF0YUxvYWRlZCIsIm1vdmllcyIsInNldE1vdmllcyIsImdldE1vdmllc0J5R2VucmUiLCJnZW5yZXMiLCJ5ZWFyIiwiYXBpIiwiZ2V0QWxsR2VucmVzIiwiZ2VucmVzTG9va3VwIiwiZ2VucmVJZHMiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJuYW1lIiwibWFwIiwiaWQiLCJnZXRGaWx0ZXJlZE1vdmllcyIsImpvaW4iLCJkYXRhIiwidXNlRWZmZWN0IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZW5yZXNTdHJpbmciLCJnZXQiLCJzcGxpdCIsIm1vdmllIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBTUEsSUFBTUEsVUFBOEMsR0FBRyxTQUFqREEsVUFBaUQsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUFBLGtCQUN4Q0Msc0RBQVEsQ0FBQyxLQUFELENBRGdDO0FBQUEsTUFDckVDLFVBRHFFO0FBQUEsTUFDekRDLGFBRHlEOztBQUFBLG1CQUVoREYsc0RBQVEsQ0FBb0JELGFBQXBCLENBRndDO0FBQUEsTUFFckVJLE1BRnFFO0FBQUEsTUFFN0RDLFNBRjZEOztBQUk1RSxNQUFNQyxnQkFBZ0I7QUFBQSx5VkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QkMsa0JBQXpCLDJEQUF3QyxFQUF4QztBQUFBO0FBQUEscUJBQ0lDLHFEQUFHLENBQUNDLFlBQUosRUFESjs7QUFBQTtBQUNqQkMsMEJBRGlCO0FBRWpCQyxzQkFGaUIsR0FFTkQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLFVBQUNDLENBQUQ7QUFBQSx1QkFBT1AsTUFBTSxDQUFDUSxRQUFQLENBQWdCRCxDQUFDLENBQUNFLElBQWxCLENBQVA7QUFBQSxlQUFwQixFQUFvREMsR0FBcEQsQ0FBd0QsVUFBQ0gsQ0FBRDtBQUFBLHVCQUFPQSxDQUFDLENBQUNJLEVBQVQ7QUFBQSxlQUF4RCxDQUZNO0FBQUE7QUFBQSxxQkFHSlQscURBQUcsQ0FBQ1UsaUJBQUosQ0FBc0JQLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjLEdBQWQsQ0FBdEIsRUFBMENaLElBQTFDLENBSEk7O0FBQUE7QUFHakJhLGtCQUhpQjtBQUl2QmhCLHVCQUFTLENBQUNnQixJQUFELENBQVQ7O0FBSnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCZixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBT0FnQix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFwQyxDQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxHQUFWLENBQWMsT0FBZCxDQUFyQjtBQUNBLFFBQU1yQixJQUFJLEdBQUdlLFNBQVMsQ0FBQ00sR0FBVixDQUFjLE1BQWQsQ0FBYjs7QUFDQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2hCdEIsc0JBQWdCLENBQUNzQixZQUFZLENBQUNFLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBRCxFQUEwQnRCLElBQTFCLENBQWhCO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUUsaUJBQWhCO0FBQUEsY0FDR0osTUFBTSxDQUFDYSxHQUFQLENBQVcsVUFBQ2MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzVCLDBCQUFPLHFFQUFDLDZDQUFEO0FBQVcsYUFBSyxFQUFFRDtBQUFsQixTQUE4QkMsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBM0JEOztHQUFNakMsVTs7S0FBQUEsVTtBQTZCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTEwMmExMzlmYzcwZDkwM2Y5NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBNb3ZpZXNJbnRlcmZhY2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvSU1vdmllXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG50eXBlIE1vdmllc0xpc3RQcm9wcyA9IHtcclxuICBwb3B1bGFyTW92aWVzOiBNb3ZpZXNJbnRlcmZhY2VbXTtcclxufTtcclxuXHJcbmNvbnN0IE1vdmllc0xpc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PE1vdmllc0xpc3RQcm9wcz4gPSAoeyBwb3B1bGFyTW92aWVzIH0pID0+IHtcclxuICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllc0ludGVyZmFjZVtdPihwb3B1bGFyTW92aWVzKTtcclxuXHJcbiAgY29uc3QgZ2V0TW92aWVzQnlHZW5yZSA9IGFzeW5jIChnZW5yZXM6IHN0cmluZ1tdLCB5ZWFyOiBzdHJpbmcgPSAnJykgPT4ge1xyXG4gICAgY29uc3QgZ2VucmVzTG9va3VwID0gYXdhaXQgYXBpLmdldEFsbEdlbnJlcygpO1xyXG4gICAgY29uc3QgZ2VucmVJZHMgPSBnZW5yZXNMb29rdXAuZmlsdGVyKCh4KSA9PiBnZW5yZXMuaW5jbHVkZXMoeC5uYW1lKSkubWFwKCh4KSA9PiB4LmlkKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0RmlsdGVyZWRNb3ZpZXMoZ2VucmVJZHMuam9pbihcIixcIiksIHllYXIpO1xyXG4gICAgc2V0TW92aWVzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgY29uc3QgZ2VucmVzU3RyaW5nID0gdXJsUGFyYW1zLmdldChcImdlbnJlXCIpO1xyXG4gICAgY29uc3QgeWVhciA9IHVybFBhcmFtcy5nZXQoXCJ5ZWFyXCIpXHJcbiAgICBpZiAoZ2VucmVzU3RyaW5nKSB7XHJcbiAgICAgIGdldE1vdmllc0J5R2VucmUoZ2VucmVzU3RyaW5nLnNwbGl0KFwiLFwiKSwgeWVhcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibWVkaWEtY29udGFpbmVyXCJ9PlxyXG4gICAgICB7bW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZWRpYUNhcmQgbW92aWU9e21vdmllfSBrZXk9e2luZGV4fSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==