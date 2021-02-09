/*

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
    // store html in string before setting for performance
    let str = "";

    // iterate through list and add html of row to the str
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

    // add the new task row
    str += `
    <tr id="new-task">
        <td><input name="number" type="text" disabled value="${list.length + 1}"></td>
        <td><input name="name" type="text"></td>
        <td><input name="expected" type="number"></td>
        <td class="text-right hide-actions">
            <button class="btn-small btn-success">Add Task</button>
        </td>
    </tr>
    `;

    // set the innerhtml of the tbody to html stored in str
    document.querySelector("tbody").innerHTML = str;

    // the button to add a new task
    let button = document.querySelector("button");
    // onclick, extract values of inputs and addTask()
    button.onclick = function() {
        addTask(...extractInputs(this.closest("tr")));
    }

    // format the inputs of new task row and click button on enter
    formatInputs(document.querySelector("#new-task"), button);

    // iterate through all tr tags in tbody
    document.querySelectorAll("tbody tr").forEach(function (el) {
        // when mouse enters row, unhide actions
        el.onmouseenter = function() {
            this.lastElementChild.classList.remove("hide-actions");
        }

        // when mouse leaves row, hide actions
        el.onmouseleave = function() {
            this.lastElementChild.classList.add("hide-actions");
        }
    });

    // iterate through each actions container
    document.querySelectorAll(".actions").forEach(function(el) {
        // find the index by typecasting data-id attribute
        let index = Number(el.dataset.id);

        // when edit button is clicked
        el.firstElementChild.onclick = function() {
            // render, which resets the view of any rows in edit mode
            render();
            // put the row at index in edit mode
            editMode(index);
        };

        // when delete button is clicked
        el.lastElementChild.onclick = function() {
            // delete the task at index
            deleteTask(index);
        }
    });
}

// puts the row at index in edit mode
function editMode(index) {
    // find the row to be put into edit mode
    let tr = document.querySelectorAll("tbody tr")[index];
    // find the actions container of the tr
    let actions = tr.querySelector(".actions");

    // hide the actions container
    actions.style.display = "none";
    // hide the new task row
    document.querySelector("#new-task").style.display = "none";

    // the edit-mode container, which is the next sibling
    let next = actions.nextElementSibling;
    // show the edit-mode container
    next.style.display = "block";

    // if the save icon is pressed
    next.firstElementChild.onclick = function () {
        // edit the task at index with values extracted from the current row
        editTask(index, ...extractInputs(tr));
    }

    // if the cancel icon is pressed
    next.lastElementChild.onclick = function () {
        // re render the page, which resets everything
        render();
    }

    // replace all text values in the row with their corresponding inputs
    tr.children[0].innerHTML = `
        <input name="number" type="number" value="${index + 1}" disabled>
    `;
    tr.children[1].innerHTML = `
        <input name="name" type="text" value="${list[index].name}">
    `;
    tr.children[2].innerHTML = `
        <input name="expected" type="number" value="${list[index].expected}">
    `;

    // format the inputs of the current row and click the save button on enter
    formatInputs(tr, next.firstElementChild);
}

// formats the inputs of a row and make it click the element on enter
function formatInputs(tr, element) {
    // iterate through all inputs in row
    tr.querySelectorAll("input").forEach(function (el) {
        // if input name isn't number(disabled)
        if (el.name != "number") {
            // on key up, click the element if event is enter
            el.onkeyup = function (e) {
                clickIfEnter(e, element);
            };

            // if input is name, focus at the end of the text
            if (el.name == "name") {
                el.focus();
                el.setSelectionRange(el.value.length, el.value.length);
            }
        }
    });
}

// click the element if the event code is enter
function clickIfEnter(e, element) {
    // check if event code is enter
    if (e.code == "Enter") {
        // click element
        element.click();
    }
}

// extract the name and estimated pomos of a row
function extractInputs(tr) {
    // get all the inputs in the row
    let inputs = tr.querySelectorAll("input");
    // name is the 2nd child, estimated pomo is 3rd
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

*/
