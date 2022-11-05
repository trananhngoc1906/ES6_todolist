export class todoList {
  arrList = [];

  addTodo = (input) => {
    let getId = () => {
      //lấy số id dau tien
      let id = 1;

      //kiểm tra số id trong arr có trùng hay không, nếu trùng thì xoay tiếp
      while (this.arrList.find((item) => item.id === id)) {
        id = Math.floor(Math.random() * 9999);
      }

      return id;
    };

    this.arrList.push({
      id: getId(),
      value: input,
      done: false,
    });
  };

 
  saveLocalStorage = () => {
    let arrLocal = JSON.stringify(this.arrList);
    localStorage.setItem("todoList", arrLocal);
  };


  getLocalStore = () => {
    if (localStorage.getItem("todoList")) {
      this.arrList = JSON.parse(localStorage.getItem("todoList"));
    }
  };

  checkTask = (id) => {
    let object = this.arrList.find((item) => item.id === id);
    object.done = !object.done;
  };

  delTalk = (id) => {
    this.arrList = this.arrList.filter((item) => item.id !== id);
  };

  checkAllTask = (boolean) => {
    this.arrList.map((item) => (item.done = boolean));
  };

  renderTask = (boolean) => {
    return this.arrList
      .filter((item) => item.done === boolean)
      .reduce((html, item) => {
        html += `<li>${item.value}    <span>
<i onclick='checkTask(${item.id})' class="fa-solid fa-${
          boolean ? "xmark-circle" : "check-circle"
        }"></i>
<i onclick='delTask(${item.id})' class="fa-solid fa-trash-can"></i>
</span>
</li>`;
        return html;
      }, "");
  };

  sorfByName(boolean) {
    this.arrList = this.arrList.sort((b, a) => {
      if (a.value < b.value) {
        return boolean ? 1 : -1;
      }
      return boolean ? -1 : 1;
    });
  }
}
