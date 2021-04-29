
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000亲爱的王墨", 
				"Dear&nbsp;&nbsp;^200WangMo<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today is the 877th day we've been together.&nbsp;&nbsp;^300Lately, I've been acting stupid things to upset you.&nbsp;&nbsp;^200But I'm sure you know i don't mean to.&nbsp;&nbsp;^600I can't promise I won't annoy you later,&nbsp;&nbsp;but i can promise that i will always have a loving heart.&nbsp;&nbsp;^600I hope we can tolerate each other in the future.&nbsp;&nbsp;^200We were meant to grow old together.&nbsp;&nbsp;^600Later in life,&nbsp;&nbsp;^200we deal with all kinds of difficulties together.&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Je t’aime,^300 chère femme.&nbsp;&nbsp;^600Je&nbsp;^300t’aimerai&nbsp;^600toujours!!!!"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
