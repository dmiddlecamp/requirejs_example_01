

require(["jquery", "booper"], function($, Booper) {

    //prep
    var b = new Booper();

    //events
    $("#name").on('change', function(evt) {
        b.boop( $(this).val() );
    });
});