$(document).ready(function () {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=ReZ9YnTAWanlS0GGZYuMLLdJI1NA1ZuS"
    var search = $("#search-term").val().trim()
    var startYear = $("#start-year").val().trim()
    var endYear = $("#end-year").val().trim()



    function search(event) {
        event.preventDefault();

        $.ajax({
            url: queryURL,
            method: "GET"
        })
    }


    // $("#run-search").click()

});