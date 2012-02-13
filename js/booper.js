

define('booper', ['unique'], function(Unique) {

    var that = {
        //private storage, but not static, local to this object
        _unique: null,
        _verb: 'unset',

        verbObject: function(name) {
            if (!this._unique) { throw "Unique collection not initialized"; }

            if (this._unique.setIfUnique(name)) {
                alert(this._verb + " " + name);
                return true;
            }
            else {
                alert("You've already " + this._verb + "ed " + name + "!");
                return false;
            }
        },
        
        foo: 'bar'
    };

    var ClassConstructor = function(verb) {
        this._verb =  verb || "boop";
        this._unique = new Unique(this._verb);
        this[this._verb] = this.verbObject;

        this.foo = "baz";
    };
    $.extend(ClassConstructor.prototype, that);
    return ClassConstructor;
});