
$(function () { // voer functie uit zodra DOM klaar is
    $("#accordion").accordion({  animate: 1200,
        heightStyle: "content"});// de accordion functie van jQuery UI
});


$( ".selector" ).accordion({ heightStyle: "content"});
// $('h3').click(function () {
//     $(this).css({ 'color': 'black' })
// });


$('video').each(function () {
    var player = videojs(this,);

$(this).parents(".videosection").find(".rewind").click(function(){

	player.currentTime(player.currentTime() -10);
});
	
	var geklikt = true;
	
	$(".playPause").click(function(){
		if (!geklikt) {
			player.pause();
            geklikt = true;
             $('.playPause');

	}
	else {
		player.play();
		geklikt = false;
        $('.playPause');
    }


    });

});

$("video").each(function () {

  var checkVideo = $(this).parents(".videosection").find(".videoDone");

  checkVideo.click(function() {
          $(this).parents(".videosection").find(".videoDone")

  });

});

$(".menu-toggle").click(function(){
  $(".menu-toggle").toggleClass('active')
  $("checkbox").toggleClass('active')

});

// Wrap every letter in a span
$('.ml1 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml1 .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: function(el, i) {
        return 70 * (i+1)
      }
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: function(el, i, l) {
        return 80 * (l - i);
      }
    }).add({
      targets: '.ml1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 800
    });


var imgSrc = $("#logo").attr('src');

$('#switch').on('click', () => {

    if ($('#switch').prop('checked')) {
        $('body').addClass('dark');
        $("#logo").attr('src','img/logo-white@2x.png');
     } else {
        $('body').removeClass('dark');
        $("#logo").attr('src',imgSrc);
    }
})
