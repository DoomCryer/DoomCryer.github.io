$(function() {

	// Custom JS
$(".section_2").waypoint(function(){
  $(".section_2 .s2_item").each(function(index){
    var ths = $(this);
    setInterval(function(){
      ths.removeClass("s2_item-off").addClass("s2_item-on");
    }, 150*index);
  });
},{
  offset : "25%"
});

// $(".section_4 .item").equalHeights();

$(".section_1").waypoint(function(){
  $(".section_1 .s1_item").each(function(index){
    var ths = $(this);
    setInterval(function(){
      // ths.animated("fadeInUp", "fadeInUp");
      ths.addClass("animated").addClass("fadeInUp").css("opacity", "1");
    }, (index - index % 2) * 120);
  });
},{
  offset : "45%"
});

$(".section_6").waypoint(function(){
  $(".director").addClass("animated bounce").addClass("bounceInRight").css("opacity", "1");
},{
  offset : "200%"
});

   $(".main-title .forms").animated("fadeInRight", "fadeInRight");

   $(".forms").submit(function() {
        $.ajax(
          {
  			type: "POST",
  			url: "/js/mail.php",
  			data: $(this).serialize()
  		}
    ).done(function(m) {
        $.magnificPopup.open({
          items: {
            src: $('<div class="white-popup">Спасибо за заявку! Мы свяжемся с вами в ближайшее время.</div>'),
            type: 'inline'
          }
        });
  			setTimeout(function() {
  				$.magnificPopup.close();
  				$(".forms").trigger("reset");
  			}, 1500);
  		});
		return false;
	});

  $(".slider").owlCarousel({
    items:1,
    nav : true,
		navText : "",
		loop : true,
		autoplay : true,
    autoplayTimeout: 2000,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600
  });

  try{
    $.browserSelector();
    if($("html").hasClass("chrome")){
      $.smoothScroll();
    }
  } catch(err){

  };

  $("img, a").on("dragstart", function(event){event.preventDefault();});

});
