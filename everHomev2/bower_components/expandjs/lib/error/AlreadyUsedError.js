/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var CustomError = require('../error/CustomError');

    /**
     * Creates a custom error with the `AlreadyUsedError` type and a predefined message.
     *
     * ```js
     *      console.log(new AlreadyUsedError('myVariable'));
     *      // => AlreadyUsedError{message: 'myVariable is already used', stack: '...'}
     * ```
     *
     * @function AlreadyUsedError
     * @param {string} key The key to be used in the error message.
     * @constructor
     */
    module.exports = function AlreadyUsedError(key) { CustomError.call(this, 'AlreadyUsedError', key, 'is already used'); };
    module.exports.prototype = Object.create(CustomError.prototype, {constructor: {configurable: true, value: module.exports, writable: true}, name: {value: 'AlreadyUsedError', writable: true}});

}());