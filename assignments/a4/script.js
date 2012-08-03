$(function() {
    $.ajax({
       type: "GET",
       dataType: "jsonp",
       cache: false,
       url: "https://api.instagram.com/v1/tags/olympics/media/recent?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
       success: function(data) {
           for (var i = 0; i < 31; i++) {
               $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");   
           }           
        }
    });
});

$(document).ready(function(){
    $("#olympics").bind("click",function(event){
        $(".instagram").empty();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/tags/olympics/media/recent?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
            success: function(data) {
                for (var i = 0; i < 31; i++) {
                    $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");   
                }           
            }
        });
    });

    $("#london").bind("click",function(event){
        $(".instagram").empty();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/tags/london/media/recent?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
            success: function(data) {
                for (var i = 0; i < 31; i++) {
                     $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");   
                }           
            }
        });
    });

    $("#olympictorch").bind("click",function(event){
        $(".instagram").empty();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/tags/olympictorch/media/recent?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
            success: function(data) {
                for (var i = 0; i < 31; i++) {
                    $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");   
                }           
            }
        });
    });

    $("#london-location").bind("click",function(event){
        $(".instagram").empty();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/media/search?lat=51.50939&lng=-0.11832&distance=50000?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
            success: function(data) {
                for (var i = 0; i < 31; i++) {
                    $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");   
                }           
            }
        });
    });

     $("#volleyball").bind("click",function(event){
        $(".instagram").empty();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/media/search?lat=51.50939&lng=-0.11832&distance=50000?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
            success: function(data) {
                for (var i = 0; i < 500; i++) {
                    var str1 = ""+data.data[i].tags;
                    var str2 = "volleyball";
                    if(str1.indexOf(str2) != -1){
                        $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");
                    }
                }           
            }
        });
    });

    $("#teamusa-tag").bind("click",function(event){
        $(".instagram").empty();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/tags/TeamUSA/media/recent?client_id=ef99d741e88345e5b3eaf58a5ee9a1d3&access_token=40612938.ef99d74.9a8fa56292f348a49e953b6286921c52",
            success: function(data) {
                for (var i = 0; i < 31; i++) {
                    $(".instagram").append("<div class='instagram-placeholder'><a target='_blank' href='" + data.data[i].images.standard_resolution.url +"' rel='lightbox' title='" + data.data[i].tags + "'><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");   
                }           
            }
        });
    });

});