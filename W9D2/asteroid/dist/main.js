/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst CONSTANTS = {\n    COLOR: \"grey\",\n    RADIUS: 30,\n    VELOCITY_RANGE: 5,\n};\n\nfunction Asteroid(pos, {game} = {}){\n    MovingObject.call(this, {\n        pos,\n        vel: {\n            x: Math.random() * CONSTANTS.VELOCITY_RANGE,\n            y: Math.random() * CONSTANTS.VELOCITY_RANGE\n        },\n        radius: CONSTANTS.RADIUS,\n        color: CONSTANTS.COLOR,\n        game\n    });\n\n    this.id = Asteroid.id++;\n}\n\nAsteroid.id = 0;\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack://asteroid/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst CONSTANTS = {\n    DIM_X: 960,\n    DIM_Y: 540,\n    NUM_ASTEROIDS: 10\n}\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function (){\n    while(this.asteroids.length < CONSTANTS.NUM_ASTEROIDS) {\n        let asteroid = new Asteroid({\n            x: CONSTANTS.DIM_X * Math.random(),\n            y: CONSTANTS.DIM_Y * Math.random()\n        }, {game: this});\n\n        this.asteroids.push(asteroid);\n    }\n};\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    this.asteroids.forEach(asteroid => asteroid.draw(ctx));\n}\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(asteroid => asteroid.move());\n}\n\nGame.prototype.wrap = function(pos){\n    let {x, y} = pos;\n\n    if ( x > CONSTANTS.DIM_X ) x = 0;\n    if ( y > CONSTANTS.DIM_Y ) y = 0;\n    if ( x < 0 ) x = CONSTANTS.DIM_X;\n    if ( y < 0 ) y = CONSTANTS.DIM_Y;\n\n    return {x, y};\n}\n\nmodule.exports = Game;\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://asteroid/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (ctx){\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function (){\n    this.game.moveObjects();\n    this.game.draw(this.ctx);\n    requestAnimationFrame(this.start.bind(this));\n}\n\nmodule.exports = GameView;\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://asteroid/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    let canvas = document.getElementById(\"game-canvas\");\r\n    let ctx = canvas.getContext(\"2d\");\r\n    ctx.width = 960;\r\n    ctx.height = 540;\r\n    let gameView = new GameView(ctx);\r\n    gameView.start();\r\n})\n\n//# sourceURL=webpack://asteroid/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject({pos, vel, radius, color, game} = {}) {\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n  this.game = game;\n}\n\nMovingObject.prototype.draw = function (ctx){\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);\n  ctx.fill();\n}\n\n\nMovingObject.prototype.move = function(){\n  this.pos.x += this.vel.x;\n  this.pos.y += this.vel.y;\n  if (this.game){\n    this.pos = this.game.wrap(this.pos);\n  }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroid/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass){\n        function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroid/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;