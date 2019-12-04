

$(function(){
    $(window).bind("resize",function(){
     if($(this).width() >768){
 
 
 // PARALLAX //
 
 
 var $layer_1 = $('.layer-1'),
     $layer_2 = $('.layer-2'),
     $container = $('section'),
     container_w = $container.width(),
     container_h = $container.height();
 
 $(window).on('mousemove.parallax', function(event) {
   var pos_x = event.pageX,
       pos_y = event.pageY,
       left  = 0,
       top   = 0;
 
   left = container_w / 2 - pos_x;
   top  = container_h / 2 - pos_y;
 
   
   TweenMax.to(
     $layer_2, 
     1, 
     { 
       css: { 
         transform: 'translateX(' + left / 4 + 'px) translateY(' + top / 2 + 'px)' 
       }, 
       ease:Expo.easeOut, 
       overwrite: 'all' 
     });
   
   TweenMax.to(
     $layer_1, 
     1, 
     { 
       css: { 
         transform: 'translateX(' + left / 14 + 'px) translateY(' + top / 7 + 'px)' 
       }, 
       ease:Expo.easeOut, 
       overwrite: 'all' 
     });
 
 });
 
 
     }
    }).resize();
 
 // ---------------------------------------------- //

  // GRID FILTER //

	var $grid = $('.grid');
	var $gridItem = $('.grid__item');
	
	$grid.masonry({ 
		itemSelector: '.grid__item'
	});
	
	$('button').click(function() {
		var filter = $(this).data('filter');
		 
		if (filter === 'reset') {
			$gridItem.appendTo($grid);
		} else { 
			$gridItem.appendTo($grid)
				.css('top', '')
				.not('[data-filter*="' + filter + '"]')
				.remove();
			}
		
		$grid.masonry("reloadItems").masonry();		
	});
	
    $('button').on('click', function(){
        $('button').removeClass('selected');
        $(this).addClass('selected');
    });
 
});
 