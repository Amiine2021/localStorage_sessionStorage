// sessionStorage.name = "ali";

// sessionStorage.age = JSON.stringify(25)  ;
// sessionStorage.setItem('skils', JSON.stringify([1,2,3]))
// console.log( JSON.parse(sessionStorage.skils) );
// let txt = document.getElementById('txt')

// if(sessionStorage.length  > 0){
//    txt.value = sessionStorage.txt
// }
// txt.onkeyup = function(){
//     sessionStorage.setItem('txt',txt.value)
// }


if(localStorage.length > 0){
    document.body.style.background = localStorage.color;
}
function setColor(color){
    localStorage.setItem('color' , color)
    document.body.style.background = color;
}