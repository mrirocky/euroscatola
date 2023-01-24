jQuery('.r_tm_btn').on('click', function(){
  jQuery('.r_toggle_menu').slideToggle();
  jQuery('.r_tm_btn').toggleClass("active");
  jQuery('.header-section').toggleClass("toggle_active");
});
jQuery('.r_header_menu > ul > li.menu-item-has-children').prepend('<span class="r_mmtm_off r_tm_off"><i class="fa fa-times"></i></span>');
jQuery('.r_header_menu > ul > li.menu-item-has-children').on('click', function(){
  jQuery('.r_header_menu > ul > li.menu-item-has-children > .sub-menu').slideToggle();
  jQuery('.r_header_menu > ul > li.menu-item-has-children').toggleClass("sub_active");
  jQuery('.header-section').toggleClass("mm_toggle_active");
});
;(function($) {
	new WOW().init();
    $('.home_team_slider').owlCarousel({
        smartSpeed: 450,
        nav: false,
        loop: true,
        autoplay: true,
        dots: false,
        items: 1,
        margin: 0,
    });
    $('.r_hm_slider').owlCarousel({
        smartSpeed: 3000,
        nav: false,
        loop: true,
        autoplay: true,
        dots: false,
        items: 1,
        margin: 0,
    });
})(jQuery);
jQuery('.hover_btn').hover(
   function(){ 
   	jQuery('.r_img_hover').addClass('r_hover') 
   },
   function(){ 
   	jQuery('.r_img_hover').removeClass('r_hover') 
   }
)
