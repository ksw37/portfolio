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





// //패럴렉스스크롤링
// let ht = $(window).height()
// $('section').height(ht)


// $(window).resize(function(){
//     $('body').smoothWheel()

//     let ht = $(window).height()
//     $('section').height(ht)
// })

// $(window).scroll(function(e){
//     e.preventDefault()
//     let ht = $(window).height()
//     let sc = $(this).scrollTop();
//     let wd = $('.container ul').width();
//     let of = $('.container').offset().top;

//     $('body').height((ht*5)+wd);
//     if(sc<of){
//         $('.container').addClass('on');
//         $('ul').css({'left':3748-sc})
//     }
//     if(sc<3748){

//         $('.container').removeClass('on');
//     }












})


