function ToggleMenu() {
  const btns = document.querySelectorAll(".menu-item")
  const menu = document.querySelectorAll(".menu-list")
  const listWrap = document.querySelectorAll(".list-wrap")
  const dims = document.querySelectorAll(".dim")

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const show = menu[index].classList.contains("show-grid")
      const dim = dims[index].classList.contains("dim-show")
      if (!show || !dim) {
        menu.forEach((obj) => {
          obj.classList.remove("show-grid")
        })
        menu[index].classList.toggle("show-grid")
        dims.forEach((obj) => {
          obj.classList.remove("dim-show")
        })
        dims[index].classList.toggle("dim-show")
      } else {
        menu.forEach((obj) => {
          obj.classList.remove("show-grid")
        })
        dims.forEach((obj) => {
          obj.classList.remove("dim-show")
        })
      }
    })
    window.addEventListener('click', function(e) {
      if(e.target !== btns[index] && !listWrap[index].contains(e.target)) {
        menu[index].classList.remove("show-grid")
        dims[index].classList.remove("dim-show")
      }
    })
  })
}

function Hamburger() {
  const hamBtn = document.querySelector(".hamburger-menu")
  const hamDim = document.querySelector(".ham-dim")
  const hamMenu = document.querySelector(".ham-menu-list")
  const hamWrap = document.querySelector(".ham-list-wrap")

  hamBtn.addEventListener('click', function() {
    hamMenu.classList.toggle("ham-show")
    hamDim.classList.toggle("ham-show")
    
  })
  window.addEventListener('click', function(e) {
    if(e.target !== hamBtn && !hamWrap.contains(e.target)) {
      hamMenu.classList.remove("ham-show")
      hamDim.classList.remove("ham-show")
    }
  })
}


function Search() {
  const searchBtn = document.querySelector(".search-icon")
  const searchBar = document.querySelector(".search")
  const searchDim = document.querySelector(".search-dim")

  searchBtn.addEventListener('click', function() {
    searchBar.classList.toggle("show")
    searchDim.classList.toggle("dim-show")
  })
  window.addEventListener('click', function(e) {
      if(e.target !== searchBtn && !searchBar.contains(e.target)) {
        searchBar.classList.remove("show")
        searchDim.classList.remove("dim-show")
      }
    })
}

function fotterMenu() {
  const tits= document.querySelectorAll(".lnb-wrap")
  const list = document.querySelectorAll(".lnb-wrap ul")

  tits.forEach((tit, index) => {
    tit.addEventListener('click', () => {
      const show = list[index].classList.contains("lnb-show")
      if (!show) {
        list.forEach((obj) => {
          obj.classList.remove("lnb-show")
        })
        list[index].classList.toggle("lnb-show")
      } else {
        list.forEach((obj) => {
          obj.classList.remove("lnb-show")
        })
      }
    })
  })
}




function Region() {
  const regionBtn = document.querySelector(".region")
  const regionModal = document.querySelector(".modal-wrap")
  const regionSection = document.querySelector(".region-modal")
  const closeBtn = document.querySelector(".close")
  const bodyScrolling = document.querySelector("body")

  regionBtn.addEventListener('click', function() {
    regionModal.classList.toggle("show-modal")
    bodyScrolling.classList.toggle("stop-scrolling")
  })

  closeBtn.addEventListener('click', function() {
    regionModal.classList.toggle("show-modal")
    bodyScrolling.classList.toggle("stop-scrolling")
  })

  window.addEventListener('click', function(e){
    if(e.target !== regionBtn && !regionSection.contains(e.target)) {
      regionModal.classList.remove("show-modal")
    }
  })
}


ToggleMenu()
Search()
Region()
Hamburger()
fotterMenu()