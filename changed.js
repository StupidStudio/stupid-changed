function Changed(opts){
 	var self = {};
	var opts = opts || {};
	var values;

	function trigger(){
		var args = Array.prototype.slice.call(arguments);
		var callback = args.splice(-1)[0];
		for (var i = 0; i < args.length; i++) {
			if(!values || values[i] != args[i]){
				callback.apply(window, args);
				break;
			}
		}
		values = args;
	}

	/*
	* Public
	*/
	self.trigger = trigger;

	return self;
}

module.exports = Changed;