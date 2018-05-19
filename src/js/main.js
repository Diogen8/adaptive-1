$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      navText: ["<span class=\"slider-nav\"></nav>","<span class=\"slider-nav\"></nav>"]
  });
    
$(".menu__toggle").on("click", () => {
    $('.sidemenu__container').toggleClass("sidemenu__container_hidden");
    set_3_to_9();
});
    
    $(".side-menu__item").on("mouseenter", (e) => {
        let data = $(e.target).attr("data-title");
        let target;
        $('.submenu').each((number,element) => {
            if ($(element).attr("data-parent") == data) {
                target = element;
            }
        });
        if (target) {
            if ($(target).parent().hasClass('submenu_hidden') || e.relatedTarget.closest(".submenu") == null) {
                set_3_to_9();
                hideSubmenu();
                $(target).parent().removeClass('submenu_hidden');
                $(target).removeClass('submenu_hidden');
            }

        }
    });
    
    $(".side-menu__item").on("mouseleave", (e) => {
        if (e.relatedTarget.closest(".submenu") == null) {
           $('.sidemenu__container').removeClass("col");
        $('.sidemenu__container').removeClass("pr-0");
        $('.sidemenu__container').addClass("col-3");
        $('.right-container').removeClass("col");
        $('.right-container').addClass("col-9");
                hideSubmenu();
            }
    });
    
    $(".submenu").on("mouseleave", (e) => {
        console.log("target",e.target);
        hideSubmenu();
         set_3_to_9();
         
    })
});


function set_3_to_9() {
    if ($('.sidemenu__container').hasClass("col")) {
        
        $('.sidemenu__container').removeClass("col");
        $('.sidemenu__container').removeClass("pr-0");
        $('.sidemenu__container').addClass("col-3");
        $('.right-container').removeClass("col");
        $('.right-container').addClass("col-9");
        
    }
    else {
        $('.sidemenu__container').addClass("col");
        $('.sidemenu__container').addClass("pr-0");
        $('.sidemenu__container').removeClass("col-3");
        $('.right-container').addClass("col");
        $('.right-container').removeClass("col-9");
    }
   
}

function hideSubmenu() {
    $('.submenu').each((number,element) => {
             $(element).parent().addClass('submenu_hidden');
            $(element).addClass('submenu_hidden');
        });
}
 $.validate({
    lang: 'en'
  });