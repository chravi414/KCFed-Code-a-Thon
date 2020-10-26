(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/accordian/accordian.component.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accordian/accordian.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAccordianAccordianComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 (click)=\"toggleAccordion()\">\r\n    {{ tipName }}\r\n    <span *ngIf=\"isOpen\">&#9650;</span>\r\n    <span *ngIf=\"!isOpen\">&#9660;</span>\r\n</h2>\r\n<div [ngClass]=\"this.isOpen ? 'active' : 'inactive'\">\r\n    {{tipDesc}}\r\n    <!-- <ul class=\"tips-list\" *ngFor=\"let desc of tipDesc\">\r\n        <li>{{desc}}</li>\r\n    </ul> -->\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n    <div id=\"container\">\r\n        <div class=\"cdc-card\">\r\n            <img src=\"https://www.eu-cord.org/2015/wp-content/uploads/2020/04/covid-19.jpg\" />\r\n            <h1 class=\"text-center\">CDC Guidelines</h1>\r\n        </div>\r\n        <div class=\"tips\">\r\n            <h3>Protect Yourself & Others</h3>\r\n            <app-accordian *ngFor=\"let technology of technologies\" tipName=\"{{ technology.name }}\" tipDesc=\"{{ technology.description }}\" (change)=\"captureName($event)\"></app-accordian>\r\n        </div>\r\n        <div class=\"health-list\">\r\n            <h3>Resources</h3>\r\n            <ion-list lines=\"none\">\r\n                <ion-item *ngFor=\"let option of healthOptions\" [ngClass]=\"{'green': option.rating >= 4, 'red': option.rating >=3 && option.rating < 4, 'yellow':option.rating >=2 && option.rating < 3}\">\r\n                    <img [src]=\"option.logo\" class=\"logo\" />\r\n\r\n                    <ion-label>\r\n                        <a [href]=\"option.ref\" class=\"ext-link\" target=\"_blank\">\r\n                            <h3>{{option.name}}</h3>\r\n                        </a>\r\n                        <p>{{option.subtitle}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n\r\n        <div class=\"notice\">\r\n            <p><strong>Notice: </strong>For information purposes only. If you seek serious health advice, Call 816-235-COVI or visit nearest hospital.</p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/accordian/accordian.component.scss":
    /*!****************************************************!*\
      !*** ./src/app/accordian/accordian.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAccordianAccordianComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  border-radius: 10px;\n  box-shadow: 0 10px 3px #ccc;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n // based on the state change detection in the\n // component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3JkaWFuL2FjY29yZGlhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBQ0EsaURBQUE7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFJQSx1REFBQTtBQUVBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0FBRko7QUFHSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0VBQ0EsMkJBQUE7QUFKSjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhSO0FBUUE7O3FCQUFBO0FBSUE7RUFDSSxjQUFBO0FBTko7QUFTQTtFQUNJLGFBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2FjY29yZGlhbi9hY2NvcmRpYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjM1ZW07XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDFlbTtcclxuICAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cclxuXHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5wIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAxKTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMCwgMjEwLCAyMTAsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzcHggI2NjYztcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBGb2xsb3dpbmcgY2xhc3NlcyBkaXNwbGF5L2hpZGUgdGhlICdtZW51J1xyXG4gLy8gYmFzZWQgb24gdGhlIHN0YXRlIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhlXHJcbiAvLyBjb21wb25lbnQgY2xhc3MgKi9cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/accordian/accordian.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/accordian/accordian.component.ts ***!
      \**************************************************/

    /*! exports provided: AccordianComponent */

    /***/
    function srcAppAccordianAccordianComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccordianComponent", function () {
        return AccordianComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AccordianComponent = /*#__PURE__*/function () {
        function AccordianComponent() {
          _classCallCheck(this, AccordianComponent);

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isOpen = false;
        }

        _createClass(AccordianComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleAccordion",
          value: function toggleAccordion() {
            this.isOpen = !this.isOpen;
          }
        }, {
          key: "broadcastName",
          value: function broadcastName(name) {
            this.change.emit(name);
          }
        }]);

        return AccordianComponent;
      }();

      AccordianComponent.ctorParameters = function () {
        return [];
      };

      AccordianComponent.propDecorators = {
        tipName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tipDesc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AccordianComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordian',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./accordian.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/accordian/accordian.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./accordian.component.scss */
        "./src/app/accordian/accordian.component.scss"))["default"]]
      })], AccordianComponent);
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");
      /* harmony import */


      var _custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../custom-list/custom-list.component */
      "./src/app/custom-list/custom-list.component.ts");
      /* harmony import */


      var _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../accordian/accordian.component */
      "./src/app/accordian/accordian.component.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomListComponent"], _accordian_accordian_component__WEBPACK_IMPORTED_MODULE_9__["AccordianComponent"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tips {\n  margin-top: 10px;\n}\n\n#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 60px;\n  padding: 10px 20px;\n  margin-bottom: 40px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.tips,\n.health-list {\n  margin-top: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 10px 3px #ccc;\n}\n\n.health-list {\n  margin-bottom: 20px;\n}\n\n.cdc-card {\n  height: 250px;\n  border-radius: 10px;\n  box-shadow: 0 10px 3px #ccc;\n}\n\n.cdc-card img {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  height: 170px;\n  width: 100%;\n}\n\n.cdc-card h1,\n.tips h3 {\n  font-size: 40px;\n  color: #f72664;\n  font-weight: bold;\n}\n\n.health-list h3 {\n  font-size: 25px;\n  color: #f72664;\n  font-weight: bold;\n}\n\n.tips h3 {\n  font-size: 25px;\n}\n\nion-item {\n  border-radius: 5px;\n  margin: 15px 0;\n  border: 1px solid lightgray;\n  padding: 10px 0px;\n  box-shadow: 0 5px 10px #ccc;\n}\n\nion-icon {\n  padding-right: 20px;\n  padding-top: 10px;\n  font-size: 35px;\n  color: #f72664;\n}\n\n.ext-link {\n  text-decoration: none;\n}\n\n.logo {\n  width: 110px;\n  height: 80px;\n  padding-right: 20px;\n}\n\nion-label h3 {\n  font-size: 22px;\n  font-weight: 500;\n}\n\nion-label p {\n  font-size: 18px;\n  color: #817F7F;\n  height: 20px;\n}\n\n.red {\n  border-left: 10px solid red;\n}\n\n.red h3,\n.red ion-icon {\n  color: red;\n}\n\n.green {\n  border-left: 10px solid green;\n}\n\n.green h3,\n.green ion-icon {\n  color: green;\n}\n\n.yellow {\n  border-left: 10px solid #f90;\n}\n\n.yellow h3,\n.yellow ion-icon {\n  color: #f90;\n}\n\n.notice {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7O0VBRUksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTs7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSwyQkFBQTtBQUFKOztBQUNJOztFQUVJLFVBQUE7QUFDUjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBQ0k7O0VBRUksWUFBQTtBQUNSOztBQUdBO0VBQ0ksNEJBQUE7QUFBSjs7QUFDSTs7RUFFSSxXQUFBO0FBQ1I7O0FBR0E7RUFDSSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXBzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpcHMsXHJcbi5oZWFsdGgtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggM3B4ICNjY2M7XHJcbn1cclxuXHJcbi5oZWFsdGgtbGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2RjLWNhcmQge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggM3B4ICNjY2M7XHJcbn1cclxuXHJcbi5jZGMtY2FyZCBpbWcge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2RjLWNhcmQgaDEsXHJcbi50aXBzIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjZjcyNjY0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFsdGgtbGlzdCBoMyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogI2Y3MjY2NDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGlwcyBoMyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICNjY2M7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGNvbG9yOiAjZjcyNjY0O1xyXG59XHJcblxyXG4uZXh0LWxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwgaDMge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM4MTdGN0Y7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xyXG4gICAgaDMsXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLmdyZWVuIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGdyZWVuO1xyXG4gICAgaDMsXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmOTA7XHJcbiAgICBoMyxcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2Y5MDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(dataService) {
          _classCallCheck(this, Tab1Page);

          this.dataService = dataService;
          this.technologies = [{
            name: 'Know how it spreads',
            description: ['There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).', 'The best way to prevent illness is to avoid being exposed to this virus.'],
            image: '/assets/images/angular-logo.png'
          }, {
            name: 'Wash your hands often',
            description: ['Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place.'],
            image: '/assets/images/vuejs-logo.png'
          }, {
            name: 'Avoid close contact',
            description: ['Inside your home: Avoid close contact with people who are sick.If possible, maintain 6 feet between the person who is sick and other household members.', 'Outside your home: Put 6 feet of distance between yourself and people who don’t live in your household.'],
            image: 'assets/images/react-logo.png'
          }, {
            name: 'Face Coverings',
            description: ['You could spread COVID-19 to others even if you do not feel sick.', 'The mask is meant to protect other people in case you are infected.'],
            image: 'assets/images/typescript-logo.png'
          }, {
            name: 'Cover coughs and sneezes',
            description: ['Always cover your mouth and nose with a tissue when you cough or sneeze', 'Throw used tissues in the trash'],
            image: 'assets/images/ionic-native-logo.png'
          }, {
            name: 'Clean and disinfect',
            description: ['Clean AND disinfect frequently touched surfaces daily.', 'If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection.'],
            image: 'assets/images/capacitor-logo.png'
          }];
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getHealthData().subscribe(function (data) {
              _this.healthOptions = data;
            });
          }
        }, {
          key: "captureName",
          value: function captureName(event) {
            console.log("Captured name by event value: ".concat(event));
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map