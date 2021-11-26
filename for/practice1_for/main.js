const oddArr = [];
const evenArr = [];

for(let num=1; num<=20; num++){
    if(num%2 === 0){
        evenArr.push(num);
    }else {
        oddArr.push(num);
    }
}
console.log(oddArr);
console.log(evenArr);