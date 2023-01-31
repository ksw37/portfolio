$(document).ready(function(){
    
    let ht=  $(window).height(); //윈도우의 높이를구해라 ht라고 하겠다
 
    $('article').height(ht) //아티클의 높이를 ht로 대입해라

 
    $(window).resize(function(){ //윈도우가 리사이즈될때마다 윈도우의 높이를구해라 ht라고 하고 아티클의 높이를 ht로 대입하겠다

        let ht=  $(window).height();

        $('article').height(ht)
     

    });
 
 
 
    $(window).scroll(function(){
 
     let sc= $(this).scrollTop(); //이 스크롤의 탑 값을 sc라고 하겠다
     
    
     $('.txt p').eq(0).find('span').text(sc); //txt 첫번째 p의 span에 찾아서 써라 스크롤 탑 값을
  
 


 
     // scrolltop이 header높이값보다 커질때 header는 fixde가 되어라.
 
     //헤더가 꼭대기에 올라갔을때 고정되게하기
 if(sc>hdht){  //스크롤 탑값이 헤더의 옵셋탑값 보다 클때 
 
     $('header').addClass('on') //헤더에 온 값을 더해줘라 position: fixed; top: 0; z-index: 10;
 }else {
     $('header').removeClass('on') //스크롤 탑값이 헤더의 옵셋탑값 보다 큰게 아니라면 온 값을 빼줘라
 }
 
 
    });
 
    let hdht= $('header').offset().top;
    let a1ht= $('article').eq(0).offset().top;
    let a2ht= $('article').eq(1).offset().top;
    let a3ht= $('article').eq(2).offset().top;
    let a4ht= $('article').eq(3).offset().top;
 
    $('.txt p').eq(1).find('span').text(a1ht);
    $('.txt p').eq(2).find('span').text(a2ht);
    $('.txt p').eq(3).find('span').text(a3ht);
    $('.txt p').eq(4).find('span').text(a4ht);
    $('.txt p').eq(5).find('span').text(hdht);
 
    

 
 
//메뉴 클릭하면 해당 페이지로 스크롤 이동하게하기
    //네비의 li를 클릭하면 동작해라
    $('nav li').click(function(){
 
     let i= $(this).index(); //이 순번을 i라고 하겠다 (1)
     let aht = $('article').eq(i).offset().top; // (3) 클릭한 나 자신의 아티클의 옾셋 탑 값을 aht 라고 하겠다


    //  $('html,body').stop().animate({scrollTop:a1ht},800) (2) -> 일일히 써줘야 하니까 변수를 다시 지정하기
    $('html,body').stop().animate({scrollTop:aht},800) //(4) 바디에 애니메이션을 줘라 클릭한 나 자신 아티클의 옵셋 탑 값을 스크롤 탒 값으로 0.8초 동안 움직여라 그리고 멈춰라

 
     
    })
    
 
 
 
 
 })