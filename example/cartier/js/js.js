$(document).ready(function(){

    $('article').mouseenter(function(){
        let vid = $(this).find('video').get(0)
        // let vid1 = $(this).find('video').get(1)

        vid.currentTime=0 //처음으로 돌아가라 인데 플레이하기 전에 지정해 주어야 마우스 떠났다가 다시 올렸을때 처음부터 돌아감
        vid.play()
        

        $(this).stop().animate({'width':'35%'},1000)
        $(this).find('video').animate({'opacity':1},1200) //내꺼안에서 비디오를 찾아라 그리고 보이게해라 1.2초동안

        $(this).find('h3').stop().animate({'right':'50px'},800)
        $(this).find('p').stop().animate({'right':'50px'},1000)

    });




    $('article').mouseleave(function(){

        let vid = $(this).find('video').get(0)
        vid.pause() //마우스를 떠나도 동영상은 계속 돌아가고 있음=>그러니 떠나면 일시 정지 시켜놔야함
        
        $('article').stop().animate({'width':'12%'},1000)
        $(this).find('video').animate({'opacity':0},700)
        $(this).find('h3').stop().animate({'right':'300px'},800)
        $(this).find('p').stop().animate({'right':'-300px'},1000)

    })
})