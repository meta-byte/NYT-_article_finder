$(document).ready(function () {
    var queryURL = ""

    function searchArticles() {

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)
        })
    }

    function clearFunction() {
        $("#article-section").empty()
    }

    function buildQueryUrl() {
        var search = $("#search-term").val().trim()
        var startYear = "&begin_date=" + $("#start-year").val().trim() + "0101"
        var endYear = "&end_date=" + $("#end-year").val().trim() + "1231"
        var nyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
        queryURL = nyt + "q=" + search + startYear + endYear + "&api-key=ReZ9YnTAWanlS0GGZYuMLLdJI1NA1ZuS"
    }

    function addArticles() {

    }

    $("#run-search").click(function (event) {
        event.preventDefault();
        buildQueryUrl()
        searchArticles()
    })

    $("#clear-all").click(function () {
        clearFunction()
    })

});   