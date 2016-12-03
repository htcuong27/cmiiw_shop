//tab slide
$(document).ready(function () {
    var owl1 = $("#owl-prod-t1");
    var owl2 = $("#owl-prod-t2");
    var owl3 = $("#owl-prod-t3");
    owl1.owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    });
    owl2.owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    })
    owl3.owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    });
    var owlcol = $("#owl-col"); 
    	owlcol.owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        items: 6,
        itemsDesktop: [1140, 6],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
	 var owlimages = $("#owl-imgs"); 
    	owlimages.owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 5],
        itemsTablet: [768, 3],
        itemsMobile: [320, 2]
    });
	var owlrelate = $("#owl-relate");
		owlrelate.owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
	
	$('.product-image-block .images .item-imgs a').click(function() {
		var newImage = $(this).attr('href');
	$( '.product-image-block .featured-image img' ).attr({ src: newImage }); 
		return false;
	});

//deal slide    

    $('.more-view-wrapper-jcarousel ul').jcarousel({
        vertical: true
    }).css("visibility", "visible");

//quantity

    var action;
    $(".product-quantity .mathbtn").mousedown(function () {
        btn = $(this);
        input = btn.closest('.product-quantity').find('input');
        btn.closest('.product-quantity').find('.mathbtn').prop("disabled", false);

    	if (btn.attr('data-dir') == 'up') {
            action = setInterval(function(){
                if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                    input.val(parseInt(input.val())+1);
                }else{
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
    	} else {
            action = setInterval(function(){
                if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                    input.val(parseInt(input.val())-1);
                }else{
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
    	}
    }).mouseup(function(){
        clearInterval(action);
    });
	
	
	//Search
	$('.search-form #search-btn').click(function() { 
		$('.search-form #hidden-search').slideToggle(200); 
		$(this).toggleClass('active'); 
	}); 
	$('.search-form #search-btn,.search-form #hidden-search').click(function(e) { e.stopPropagation(); });
	$(document).click(function() { 
		$('.search-form #hidden-search').hide(); 
		$('.search-form #search-btn').removeClass('active');
	});
	
});