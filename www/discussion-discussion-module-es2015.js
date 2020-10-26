(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discussion-discussion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/discussion/discussion.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discussion/discussion.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"discussion\">\r\n        <iframe width=\"100%\" height=\"100%\" src=\"http://pub37.bravenet.com/forum/static/show.php?usernum=3128710162&frmid=10311&msgid=0\" title=\"W3Schools Free Online Web Tutorials\"></iframe>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/discussion/discussion-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/discussion/discussion-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DiscussionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageRoutingModule", function() { return DiscussionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discussion.page */ "./src/app/discussion/discussion.page.ts");




const routes = [
    {
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_3__["DiscussionPage"]
    }
];
let DiscussionPageRoutingModule = class DiscussionPageRoutingModule {
};
DiscussionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscussionPageRoutingModule);



/***/ }),

/***/ "./src/app/discussion/discussion.module.ts":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.module.ts ***!
  \*************************************************/
/*! exports provided: DiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _discussion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discussion-routing.module */ "./src/app/discussion/discussion-routing.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/app/discussion/discussion.page.ts");







let DiscussionPageModule = class DiscussionPageModule {
};
DiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discussion_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscussionPageRoutingModule"]
        ],
        declarations: [_discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]]
    })
], DiscussionPageModule);



/***/ }),

/***/ "./src/app/discussion/discussion.page.scss":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".discussion {\n  margin-top: 50px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjdXNzaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/discussion/discussion.page.ts":
/*!***********************************************!*\
  !*** ./src/app/discussion/discussion.page.ts ***!
  \***********************************************/
/*! exports provided: DiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPage", function() { return DiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DiscussionPage = class DiscussionPage {
    constructor() { }
    ngOnInit() {
    }
};
DiscussionPage.ctorParameters = () => [];
DiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/discussion/discussion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.page.scss */ "./src/app/discussion/discussion.page.scss")).default]
    })
], DiscussionPage);



/***/ })

}]);
//# sourceMappingURL=discussion-discussion-module-es2015.js.map