$(document).ready(function(){

    // 갤러리이미지움직임설정

    // 왼쪽버튼을 클릭시 이미지가 왼쪽으로 이동

    let i = 0
    $('.gallery .left').click(function(){

        if(i<5)i++;
        let gwd = $('.gallery li').width()

        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i-1).stop().animate({'opacity':0},100)
    })



    // 오른쪽버튼을 클릭시 이미지가 오른쪽으로 이동;


    $('.gallery .right').click(function(){

        if(i>0) i--;
        let gwd = $('.gallery li').width()

        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i).stop().animate({'opacity':1},100)
    })





    // 리뷰 움직임설정

    // 왼쪽버튼을 클릭시 이미지가 왼쪽으로 이동

    let a = 0
    $('.review .left').click(function(){

        if(a<3) a++;
        let rwd = $('.review li').width()


        $('.review ul').stop().animate({'left':a*-(rwd+3)},200)

        $('.review li').removeClass('on')
        $('.review li').eq(a).addClass('on')
        $('.review li').eq(a-1).stop().animate({'opacity':0},100)
        

    })


    // 오른쪽버튼을 클릭시 이미지가 오른쪽으로 이동;


    $('.review .right').click(function(){


        if(a>0) a--;
        // if(a>-2) a--;    => 오른쪽으로 더 이동하게 할수 있음 / 그러면 opacity값 따로 조정해야함 
        let rwd = $('.review li').width()

        $('.review ul').stop().animate({'left':a*-(rwd+3)},200)
        
        $('.review li').removeClass('on')
        $('.review li').eq(a).addClass('on')
        $('.review li').eq(a).stop().animate({'opacity':1},100)


    })











})