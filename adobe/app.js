function ToggleMenu() {
  const btn = document.querySelectorAll(".menu-item")
  const menu = document.querySelectorAll(".menu-list")
  const listWrap = document.querySelectorAll(".list-wrap")

  function btn_click(idx){
    btn[idx].onclick = function() {
      menu[idx].classList.toggle("show-grid")
    }

    window.addEventListener('click', function(e) {
      if(e.target !== btn[idx] && !listWrap[idx].contains(e.target)) {
        menu[idx].classList.remove("show-grid")
      } 
    })
  }

  for(let i = 0; i < btn.length; i++) {
    btn_click(i)
  }

// obj.classList.add("show-grid")

  // const btn = document.querySelector(".menu-item")
  // const menu = document.querySelector(".menu-list")
  // const listWrap = document.querySelector(".list-wrap")

  // btn.onclick = () => {
  // menu.classList.toggle("show-grid")
  // }

  // window.addEventListener('click', function(e){
  //   if(e.target !== btn && !listWrap.contains(e.target)) {
  //     menu.classList.remove("show-grid")
  //   }
  // })
  
  // let button1 = document.querySelector(".bb")
  // let menu1 = document.querySelector(".aa")

  // button1.onclick = () => {
  //   menu1.classList.toggle("show-grid");
  // }

  // document.addEventListener('click', function(e){
  //   if(e.target !== button1 && !listWrap.contains(e.target)) {
  //     menu1.classList.remove("show-grid");
  //   }
  // })

  // let button2 = document.querySelector(".cc")
  // let menu2 = document.querySelector(".dd")

  // button2.onclick = () => {
  //   menu2.classList.toggle("show-grid");
  // }

  // document.addEventListener('click', function(e){
  //   if(e.target !== button2 && !listWrap.contains(e.target)) {
  //     menu2.classList.remove("show-grid");
  //   }
  // })

  // let button3 = document.querySelector(".ee")
  // let menu3 = document.querySelector(".ff")

  // button3.onclick = () => {
  //   menu3.classList.toggle("show-grid");
  // }

  // document.addEventListener('click', function(e){
  //   if(e.target !== button3 && !listWrap.contains(e.target)) {
  //     menu3.classList.remove("show-grid");
  //   }
  // })
}


function Search() {
  let searchBtn = document.querySelector(".search-icon")
  let serachBar = document.querySelector(".sung2")

  searchBtn.addEventListener('click', function() {
  serachBar.classList.toggle("show")
  })
}



function Region() {
  let regionBtn = document.querySelector(".region")
  let regionModal = document.querySelector(".modal-wrap")
  let regionSection = document.querySelector(".region-modal")
  let closeBtn = document.querySelector(".close")

  const bodyScrolling = document.querySelector("body")

  regionBtn.addEventListener('click', function() {
    regionModal.classList.toggle("show-modal")
    bodyScrolling.classList.toggle("stop-scrolling")
  })

  closeBtn.addEventListener('click', function() {
    regionModal.classList.toggle("show-modal")
    bodyScrolling.classList.toggle("stop-scrolling")
  })

  document.addEventListener('click', function(e){
    if(e.target !== regionBtn && !regionModal) {
      regionModal.classList.remove("show-modal")
    }
  })
}


ToggleMenu()
Search()
Region()