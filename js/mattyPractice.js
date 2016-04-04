$(document).ready(function() {

$("#next_Track").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("nextTrack.png", "nextTrackOVR.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("nextTrackOVR.png", "nextTrack.png");
    });
});


$("#prev_Track").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("prevTrack.png", "prevTrackOVR.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("prevTrackOVR.png", "prevTrack.png");
    });
});

});














