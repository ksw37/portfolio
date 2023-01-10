$(document).ready(function(){


    // body 높이값과 section의 가로값 통일시키기 
    // article갯수를 구하고(=size)  article의 가로값을 구해서 두개를 곱한값을 section의 가로값으로 변환
    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width(a*(aWd+20));
    $('body').height(a*(aWd+20));




    $(window).resize(function(){
    //  화면이 리사이즈 될때마다, body 높이값과 section의 가로값 통일시키기 

    // article갯수를 구하고  article의 가로값을 구해서 두개를 곱한값을 section의 가로값으로 변환
    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width(a*(aWd+20));
    $('body').height(a*(aWd+20));


    })





    // 화면에서 스크롤바가 움직일때 
    //상단의 위치값을 찾아라.

    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        // $('h1').text(sc);
        $('section').stop().animate({'left':-sc},600)



    });


    $('.gnb li').click(function(){

        let i = $(this).index();

    $('html,body').scrollTop(1000*i)
    })


})



















//(---1---) $(document).ready(function(){

    

//     // 화면에서 스크롤바가 움직일때 상단의 위치값을 찾아라

//     $(window).scroll(function(){ //window=this
//         let sc = $(window).scrollTop();
//         $('h1').text(sc); //구한 스크롤값을 h1자리에 써보여라
//         $('section').stop().animate({'left':-sc},600)//section에 animate를 걸어주겠다 왼쪽을 기준으로 스크롤했을때 -(반대)로 가라 0.6초안에 그리고 오류날수 있으니 멈춰라

//     })
// })


//구해라 = 변수