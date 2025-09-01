$(function(){
    $('#white').click(function(){
        $('#mosow1').attr('src','img/2-mosow/mosow-car-white.png');
        $('#front').html('그랜드 화이트 <span id="back">Grand White</span>');
      
    });
    $('#black').click(function(){
        $('#mosow1').attr('src','img/2-mosow/mosow-car-black.png');
        $('#front').html('스페이스 블랙 <span id="back">Space Black</span>');
    });
    $('#gold').click(function(){
        $('#mosow1').attr('src','img/2-mosow/mosow-car-gold.png');
        $('#front').html('블레이징 골드 <span id="back">Blazing Gold</span>');
    });
    $('#blue').click(function(){
        $('#mosow1').attr('src','img/2-mosow/mosow-car-ultra marine.png');
        $('#front').html('울트라 마린 <span id="back">Ultra Marine</span>');
    });
    $('#gray').click(function(){
        $('#mosow1').attr('src','img/2-mosow/mosow-car-marble gray.png');
        $('#front').html('마블 그레이 <span id="back">Marble Gray</span>');
    });
    $('#green').click(function(){
        $('#mosow1').attr('src','img/2-mosow/mosow-car-green.png');
        $('#front').html('아마조니아 그린 <span id="back">Amazonia Green</span>');
    });


    $('.white1').click(function(){
        $('#img4').attr('src','img/2-mosow/mosow-carseat-white.jpg');
        $('#txt1 p').text('그레이 투톤 인테리어');
        $('#txt2 p').text('베이지 헤드라이닝');
    });
    $('.brown').click(function(){
        $('#img4').attr('src','img/2-mosow/mosow-carseat-brown.jpg');
        $('#txt1 p').text('브라운 인테리어');
        $('#txt2 p').text('브라운 헤드라이닝');
    });
    $('.black1').click(function(){
        $('#img4').attr('src','img/2-mosow/mosow-carseat-black.jpg');
        $('#txt1 p').text('블랙 인테리어');
        $('#txt2 p').text('블랙 헤드라이닝');
    });
    $('.gray1').click(function(){
        $('#img4').attr('src','img/2-mosow/mosow-carseat-blackage.jpg');
        $('#txt1 p').text('블랙엣지 인테리어');
        $('#txt2 p').text('블랙 헤드라이닝');
    });



});