

require(["jquery", "booper"], function($, Booper) {

    //prep
    var b = new Booper();

    //events
    var doBoop = function(evt) {
        b.boop( $("#name").val() );
    };

    $("#name").on('change', doBoop);
    $("#btnBoop").on('click', doBoop);


});