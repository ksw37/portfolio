$(document).ready(function(){

    $('.search a').click(function(){

        $('.search').addClass('on')
    });





    // 메뉴를 호버했을떄 sub_menu 가 보여라
    $('.gnb li').mouseenter(function(){
        $('.sub_menu').slideDown()
    })

})