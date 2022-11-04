import { todoList } from "./model/dotolist.js";

//set today in html
function getToday() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();

  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const day = days[d.getDay()];

  return `${day} ${month} ${date},${year}`;
}
const today = getToday();
document.querySelector(".card__title p").innerHTML = today;

let todo = new todoList();
todo.getLocalStore();

let addItem = () => {
  let input = document.querySelector("#newTask");
  if (input.value.trim() !== "") {
    todo.addTodo(input.value);
    todo.saveLocalStorage();
    input.value = "";
  } else {
    alert("Nhập công việc cần làm vào!");
  }
};

let renderItem = () => {
  let inCompleted = document.querySelector("#todo");
  let completed = document.querySelector("#completed");

  inCompleted.innerHTML = todo.renderTask(false);
  completed.innerHTML = todo.renderTask(true);
};
renderItem(todo.arrList);

//xoa task
window.delTask = (id) => {
  todo.delTalk(id);
  todo.saveLocalStorage();
  renderItem(todo.arrList);
};
//check task
window.checkTask = (id) => {
  todo.checkTask(id);
  todo.saveLocalStorage();
  renderItem(todo.arrList);
};

document.querySelector("#addItem").addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
  renderItem(todo.arrList)
});


document.querySelector("#one").addEventListener("click", () => {
    todo.checkAllTask(false);
    todo.saveLocalStorage();
    renderItem(todo.arrList);
   
});

//sort by name a-z
document.querySelector("#two").addEventListener("click", () => {
    todo.sorfByName(true);
    todo.saveLocalStorage();
    renderItem(todo.arrList)
});

//sort by name z-a
document.querySelector("#three").addEventListener("click", () => {
    todo.sorfByName(false);
    renderItem(todo.arrList)
});

//check all task
document.querySelector("#all").addEventListener("click", () => {
    todo.checkAllTask(true);
    todo.saveLocalStorage();
    renderItem(todo.arrList);
  
});



