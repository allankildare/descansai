webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/index.css":
/*!***********************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/index.css ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --white: #fafafa;\n  --bg: #f2f3f5;\n  --gray-line: #dcdde0;\n  --text: #666;\n  --text-highlight: #b3b9ff;\n  --title: #2e384d;\n  --red: #e83f5b;\n  --green: #4cd62b;\n  --blue: #5965e0;\n  --dark-blue: #4953b8;\n  --twitter-blue: #2aa9e0;\n  /* font-size: 62.5%; */\n}\n\n@media(max-width: 1080px) {\n  html {\n    font-size: 93.75%;\n  }\n}\n@media(max-width: 1080px) {\n  html {\n    font-size: 87.5%;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n  background-color: var(--bg);\n  color: var(--text);\n}\n\nbody, input, textarea, button {\n  font: 400 1rem \"Inter\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* App */\n.container {\n  height: 100vh;\n  max-width: 992px;\n  margin: 0 auto;\n  padding: 2.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Experience Bar */\n.experienceBar {\n  display: flex;\n  align-items: center;\n}\n\n.experienceBar span {\n  font-size: 1rem;\n}\n\n.experienceBar > div {\n  flex: 1 1;\n  height: 4px;\n  border-radius: 4px;\n  background-color: var(--gray-line);\n  margin: 0 1.5rem;\n  position: relative;\n  /* width: 100%; */\n}\n\n.experienceBar > div > div{\n  height: 4px;\n  border-radius: 4px;\n  background-color: var(--green);\n}\n\nspan.currentExperience {\n  position: absolute;\n  top: 12px;\n  transform: translateX(-50%);\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,QAAQ;AACR;EACE,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,oBAAoB;EACpB,aAAa;EACb,sBAAsB;AACxB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,SAAO;EACP,WAAW;EACX,kBAAkB;EAClB,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,2BAA2B;AAC7B","sourcesContent":[":root {\n  --white: #fafafa;\n  --bg: #f2f3f5;\n  --gray-line: #dcdde0;\n  --text: #666;\n  --text-highlight: #b3b9ff;\n  --title: #2e384d;\n  --red: #e83f5b;\n  --green: #4cd62b;\n  --blue: #5965e0;\n  --dark-blue: #4953b8;\n  --twitter-blue: #2aa9e0;\n  /* font-size: 62.5%; */\n}\n\n@media(max-width: 1080px) {\n  html {\n    font-size: 93.75%;\n  }\n}\n@media(max-width: 1080px) {\n  html {\n    font-size: 87.5%;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n  background-color: var(--bg);\n  color: var(--text);\n}\n\nbody, input, textarea, button {\n  font: 400 1rem \"Inter\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* App */\n.container {\n  height: 100vh;\n  max-width: 992px;\n  margin: 0 auto;\n  padding: 2.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Experience Bar */\n.experienceBar {\n  display: flex;\n  align-items: center;\n}\n\n.experienceBar span {\n  font-size: 1rem;\n}\n\n.experienceBar > div {\n  flex: 1;\n  height: 4px;\n  border-radius: 4px;\n  background-color: var(--gray-line);\n  margin: 0 1.5rem;\n  position: relative;\n  /* width: 100%; */\n}\n\n.experienceBar > div > div{\n  height: 4px;\n  border-radius: 4px;\n  background-color: var(--green);\n}\n\nspan.currentExperience {\n  position: absolute;\n  top: 12px;\n  transform: translateX(-50%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUscUJBQXFCLGtCQUFrQix5QkFBeUIsaUJBQWlCLDhCQUE4QixxQkFBcUIsbUJBQW1CLHFCQUFxQixvQkFBb0IseUJBQXlCLDRCQUE0Qix3QkFBd0IsTUFBTSwrQkFBK0IsVUFBVSx3QkFBd0IsS0FBSyxHQUFHLDZCQUE2QixVQUFVLHVCQUF1QixLQUFLLEdBQUcsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSxxQ0FBcUMsZ0NBQWdDLHVCQUF1QixHQUFHLG1DQUFtQyx5Q0FBeUMsR0FBRyxZQUFZLG9CQUFvQixHQUFHLE9BQU8sMEJBQTBCLG1CQUFtQixHQUFHLDJCQUEyQixrQkFBa0IscUJBQXFCLG1CQUFtQix5QkFBeUIsa0JBQWtCLDJCQUEyQixHQUFHLDBDQUEwQyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLDBCQUEwQixjQUFjLGdCQUFnQix1QkFBdUIsdUNBQXVDLHFCQUFxQix1QkFBdUIsbUJBQW1CLE1BQU0sK0JBQStCLGdCQUFnQix1QkFBdUIsbUNBQW1DLEdBQUcsNEJBQTRCLHVCQUF1QixjQUFjLGdDQUFnQyxHQUFHLE9BQU8sOEVBQThFLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGlDQUFpQyxxQkFBcUIsa0JBQWtCLHlCQUF5QixpQkFBaUIsOEJBQThCLHFCQUFxQixtQkFBbUIscUJBQXFCLG9CQUFvQix5QkFBeUIsNEJBQTRCLHdCQUF3QixNQUFNLCtCQUErQixVQUFVLHdCQUF3QixLQUFLLEdBQUcsNkJBQTZCLFVBQVUsdUJBQXVCLEtBQUssR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLHFDQUFxQyxnQ0FBZ0MsdUJBQXVCLEdBQUcsbUNBQW1DLHlDQUF5QyxHQUFHLFlBQVksb0JBQW9CLEdBQUcsT0FBTywwQkFBMEIsbUJBQW1CLEdBQUcsMkJBQTJCLGtCQUFrQixxQkFBcUIsbUJBQW1CLHlCQUF5QixrQkFBa0IsMkJBQTJCLEdBQUcsMENBQTBDLGtCQUFrQix3QkFBd0IsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsMEJBQTBCLFlBQVksZ0JBQWdCLHVCQUF1Qix1Q0FBdUMscUJBQXFCLHVCQUF1QixtQkFBbUIsTUFBTSwrQkFBK0IsZ0JBQWdCLHVCQUF1QixtQ0FBbUMsR0FBRyw0QkFBNEIsdUJBQXVCLGNBQWMsZ0NBQWdDLEdBQUcsbUJBQW1CO0FBQ2x1SDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWFhNWIzMmJhZDA0MmE4NWIyMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2hpdGU6ICNmYWZhZmE7XFxuICAtLWJnOiAjZjJmM2Y1O1xcbiAgLS1ncmF5LWxpbmU6ICNkY2RkZTA7XFxuICAtLXRleHQ6ICM2NjY7XFxuICAtLXRleHQtaGlnaGxpZ2h0OiAjYjNiOWZmO1xcbiAgLS10aXRsZTogIzJlMzg0ZDtcXG4gIC0tcmVkOiAjZTgzZjViO1xcbiAgLS1ncmVlbjogIzRjZDYyYjtcXG4gIC0tYmx1ZTogIzU5NjVlMDtcXG4gIC0tZGFyay1ibHVlOiAjNDk1M2I4O1xcbiAgLS10d2l0dGVyLWJsdWU6ICMyYWE5ZTA7XFxuICAvKiBmb250LXNpemU6IDYyLjUlOyAqL1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiAxMDgwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDkzLjc1JTtcXG4gIH1cXG59XFxuQG1lZGlhKG1heC13aWR0aDogMTA4MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA4Ny41JTtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuYm9keSwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xcbiAgZm9udDogNDAwIDFyZW0gXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyogQXBwICovXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiA5OTJweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMi41cmVtIDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogRXhwZXJpZW5jZSBCYXIgKi9cXG4uZXhwZXJpZW5jZUJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGVyaWVuY2VCYXIgc3BhbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5leHBlcmllbmNlQmFyID4gZGl2IHtcXG4gIGZsZXg6IDEgMTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1saW5lKTtcXG4gIG1hcmdpbjogMCAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmV4cGVyaWVuY2VCYXIgPiBkaXYgPiBkaXZ7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuc3Bhbi5jdXJyZW50RXhwZXJpZW5jZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQSxRQUFRO0FBQ1I7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQU87RUFDUCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS13aGl0ZTogI2ZhZmFmYTtcXG4gIC0tYmc6ICNmMmYzZjU7XFxuICAtLWdyYXktbGluZTogI2RjZGRlMDtcXG4gIC0tdGV4dDogIzY2NjtcXG4gIC0tdGV4dC1oaWdobGlnaHQ6ICNiM2I5ZmY7XFxuICAtLXRpdGxlOiAjMmUzODRkO1xcbiAgLS1yZWQ6ICNlODNmNWI7XFxuICAtLWdyZWVuOiAjNGNkNjJiO1xcbiAgLS1ibHVlOiAjNTk2NWUwO1xcbiAgLS1kYXJrLWJsdWU6ICM0OTUzYjg7XFxuICAtLXR3aXR0ZXItYmx1ZTogIzJhYTllMDtcXG4gIC8qIGZvbnQtc2l6ZTogNjIuNSU7ICovXFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDEwODBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogOTMuNzUlO1xcbiAgfVxcbn1cXG5AbWVkaWEobWF4LXdpZHRoOiAxMDgwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDg3LjUlO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG5ib2R5LCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiB7XFxuICBmb250OiA0MDAgMXJlbSBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBBcHAgKi9cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDk5MnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyLjVyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBFeHBlcmllbmNlIEJhciAqL1xcbi5leHBlcmllbmNlQmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZXhwZXJpZW5jZUJhciBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmV4cGVyaWVuY2VCYXIgPiBkaXYge1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1saW5lKTtcXG4gIG1hcmdpbjogMCAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmV4cGVyaWVuY2VCYXIgPiBkaXYgPiBkaXZ7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuc3Bhbi5jdXJyZW50RXhwZXJpZW5jZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9