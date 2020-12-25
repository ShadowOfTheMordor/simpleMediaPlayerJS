/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateyatunes"]("main",{

/***/ "./src/module/radioPlayer.js":
/*!***********************************!*\
  !*** ./src/module/radioPlayer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"radioPlayerInit\": () => /* binding */ radioPlayerInit\n/* harmony export */ });\nvar radioPlayerInit = function radioPlayerInit() {\n  // console.log(\"Radio Init\");\n  // radio\n  // radio-cover__img\n  // radio-header\n  // radio-navigation\n  // radio-item\n  // radio-stop\n  var radio = document.querySelector(\".radio\");\n  var radioCoverImg = document.querySelector(\".radio-cover__img\");\n  var radioHeaderBig = document.querySelector(\".radio-header__big\");\n  var radioNavigation = document.querySelector(\".radio-navigation\");\n  var radioItem = document.querySelectorAll(\".radio-item\");\n  var radioStop = document.querySelector(\".radio-stop\");\n  var radioVolumeDown = document.querySelector(\".radio-volume__down\");\n  var radioVolumeUp = document.querySelector(\".radio-volume__up\");\n  var radioVolume = document.querySelector(\".radio-volume\");\n  var radioVolumeOff = document.querySelector(\".radio-volume__off\");\n  var audio = new Audio();\n  audio.type = \"audio/aac\";\n  var savedVolume = 0;\n  radioStop.disabled = true;\n\n  var changePlayIcon = function changePlayIcon() {\n    if (audio.paused) {\n      radio.classList.remove(\"play\");\n      radioStop.classList.remove(\"fa-stop\");\n      radioStop.classList.add(\"fa-play\");\n    } else {\n      radio.classList.add(\"play\");\n      radioStop.classList.remove(\"fa-play\");\n      radioStop.classList.add(\"fa-stop\");\n    }\n  };\n\n  var selectItem = function selectItem(parent) {\n    radioItem.forEach(function (item) {\n      return item.classList.remove(\"select\");\n    });\n    parent.classList.add(\"select\");\n  }; //radioVolume\n\n\n  var changeRadioVolume = function changeRadioVolume(curVolumeRange, maxVolumeRange) {\n    var volume = curVolumeRange / maxVolumeRange;\n    audio.volume = volume;\n  };\n\n  radioNavigation.addEventListener(\"change\", function (event) {\n    var target = event.target;\n    var parent = target.closest(\".radio-item\"); // console.log(target.dataset);\n\n    if (parent === null) return;\n    selectItem(parent);\n    var title = parent.querySelector(\".radio-name\").textContent;\n    radioHeaderBig.textContent = title;\n    console.log(title);\n    var radioImgSrc = parent.querySelector(\".radio-img\").src;\n    radioCoverImg.src = radioImgSrc;\n    radioStop.disabled = false;\n    audio.src = target.dataset.radioStantion;\n    audio.play();\n    changePlayIcon();\n  });\n  radioStop.addEventListener(\"click\", function () {\n    if (audio.paused) {\n      audio.play();\n    } else {\n      audio.pause();\n    }\n\n    changePlayIcon();\n  });\n  radioVolume.addEventListener(\"input\", function () {\n    var maxVolumeRange = radioVolume.max;\n    var currentVolumeRange = radioVolume.value;\n    changeRadioVolume(currentVolumeRange, maxVolumeRange);\n  });\n  radioVolumeDown.addEventListener(\"click\", function () {\n    var maxVolumeRange = radioVolume.max;\n\n    if (savedVolume < 0.05) {\n      savedVolume = audio.volume;\n      changeRadioVolume(0, maxVolumeRange);\n      radioVolume.value = 0;\n    } else {\n      // console.log(\" saved volume = \" + savedVolume);\n      changeRadioVolume(savedVolume * 100, maxVolumeRange);\n      radioVolume.value = savedVolume * 100;\n      savedVolume = 0;\n    }\n  });\n  radioVolumeUp.addEventListener(\"click\", function () {\n    var maxVolumeRange = radioVolume.max;\n\n    if (savedVolume < 0.05) {\n      savedVolume = audio.volume;\n      changeRadioVolume(maxVolumeRange, maxVolumeRange);\n      radioVolume.value = maxVolumeRange;\n    } else {\n      changeRadioVolume(savedVolume * 100, maxVolumeRange);\n      radioVolume.value = savedVolume * 100;\n      savedVolume = 0;\n    }\n  });\n  radioVolumeOff.addEventListener(\"click\", function () {\n    var maxVolumeRange = radioVolume.max; // if (audio.volume < 0.1) {\n\n    if (savedVolume > 0.05) {\n      changeRadioVolume(savedVolume * 100, maxVolumeRange);\n      savedVolume = 0;\n    } else {\n      savedVolume = audio.volume;\n      changeRadioVolume(0, maxVolumeRange);\n    }\n  }); //for setting starting volume\n\n  changeRadioVolume(radioVolume.value, radioVolume.max);\n\n  radioPlayerInit.stop = function () {\n    audio.pause();\n    changePlayIcon();\n  };\n};\n\n//# sourceURL=webpack://yatunes/./src/module/radioPlayer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "e0e1874426c0aa8052b9"
/******/ 	})();
/******/ 	
/******/ }
);