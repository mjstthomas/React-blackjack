webpackHotUpdate("main",{

/***/ "./src/RecipePage/Recipepage.js":
/*!**************************************!*\
  !*** ./src/RecipePage/Recipepage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RpTitleHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RpTitleHead */ "./src/RecipePage/RpTitleHead.js");
/* harmony import */ var _RpMenuHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RpMenuHead */ "./src/RecipePage/RpMenuHead.js");
/* harmony import */ var _RpPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RpPhoto */ "./src/RecipePage/RpPhoto.js");
/* harmony import */ var _RpSubMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RpSubMenu */ "./src/RecipePage/RpSubMenu.js");
/* harmony import */ var _RpOverview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RpOverview */ "./src/RecipePage/RpOverview.js");
/* harmony import */ var _RpIngredients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RpIngredients */ "./src/RecipePage/RpIngredients.js");
/* harmony import */ var _RpDirections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RpDirections */ "./src/RecipePage/RpDirections.js");
/* harmony import */ var _RpNutrition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RpNutrition */ "./src/RecipePage/RpNutrition.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AppContext */ "./src/AppContext.js");
var _jsxFileName = "/home/mj/Foodie-App/foodieapp/src/RecipePage/Recipepage.js";












class Recipepage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      seeSummary: true,
      seeIngredients: false,
      seeDirections: false,
      seeNutrition: false
    };

    this.handleGoBack = () => {
      this.props.history.goBack();
    };

    this.handleSummary = () => {
      this.setState({
        seeSummary: true,
        seeIngredients: false,
        seeDirections: false,
        seeNutrition: false
      });
    };

    this.handleIngredients = () => {
      this.setState({
        seeSummary: false,
        seeIngredients: true,
        seeDirections: false,
        seeNutrition: false
      });
    };

    this.handleDirections = () => {
      this.setState({
        seeSummary: false,
        seeIngredients: false,
        seeDirections: true,
        seeNutrition: false
      });
    };

    this.handleNutrition = () => {
      this.setState({
        seeSummary: false,
        seeIngredients: false,
        seeDirections: false,
        seeNutrition: true
      });
    };
  }

  render() {
    const RecipePageData = this.context.searchedFoodList.find(item => this.props.match.params.foodId == item.id);
    const nutritionValues = RecipePageData.title ? RecipePageData.nutrition.nutrients.reduce((acc, meal) => {
      if (meal.title === 'Fat') {
        return acc.Fat = meal.amount;
      }

      if (meal.title === "Carbohydrates") {
        return acc.Carbs = meal.amount;
      }

      if (meal.title === "Protien") {
        return acc.Protien = meal.amount;
      }
    }, {}) : {
      Fat: 56,
      Protien: 65,
      Carbs: "over 9000"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-page-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpMenuHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Recipe: RecipePageData,
      handleGoBack: this.handleGoBack,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpPhoto__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Recipe: RecipePageData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpSubMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      Recipe: RecipePageData,
      handleSummary: this.handleSummary,
      handleDirections: this.handleDirections,
      handleIngredients: this.handleIngredients,
      handleNutrition: this.handleNutrition,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }), this.state.seeSummary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpOverview__WEBPACK_IMPORTED_MODULE_6__["default"], {
      Recipe: RecipePageData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }), this.state.seeIngredients && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpIngredients__WEBPACK_IMPORTED_MODULE_7__["default"], {
      Recipe: RecipePageData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 45
      }
    }), this.state.seeDirections && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpDirections__WEBPACK_IMPORTED_MODULE_8__["default"], {
      Recipe: RecipePageData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 44
      }
    }), this.state.seeNutrition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RpNutrition__WEBPACK_IMPORTED_MODULE_9__["default"], {
      Recipe: RecipePageData,
      nutrition: nutritionValues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 43
      }
    })));
  }

}

Recipepage.contextType = _AppContext__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Recipepage);

/***/ })

})
//# sourceMappingURL=main.ce7df3d0bfb70321f519.hot-update.js.map