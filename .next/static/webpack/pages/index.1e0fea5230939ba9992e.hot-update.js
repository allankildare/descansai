webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/components/CountDown/CountDown.module.css":
/*!*******************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/components/CountDown/CountDown.module.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".CountDown_countDownContainer__3ypMk {\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: \"Rajdhani\";\r\n    font-weight: 600;\r\n    color: var(--title)\r\n}\r\n\r\n.CountDown_countDownContainer__3ypMk > div {\r\n    flex: 1 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background-color: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.CountDown_countDownContainer__3ypMk > div > span {\r\n    flex: 1 1;\r\n}\r\n\r\n.CountDown_countDownContainer__3ypMk > div span:first-child {\r\n    border-right: 1px solid #f0f1f3;\r\n}\r\n.CountDown_countDownContainer__3ypMk > div span:first-child {\r\n    border-left: 1px solid #f0f1f3;\r\n}\r\n\r\n.CountDown_countDownContainer__3ypMk > span {\r\n    font-size: 6.25rem;\r\n    margin: 0 .5rem;\r\n}\r\n\r\n.CountDown_CountDownButton__2DgMs {\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: var(--blue);\r\n    \r\n    color: var(--white);\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    outline: none;\r\n\r\n    transition: background-color .3s ease;\r\n}\r\n\r\n.CountDown_CountDownButton__2DgMs:hover {\r\n    background-color: var(--dark-blue);\r\n}\r\n\r\n.CountDown_CountDownButtonActive__Bxlbq {\r\n    background-color: var(--white);\r\n    color: var(--title);\r\n}", "",{"version":3,"sources":["webpack://src/components/CountDown/CountDown.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB;AACJ;;AAEA;IACI,SAAO;IACP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,8BAA8B;IAC9B,uCAAuC;IACvC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,+BAA+B;AACnC;AACA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;;IAE7B,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;;IAEb,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB","sourcesContent":[".countDownContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: \"Rajdhani\";\r\n    font-weight: 600;\r\n    color: var(--title)\r\n}\r\n\r\n.countDownContainer > div {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background-color: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.countDownContainer > div > span {\r\n    flex: 1;\r\n}\r\n\r\n.countDownContainer > div span:first-child {\r\n    border-right: 1px solid #f0f1f3;\r\n}\r\n.countDownContainer > div span:first-child {\r\n    border-left: 1px solid #f0f1f3;\r\n}\r\n\r\n.countDownContainer > span {\r\n    font-size: 6.25rem;\r\n    margin: 0 .5rem;\r\n}\r\n\r\n.CountDownButton {\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: var(--blue);\r\n    \r\n    color: var(--white);\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    outline: none;\r\n\r\n    transition: background-color .3s ease;\r\n}\r\n\r\n.CountDownButton:hover {\r\n    background-color: var(--dark-blue);\r\n}\r\n\r\n.CountDownButtonActive {\r\n    background-color: var(--white);\r\n    color: var(--title);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countDownContainer": "CountDown_countDownContainer__3ypMk",
	"CountDownButton": "CountDown_CountDownButton__2DgMs",
	"CountDownButtonActive": "CountDown_CountDownButtonActive__Bxlbq"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duL0NvdW50RG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx5Q0FBeUMsc0JBQXNCLDRCQUE0QixrQ0FBa0MseUJBQXlCLGdDQUFnQyxvREFBb0Qsa0JBQWtCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLHVDQUF1QyxnREFBZ0QsMkJBQTJCLDBCQUEwQiwyQkFBMkIsS0FBSywyREFBMkQsa0JBQWtCLEtBQUsscUVBQXFFLHdDQUF3QyxLQUFLLGlFQUFpRSx1Q0FBdUMsS0FBSyxxREFBcUQsMkJBQTJCLHdCQUF3QixLQUFLLDJDQUEyQyxvQkFBb0IscUJBQXFCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLGdDQUFnQyx5QkFBeUIsMkJBQTJCLHNDQUFzQyxvQ0FBb0MsMkJBQTJCLHlCQUF5QixzQkFBc0Isa0RBQWtELEtBQUssaURBQWlELDJDQUEyQyxLQUFLLGlEQUFpRCx1Q0FBdUMsNEJBQTRCLEtBQUssT0FBTyw4R0FBOEcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSwrQ0FBK0Msc0JBQXNCLDRCQUE0QixrQ0FBa0MseUJBQXlCLGdDQUFnQyxtQ0FBbUMsZ0JBQWdCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLHVDQUF1QyxnREFBZ0QsMkJBQTJCLDBCQUEwQiwyQkFBMkIsS0FBSywwQ0FBMEMsZ0JBQWdCLEtBQUssb0RBQW9ELHdDQUF3QyxLQUFLLGdEQUFnRCx1Q0FBdUMsS0FBSyxvQ0FBb0MsMkJBQTJCLHdCQUF3QixLQUFLLDBCQUEwQixvQkFBb0IscUJBQXFCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLGdDQUFnQyx5QkFBeUIsMkJBQTJCLHNDQUFzQyxvQ0FBb0MsMkJBQTJCLHlCQUF5QixzQkFBc0Isa0RBQWtELEtBQUssZ0NBQWdDLDJDQUEyQyxLQUFLLGdDQUFnQyx1Q0FBdUMsNEJBQTRCLEtBQUssbUJBQW1CO0FBQy9xSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZTBmZWE1MjMwOTM5YmE5OTkyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzN5cE1rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWpkaGFuaVxcXCI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSlcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzN5cE1rID4gZGl2IHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIC4wNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzN5cE1rID4gZGl2ID4gc3BhbiB7XFxyXFxuICAgIGZsZXg6IDEgMTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzN5cE1rID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcclxcbn1cXHJcXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fM3lwTWsgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzN5cE1rID4gc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX0NvdW50RG93bkJ1dHRvbl9fMkRnTXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICBcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX0NvdW50RG93bkJ1dHRvbl9fMkRnTXM6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX0NvdW50RG93bkJ1dHRvbkFjdGl2ZV9fQnhsYnEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9Db3VudERvd24vQ291bnREb3duLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFNBQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBTztBQUNYOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCOztJQUU3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhOztJQUViLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvdW50RG93bkNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFqZGhhbmlcXFwiO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpXFxyXFxufVxcclxcblxcclxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXYge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIC4wNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IGRpdiA+IHNwYW4ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcclxcbn1cXHJcXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxyXFxufVxcclxcblxcclxcbi5jb3VudERvd25Db250YWluZXIgPiBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICBtYXJnaW46IDAgLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5Db3VudERvd25CdXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICBcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duQnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bkJ1dHRvbkFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnREb3duQ29udGFpbmVyXCI6IFwiQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fM3lwTWtcIixcblx0XCJDb3VudERvd25CdXR0b25cIjogXCJDb3VudERvd25fQ291bnREb3duQnV0dG9uX18yRGdNc1wiLFxuXHRcIkNvdW50RG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50RG93bl9Db3VudERvd25CdXR0b25BY3RpdmVfX0J4bGJxXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==