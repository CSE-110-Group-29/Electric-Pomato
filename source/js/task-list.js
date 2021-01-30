// get the task list from localStorage
let list = JSON.parse(localStorage.getItem("task_list"));

// if it doesn't exist, initialize a default one
if (list == null) {
    list = []
    saveList();
}
render();

// populate list on frontend
function render() {
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += `
        <tr>
            <td>${i + 1}</td>
            <td>${list[i].name}</td>
            <td>${list[i].expected}</td>
        </tr>`;
    }
    document.querySelector("tbody").innerHTML = str;
}

// add task to list object save to localstorage and render
function addTask(name, expected) {
    let task = {
        name: name,
        expected: expected,
        actual: 0
    }

    list.push(task);
    saveList();
    render();
}

// delete task at index i in list object, save to local storage, and render
function deleteTask(i) {
    list.splice(i, 1);
    saveList();
    render();
}

// save list object to local storage
function saveList() {
    localStorage.setItem("task_list", JSON.stringify(list));
}