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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBpdGVtczogMSxcclxuICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz1cXFwic2xpZGVyLW5hdlxcXCI+PC9uYXY+XCIsXCI8c3BhbiBjbGFzcz1cXFwic2xpZGVyLW5hdlxcXCI+PC9uYXY+XCJdXHJcbiAgfSk7XHJcbiAgICBcclxuJChcIi5tZW51X190b2dnbGVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKFwic2lkZW1lbnVfX2NvbnRhaW5lcl9oaWRkZW5cIik7XHJcbiAgICBzZXRfM190b185KCk7XHJcbn0pO1xyXG4gICAgXHJcbiAgICAkKFwiLnNpZGUtbWVudV9faXRlbVwiKS5vbihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9ICQoZS50YXJnZXQpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgJCgnLnN1Ym1lbnUnKS5lYWNoKChudW1iZXIsZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwiZGF0YS1wYXJlbnRcIikgPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnc3VibWVudV9oaWRkZW4nKSB8fCBlLnJlbGF0ZWRUYXJnZXQuY2xvc2VzdChcIi5zdWJtZW51XCIpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldF8zX3RvXzkoKTtcclxuICAgICAgICAgICAgICAgIGhpZGVTdWJtZW51KCk7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnVfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnVfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoXCIuc2lkZS1tZW51X19pdGVtXCIpLm9uKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQuY2xvc2VzdChcIi5zdWJtZW51XCIpID09IG51bGwpIHtcclxuICAgICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiY29sXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJwci0wXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtM1wiKTtcclxuICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2xcIik7XHJcbiAgICAgICAgJCgnLnJpZ2h0LWNvbnRhaW5lcicpLmFkZENsYXNzKFwiY29sLTlcIik7XHJcbiAgICAgICAgICAgICAgICBoaWRlU3VibWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcIi5zdWJtZW51XCIpLm9uKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0XCIsZS50YXJnZXQpO1xyXG4gICAgICAgIGhpZGVTdWJtZW51KCk7XHJcbiAgICAgICAgIHNldF8zX3RvXzkoKTtcclxuICAgICAgICAgXHJcbiAgICB9KVxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRfM190b185KCkge1xyXG4gICAgaWYgKCQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuaGFzQ2xhc3MoXCJjb2xcIikpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiY29sXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJwci0wXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2wtM1wiKTtcclxuICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2xcIik7XHJcbiAgICAgICAgJCgnLnJpZ2h0LWNvbnRhaW5lcicpLmFkZENsYXNzKFwiY29sLTlcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkKCcuc2lkZW1lbnVfX2NvbnRhaW5lcicpLmFkZENsYXNzKFwiY29sXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykuYWRkQ2xhc3MoXCJwci0wXCIpO1xyXG4gICAgICAgICQoJy5zaWRlbWVudV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoXCJjb2wtM1wiKTtcclxuICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykuYWRkQ2xhc3MoXCJjb2xcIik7XHJcbiAgICAgICAgJCgnLnJpZ2h0LWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKFwiY29sLTlcIik7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU3VibWVudSgpIHtcclxuICAgICQoJy5zdWJtZW51JykuZWFjaCgobnVtYmVyLGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuYWRkQ2xhc3MoJ3N1Ym1lbnVfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoJ3N1Ym1lbnVfaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuICQudmFsaWRhdGUoe1xyXG4gICAgbGFuZzogJ2VuJ1xyXG4gIH0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
