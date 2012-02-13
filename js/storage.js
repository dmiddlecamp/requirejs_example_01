/**
 * Defines a named key-value data store that is written to localStorage when available
 */
define('storage', [ ], function( ) {

    //private static in-memory storage
    var _data = {};

    var that = {
        prefix: "_default",
        hasLocalStorage: function() { return !!window.localStorage; },
        
        set: function(key, value) {
            if (this.hasLocalStorage()) {
                return localStorage.setItem(this.prefix + key, JSON.stringify(value));
            }
            else {
                if (!_data[this.prefix]) {
                    _data[this.prefix] = {};
                }

                _data[this.prefix][key] = value;
            }
        },
        get: function(key) {
            if (this.hasLocalStorage()) {
                try {
                    var val = localStorage.getItem(this.prefix + key);
                    if (val) { return JSON.parse(val); } else return val;
                }
                catch(e) { return undefined; }
            }
            else {
                if (!_data[this.prefix]) {
                    _data[this.prefix] = {};
                }
                
                return _data[this.prefix][key];
            }
        },


        foo: 'bar'
    };

    var ClassConstructor = function(name) {
         if (!name || name == "") { throw "Name not provided"; }
        this.prefix = name;
        this.foo = "baz";
    };
    $.extend(ClassConstructor.prototype, that);
    return ClassConstructor;
});