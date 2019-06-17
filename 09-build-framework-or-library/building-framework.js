
$('#login').click(function() {
    var loginGrtr = G$('Maxi', 'Vicente');

    $('#logindiv').hide();

    loginGrtr.setLanguage($('#lang').val())
        .HTMLGreeting('#greeting', true)
        .log();

});
