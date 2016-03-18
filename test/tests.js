var test = require('tape');
var Changed = require('../changed');

test('Only update when value changes', function (t) {
    t.plan(2);
    var changed = Changed();

    changed.trigger(1, callback); // Change
    changed.trigger(1, callback); // Don't change
    changed.trigger(1, callback); // Don't change
    changed.trigger(2, callback); // Change

    function callback(){
    	t.pass();
    }
});

test('Update when multiple values changes', function (t) {
    t.plan(4);
    var changed = Changed();

    changed.trigger(1, 1, callback); // Change
    changed.trigger(1, 2, callback); // Change
    changed.trigger(1, 2, callback); // Don't change
    changed.trigger(2, 2, callback); // Change
    changed.trigger(2, 2, callback); // Don't change
    changed.trigger(3, 3, callback); // Change

    function callback(){
    	t.pass();
    }
});