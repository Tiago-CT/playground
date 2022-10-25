jQuery(document).ready(function($) {

	var controller = null;

	function scene() {
		controller = new ScrollMagic.Controller();

		var wH = $(window).height(),
			tl = new TimelineMax(),
			tween = tl
					.fromTo(".text", .5, {y: 0, autoAlpha: 1}, {y: -100, autoAlpha: 0}, .5)
					.fromTo(".contain-hero", 1, {scale: 2.5}, {scale: 1}, 1)
					.fromTo(".contain-hero .overlay", 1, {autoAlpha: 0.5}, {autoAlpha: 0}, 1),


			pinLaptop = new ScrollMagic.Scene({
					triggerElement: ".contain-hero",
					duration: (wH * 2) + (wH / 4),
					triggerHook: 0,
					offset: 0
				})
				.setPin(".contain-hero")
				.addTo(controller),


			laptop = new ScrollMagic.Scene({
					triggerElement: ".contain-hero",
					duration: (wH * 2) + (wH / 4),
					triggerHook: 0,
					offset: 0
				})
				.setTween(tween)
				.addTo(controller);
	}

	$(window).on("resize", function(){
		if ( controller !== null && controller !== undefined ) {
			controller = controller.destroy( true );
		}
		scene();
	});

	scene();

});