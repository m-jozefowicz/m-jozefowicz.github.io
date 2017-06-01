
document.addEventListener('DOMContentLoaded', function(){

  kissuiScrollAnim.setOptions({
  'autoReset': false,
  // 'triggerOnInit': true
  })

	$(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 700);
	});

});

