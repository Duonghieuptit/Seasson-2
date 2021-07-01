//pElement = document.querySelector('p')

// pElement1 = document.getElementsByClassName('text')
// console.dir(pElement1);
//     for (let i = 0; i < pElement1.length; i++) {
//         const action = (e) => {
//         e.target.style.color = 'red'
//         }
//         pElement1[i].addEventListener('click', action)
//     }
//     console.log(pElement[0].style);


//const action = () => {
    
//}

//pElement.addEventListener('click', action)


// let button = document.getElementById('input');
//  const action = () => {
//     let input = document.getElementById('click');
//     pElement.innerHTML = input.value;
//  }
// button.addEventListener("click", action)
function action() {
   let x = document.getElementById("click").value;
   document.getElementById("demo").innerHTML = x;
}