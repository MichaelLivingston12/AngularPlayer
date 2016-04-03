$(document).ready(function()
{
var userAgent = navigator.userAgent.toLowerCase();
var divScroll = $('#group4').offset().top;
	
	$('#mattyID').on('click', function(e){
	e.preventDefault();
        $('.parallax').scrollTo($('#group1'), 1000);	
		return false;	
		
	});
	
	
	$('#musicID').on('click', function(e){
	e.preventDefault();
        $('.parallax').scrollTo(document.getElementById('group5'), 1000);	
		return false;	
		
	});
	
	
	$('#imagesID').on('click', function(e){
		e.preventDefault();
        $('.parallax').scrollTo(document.getElementById('group4'), 1000);
		return false;
		
	});
	
$('#you_tubeID').on('click', function(e){
		e.preventDefault();
        $('.parallax').scrollTo(document.getElementById('group7'), 1000);
		return false;
		
	});	
	
	
if(navigator.userAgent.match(/(MSIE 9.0)/i) || navigator.userAgent.match(/(MSIE 10.0)/i) || navigator.userAgent.match(/(11.0)/i) )
	{
		    $('#mattySmokey').css({"height":"100%","width":"100%"});
			$('.parallax__layer.parallax__layer--fore').css({"margin-left":"-200px","height":"100%","width":"100%"});
		    $('#mattyTron').css({"height":"200px","width":"400px","float":"right"});
			$('.parallax__layer.parallax__layer--back').css({"margin-top":"125px","margin-left":"50%","background-size":"100% 100%","background-repeat":"no-repeat"});
			$('#track1').css({"width":"300px","height":"45px"});
			$('#track2').css({"width":"300px","height":"45px"});
			$('#track3').css({"width":"300px","height":"45px"});
			$('#track4').css({"width":"300px","height":"45px"});
			$('#track5').css({"width":"300px","height":"45px"});
			$('#track6').css({"width":"300px","height":"45px"});
		
		
	}
	
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#navbar_custom").css({"margin-right":"0px","max-height":"50px"});
		$(".navbar-toggle").remove();
		$(".navHeaderCollapse").remove();
		$("#group5").css({"height":"700px"});
		$("#group7").css({"height":"1000px"});
		$("#nav_links").remove();
		$("#HW_cover").css({"height":"300px","width":"300px"});
 
}
	
	
	
	
	
	

});






document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);