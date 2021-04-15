module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__("lOH7");
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__("s051");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./components/Card.tsx









const MediaCard = ({
  movie
}) => {
  const url = `${"https://image.tmdb.org/t/p/w200"}${movie.poster_path}`;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card_default.a, {
    className: "root-card",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardActionArea_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMedia_default.a, {
        className: "root-card__media",
        image: `${url}`
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardContent_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          children: movie.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: movie.overview
        })]
      })]
    })
  });
};

/* harmony default export */ var Card = (MediaCard);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/api.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class api_Api {
  constructor() {
    _defineProperty(this, "getPopularMovies", async () => {
      const {
        data
      } = await external_axios_default.a.get("https://api.themoviedb.org/3/movie/popular?api_key=f1ec200c0c6354d5b75565ea0b89bb27&page=1");
      return data.results;
    });

    _defineProperty(this, "getFilteredMovies", async (genre, year) => {
      const {
        data
      } = await external_axios_default.a.get("https://api.themoviedb.org/3/discover/movie?api_key=f1ec200c0c6354d5b75565ea0b89bb27&with_genres={genre}&year={year}".replace("{genre}", genre).replace("{year}", year));
      return data.results;
    });

    _defineProperty(this, "getAllGenres", async () => {
      const {
        data
      } = await external_axios_default.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f1ec200c0c6354d5b75565ea0b89bb27&language=en-US");
      return data.genres;
    });
  }

}

const api = new api_Api();
/* harmony default export */ var services_api = (api);
// CONCATENATED MODULE: ./components/MovieList.tsx





const MoviesList = ({
  popularMovies
}) => {
  const {
    0: movies,
    1: setMovies
  } = Object(external_react_["useState"])(popularMovies);

  const getMoviesByGenre = async (genres, year = "") => {
    const genresLookup = await services_api.getAllGenres();
    const genreIds = genresLookup.filter(x => genres.includes(x.name)).map(x => x.id);
    const data = await services_api.getFilteredMovies(genreIds.join(","), year);
    setMovies(data);
  };

  Object(external_react_["useEffect"])(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const genresString = urlParams.get("genre");
    const year = urlParams.get("year");

    if (genresString) {
      getMoviesByGenre(genresString.split(","), year);
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "media-container",
    children: movies.map((movie, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card, {
        movie: movie
      }, index);
    })
  });
};

/* harmony default export */ var MovieList = (MoviesList);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/Filters.tsx





const Filters = ({
  genres
}) => {
  const {
    0: selectedGenres,
    1: setSelectedGenres
  } = Object(external_react_["useState"])([]);
  const {
    0: selectedYear,
    1: setSelectedYear
  } = Object(external_react_["useState"])("");
  const handleChange = Object(external_react_["useCallback"])(event => {
    setSelectedGenres(event.target.value);
  }, []);

  const handleSubmit = () => {
    window.location.href = `${window.location.origin}?genre=${selectedGenres.join(",")}&year=${selectedYear}`;
  };

  const handleInputChange = Object(external_react_["useCallback"])(event => {
    const enteredYear = event.target.value;
    setSelectedYear(enteredYear);
  }, []);
  Object(external_react_["useEffect"])(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const genresString = urlParams.get("genre");
    const year = urlParams.get("year");

    if (genresString) {
      setSelectedGenres(genresString.split(","));
    }

    if (year) {
      setSelectedYear(year);
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "filters-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["FormControl"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["InputLabel"], {
        id: "demo-simple-select-label",
        className: "genre-label",
        children: "Choose genre"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Select"], {
        labelId: "demo-mutiple-name-label",
        id: "demo-simple-select",
        onChange: handleChange,
        value: selectedGenres,
        multiple: true,
        input: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Input"], {}),
        children: genres.map(genre => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
          value: genre.name,
          children: genre.name
        }, genre.id))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Input"], {
      placeholder: "Filter by year",
      onChange: handleInputChange,
      value: selectedYear
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
      onClick: handleSubmit,
      children: "Select"
    })]
  });
};

/* harmony default export */ var components_Filters = (Filters);
// CONCATENATED MODULE: ./pages/index.tsx







const Home = ({
  movies,
  genres
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "root-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Filters, {
      genres: genres
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MovieList, {
      popularMovies: movies
    })]
  });
};

async function getStaticProps() {
  const movies = await services_api.getPopularMovies();
  const genres = await services_api.getAllGenres();
  return {
    props: {
      movies,
      genres
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "lOH7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });