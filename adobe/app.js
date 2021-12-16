
let button = document.querySelector(".menu-item")
let menu = document.querySelector(".menu-list")

button.onclick = () => {
  menu.classList.toggle("show-grid");
}

// function openClose() {
//   document.querySelector(".menu-list").classList.toggle("show-grid");
// }

document.addEventListener('click', function(e){
  if(e.target !== button && !menu.contains(e.target)) {
    menu.classList.remove("show-grid");
  }
})


// window.onclick = function(e) {
//   if(!e.target.matches(button)) {
//     for (i = 0; i < menu.length; i++) {
//       let openDropdown = menu[i];
//       if (openDropdown.classList.contains('show-grid')) {
//         openDropdown.classList.remove('show-grid');
//       }
//     }
//   }
// }