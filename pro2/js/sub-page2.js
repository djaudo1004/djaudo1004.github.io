
$(function(){
    $('#btn-cont1, #btn-cont1-1').click(function(){
         setTimeout(function() {
      AOS.refresh();
    }, 50); 
        $('#cont1').show();
        $('#cont1-1').hide();

        $('section.cont1 .imgbox .label').css('background','white');
        $('section.cont1 .imgbox .label a').css('color','#242817');
        $('section.cont1 .imgbox .label1').css('background','#242817');
        $('section.cont1 .imgbox .label1 a').css('color','#fdffdf');



    });
    $('#btn-cont2,#btn-cont2-1 ').click(function(){
         setTimeout(function() {
      AOS.refresh();
    }, 50); 
     $('section.cont1 .imgbox .label').css('background','#242817');
        $('section.cont1 .imgbox .label a').css('color','#fdffdf');
        $('section.cont1 .imgbox .label1').css('background','white');
        $('section.cont1 .imgbox .label1 a').css('color','#242817');

        $('#cont1-1').show();
        $('#cont1').hide();
    });

    $('#btn-mo-cont1,#btn-mo-cont1-1').click(function(){
        $('#cont1').show();
        $('#cont1-1').hide();
                $('section.cont1 #bt-box .lable1:nth-child(1)').css({'backgroundColor':'#242817' ,'color':'#fdffdf'});
        $('section.cont1 #bt-box .lable1:nth-child(2)').css({'backgroundColor':'#b3d2ba','color':'#242817'});
    });

    $('#btn-mo-cont2,#btn-mo-cont2-1').click(function(){
        $('section.cont1 #bt-box .lable1:nth-child(1)').css({'backgroundColor':'#b3d2ba' ,'color':'#242817'});
        $('section.cont1 #bt-box .lable1:nth-child(2)').css({'backgroundColor':'#242817','color':'#fdffdf'});
        $('#cont1-1').show();
        $('#cont1').hide();
    });
});
