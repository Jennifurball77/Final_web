$(document).ready(function()
{
	$(window).scroll(function()
	{
		
		var howFarFromTop = $(window).scrollTop();

		console.log(howFarFromTop);

		if (howFarFromTop > 159)
		{
			$('#mainmenu').addClass('pinned');
		}
		else
		{
			$('#mainmenu').removeClass('pinned');
		}

	}); /*ends the window scroll*/


	$('#mainmenu nav a').click(function(event){
		event.preventDefault(); /*kill default jump to - we'll take it from here*/

		// manage chosen state
		$('#mainmenu nav a').removeClass('theOne');
		$(this).addClass('theOne');

		// manage the Scroll To


		var theHref = $(this).attr('href');
		console.log(theHref);

		var newLoc = $(theHref).offset().top - 140;

		$(window).scrollTo(newLoc, 1000);


	});


}); /*end doc ready*/