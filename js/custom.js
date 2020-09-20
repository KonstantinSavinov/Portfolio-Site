(function($) {
	
	"use strict";

	$(document).ready(function() {

		$(".revealator-delay1").addClass('no-transform');


		if ($('.grid').length) {
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}

		function checkSize() {
			if ($( document ).width() > 992) {
				var btn_hover = "";
				$(".btn").each(function() {
					var btn_text = $(this).text();
					$(this).addClass(btn_hover).empty().append("<span data-hover='" + btn_text + "'>" + btn_text + "</span>");
				});
			}
		}
		checkSize();
		window.addEventListener('resize', function () {
			checkSize();
		});

		var item = $(".grid li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}
		
		$(function(){
			$(".ajaxForm").submit(function(e){
				e.preventDefault();
				var href = $(this).attr("action");
				$.ajax({
					type: "POST",
					dataType: "json",
					url: href,
					data: $(this).serialize(),
					success: function(response){
						if (response.status == "success") {
							$(".form-inputs").css("display", "none");
							$(".box p").css("display", "none");
							$(".contactform").find(".output_message").addClass("success");
							$(".output_message").text("Message Sent!");
						} else {
							$(".tabs-container").css("height", "440px");
	
							$(".contactform").find(".output_message").addClass("error");
							$(".output_message").text("Error Sending!");
						}
					}
				});
			});
		});
	});

})(jQuery);
