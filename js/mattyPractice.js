$(document).ready(function() {

$("#next_Track").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("nextTrack.png", "nextTrack_Ovr.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("nextTrack_Ovr.png", "nextTrack.png");
    });
});


$("#prev_Track").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("prevTrack.png", "prevTrack_Ovr.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("prevTrack_Ovr.png", "prevTrack.png");
    });
});




});

var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope) {

$scope.tracks = [
	{
"track" : "track 1",
"title" : "Bad Hoes My Bros",
"file" : "BadHoes"

	},


	]








});




