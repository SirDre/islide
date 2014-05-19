(function ($) {
	$.fn.iSlide = function (a) {
		var a = $.extend(true, $.fn.iSlide.defaults, a);
		return this.each(function () {
			var istart = $(this);
			var iOptions = {
				container: istart,
				transitionInProgress: false,
				manualTransition: false,
				pausePresentation: false
			};
		 
 
		})
	};
	
	$.fn.iSlide.defaults = {
		transitionsInterval: 5000,
		transitionsLength: 600
	};	
	
})(jQuery);
