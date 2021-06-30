const txt = document.querySelector("#newTodo");
const save = document.querySelector("#addTodo");
const list = document.querySelector("#todoList");
let countTodo = document.getElementById('taskCount');

let data = [];
function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `
    <li class="d-flex p-2 align-items-center" >
    <input class="delete" type="button" data-num="${index}" value="x"> ${item.content} 
    </li>`;
  });
  list.innerHTML = str;
  countTodo.textContent = data.length;
}
// 新增待辦功能
save.addEventListener("click", function (e) {
  if (txt.value == "") {
    alert("請輸入內容");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  data.push(obj);
  renderData();
  txt.value = "";
});
// 刪除待辦功能
list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    return;
  }
  let num = e.target.getAttribute("data-num");
  console.log(num);
  data.splice(num, 1);
  alert("刪除成功！");
  renderData();
});

