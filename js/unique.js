/**
 * Defines a named globally static key-value data store
 */
define('unique', ['storage'], function(Storage) {

    //private storage
    var _storage = null;


    var that = {

        /**
         * Sets the key to value if the storage doesn't have it set to true, otherwise returns false
         * @param key
         */
        setIfUnique: function(key) {
            if (!_storage) { throw "Storage not initialized"; }
            if (!_storage.get(key)) {
                _storage.set(key, true);
                return true;
            }
            return false;
        },

        foo: 'bar'
    };

    var ClassConstructor = function(name) {
        if (!name || name == "") { throw "Name not provided"; }
        _storage = new Storage(name);
        
        this.foo = "baz";
    };
    $.extend(ClassConstructor.prototype, that);
    return ClassConstructor;
});
