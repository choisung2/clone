//HTML element를 가져올 때 $를 관용적으로 사용한다. 재사용이 목적
const $ = (selector) => document.querySelector(selector);
// const $ = function query (selector) {
//   return document.querySelector(selector);
// }

const store = {
  setLocalStorage(listUp) {
    localStorage.setItem("listUp", JSON.stringify(listUp))
  },
  getLocalStorage() {
    localStorage.getItem("listUp");
  }
}


  let today = new Date();
  let yaer = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[today.getDay()];
  
  
  $(".label").innerText = yaer + '/' + month + '/' + date + '/' + day;


function App () {

  
  this.listUp = [];
  const updatedListCount = () => {
    const listCount = $("#todo-list").querySelectorAll("li").length
    $(".list-count").innerText = `${listCount}`
  }
  
  // const doneListCount = () => {
  //   const listCount = $("#todo-list").querySelectorAll("li").length
  //   // const a = $("#todo-list").querySelector(".done").length
  //   $(".list-count").innerText = parseInt(`${listCount}`- 1);
  // }

  // const doneListCount1 = () => {
  //   const doneCount = $("#todo-list").querySelector(".done")
  //   $(".list-count").innerText = `${listCount}`;
  // }

  const editedItemName = (e) => {
    const item = e.target.closest("li").dataset.item;
    const $itemName = e.target.closest("li").querySelector(".item-name");
    const updatedItemName = prompt("메뉴명을 수정하세요", $itemName.innerText);
    this.listUp[item].name = updatedItemName;
    store.setLocalStorage(this.item);
    $itemName.innerText = updatedItemName;
  }

  const removeItemName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
        e.target.closest("li").remove();
        updatedListCount();
      }
  }

  const doneItemName = (e) => {
    const $itemName = e.target.closest("li").querySelector(".item-name");
    $itemName.classList.toggle("done");
    if ($itemName.classList.contains("done")) {
      doneListCount();
    }
  }

  $("#todo-list").addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-btn")) {
      editedItemName(e);
    }

    if(e.target.classList.contains("remove-btn")) {
      removeItemName(e);
    }

    if(e.target.classList.contains("done-btn")) {
      doneItemName(e);
    }
  });


  //form 태그가 자동으로 전송되는 걸 막아준다
  $(".input-wrap").addEventListener("submit", (e) => {
    e.preventDefault(); //이벤트 막아주는 
  });

  // 메뉴의 이름을 입력받는다
  $("#list").addEventListener("keypress", (e) => {

    if (e.key !== "Enter") {
      return;
    }

    if ($("#list").value === "") {
      alert("입력하세요!")
      return;
    }

    if (e.key === "Enter") {
      const list = $("#list").value;
      this.listUp.push({ name: list});
      storage.setLocalStorage(this.listUp);
      const template = this.listUp.map((item, index) => {
         return `
        <li data-list-id="${index}" class="todo-item">
          <span class="item-name">${item.name}</span>
          <div class="item-btn">
            <button type="button" class="done-btn">완료</button>
            <button type="button" class="edit-btn">수정</button>
            <button type="button" class="remove-btn">삭제</button>
          </div>
        </li>`
      }).join("");

      //html에 list 추가
      $("#todo-list").innerHTML = template
      //목록 추가
      updatedListCount ();
      $("#list").value = "";
    }
  });
}


App();
// const app = new App();