$(document).ready(function(){


    // btn을 클릭했을때 slide li가 이동해라

    $('.btn li').click(function(){ //버튼의 li를 클릭할때 펑션이 일어난다

        let i = $(this).index(); 
        $('.slide li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'})
        $('.slide li').eq(i).css({'left':'100%'}).stop().animate({'left':'0'})

        $('.btn li').removeClass('on')
        $(this).addClass('on')
    });



        // 일정시간 간격으로 버튼을 순차적으로 자동으로 클릭해라=돌아가라                
        
        let a = 0

        let slide = setInterval(timer,2000);

        $('.wrap').mouseenter(function(){

        clearInterval(slide) //클리어인터벌은 셋인터벌을 멈추는 역할만함
        })
        $('.wrap').mouseleave(function(){

        slide = setInterval(timer,2000);
        })


        function timer(){

            a++;
            if(a==3) a=0;
            $('.btn li').eq(a).trigger('click')
        }


})