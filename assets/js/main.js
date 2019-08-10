$(document).ready(function(){
	//cache some jQuery objects
	var transitionLayer = $('.loaded-transition'),
		transitionBackground = $('.transition-bg'),
		modalWindow = $('.loading'),
		bodyContainer = $('.body-container');


	function closeLoading() {
		bodyContainer.removeClass('hidden');
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
			transitionLayer.addClass('hidden');
			modalWindow.addClass('hidden');
		});
	}

	window.onload = function() {
		closeLoading();
	};

	modalWindow.click(function() {
	  closeLoading();
	});

	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
	$(document).keydown(function(e) {
	  kkeys.push( e.keyCode );
		if ( kkeys.toString().indexOf( konami ) >= 0 ) {
		  $(document).unbind('keydown',arguments.callee);
		  // do something awesome
		  $("body").addClass("konami");
		}
	});

	var bgaudio = document.getElementById("bgaudio");
	$('.toggle-audio').click(function() {
	  if (bgaudio.paused == false) {
	      bgaudio.pause();
	      $('.audio-on').addClass('hidden');
	      $('.audio-off').removeClass('hidden');
	  } else {
	      bgaudio.play();
	      $('.audio-on').removeClass('hidden');
	      $('.audio-off').addClass('hidden');
	  }
	});

	$('.toggle-awards').click(function() {
	  if ($('.toggle-awards').hasClass('show-awards')) {
	      $(this).removeClass('show-awards');
	      $('.awards-on').addClass('hidden');
	      $('.awards-off').removeClass('hidden');
	  } else {
	  		$(this).addClass('show-awards');
	  		$('.awards-on').removeClass('hidden');
	      $('.awards-off').addClass('hidden');
	  }
	});

	$(document).on('mousemove', function(e){
	  $('#mask-overlay').css({
	    left:  e.pageX - 225,
	    top:   e.pageY - 225
	  });
	});

});