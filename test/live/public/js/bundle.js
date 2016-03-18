(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Changed
 * @constructor
 */
function Changed(opts){
 	/**
     * @define {object} Collection of public methods.
     */
    var self = {};

    /**
     * @define {object} Options for the constructor 
     */
    var opts = opts || {};

     /**
     * @define {array} Holds the values
     */
	var values;

	/**
	 * Trigger and update if values are changed
	 */
	function trigger(){
		/** Convert to array */
		var args = Array.prototype.slice.call(arguments);

		/** Splice to get the callback */
		var callback = args.splice(-1)[0];

		/** Loop through args */
		for (var i = 0; i < args.length; i++) {

			/** Check if values are changed */
			if(!values || values[i] != args[i]){

				/** If Changed call the callback */
				callback.apply(window, args);
				break;
			}
		}

		/** Set the values to the args */
		values = args;
	}

	/*
	* Public
	*/
	self.trigger = trigger;

	return self;
}

module.exports = Changed;
},{}],2:[function(require,module,exports){
var Changed = require('../../changed');
var changed = Changed();

changed.trigger(1, 0, callback);
changed.trigger(1, 0, callback);
changed.trigger(2, 0, callback);
changed.trigger(2, 0, callback);
changed.trigger(2, 1, callback);
changed.trigger(2, 1, callback);

function callback(a, b){
	console.log("Update", a, b);
}
},{"../../changed":1}]},{},[2]);
