$(function () {
    var client_width = 0;
	var tablete_width = 1200;
	var now_type = "";

    //모바일 메뉴 열기
    $('.open_menu a').click(function () {
        $('.bgbk').fadeIn(300);
        $("header nav").animate({
            right: "0px",
            top: "0px"
        }, 500, function () {
            $("#wrap").css({
                position: "fixed"
            });
        });
        $('.close_menu').fadeIn(300);
    });

    //모바일 메뉴 닫기
    $('.close_menu a').click(function () {
        $('header nav').animate({
            right: "-100%"
        }, 500, function () {
            $("#wrap").css({
                position: "relative"
            });
        });
        $('.bgbk').fadeOut(300);
        $('.close_menu').fadeOut(300);
    });

    window.onresize = function () {
        client_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //document.body.clientWidth
        var temp_type = "";
        if (client_width > tablete_width) {
            temp_type = "pc";
        } else {
            temp_type = "ta";
        }

        if (now_type != temp_type) {
            now_type = temp_type;
            if (now_type == 'pc') {
                $('.bgbk').fadeOut(300);
                $("header nav").animate({
                    right: "-9999px"
                }, 700);
                $('.close_menu').hide(300);
            }

        }
    };

});
