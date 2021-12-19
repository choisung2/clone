function ToggleMenu() {
  const btns = document.querySelectorAll(".menu-item")
  const menu = document.querySelectorAll(".menu-list")
  const listWrap = document.querySelectorAll(".list-wrap")

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const show = menu[index].classList.contains("show-grid")
      if (!show) {
        menu.forEach((obj) => {
          obj.classList.remove("show-grid")
        })
        menu[index].classList.toggle("show-grid")
      } else {
        menu.forEach((obj) => {
          obj.classList.remove("show-grid")
        })
      }
    })
    window.addEventListener('click', function(e) {
      if(e.target !== btns[index] && !listWrap[index].contains(e.target)) {
        menu[index].classList.remove("show-grid")
      }
    })
  })
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