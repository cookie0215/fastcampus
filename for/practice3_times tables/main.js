/*
< 구구단 만들기 >
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
*/

const div = document.querySelector("div");
const table = document.createElement("table");
const btn = document.getElementById("btn");
let enableClick = true;

btn.addEventListener('click',e=>{
    e.preventDefault();
    
    if(enableClick){
        enableClick = false;
        timesTables();
    }
})

function timesTables(){
    
    // 2단 ~9단 표 제목 생성하는 DOM
    const tr = document.createElement("tr");
    for(let j=2; j<10; j++){
        let th = document.createElement("th");
        th.innerText = `${j}단`;
        div.append(table);
            table.append(tr);
        tr.append(th);
    }

    // 각 구구단에 1~9까지 계산된 값
    for(let i=1; i<10; i++){
        const tr = document.createElement("tr");
        for(let j=2; j<10; j++){
            let td = document.createElement("td");
            td.innerText = `${j}*${i} = ${j*i}`;
            
            div.append(table);
            table.append(tr);
            tr.append(td);
        }
    }
}

