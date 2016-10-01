$(document).ready(function () {
    "use strict";
    $('form').submit(function (event) {
        event.preventDefault();
        searchRequest();
    });

    function searchRequest() {
        var terms = $('#itunesSearchKeyword').val();
        $.ajax({
            url: "https://itunes.apple.com/search?",
            type: "GET",
            dataType: "jsonp",
            data: {
                term: terms,
                limit: 25
            },
            success: function (search) {
                $('#itunes-results').children().remove();
                displayResults(search);
            }
        });

    function displayResults(search) {
        var results = search.results;
        var index = ''; //results will show up on the index page! 
            for (var i = 0; i < results.length; i++) {
                var item = results[i];
                index += '<li class="results-list" id="search-results">';
                index += '<img class="img-rounded img-responsive img-hover" src="' + item.artworkUrl100.replace('100x100','360x360') + '"/><br>';
                index += '<h3>' + item.artistName + ' - ' + item.trackName + '</h3>';
                if (item.collectionName !== undefined) {
                    index += '<h4>Album: ' + item.collectionName + '</h4>';
                    index += '<h4>Genre: ' + item.primaryGenreName + '</h4>';
                    index += '<audio src="' + item.previewUrl + '"controls></audio><br>';
                    
                } else {
                    index += '<h4>Album: N/A </h4>';
                }
                index += '</li>';
                $('#itunes-results').html(index); //displays results in the #itunes-results div 
            }
        }

        $("#lightening").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        // $('#listitems').paginate({itemsPerPage: 10});
    }
});