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
	ok(cat.walk() === 'tototo', 'Override method');
	ok(cat.sleep() === 'zzz', 'Sub class method');
	ok(animal.walk() === 'tokotoko', 'Supar class method');
});
