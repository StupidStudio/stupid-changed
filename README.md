# Stupid Changed
Updates callback when values change.

## Usage

```js
var Changed = require('stupid-changed');
var changed = Changed();
var value = 1;
changed.trigger(value, function(_value){
	// Update when value changes
});

value = 2;
changed.trigger(value, function(_value){
	// Calls the callback because the value has changed.
});
```

Stupid changed is best used in a stream of data. Fx. scrolling.

```js

setInterval(function(){
	changed.trigger(scrollValue, function(_scrollValue){
		// This is only called when scrollValue changes.
	});
}, 100);

```

Stupid changed also listens for multiple values.

```js

changed.trigger(scrollValue, someOtherValue, function(_scrollValue, _someOtherValue){
		// This is only called when 
		// scrollValue or someOtherValue changes.
		console.log(_scrollValue, _someOtherValue);
});

```