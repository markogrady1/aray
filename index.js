"use strict";

var aray = module.exports = {};

/**
 * Creates a multidimensional array matrix from given values
 *
 * @param {Number} rows
 * @param {Number} cols
 * @param {*} initial
 * @returns {Array}
 */
aray.matrix = function(rows, cols, initial) {
	var arr = [];
	for (var i = 0; i < rows; ++i) {
		var columns = [];
		for (var j = 0; j < cols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
};

/**
 * Returns the unique values of a given array
 *
 * @param {Array} arr
 * @returns {Array}
 */
aray.unique = function(arr) {
	_arrayCheck(arr);
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		if (res.indexOf(arr[i]) === -1) {
			res.push(arr[i]);
		}
	}
	return res;
};

/**
 * Divides an array into multidimensional sections of a given size
 *
 * @param {Array} arr
 * @param {Number} size
 * @returns {Array}
 */
aray.divide = function(arr, size) {
	_arrayCheck(arr);
	var newArr = [];
	var section = [];
	for (var i = 0; i < arr.length; i++) {
		section.push(arr[i]);
		if (section.length === size || i === arr.length - 1) {
			newArr.push(section);
			section = [];
		}
	}
	return newArr;
};

/**
 * Add amount to each element of a given array
 *
 * @param {Array} arr
 * @param {Number} amount
 * @returns {Array}
 */
aray.addEach = function(arr, amount) {
	_arrayCheck(arr);
	arr = _action(arr, amount);
	return arr;
};

/**
 * Add amount to each element of a given array
 *
 * @param {Array} arr
 * @param {Number} amountArr
 * @returns {Array}
 */
aray.spread = function(arr, amountArr) {
	_arrayCheck(arr, amountArr);
	arr = _action(arr, amountArr);
	return arr;
};

/**
 * Returns a word array from a given string
 *
 * @param {string} str
 * @returns {Array}
 */
aray.wordArray = function(str) {
	_exceptionCheck(str, "string");
	var strArr = str.split(" ");
	for(var i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i];
	}
	return strArr;
};

/**
 * Return the sum of a number array
 *
 * @param {Array} arr
 * @returns {number}
 */
aray.sum = function(arr) {
	_arrayCheck(arr);
	var result = 0;
	for(var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
};

/**
 * Add given value to the front of a given array
 *
 * @param {Array} arr
 * @param {Number} value
 * @returns {Array}
 */
aray.first = function(arr, value) {
	_arrayCheck(arr);
	for (var i = arr.length; i >= 0; --i) {
		arr[i] = arr[i-1];
	}
	arr[0] = value;
	return arr;
};

/**
 * Remove element from the front of a given array
 *
 * @param {Array} arr
 * @returns {Array}
 */
aray.popFirst = function(arr) {
	_arrayCheck(arr);
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = arr[i+1];
	}
	return arr
};

function _action(param, param2) {
	var isSpread = false;
	var length = param.length;
	if(Array.isArray(param2)) {
		isSpread = true;
		length = Math.max(param.length, param2.length);
	}
	for (var i = 0; i < length; ++i) {
		param[i] += isSpread ?  param2[i] : param2;
	}

	return param;
}

function _exceptionCheck(value, expected) {
	if(typeof value != expected)
		throw new TypeError(expected + " expected. Not provided");
}

function _arrayCheck(value, optional) {
	if(typeof optional != "undefined") {
		if(!Array.isArray(value) || !Array.isArray(optional))
			throw new TypeError("Array parameters expected. Not provided.");
	} else {
		if(!Array.isArray(value))
			throw new TypeError("Array parameters expected. Not provided.");
	}
}


