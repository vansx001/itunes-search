$(document).ready(function () {
    "use strict";
    $('#performSearch').click(function () {
        var terms = $('#itunesSearchKeyword').val();

        $.ajax({
            url: "https://itunes.apple.com/search?",
            type: "GET",
            dataType: "jsonp",
            data: {
                "term": terms
            },
            success: function (search) {
                displayResults(search);
            }
        });
    });

    function displayResults(search) {
        var results = search.results;
        var index = ''; //results will show up on the index page! 
        for (var i = 0; i < results.length; i++) {
            var item = results[i];
            index += '<div class="search-results">';
            index += '<img class="thumbnail" src="' + item.artworkUrl100 + '"/>';
            index += '<h3>' + item.artistName + ' - ' + item.trackName + '</h3>';
            if (item.collectionName != undefined) {
                index += '<h4>Album: ' + item.collectionName + '</h4>';
                index += '<h4>Genre: ' + item.primaryGenreName + '</h4>';
                index += '<audio src="' + item.previewUrl + '"controls></audio><br>';
                index += '</div>';
            } else {
                index += '<h4>Album: N/A </h4>';
            }
            $('#itunes-results').html(index); //these codes will go to the #itunes-results div 
        }
    }
    $("#lightening").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100)
        .fadeIn(100).fadeOut(100).fadeIn(100);
});