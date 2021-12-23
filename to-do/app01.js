//HTML element를 가져올 때 $를 관용적으로 사용한다. 재사용이 목적
const $ = (selector) => document.querySelector(selector);

let today = new Date();
let yaer = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[today.getDay()];


$(".label").innerText = yaer + '/' + month + '/' + date + '/' + day;

function App () {

  const updateListCount = () => {
    const listCount = $("#todo-list").querySelectorAll("li").length;
    $(".list-count").innerText = `${listCount}`
  }

    //form 태그가 자동으로 전송되는 걸 막아준다
  $(".input-wrap").addEventListener("submit", (e) => {
    e.preventDefault(); //이벤트를 막아주는 메서드
  });


//👇👇 수정과 삭제 수정본

  // $("#todo-list").addEventListener("click", (e) => {
  //   const listNameEd = e.target.closest("li").querySelector(".item-name")
  //   if(e.target.classList.contains("edit-btn")) {
  //     listNameEd.contentEditable = true;
  //     listNameEd.focus();
  //   }
    
  //   if(e.target.classList.contains("remove-btn")){
  //     if (confirm("정말 삭제하시겠습니까?")) {
  //       e.target.closest("li").remove();
  //       updateListCount();
  //     }
  //   }

  //   if ($(".item-name").innerText === "") {
  //     e.target.closest("li").remove();
  //       updateListCount();
  //   }
  // })

  /// 👇👇  수정과 삭제 원본

  const editListName = (e) => {
    const $listNameEd = e.target.closest("li").querySelector(".item-name");
    const editedListName = prompt("수정하세요", $listNameEd.innerText);
    $listNameEd.innerText = editedListName;
  }

  const removeListName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      e.target.closest("li").remove();
      updateListCount();
    }
  }


  $("#todo-list").addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-btn")) {
      editListName(e);
    }

    if(e.target.classList.contains("remove-btn")){
      removeListName(e);
    }
  })


//👇👇 입력 
  const addListName = () => {
    //빈 값을 입력했을 때
    if ($("#list").value === "") {
      alert("입력하세요");
      return;
    }

    const listName = $("#list").value;
    const listTemplate = (listName) => {
      return `
        <li class="todo-item">
          <span class="item-name">${listName}</span>
          <div class="item-btn">
            <button type="button" class="done-btn">완료</button>
            <button type="button" class="edit-btn">수정</button>
            <button type="button" class="remove-btn">삭제</button>
          </div>
        </li>`
    }    
    $("#todo-list").insertAdjacentHTML("beforeend", listTemplate(listName));
    
    //목록 갯수 업데이트
    updateListCount();
    $("#list").value = "";
  }

  $(".submit").addEventListener("click", addListName);

  // 메뉴의 이름을 입력받는다
  $("#list").addEventListener("keypress", (e) => {
    //(빈값일 때)엔터키를 안눌렀을 때는 alert창 띄우지마라!
    if (e.key !== "Enter") {
      return;
    }
    addListName();
  });
}

App();