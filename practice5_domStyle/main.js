const div = document.querySelector("div");

// div 클릭 시, changeStyle함수를 실행
div.addEventListener('click',e=>{
    e.preventDefault();
    changeStyle();
});

function changeStyle(){
    // prompt에 값을 입력 시, 담을 공간을 미리 생성
    let newStyle = {};

    // 빈 객체에 삽입할 key와 값을 설정
    newStyle.attribute = prompt('변경할 스타일 속성을 입력해주세요.');
    newStyle.value = prompt('입력한 속성에 알맞은 값을 입력해주세요.');

    console.log(newStyle);

    // prompt에 입력한 속성과 값을 해당 div요소에 반영시킨다.
    div.style[newStyle.attribute] = newStyle.value;
}