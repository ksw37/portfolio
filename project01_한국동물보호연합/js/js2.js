$(document).ready(function(){


    // 슬라이드설정------------------------------------


    $('.btn li').click(function(){

        let i = $(this).index(); 
        $('.slide li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'})
        $('.slide li').eq(i).css({'left':'100%'}).stop().animate({'left':'0'})

        $('.btn li').removeClass('on')
        $(this).addClass('on')
    });


        let a = 0

        let slide = setInterval(timer,2000);

        $('.wrap').mouseenter(function(){

        clearInterval(slide)
        })
        $('.wrap').mouseleave(function(){

        slide = setInterval(timer,2000);
        })


        function timer(){

            a++;
            if(a==3) a=0;
            $('.btn li').eq(a).trigger('click')
        }




    
        


    // 스크롤 설정, 원 움직이기-----------------------------

    $(window).scroll(function(){


        let sc = $(window).scrollTop() 
        // $('h2').text(sc) 

        if(sc<=2000){
            $('.circle').css({'left': +-5+'%','top': 1150, 'transform':'scaleX(1)'})
            $('body .circle img').css({'width':810,'height':565,})
        }
                
        if(sc>2000 && sc<4000){
            $('body .circle').css({'top':3100, 'left':100,'transform':'scaleX(-1)'})
            $('body .circle img').css({'width':810,'height':565,})
        }

        if(sc>4000 && sc<4900){
            $('body .circle').css({'top':5100, 'left':0,'transform':'scaleX(1)'})
            $('body .circle img').css({'width':710,'height':465,})
        }

        if(sc>4900 && sc<5000){
            $('body .circle img').css({'width':90,'height':90,})
        }
    

        
    })
    






    // 공지사항 탭바 설정-------------------------------
        $('.titleBox li').click(function(){

            let i = $(this).index();       
        
            $('.titleBox li').removeClass('on')
            $(this).addClass('on').css({'opacity':1})
            

            $('.txtBox ul').hide()
            $('.txtBox ul').eq(i).show()       
        


        
        })
        




    //svg설정 -------------------------------
    $('.prom li div .svgF').click(function(){

        let svg = $(this).index()
        $(this).css({'fill':'red'})
        
    })








    // 미디어쿼리 네비 설정
    // 클릭하면 보여라 없어져라 , on값을 더해라
    // svg를 클릭할때 작동해라
    $('header svg').click(function(){

        // svg를 클릭하면 nav가 보여라


        $('nav').removeClass('on')
        $('nav').addClass('on')        
    }) 

        //마우스가 떠나면 없어져라
        $('nav').mouseleave(function(){

            $('nav').removeClass('on')
        })


        


























    })











