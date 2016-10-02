$(document).ready(function () {
    "use strict";
    $('form').submit(function (event) {
        event.preventDefault();
        searchRequest();
    });
            //search
    function searchRequest() {
        var searchKeyword = $('#itunesSearchKeyword').val();
        $.ajax({
            url: "https://itunes.apple.com/search?",
            type: "GET",
            dataType: "jsonp",
            data: {
                term: searchKeyword,
                limit: 25
            },
            success: function (data) {
                $('#itunes-results').children().remove();
                displayResults(data);
            }
        });
                //display
        function displayResults(data) {
            var searchResults = searchItems(data);
            $('#itunes-results').html(searchResults); //displays results in the #itunes-results div 
        }
                //get search items
        function searchItems(data) {
            var results = data.results;
            var searchResults = ''; //results will show up on the index page! 
            for (var i = 0; i < results.length; i++) {
                var item = results[i];
                if (item.previewUrl === undefined || item.collectionName === undefined) {
                    continue;
                }
                searchResults += '<li class="results-list" id="search-results">';
                searchResults += '<img class="img-rounded img-responsive img-hover" src="' + item.artworkUrl100.replace('100x100', '360x360') + '"/><br>';
                searchResults += '<h4 class="resultsBold">Artist:</h4> <h4 class="resultsText">' + item.artistName + '</h4><br>';
                searchResults += '<h4 class="resultsBold">Song:</h4> <h4 class="resultsText">' + item.trackName + '</h4><br>';
                searchResults += '<h4 class="resultsBold">Album:</h4> <h4 class="resultsText">' + item.collectionName + '</h4><br>';
                searchResults += '<h4 class="resultsBold">Genre:</h4> <h4 class="resultsText">' + item.primaryGenreName + '</h4><br>';
                searchResults += '<audio id="player" src="' + item.previewUrl + '" controls></audio>';
                searchResults += '</li>';
            }
            return searchResults;
        }
        $("#lightening").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        // $('#listitems').paginate({itemsPerPage: 10});
    }
});