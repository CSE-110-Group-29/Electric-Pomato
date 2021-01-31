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
            <td class="text-right hide-actions">
                <div class="actions" data-id=${i}>
                    <i class="fas fa-pencil-alt text-warning edit-icon"></i>
                    <i class="fas fa-trash-alt text-danger delete-icon"></i>
                </div>
                <div class="edit-mode">
                    <i class="fas fa-check text-success save-icon"></i>
                    <i class="fas fa-times text-danger cancel-icon"></i>
                </div>
            </td>
        </tr>`;
    }

    str += `
    <tr id="new-task">
        <td><input type="text" disabled value="${list.length + 1}"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td class="text-right hide-actions">
            <button class="btn-small btn-success">Add Task</button>
        </td>
    </tr>
    `;

    document.querySelector("tbody").innerHTML = str;
    
    let button = document.querySelector("button");
    button.onclick = function() {
        addTask(...extractInputs(this.closest("tr")));
    }

    let newTaskInputs = document.querySelectorAll("#new-task input");
    for(let i = 1; i < 3; i++) {
        newTaskInputs[i].onkeyup = function (e) {
            clickIfEnter(e, button);
        }
        
        if(i == 1) {
            newTaskInputs[i].focus();
        }
    }

    document.querySelectorAll("tbody tr").forEach(function (el) {
        el.onmouseenter = function() {
            this.lastElementChild.classList.remove("hide-actions");
        }

        el.onmouseleave = function() {
            this.lastElementChild.classList.add("hide-actions");
        }
    });

    document.querySelectorAll(".actions").forEach(function(el) {
        let index = Number(el.dataset.id);

        el.firstElementChild.onclick = function() {
            render();
            editMode(index);
        };

        el.lastElementChild.onclick = function() {
            deleteTask(index);
        }
    });
}

function editMode(index) {
    let tr = document.querySelectorAll("tbody tr")[index];
    let actions = tr.querySelector(".actions");

    actions.style.display = "none";
    document.querySelector("#new-task").style.display = "none";

    let next = actions.nextElementSibling;
    next.style.display = "block";

    next.firstElementChild.onclick = function () {
        editTask(index, ...extractInputs(tr));
    }

    next.lastElementChild.onclick = function () {
        render();
    }

    for (let i = 0; i < 3; i++) {
        tr.children[i].innerHTML = `
        <input type="text" value="${tr.children[i].innerText}" ${i == 0 ? "disabled" : ""}>
        `;

        if (i == 1) {
            let nameInput = tr.children[i].firstElementChild;
            nameInput.focus();
            nameInput.setSelectionRange(nameInput.value.length, nameInput.value.length);
        }

        tr.children[i].firstElementChild.onkeyup = function(e) {
            clickIfEnter(e, next.firstElementChild);
        };
    }
}

function clickIfEnter(e, element) {
    if (e.code == "Enter") {
        element.click();
    }
}

function extractInputs(tr) {
    let inputs = tr.querySelectorAll("input");
    return [inputs[1].value, inputs[2].value];
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

// edit task at index i in list object, save to local storage, and render
function editTask(i, name, expected) {
    list[i].name = name;
    list[i].expected = expected;

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