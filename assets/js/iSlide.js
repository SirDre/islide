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
			ie6();
			iBillboard(c, b);
 
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
	
})(jQuery);
