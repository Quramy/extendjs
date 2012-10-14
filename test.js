
module('Group A');

var Animal = Class({
	init:function(name){
		this.name = name;
	},
	walk:function(){
		return 'tokotoko';
	},
	sleep:function(){
		return 'zzz';
	}
});

var Cat = Animal.extend({
	walk:function(){
		return 'tototo';
	}
});

var animal = new Animal('pochi');
var cat = new Cat();


test("initialize, attribute", function(){
	ok(animal.name === 'pochi', 'get attribute.');
});

test("extend, sub class's method", function(){
	ok(cat.walk() === 'tototo', 'ok');
	ok(cat.sleep() === 'zzz', 'ok');
	ok(animal.walk() === 'tokotoko', 'ok');
});
