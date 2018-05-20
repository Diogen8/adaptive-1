var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var sideMenuDefaulState = $(".sidemenu__container").classList;

var subMenuDefaulState = $(".submenu__container").classList;

var rigthContainerDefaultState = $(".right-container").classList;


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<span class=\"slider-nav\"></nav>", "<span class=\"slider-nav\"></nav>"]
    });

    $(".menu__toggle").on("click", () => {
        if (width < 576) {
            showMenuMobile();
        } else {
            mainMenuToogle();
        }
    });

    $(".side-menu__item").on("mouseenter", (e) => {
        if (width > 992) {

            let data = $(e.target).attr("data-title");
            let target;
            $('.submenu').each((number, element) => {
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
                    $('.sidemenu__container').addClass("sidemenu__container_submenu-visible");
                }

            }
        } else {
            if (width > 576) {
                let data = $(e.target).attr("data-title");
                let target;
                $('.submenu').each((number, element) => {
                    if ($(element).attr("data-parent") == data) {
                        target = element;
                    }
                });
                if (target) {
                    if ($(target).parent().hasClass('submenu_hidden') || e.relatedTarget.closest(".submenu") == null) {

                        hideSubmenu();
                        $(target).parent().removeClass('submenu_hidden');
                        $(target).parent().addClass('submenu_absolute');
                        $(target).removeClass('submenu_hidden');
                        $('.sidemenu__container').addClass("sidemenu__container_submenu-visible");
                    }

                }
            }

        }

    });

    $(".side-menu__item").on("mouseleave", (e) => {
        console.log("mouse leave to", e.relatedTarget);
        if (width > 992) {
            if (e.relatedTarget.closest(".submenu__container") == null) {
                $('.sidemenu__container').removeClass("sidemenu__container_submenu-visible");
                //romove alternative grid
                $('.sidemenu__container').removeClass("col-lg");
                $('.sidemenu__container').addClass("col-lg-3 col-md-4");
                $('.right-container').removeClass("col-lg");
                $('.right-container').addClass("col-lg-9 col-md-8");
                hideSubmenu();
            }
        } else {
            if (width > 576) {
                if (e.relatedTarget.closest(".submenu__container") == null) {
                    hideSubmenu();
                }
            }
        }

    });

    $(".submenu").on("mouseleave", (e) => {
        if (width > 992) {
            hideSubmenu();
            set_3_to_9();
        } else {
            if (width > 576) {
                hideSubmenu();
            }
        }
    });

    $(".side-menu__item").on("click", (e) => {
        if (width < 576) {
            let e_target = e.target.closest(".side-menu__item");
            let data = $(e_target).attr("data-title");
            let target;
            $('.submenu').each((number, element) => {
                if ($(element).attr("data-parent") == data) {
                    target = element;
                }
            });
            if (target) {
                showSubmenuMobile(target);
            }
        }
    });



    $(window).swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if ($(event.path[0]).closest(".owl-carousel").length == 0 && width < 576) {
                if ($(".sidemenu__container").hasClass("sidemenu__container_hidden")) {
                    //if sidemenu hidden
                    if ($(".submenu__container").hasClass("submenu_hidden")) {
                        //and submenu hidden
                        if (direction == "right") {
                            showMenuMobile();
                        }
                    }
                } else {
                    //if sidemenu visible
                    if ($(".submenu__container").hasClass("submenu_hidden")) {
                        // and submenu hidden
                        if (direction == "left") {
                            hideMenuMobile();
                        }
                    } else {
                        if (direction == "right") {
                            hideSubmenuMobile();
                        }
                    }
                }
            }
        }

    });
});

function mainMenuToogle() {
    $('.sidemenu__container').toggleClass("sidemenu__container_hidden");
    set_3_to_9();
}

function hideSubmenu() {
    //hides all submenus
    $('.sidemenu__container').removeClass("sidemenu__container_submenu-visible");
    $('.submenu').each((number, element) => {
        $(element).parent().addClass('submenu_hidden');
        $(element).addClass('submenu_hidden');
    });
}

function showMenuMobile() {
    hideSubmenu();
    $('.sidemenu__container').removeClass("sidemenu__container_hidden");
    $('.sidemenu__container').addClass("sidemenu__container_absolute");
    $('.sidemenu__container').css("width", "0%");
    $('.sidemenu__container').animate({
        width: "80%"
    }, 100);
}

function hideMenuMobile() {
    hideSubmenu();
    $('.sidemenu__container').animate({
        width: "0%"
    }, 100, () => {
        $('.sidemenu__container').addClass("sidemenu__container_hidden");
        $('.sidemenu__container').removeClass("sidemenu__container_absolute");
    });
}

function showSubmenuMobile(target) {
    hideSubmenu();
    $(target).parent().removeClass('submenu_hidden');
    $(target).parent().addClass('submenu_absolute');
    $(target).removeClass('submenu_hidden');
    $(".submenu__container").css("display", "block");
    $(".submenu__container").css("width", "0%");
    $(".submenu__container").animate({
        width: "70%"
    }, 100);

}

function hideSubmenuMobile() {
    $(".submenu__container").css("width", "70%");
    $(".submenu__container").animate({
        width: "0%"
    }, 100, hideSubmenu());
    $(".submenu__container").css("width", "70%");

}

function returnToDefaults() {
    $(".sidemenu__container").removeClass("sidemenu__container_absolute");
    $(".sidemenu__container").addClass("sidemenu__container_hidden");
    $(".submenu__container").addClass("submenu_hidden");
    $(".submenu__container").removeClass("submenu_absolute");
    $('.sidemenu__container').addClass("col-lg");
    $('.sidemenu__container').removeClass("col-lg-3 col-md-4");
    $('.right-container').addClass("col-lg");
    $('.right-container').removeClass("col-lg-9 col-md-8");
}

function set_3_to_9() {
    //change default grid
    if ($('.sidemenu__container').hasClass("col-lg")) {
        $('.sidemenu__container').removeClass("col-lg");
        $('.sidemenu__container').addClass("col-lg-3 col-md-4");
        $('.right-container').removeClass("col-lg");
        $('.right-container').addClass("col-lg-9 col-md-8");

    } else {
        $('.sidemenu__container').addClass("col-lg");
        $('.sidemenu__container').removeClass("col-lg-3 col-md-4");
        $('.right-container').addClass("col-lg");
        $('.right-container').removeClass("col-lg-9 col-md-8");
    }

}

$(window).resize(function () {
    //in case of 'resizing lovers' 
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    returnToDefaults();
})

//validator
$.validate({
    lang: 'en'
});