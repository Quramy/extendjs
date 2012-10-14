(function(exports){
	var Class = function(mod){
		var extendable = function(){}; 

		extendable.extend = function(mod){
			clazz = function(){
				this.init.apply(this, arguments);
			};
			clazz.prototype = new this();
			clazz.fn = clazz.prototype;
			clazz.fn.init = function(){};
			clazz.extend = this.extend;

			clazz.fn.extend = function(module){
				for(var func in module){
					clazz.fn[func] = module[func];
				}
			};
			if(mod){
				clazz.fn.extend(mod);
			}
			return clazz;
		};

		return extendable.extend(mod);
	};

	exports.Class = Class;
})(window);


