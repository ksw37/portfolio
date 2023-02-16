$(document).ready(function(){
    
    $('body,html').scrollTop(0)

//토글 메뉴 설정
$('header .menu_bar').click(function(){

    $('nav').removeClass('on')
    $('nav').addClass('on')  

})


$('header .close_bar').click(function(){

    $('nav').removeClass('on')

})





//메인 스크롤 마우스 효과


// 윈도우에서 마우스가 움직일때 이벤트 동작이 일어난다
$(window).mousemove(function(e){
    gsap.to(".cursor", {duration: .3, left: e.pageX +5, top: e.pageY -10})
            

    //좌표값 구하기
    let pageX = e.pageX;
    let pageY = e.pageY;


    let standardX = $(window).width() - pageX;
    let standardY = $(window).height() - pageY;



});


//scroll안으로 들어갔을때 , cursor에 class값을 넣어라. 

    $('.scroll').mouseenter(function(){
    
        $('.cursor').addClass('style1')
    })
    
    //scroll안에서 나왔을때 , cursor에 class값을 빼라. 
    $('.scroll').mouseleave(function(){
    
    $('.cursor').removeClass('style1')
    })


    $('.scroll').mouseenter(function(){
    
        $('.cursor').addClass('style1')
    })
    

    $('.scroll').mouseleave(function(){
    
    $('.cursor').removeClass('style1')
    })




// 콜렉트 사진 움직이기
    
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        // $('h1').text(sc);
        $('.photo').stop().animate({'left':-sc/55},1000)
        $('.photo2').stop().animate({'right':-sc/55},1000)
    


    
    })

    // //콜렉트 뷰올 호버값
    // $('.view').mouseenter(function(){

    //     $('.view').css({'background-color':'#000'})
    // })



// 프래그런스 동영상 움직이기

$('.fragrances article').mouseenter(function(){

        let vid = $(this).find('video').get(0)

        vid.currentTime=0
        vid.play()


        $(this).stop().animate({'width':'100%'},900)
        $(this).find('video').animate({'opacity':1},800)
        $(this).find('h4').stop().animate({'right':'50px'},800)
    
    })


    $('.fragrances article').mouseleave(function(){

        let vid = $(this).find('video').get(0)
        vid.pause()
        
        $('.fragrances article').stop().animate({'width':'12%'},800)
        $(this).find('video').animate({'opacity':0},600)
        $(this).find('h4').stop().animate({'right':'300px'},700)
        

    })


















})