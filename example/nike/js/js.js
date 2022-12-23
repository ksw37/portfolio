// #gnb>li:hover ul {
//     left: 205px;
//     opacity: 1;
//     }


let menu = document.querySelector('#gnb>li'); //#gnb>li 를 menu라고 부르겟다   //쿼리셀렉터는 첫번째 목록만 선택함->건바이건으로 잡기 힘드니 반복문으로 작성함(자바스크립트가 복잡하면 굳이 안써도 됌/상황에따라 다르게 사용)
let sub = document.querySelector('#gnb ul');

menu.addEventListener('mouseenter',
    function(event){
        sub.style.left = '205px' //sub라는 아이한테 스타일을 레프트 값을 205px넣겟다
        sub.style.opacity = 1

    })

