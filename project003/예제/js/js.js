// $(document).ready(function(){

//     let ht = $(window).height(); //윈도우의 높이값을 찾아라 그것을 ht라고 하겟다

//     $('section').height(ht); //섹션의 높이값을 ht로 대입해라

//     $('nav li').click(function(e){ //네비의 li를 클릭할떄 동작해라  //e(이벤트)작동해라
//         e.preventDfault(); //기존의 가지고 있던 겂은 지워라 (기존 a값 충돌해서 지워주기)

//         let i = $(this).index(); //클릭한 나 자신의 인덱스 값을 찾아라

//         // 스타일시트01번 적용 스크립트  $('html,body').stop().animate({scrollTop:ht*i},800,'aseInBounce') //html의 바디에 애니메이트를 줘라(스크롤탒값은 윈도우높이값*현재인덱스값),0.8초동안,j쿼리효과

//         $('section').removeClass('on')
//         $('section').eq(i).addClass('on')

//     });

//     //헤더가 나왔을때 섹션이 옆으로 밀리게 하기
//     //헤더의 와이드값을 구해서 빼준다
//     //윈도우의 와이드값을 구해라 그것을 wd라고 하겠다
//     //헤더의 와이드값을 구해라 그것을 hwd라고 하겠다
//     let wd = $(window).width();
//     let hwd = $('header').width();


//     $('#wrap').width(wd - hwd)

//     $('#wrap').css({left : hwd})

//   });



//     // 리사이즈될때마다 
//     $(window).resize(function () {
//         let wd = $(window).width();
//         let hwd = $("header").width();
//         let ht = $(window).height();
    
//         $("section").height(ht);
    
//         $("#wrap").width(wd - hwd);
    
//         $("#wrap").css({ left: hwd });
//       });



// 왜안되는거야--------------------------------------- })




$(document).ready(function () {
    let ht = $(window).height();
  
    $("section").height(ht);
  
    $("nav li").click(function (e) {
      e.preventDefault();
  
      let i = $(this).index();
  
      //  스타일시트 01번 적용스크립트 $('html,body').stop().animate({scrollTop:ht*i},800,'easeInBounce');
      $('section').removeClass('on')
      $('section').eq(i).addClass('on')
    });
  
    let wd = $(window).width();
    let hwd = $("header").width();
  
    $("#wrap").width(wd - hwd);
  
    $("#wrap").css({ left: hwd });
  
    $(window).resize(function () {
      let wd = $(window).width();
      let hwd = $("header").width();
      let ht = $(window).height();
  
      $("section").height(ht);
  
      $("#wrap").width(wd - hwd);
  
      $("#wrap").css({ left: hwd });
    });
  });
  