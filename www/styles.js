(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* \nReset\n*/\n    :root{\n        --max-width: 90rem;\n        --max-marge: 6rem;\n        --med-marge: 3rem;\n        --min-marge: 1.5rem;\n        --dark-color: black;\n        --med-color: grey;\n        --light-color: white;\n        --error-color: red;\n        --success-color: green;\n    }\n    *{\n        margin: 0;\n        padding: 0;\n        -ms-box-sizing: border-box;\n        -o-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    app-home-page, app-form-response{\n        display: block;\n    }\n    html{\n        font-size: 62.5%;\n        font-family: sans-serif;\n        font-weight: 100;\n        line-height: 1.5;\n    }\n    body{\n        font-size: 1.6rem;\n    }\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    form{\n        margin-bottom: var(--med-marge);\n    }\n    input:not([type=\"checkbox\"]), input:not([type=\"radio\"]), label, [type=\"submit\"]{\n        display: block;\n        width: 100%;\n        background: transparent;\n    }\n    label{\n        font-size: 1.1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n    }\n    input{\n        font-size: 2rem;\n        padding: var(--min-marge);\n        border: none;\n        border-bottom: .1rem solid var(--med-color);\n        margin-bottom: var(--med-marge);\n    }\n    button{\n        border: none;\n        background: transparent;\n    }\n    [type=\"submit\"]{\n        text-transform: uppercase;\n        font-weight: 900;\n        padding: var(--min-marge);\n        border: .1rem solid var(--med-color);\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    [type=\"submit\"][disabled]{\n        opacity: .5;\n    }\n    [type=\"submit\"]:not([disabled]):hover{\n        color: var(--light-color);\n        background-color: var(--dark-color);\n    }\n    /**/\n    /* \nCommon\n*/\n    .maxWidth{\n        max-width: var(--max-width);\n        margin-left: auto;\n        margin-right: auto;\n        padding-left: var(--med-marge);\n        padding-right: var(--med-marge);\n    }\n    .flexBox{\n        display: -moz-flex;\n        display: -ms-flex;\n        display: -o-flex;\n        display: flex;\n    }\n    .spaceBetween{\n        -moz-justify-content: space-between;\n        -ms-justify-content: space-between;\n        -o-justify-content: space-between;\n        justify-content: space-between;\n    }\n    /**/\n    /* \nHeader\n*/\n    header{\n        padding: var(--med-marge) 0;\n    }\n    nav{\n        margin: var(--min-marge) 0;\n        padding-bottom: var(--min-marge);\n        border-bottom: .1rem dotted var(--med-color)\n    }\n    nav li{\n        color: var(--light-color);\n        display: inline-block;\n        background-color: var(--med-color);\n        line-height: 1.7;\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    nav li:not(:last-child){\n        margin-right: var(--min-marge);\n    }\n    nav li:hover{\n        background-color: var(--dark-color);\n    }\n    nav a{\n        font-size: 1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n        padding: 0 var(--min-marge);\n    }\n    /**/\n    /* \nComponents\n*/\n    /* app-home-page */\n    app-home-page article{\n        width: calc(50% - var(--med-marge));\n    }\n    /* app-form-response */\n    app-form-response{\n        border: .1rem solid var(--med-color);\n        padding: var(--min-marge);\n        position: relative;\n    }\n    app-form-response.error{\n        border-color: var(--error-color);\n    }\n    app-form-response.success{\n        border-color: var(--success-color);\n    }\n    app-form-response button{\n        font-size: 2rem;\n        padding: .5rem;\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n    /**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0lBQ0c7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtJQUMxQjtJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7UUFJViwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHNCQUFzQjtJQUMxQjtJQUVBO1FBQ0ksY0FBYztJQUNsQjtJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixjQUFjO0lBQ2xCO0lBRUE7UUFDSSwrQkFBK0I7SUFDbkM7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCO0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3QjtJQUVBO1FBQ0ksZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLCtCQUErQjtJQUNuQztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsb0NBQW9DOztRQUVwQyxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsc0JBQXNCO0lBQzFCO0lBRUE7UUFDSSxXQUFXO0lBQ2Y7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixtQ0FBbUM7SUFDdkM7SUFDSixHQUFHO0lBRUg7O0NBRUM7SUFDRztRQUNJLDJCQUEyQjtRQUMzQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QiwrQkFBK0I7SUFDbkM7SUFFQTtRQUVJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFFQTtRQUVJLG1DQUFtQztRQUNuQyxrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLDhCQUE4QjtJQUNsQztJQUNKLEdBQUc7SUFFSDs7Q0FFQztJQUNHO1FBQ0ksMkJBQTJCO0lBQy9CO0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDO0lBQ0o7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLGdCQUFnQjs7UUFFaEIsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjtJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBRUE7UUFDSSxtQ0FBbUM7SUFDdkM7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLDJCQUEyQjtJQUMvQjtJQUNKLEdBQUc7SUFHSDs7Q0FFQztJQUNHLGtCQUFrQjtJQUNsQjtRQUNJLG1DQUFtQztJQUN2QztJQUVBLHNCQUFzQjtJQUN0QjtRQUNJLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsa0JBQWtCO0lBQ3RCO0lBRUE7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFFQTtRQUNJLGtDQUFrQztJQUN0QztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFFBQVE7SUFDWjtJQUNKLEdBQUciLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcblJlc2V0XG4qL1xuICAgIDpyb290e1xuICAgICAgICAtLW1heC13aWR0aDogOTByZW07XG4gICAgICAgIC0tbWF4LW1hcmdlOiA2cmVtO1xuICAgICAgICAtLW1lZC1tYXJnZTogM3JlbTtcbiAgICAgICAgLS1taW4tbWFyZ2U6IDEuNXJlbTtcbiAgICAgICAgLS1kYXJrLWNvbG9yOiBibGFjaztcbiAgICAgICAgLS1tZWQtY29sb3I6IGdyZXk7XG4gICAgICAgIC0tbGlnaHQtY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWVycm9yLWNvbG9yOiByZWQ7XG4gICAgICAgIC0tc3VjY2Vzcy1jb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgKntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBhcHAtaG9tZS1wYWdlLCBhcHAtZm9ybS1yZXNwb25zZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaHRtbHtcbiAgICAgICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuXG4gICAgYm9keXtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICBmb3Jte1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tZWQtbWFyZ2UpO1xuICAgIH1cblxuICAgIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKSwgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pLCBsYWJlbCwgW3R5cGU9XCJzdWJtaXRcIl17XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIGlucHV0e1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1pbi1tYXJnZSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgdmFyKC0tbWVkLWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWVkLW1hcmdlKTtcbiAgICB9XG5cbiAgICBidXR0b257XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgW3R5cGU9XCJzdWJtaXRcIl17XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1pbi1tYXJnZSk7XG4gICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgdmFyKC0tbWVkLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB9XG5cbiAgICBbdHlwZT1cInN1Ym1pdFwiXVtkaXNhYmxlZF17XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cblxuICAgIFt0eXBlPVwic3VibWl0XCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgfVxuLyoqL1xuXG4vKiBcbkNvbW1vblxuKi9cbiAgICAubWF4V2lkdGh7XG4gICAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tZWQtbWFyZ2UpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1tZWQtbWFyZ2UpO1xuICAgIH1cblxuICAgIC5mbGV4Qm94e1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnNwYWNlQmV0d2VlbntcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4vKiovXG5cbi8qIFxuSGVhZGVyXG4qL1xuICAgIGhlYWRlcntcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWVkLW1hcmdlKSAwO1xuICAgIH1cblxuICAgIG5hdntcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1taW4tbWFyZ2UpIDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAuMXJlbSBkb3R0ZWQgdmFyKC0tbWVkLWNvbG9yKVxuICAgIH1cblxuICAgIG5hdiBsaXtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIH1cblxuICAgIG5hdiBsaTpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1pbi1tYXJnZSk7XG4gICAgfVxuXG4gICAgbmF2IGxpOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICB9XG5cbiAgICBuYXYgYXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiAwIHZhcigtLW1pbi1tYXJnZSk7XG4gICAgfVxuLyoqL1xuXG5cbi8qIFxuQ29tcG9uZW50c1xuKi9cbiAgICAvKiBhcHAtaG9tZS1wYWdlICovXG4gICAgYXBwLWhvbWUtcGFnZSBhcnRpY2xle1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSB2YXIoLS1tZWQtbWFyZ2UpKTtcbiAgICB9XG5cbiAgICAvKiBhcHAtZm9ybS1yZXNwb25zZSAqL1xuICAgIGFwcC1mb3JtLXJlc3BvbnNle1xuICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHZhcigtLW1lZC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1pbi1tYXJnZSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICBhcHAtZm9ybS1yZXNwb25zZS5lcnJvcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2Uuc3VjY2Vzc3tcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcbiAgICB9XG5cbiAgICBhcHAtZm9ybS1yZXNwb25zZSBidXR0b257XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4vKiovIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rachou/Mes_Affaires/M2DEV/boilerplate/boilerplate/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map