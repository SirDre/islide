(function ($) {
	$.fn.iSlide = function (c) {
		var c = $.extend(true, $.fn.iSlide.defaults, c);
		return this.each(function () {
			var a = $(this);
			var b = {
				container: a,
				transitionInProgress: false,
				manualTransition: false,
				pausePresentation: false
			}; 
			
			iBillboard(c, b);
            displayBB(a, b);
			initCarrousel(a, b);
		})
	};
	$.fn.iSlide.defaults = {
		transitionsInterval: 4000,
		transitionsLength: 600
	};
	
	function iBillboard(e, f) {
		var g = f.container.find("div");
		f.images = [];
		g.each(function (a, b) {
			var c = jQuery(b).find("img");
			var d = jQuery(b).find("a");
			if (c.length >= 2) {
				f.images.push({
					title: $(b).find("span").text(),
					thumb: $(c[0]).attr("src"),
					large: $(c[1]).attr("src"),
					link: $(d[0]).attr("href")
				})
			}
		});
		f.images.current = 0;
		f.images.next = 1;
		g.remove()
	};	
   function displayBB(a, b) {
		with(b) {
			bb1.css({
				"background": "url(" + images[images.current].large + ") no-repeat"
			});
			bb2.css({
				"background": "url(" + images[images.next].large + ") no-repeat"
			});
			titleBar.html(images[images.current].title)
		}
		b.container.css("display", "block");
		b.billboardIntervalHandle = setInterval(function () {
			onBillboardTransition(a, b)
		},
		a.transitionsInterval)
	};
    function initCarrousel(a, b) {
		b.carrousel = $(document.createElement("ul")).attr("id", "carrousel");
		b.container.append(b.carrousel);
		for (var i = b.images.length - 1; i >= 0; i--) {
			var c = b.images[i];
			var d = '<li style="background:url(' + c.thumb + ') no-repeat"></li>';
			b.carrousel.append(d)
		}
  
		b.container.bind("mouseenter mouseleave", function (e) {
			b.downArrow.css("opacity", (e.type == "mouseenter") ? "8": "0")
		});
 
	};	
	
	
})(jQuery);
