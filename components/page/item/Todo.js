import { BaseComponent } from "../../baseComponent.js";
export class Todo extends BaseComponent {
    constructor(title, todo) {
        super('<section class="todo">\
        <h2 class="pageItemTitle todoTitle"></h2>\
        <div class="todoList">\
          <div>\
            <input type="checkbox" id="todoCheckbox"/>\
            <label for= "todoCheckbox" class= "todoLabel"></label>\
          </div>\
        </div>\
        <div><button class = "addMoreTodo">Add todo</button></div>\
    </section>');
        this.cnt = 1;
        const todoTitle = this.element.querySelector(".todoTitle");
        todoTitle.textContent = title;
        const todoCheckLabel = this.element.querySelector(".todoLabel");
        todoCheckLabel.textContent = todo;
        const addTodosBtn = this.element.querySelector(".addMoreTodo");
        addTodosBtn.onclick = () => {
            this.cnt++;
            const eleDiv = document.createElement("div");
            const eleInput = document.createElement("input");
            const confirmBtn = document.createElement("button");
            const cancelBtn = document.createElement("button");
            confirmBtn.setAttribute("class", "todoConfirmBtn");
            cancelBtn.setAttribute("class", "todoCancelBtn");
            eleInput.setAttribute("class", "addTodoInput");
            confirmBtn.textContent = "Confirm";
            cancelBtn.textContent = "Cancel";
            confirmBtn.onclick = () => {
                const labelValue = eleInput.value;
                const list = this.element.querySelector(".todoList");
                list.removeChild(eleDiv);
                const newDiv = document.createElement("div");
                const check = document.createElement("input");
                check.setAttribute("id", `checkBox${this.cnt}`);
                check.setAttribute("type", "checkbox");
                const label = document.createElement("label");
                label.setAttribute("for", `checkBox${this.cnt}`);
                label.setAttribute("class", "todoLabel");
                label.textContent = labelValue;
                newDiv.appendChild(check);
                newDiv.appendChild(label);
                list.appendChild(newDiv);
            };
            cancelBtn.onclick = () => {
                const list = this.element.querySelector(".todoList");
                list.removeChild(eleDiv);
            };
            eleDiv.appendChild(eleInput);
            eleDiv.appendChild(confirmBtn);
            eleDiv.appendChild(cancelBtn);
            const eleList = this.element.querySelector(".todoList");
            eleList.appendChild(eleDiv);
            eleInput.focus();
        };
    }
}
