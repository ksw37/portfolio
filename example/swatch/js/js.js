$(document).ready(function(){

// 브라우저의 높이값 찾기-------------------------------------
let ht = $(window).height(); /*window=브라우저*/
console.log(ht)
// gnb의 높이를 찾아라
let gnbht = $('#gnb').height();
console.log(gnbht)
// gnb의 가로값을 찾아라
let gnbwd = $('#gnb').width();
console.log(gnbwd)

$('section').height(ht) //섹션의 높이값을 th로 바꿔라(200일때) -> $('section').height(200) 이렇게도 사용할수 있음


// 브라우저가 리사이즈될때마다, 
// 브라우저의 높이를 찾아
// section의 높이값에 대입해라.
$(window).resize(function(){
    let ht = $(window).height();
    $('section').height(ht)
})





// 마우스 움직임 찾아내기-------------------------------------
// 이미지 상세설정에서 지정한 위치 값
// .p11 {bottom: 20px;    right: 20px;}
// .p12 {bottom: -40px;    right: 130px;}
// .p13 {top: 180px;    right: 60px;}

// .p21 {bottom: -480px;    right: -180px;}
// .p22 {bottom: -40px;    right: 130px;}

// .p31 {bottom: 30px;    right: 180px;}
// .p32 {bottom: -270px;    right: 110px;}
// .p33 {bottom: -100px;    right: 50px;}

// .p41 {bottom: -120px;    right: 20px;}
// .p42 {bottom: -180px;    right: 0px;}

// bottom,top = 위아래이기 때문에 Y
// right,left = 좌우이기 때문에 X
// 대문자 구별 필수



// section 에서 마우스가 움직였을때,( , = function ) 이미지의 위치값을 바꾸어라.(이벤트를 발생해라)
$('section').mousemove(function(e){//e=event
let posx = e.pageX   //페이지의 x값(메서드)을 찾아내겟다
let posy = e.pageY

// 마우스 위치 확인하기 위해 띄우는 창
$('.box h2').eq(0).text(posx)
$('.box h2').eq(1).text(posy)


// $('.p11').css({bottom: 20,    right: 20}) //px값은 배줘도됌
$('.p11').css({'bottom': 20+posy/30,'right': 20+posx/30})  
//$('.p11').css({'bottom': posy,'right': posx}) 했을때
// right인 오른쪽에서 수치를 조절하기 때문에 역방향으로 움직이고 수치가 없기때문에 크게 움직임
// $('.p11').css({'bottom': 20-posy,'right': 20-posx})  그래서 수치(숫자) -로 지정하면 따라움직이게됌
// 그래도 범위가 넓으니 $('.p11').css({'bottom': 20+posy/30,'right': 20+posx/30})  분수로 나누어줌 & +조정효과

$('.p12').css({'bottom': 40-posy/30, 'right': 130-posx/30})
$('.p13').css({'bottom': 180+posy/30, 'right': 60+posx/30})

$('.p21').css({'bottom': -480-posy/30, 'right':-180-posx/30})
$('.p22').css({'bottom': -40+posy/30, 'right': 130+posx/30})

$('.p31').css({'bottom': 30-posy/30, 'right': 180-posx/30})
$('.p32').css({'bottom': -270+posy/30, 'right': 110+posx/30})
$('.p33').css({'bottom': 100-posy/30, 'right': 50-posx/30})

$('.p41').css({'bottom': -120-posy/30, 'right': 20-posx/30})
$('.p42').css({'bottom': -180+posy/30, 'right': 0+posx/30})



})







})


