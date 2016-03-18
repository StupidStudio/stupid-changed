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