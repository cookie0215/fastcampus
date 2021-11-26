var things = ['냉장고', '코끼리', '기린'];
var steps = [
  '냉장고 문을 연다',
  '기린을 꺼낸다',
  '코끼리를 넣는다',
  '냉장고 문을 닫는다'
];

const ul = document.querySelector("ul");
const ol = document.querySelector("ol");


for(let i=0; i<things.length; i++){
    const li = document.createElement("li");
    li.innerHTML = things[i];
    ul.append(li);
}

for(let j=0; j<steps.length; j++){
    const li = document.createElement("li");
    li.innerHTML = steps[j];
    ol.append(li);
}