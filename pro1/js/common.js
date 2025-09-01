$(function(){
    $('header .left-menu ul li:nth-child(1), header .left-menu>ul>li>.submenu').mouseover(function(){
        $('header .left-menu>ul>li>.submenu').stop().slideDown(300);
    });

    $('header .left-menu ul li').mouseout(function(){
        $('header .left-menu>ul>li>.submenu').stop().slideUp(500);
    });

    $('header .right-menu>ul>li, .submenubox ').mouseover(function(){
        $('.submenubox').stop().slideDown(500);
    });

    $('header .right-menu>ul>li , .submenubox').mouseout(function(){
        $('.submenubox').stop().slideUp(500);
    });



    $('.sub-tittle').click(function(){
        $(this).children('.sub-menu').stop().slideToggle();
        $(this).siblings('.sub-tittle').children('.sub-menu').hide();
    });

    $('.mo-header .right-menu>ul>li:nth-child(3)').click(function(){
        $('.mo-menu').show();
    });
    $('.mo-menu .head>ul>.icon1').click(function(){
        $('.mo-menu').hide();
    });

            $('.modal-close').click(function(){
                $('#guid').hide();
            });

});



