const inputField = document.querySelector(".input-field textarea"),
todoList = document.querySelector(".todolist"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button"),
calendarShow = document.querySelector(".wrapper"),
calendar = document.querySelector(".calendar-icon");

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoList.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todoList.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
  
    if(e.key ==="Enter" && inputVal.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

      todoList.insertAdjacentHTML("beforeend", liTag);
      inputField.value = "";
      allTasks();
    }
});

function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//deleting tasks with deleting icon
function deleteTask(e){
    e.parentElement.remove();
    allTasks();
}

//deleting all tasks with the button
clearButton.addEventListener("click", () =>{
    todoList.innerHTML = "";
    allTasks();
});

calendar.addEventListener("click", () => {
    if (calendarShow.style.display === "block") {
        calendarShow.style.display = "none";
    } else {
        calendarShow.style.display = "block";
    }
});