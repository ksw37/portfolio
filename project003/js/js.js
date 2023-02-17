$(document).ready(function(){

    let ht = $(window).height(); //윈도우의 높이값을 찾아라 그것을 ht라고 하겟다

    $('section').height(ht); //섹션의 높이값을 ht로 대입해라

    $('nav li').click(function(e){ //네비의 li를 클릭할떄 동작해라  //e(이벤트)작동해라
        e.preventDfault(); //기존의 가지고 있던 겂은 지워라 (기존 a값 충돌해서 지워주기)

        let i = $(this).index(); //클릭한 나 자신의 인덱스 값을 찾아라

        $('html,body').stop().animate({scrollTop:ht*i},800,'aseInBounce') //html의 바디에 애니메이트를 줘라(스크롤탒값은 윈도우높이값*현재인덱스값),0.8초동안,j쿼리효과
    })







// 헤더 네비 설정
// 클릭 누르면 보였다 안보였다 하기
$('header div').click(function(){

    $('header').addClass('on')
})

$('header').mouseleave(function(){

    $('header').removeClass('on')
})




// 헤더 네비의 클릭 텍스트 애니마
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });














})