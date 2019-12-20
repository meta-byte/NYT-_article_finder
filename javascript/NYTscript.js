$(document).ready(function () {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=ReZ9YnTAWanlS0GGZYuMLLdJI1NA1ZuS"
    var search = $("#search-term").val().trim()
    var startYear = $("#start-year").val().trim()
    var endYear = $("#end-year").val().trim()

    function searchArticles() {
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (reponse) {
            console.log(reponse)
        })
    }

    function clearFunction() {
        $("#article-section").empty()
    }


    $("#run-search").click(function (event) {
        event.preventDefault();
        searchArticles()
    })

    $("#clear-all").click(function () {
        clearFunction()
    })

});   