(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js ***!
  \*******************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies
var CookieService = (function () {
    /**
     * @param {?} document
     * @param {?} platformId
     */
    function CookieService(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
    }
    /**
     * @param {?} name Cookie name
     * @return {?}
     */
    CookieService.prototype.check = function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        var /** @type {?} */ regExp = this.getCookieRegExp(name);
        var /** @type {?} */ exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * @param {?} name Cookie name
     * @return {?}
     */
    CookieService.prototype.get = function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            var /** @type {?} */ regExp = this.getCookieRegExp(name);
            var /** @type {?} */ result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * @return {?}
     */
    CookieService.prototype.getAll = function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        var /** @type {?} */ cookies = {};
        var /** @type {?} */ document = this.document;
        if (document.cookie && document.cookie !== '') {
            var /** @type {?} */ split = document.cookie.split(';');
            for (var /** @type {?} */ i = 0; i < split.length; i += 1) {
                var /** @type {?} */ currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    /**
     * @param {?} name     Cookie name
     * @param {?} value    Cookie value
     * @param {?=} expires  Number of days until the cookies expires or an actual `Date`
     * @param {?=} path     Cookie path
     * @param {?=} domain   Cookie domain
     * @param {?=} secure   Secure flag
     * @param {?=} sameSite OWASP samesite token `Lax` or `Strict`
     * @return {?}
     */
    CookieService.prototype.set = function (name, value, expires, path, domain, secure, sameSite) {
        if (!this.documentIsAccessible) {
            return;
        }
        var /** @type {?} */ cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var /** @type {?} */ dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        if (sameSite) {
            cookieString += 'sameSite=' + sameSite + ';';
        }
        this.document.cookie = cookieString;
    };
    /**
     * @param {?} name   Cookie name
     * @param {?=} path   Cookie path
     * @param {?=} domain Cookie domain
     * @return {?}
     */
    CookieService.prototype.delete = function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
    };
    /**
     * @param {?=} path   Cookie path
     * @param {?=} domain Cookie domain
     * @return {?}
     */
    CookieService.prototype.deleteAll = function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        var /** @type {?} */ cookies = this.getAll();
        for (var /** @type {?} */ cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    /**
     * @param {?} name Cookie name
     * @return {?}
     */
    CookieService.prototype.getCookieRegExp = function (name) {
        var /** @type {?} */ escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    return CookieService;
}());
CookieService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
CookieService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-cookie-service.es5.js.map


/***/ })

}]);
//# sourceMappingURL=common.js.map