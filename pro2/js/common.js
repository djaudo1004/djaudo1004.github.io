    window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("header").style.top = "-60px";
    document.getElementById("logo").style.display= "none";
    document.getElementById("menu").style.justifyContent= "flex-end";
    } 
    else {
    document.getElementById("header").style.top = "0px";
    document.getElementById("logo").style.display= "flex";
     document.getElementById("menu").style.justifyContent= "space-between";
    }
};

$(function(){

    $('.mo-bt').click(function(){
        $(this).toggleClass('active');  
    });

    $('.mo-bt').click(function(){
        $('.mo-menu').toggle();
    });

    $('.mo-header .mo-menu>ul>.top').click(function(){
        $(this).children('.mo-header .mo-menu>ul>.top>.sub-menu').stop().slideToggle();
        $(this).siblings('.mo-header .mo-menu>ul>.top').children('.mo-header .mo-menu>ul>.top>.sub-menu').hide();
    });




                $(window).scroll(function() { 
                    if ($(this).scrollTop() > 2000) { 
                            $('#topBtn').fadeIn(); } 
                    else { 
                            $('#topBtn').fadeOut();
                            }
                    }); 

});

document.querySelectorAll('.mo-header .mo-menu>ul>.top>.sub-menu>li').forEach(function(item) {
    item.addEventListener('click', function() {
      const targetUrl = this.getAttribute('data-href');
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });

            $('.modal_header i').click(function(){
                $('#guid').hide();
            });

  });