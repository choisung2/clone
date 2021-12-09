//HTML element를 가져올 때 $를 관용적으로 사용한다. 재사용이 목적
const $ = (selector) => document.querySelector(selector);
// const $ = function query (selector) {
//   return document.querySelector(selector);
// }

function App () {
  const updatedListCount = () => {
    const listCount = $("#todo-list").querySelectorAll("li").length
    $(".list-count").innerText = `${listCount}`
  }
  
  const doneListCount = () => {
    const listCount = $("#todo-list").querySelectorAll("li").length
    // const a = $("#todo-list").querySelector(".done").length
    $(".list-count").innerText = parseInt(`${listCount}`- 1);
  }

  const doneListCount1 = () => {
    const doneCount = $("#todo-list").querySelector(".done")
    $(".list-count").innerText = `${listCount}`;
  }

  const editeItemName = (e) => {
    const $itemName = e.target.closest("li").querySelector(".item-name");
    const updatedItemName = prompt("메뉴명을 수정하세요", $itemName.innerText);
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
      editeItemName(e);
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
    e.preventDefault();
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
      const listItemTemp = (list) => {
        return `
        <li class="todo-item">
          <span class="item-name">${list}</span>
          <div class="item-btn">
            <button type="button" class="done-btn">완료</button>
            <button type="button" class="edit-btn">수정</button>
            <button type="button" class="remove-btn">삭제</button>
          </div>
        </li>`
      }
      //html에 list 추가
      $("#todo-list").insertAdjacentHTML("beforeend", listItemTemp(list));
      
      //목록 추가
      updatedListCount ();
      $("#list").value = "";
    }
  });
}


App();