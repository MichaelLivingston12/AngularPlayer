$(document).ready(function()
{
var userAgent = navigator.userAgent.toLowerCase();

	

	if(navigator.userAgent.match(/(firefox)/i))
	{
		    
          var html = '<iframe width="853" height="480" src="https://www.youtube.com/embed/dQmm2HgZFW8" frameborder="0" allowfullscreen></iframe> <br> <br> <br> <br> <iframe width="853" height="480" src="https://www.youtube.com/embed/cYVtDA88rKw" frameborder="0" allowfullscreen></iframe>';
             $('#video_parent').append().html(html);
             return false;
	
	}	
	
	
	
if(navigator.userAgent.match(/(MSIE 9.0)/i) || navigator.userAgent.match(/(MSIE 10.0)/i) )
	{
		
		$('#track1').css({"width":"300px","height":"45px"});
		$('#track2').css({"width":"300px","height":"45px"});
		$('#track3').css({"width":"300px","height":"45px"});
		$('#track4').css({"width":"300px","height":"45px"});
		$('#track5').css({"width":"300px","height":"45px"});
		$('#track6').css({"width":"300px","height":"45px"});
		$('#track7').css({"width":"300px","height":"45px"});
		$('#track8').css({"width":"300px","height":"45px"});
		$('#track9').css({"width":"300px","height":"45px"});
		$('#track10').css({"width":"300px","height":"45px"});
		$('#track11').css({"width":"300px","height":"45px"});
		$('#track12').css({"width":"300px","height":"45px"});
		
		
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



