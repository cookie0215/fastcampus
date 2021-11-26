/*
< 구구단 만들기 >
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
*/

const input = document.querySelector("input") 
const select = document.querySelector("select");
const result = document.getElementById("result");


for(let j=2; j<10; j++){
    // select안에 option태그 생성 및 2~9 단 넣기
    const options = document.createElement("option");
    options.innerHTML = j;
    select.append(options);

    for(let i=1; i<10; i++){
    
        // console.log(j*i);
    }
}