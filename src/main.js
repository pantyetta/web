$(window).on('mousemove', function (e){
   $('#bg').css('top', ($(window).height()/2 - e.clientY) / 100 - 10 + "%");
   $(`#bg`).css('left', ($(window).width()/2 - e.clientX) / 100 - 10 + "%");
});