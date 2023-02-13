$(document).ready(function(){
    //새로고침할때마다 인풋의 오토포커스때문에 잇풋페이지로 가는데
    //바디의 html 스크롤탑을 0으로 만들어라
    $('body,html').scrollTop(0)

//토글 메뉴 설정
//메뉴를 클릭하면 작동라
$('header .menu_bar').click(function(){
    //메뉴바를 클릭하면 
    
    //네비가보여라
    $('nav').removeClass('on')
    $('nav').addClass('on')  

})


$('header .close_bar').click(function(){

    //클로즈바를 클릭하면

    //네비가 닫혀라
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




// 콜렉트 사진 움직이기
    // 화면에서 스크롤바가 움직일때 
    //상단의 위치값을 찾아라.
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        // $('h1').text(sc);
        $('.photo').stop().animate({'right':-sc/60},1000)
        $('.photo2').stop().animate({'left':-sc/60},1000)
    


    
    })

















// //패럴렉스스크롤링
// //프로덕트 동영상 움직이기
// let ht = $(window).height()
// $('section').height(ht)


// $(window).resize(function(){
//     $("body").smoothWheel()

//     let ht = $(window).height()
// $('section').height(ht)
// })

// $(window).scroll(function(e){
//     e.preventDefault()
//     let ht = $(window).height()
//     let sc= $(this).scrollTop();
//     let wd = $('.play ul').width();
//     let of = $('.play').offset().top;

//     $('body').height((ht*4)+wd);


//     if(sc>=of){
//         $('#all_wrap').addClass('on');

//         $('ul').css({'left':4400-sc})
       
//      }
//      if(sc<4400){

//          $('#all_wrap').removeClass('on');

//      }

// })

















})