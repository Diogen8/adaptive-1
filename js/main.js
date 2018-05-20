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
    console.log("restored");
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

$(window).resize(function (e) {
    //in case of 'resizing lovers'
    let new_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (new_width != width) returnToDefaults();
    width = new_width;
})

$(window).on("orientationchange", function() {
    console.log("orientation changed");
    returnToDefaults();
});

//validator
$.validate({
    lang: 'en'
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB3aWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA+IDApID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XHJcblxyXG52YXIgc2lkZU1lbnVEZWZhdWxTdGF0ZSA9ICQoXCIuc2lkZW1lbnVfX2NvbnRhaW5lclwiKS5jbGFzc0xpc3Q7XHJcblxyXG52YXIgc3ViTWVudURlZmF1bFN0YXRlID0gJChcIi5zdWJtZW51X19jb250YWluZXJcIikuY2xhc3NMaXN0O1xyXG5cclxudmFyIHJpZ3RoQ29udGFpbmVyRGVmYXVsdFN0YXRlID0gJChcIi5yaWdodC1jb250YWluZXJcIikuY2xhc3NMaXN0O1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9XFxcInNsaWRlci1uYXZcXFwiPjwvbmF2PlwiLCBcIjxzcGFuIGNsYXNzPVxcXCJzbGlkZXItbmF2XFxcIj48L25hdj5cIl1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIubWVudV9fdG9nZ2xlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aWR0aCA8IDU3Nikge1xyXG4gICAgICAgICAgICBzaG93TWVudU1vYmlsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1haW5NZW51VG9vZ2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zaWRlLW1lbnVfX2l0ZW1cIikub24oXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpZHRoID4gOTkyKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9ICQoZS50YXJnZXQpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgICAgICAkKCcuc3VibWVudScpLmVhY2goKG51bWJlciwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcImRhdGEtcGFyZW50XCIpID09IGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnc3VibWVudV9oaWRkZW4nKSB8fCBlLnJlbGF0ZWRUYXJnZXQuY2xvc2VzdChcIi5zdWJtZW51XCIpID09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0XzNfdG9fOSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVTdWJtZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0YXJnZXQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdzdWJtZW51X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmVDbGFzcygnc3VibWVudV9oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLmFkZENsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9zdWJtZW51LXZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHdpZHRoID4gNTc2KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9ICQoZS50YXJnZXQpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICAgICAgICAgICQoJy5zdWJtZW51JykuZWFjaCgobnVtYmVyLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcImRhdGEtcGFyZW50XCIpID09IGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0YXJnZXQpLnBhcmVudCgpLmhhc0NsYXNzKCdzdWJtZW51X2hpZGRlbicpIHx8IGUucmVsYXRlZFRhcmdldC5jbG9zZXN0KFwiLnN1Ym1lbnVcIikgPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVN1Ym1lbnUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0YXJnZXQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdzdWJtZW51X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoJ3N1Ym1lbnVfYWJzb2x1dGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKCdzdWJtZW51X2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLmFkZENsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9zdWJtZW51LXZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zaWRlLW1lbnVfX2l0ZW1cIikub24oXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VzZSBsZWF2ZSB0b1wiLCBlLnJlbGF0ZWRUYXJnZXQpO1xyXG4gICAgICAgIGlmICh3aWR0aCA+IDk5Mikge1xyXG4gICAgICAgICAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoXCIuc3VibWVudV9fY29udGFpbmVyXCIpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJzaWRlbWVudV9fY29udGFpbmVyX3N1Ym1lbnUtdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vcm9tb3ZlIGFsdGVybmF0aXZlIGdyaWRcclxuICAgICAgICAgICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2wtbGdcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLmFkZENsYXNzKFwiY29sLWxnLTMgY29sLW1kLTRcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2wtbGdcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtbGctOSBjb2wtbWQtOFwiKTtcclxuICAgICAgICAgICAgICAgIGhpZGVTdWJtZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPiA1NzYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQuY2xvc2VzdChcIi5zdWJtZW51X19jb250YWluZXJcIikgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVTdWJtZW51KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zdWJtZW51XCIpLm9uKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh3aWR0aCA+IDk5Mikge1xyXG4gICAgICAgICAgICBoaWRlU3VibWVudSgpO1xyXG4gICAgICAgICAgICBzZXRfM190b185KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHdpZHRoID4gNTc2KSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlU3VibWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zaWRlLW1lbnVfX2l0ZW1cIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh3aWR0aCA8IDU3Nikge1xyXG4gICAgICAgICAgICBsZXQgZV90YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnNpZGUtbWVudV9faXRlbVwiKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSAkKGVfdGFyZ2V0KS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICAgICAgJCgnLnN1Ym1lbnUnKS5lYWNoKChudW1iZXIsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJkYXRhLXBhcmVudFwiKSA9PSBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dTdWJtZW51TW9iaWxlKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQod2luZG93KS5zd2lwZSh7XHJcbiAgICAgICAgc3dpcGU6IGZ1bmN0aW9uIChldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICgkKGV2ZW50LnBhdGhbMF0pLmNsb3Nlc3QoXCIub3dsLWNhcm91c2VsXCIpLmxlbmd0aCA9PSAwICYmIHdpZHRoIDwgNTc2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIi5zaWRlbWVudV9fY29udGFpbmVyXCIpLmhhc0NsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9oaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHNpZGVtZW51IGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKFwiLnN1Ym1lbnVfX2NvbnRhaW5lclwiKS5oYXNDbGFzcyhcInN1Ym1lbnVfaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYW5kIHN1Ym1lbnUgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVudU1vYmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHNpZGVtZW51IHZpc2libGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJChcIi5zdWJtZW51X19jb250YWluZXJcIikuaGFzQ2xhc3MoXCJzdWJtZW51X2hpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgc3VibWVudSBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1lbnVNb2JpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlU3VibWVudU1vYmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1haW5NZW51VG9vZ2xlKCkge1xyXG4gICAgJCgnLnNpZGVtZW51X19jb250YWluZXInKS50b2dnbGVDbGFzcyhcInNpZGVtZW51X19jb250YWluZXJfaGlkZGVuXCIpO1xyXG4gICAgc2V0XzNfdG9fOSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU3VibWVudSgpIHtcclxuICAgIC8vaGlkZXMgYWxsIHN1Ym1lbnVzXHJcbiAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9zdWJtZW51LXZpc2libGVcIik7XHJcbiAgICAkKCcuc3VibWVudScpLmVhY2goKG51bWJlciwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuYWRkQ2xhc3MoJ3N1Ym1lbnVfaGlkZGVuJyk7XHJcbiAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcygnc3VibWVudV9oaWRkZW4nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TWVudU1vYmlsZSgpIHtcclxuICAgIGhpZGVTdWJtZW51KCk7XHJcbiAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9oaWRkZW5cIik7XHJcbiAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLmFkZENsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9hYnNvbHV0ZVwiKTtcclxuICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuY3NzKFwid2lkdGhcIiwgXCIwJVwiKTtcclxuICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IFwiODAlXCJcclxuICAgIH0sIDEwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVNZW51TW9iaWxlKCkge1xyXG4gICAgaGlkZVN1Ym1lbnUoKTtcclxuICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IFwiMCVcIlxyXG4gICAgfSwgMTAwLCAoKSA9PiB7XHJcbiAgICAgICAgJCgnLnNpZGVtZW51X19jb250YWluZXInKS5hZGRDbGFzcyhcInNpZGVtZW51X19jb250YWluZXJfaGlkZGVuXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJzaWRlbWVudV9fY29udGFpbmVyX2Fic29sdXRlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTdWJtZW51TW9iaWxlKHRhcmdldCkge1xyXG4gICAgaGlkZVN1Ym1lbnUoKTtcclxuICAgICQodGFyZ2V0KS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc3VibWVudV9oaWRkZW4nKTtcclxuICAgICQodGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcygnc3VibWVudV9hYnNvbHV0ZScpO1xyXG4gICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKCdzdWJtZW51X2hpZGRlbicpO1xyXG4gICAgJChcIi5zdWJtZW51X19jb250YWluZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgJChcIi5zdWJtZW51X19jb250YWluZXJcIikuY3NzKFwid2lkdGhcIiwgXCIwJVwiKTtcclxuICAgICQoXCIuc3VibWVudV9fY29udGFpbmVyXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgIHdpZHRoOiBcIjcwJVwiXHJcbiAgICB9LCAxMDApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVN1Ym1lbnVNb2JpbGUoKSB7XHJcbiAgICAkKFwiLnN1Ym1lbnVfX2NvbnRhaW5lclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjcwJVwiKTtcclxuICAgICQoXCIuc3VibWVudV9fY29udGFpbmVyXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgIHdpZHRoOiBcIjAlXCJcclxuICAgIH0sIDEwMCwgaGlkZVN1Ym1lbnUoKSk7XHJcbiAgICAkKFwiLnN1Ym1lbnVfX2NvbnRhaW5lclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjcwJVwiKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVyblRvRGVmYXVsdHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3RvcmVkXCIpO1xyXG4gICAgJChcIi5zaWRlbWVudV9fY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9hYnNvbHV0ZVwiKTtcclxuICAgICQoXCIuc2lkZW1lbnVfX2NvbnRhaW5lclwiKS5hZGRDbGFzcyhcInNpZGVtZW51X19jb250YWluZXJfaGlkZGVuXCIpO1xyXG4gICAgJChcIi5zdWJtZW51X19jb250YWluZXJcIikuYWRkQ2xhc3MoXCJzdWJtZW51X2hpZGRlblwiKTtcclxuICAgICQoXCIuc3VibWVudV9fY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwic3VibWVudV9hYnNvbHV0ZVwiKTtcclxuICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtbGdcIik7XHJcbiAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTMgY29sLW1kLTRcIik7XHJcbiAgICAkKCcucmlnaHQtY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtbGdcIik7XHJcbiAgICAkKCcucmlnaHQtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2wtbGctOSBjb2wtbWQtOFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0XzNfdG9fOSgpIHtcclxuICAgIC8vY2hhbmdlIGRlZmF1bHQgZ3JpZFxyXG4gICAgaWYgKCQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuaGFzQ2xhc3MoXCJjb2wtbGdcIikpIHtcclxuICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiY29sLWxnXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtbGctMyBjb2wtbWQtNFwiKTtcclxuICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2wtbGdcIik7XHJcbiAgICAgICAgJCgnLnJpZ2h0LWNvbnRhaW5lcicpLmFkZENsYXNzKFwiY29sLWxnLTkgY29sLW1kLThcIik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLmFkZENsYXNzKFwiY29sLWxnXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2wtbGctMyBjb2wtbWQtNFwiKTtcclxuICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtbGdcIik7XHJcbiAgICAgICAgJCgnLnJpZ2h0LWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiY29sLWxnLTkgY29sLW1kLThcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2luIGNhc2Ugb2YgJ3Jlc2l6aW5nIGxvdmVycydcclxuICAgIGxldCBuZXdfd2lkdGggPSAod2luZG93LmlubmVyV2lkdGggPiAwKSA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xyXG4gICAgaWYgKG5ld193aWR0aCAhPSB3aWR0aCkgcmV0dXJuVG9EZWZhdWx0cygpO1xyXG4gICAgd2lkdGggPSBuZXdfd2lkdGg7XHJcbn0pXHJcblxyXG4kKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwib3JpZW50YXRpb24gY2hhbmdlZFwiKTtcclxuICAgIHJldHVyblRvRGVmYXVsdHMoKTtcclxufSk7XHJcblxyXG4vL3ZhbGlkYXRvclxyXG4kLnZhbGlkYXRlKHtcclxuICAgIGxhbmc6ICdlbidcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
