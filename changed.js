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