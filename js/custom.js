 
jQuery(document).ready(function(){
 
   // TODO

});

 
jQuery(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
}); 


 