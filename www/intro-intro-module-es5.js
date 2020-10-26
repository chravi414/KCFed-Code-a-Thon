(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppIntroIntroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide>\r\n            <div class=\"slide\">\r\n                <img src=\"https://cdn.dribbble.com/users/3482353/screenshots/8050896/media/1bb01a3e260ffe3d370675d964a885b6.jpg\" alt=\"logo\" />\r\n                <h1>RE<span class=\"app-name\">COV</span>ER<span>-19</span></h1>\r\n                <p>COVID-19 has affected our lives in a way that is never expected. But, with the right guide, we can help ourselves to swim through this pandemic. To help you, we provide you with a handy actionable guide.</p>\r\n            </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n            <div class=\"slide\">\r\n                <h1>RE<span class=\"app-name\">COV</span>ER<span>-19</span></h1>\r\n                <div class=\"item-1 item\">\r\n                    <h4>Health:</h4>\r\n                    <p>A highly accurate, list of resources from credible sources: government, health institutes and research publishers.</p>\r\n                </div>\r\n                <div class=\"item-2 item\">\r\n                    <h4>Fake News:</h4>\r\n                    <p>The biggest enemy of right information is fake news. It is a scary idea to believe in such false information. We provide authentic information on fake news from verified sources.</p>\r\n                </div>\r\n                <div class=\"item-3 item\">\r\n                    <h4>Opportunities:</h4>\r\n                    <p>Curated list of resources (Jobs / Offers / Charity) available to the public especially affected by COVID, updated frequently.</p>\r\n                </div>\r\n                <div class=\"item-4 item\">\r\n                    <h4>Forum:</h4>\r\n                    <p>In these hardships, the most valuable help one could get is being in touch with the community. Thanks to the internet, it is made possible through discussion forums.</p>\r\n                </div>\r\n                <a class=\"btn btn-link\" [routerLink]=\"['/home']\">Continue</a>\r\n            </div>\r\n        </ion-slide>\r\n    </ion-slides>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/intro/intro-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/intro/intro-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: IntroPageRoutingModule */

    /***/
    function srcAppIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function () {
        return IntroPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/intro/intro.page.ts");

      var routes = [{
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
      }];

      var IntroPageRoutingModule = function IntroPageRoutingModule() {
        _classCallCheck(this, IntroPageRoutingModule);
      };

      IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IntroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/intro/intro.module.ts":
    /*!***************************************!*\
      !*** ./src/app/intro/intro.module.ts ***!
      \***************************************/

    /*! exports provided: IntroPageModule */

    /***/
    function srcAppIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageModule", function () {
        return IntroPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./intro-routing.module */
      "./src/app/intro/intro-routing.module.ts");
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/intro/intro.page.ts");

      var IntroPageModule = function IntroPageModule() {
        _classCallCheck(this, IntroPageModule);
      };

      IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
      })], IntroPageModule);
      /***/
    },

    /***/
    "./src/app/intro/intro.page.scss":
    /*!***************************************!*\
      !*** ./src/app/intro/intro.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppIntroIntroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\n.slide {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n}\n\n.slide h1 {\n  font-size: 60px;\n  font-weight: 500;\n  color: #08572A;\n}\n\n.slide h1 .app-name {\n  color: #f72664;\n}\n\n.slide p {\n  font-size: 20px;\n}\n\n.btn-link {\n  margin-top: 20px;\n  font-size: 25px;\n  text-decoration: none;\n  cursor: pointer;\n  color: #f72664;\n  text-transform: uppercase;\n}\n\n.slide div {\n  text-align: left;\n}\n\n.slide div h4 {\n  color: #f90;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 1px;\n}\n\n.slide h1 {\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRFI7O0FBRVE7RUFDSSxjQUFBO0FBQVo7O0FBR0k7RUFDSSxlQUFBO0FBRFI7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjcyNjY0O1xyXG59XHJcblxyXG4uc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMwODU3MkE7XHJcbiAgICAgICAgLmFwcC1uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNzI2NjRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmNzI2NjQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uc2xpZGUgZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zbGlkZSBkaXYgaDQge1xyXG4gICAgY29sb3I6ICNmOTA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLnNsaWRlIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/intro/intro.page.ts":
    /*!*************************************!*\
      !*** ./src/app/intro/intro.page.ts ***!
      \*************************************/

    /*! exports provided: IntroPage */

    /***/
    function srcAppIntroIntroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPage", function () {
        return IntroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var IntroPage = /*#__PURE__*/function () {
        function IntroPage() {
          _classCallCheck(this, IntroPage);

          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
        }

        _createClass(IntroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IntroPage;
      }();

      IntroPage.ctorParameters = function () {
        return [];
      };

      IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./intro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./intro.page.scss */
        "./src/app/intro/intro.page.scss"))["default"]]
      })], IntroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=intro-intro-module-es5.js.map