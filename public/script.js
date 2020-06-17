$( document ).ready(function() {

  $.get( "/api/quote", function( data ) {

    $("#quote").text(data.quote);
    // $("#image").attr('src', "/api/train/500/400/?timestamp=" + new Date().getTime());

  });

});

function newTrain() {

  $.get( "/api/quote", function( data ) {

    $("#quote").text(data.quote);
    $("#image").attr('src', "/api/train/500/400/?timestamp=" + new Date().getTime());

  });

}
