
				<!-- collapse panel script --> 
				/* collapse */


				function toggleChevron(e) {
					$(e.target)
					.prev('.panel-heading')
					.find("i.indicator")
				//.toggleClass('glyphicon-chevron-down glyphicon-chevron-right');


				//.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
			}
			$('#accordion').on('hidden.bs.collapse', toggleChevron);

			/* sub heading show hide  */

			$(document).ready(function(){
				$(".select").click(function(){
					$('p').removeClass("hide");
					$(this).toggleClass("hide");
				});
			});




					/* Tool Tip  */
		/*
		$(document).ready(function(){
		    $('[data-toggle="tooltip"]').tooltip();   
		});*/


		$('.example').tooltip();
