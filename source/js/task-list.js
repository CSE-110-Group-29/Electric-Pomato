// get the task list from localStorage
let list = JSON.parse(localStorage.getItem("task_list"));

// if it doesn't exist, initialize a default one
if (list == null) {
    list = []
    saveList();
}

render();

document.querySelector("tbody").addEventListener("mousemove", function(e) {
    document.querySelectorAll("tbody tr").forEach(function(el) {
        if (el == e.target.closest("tr")) {
            el.lastElementChild.classList.remove("hide-actions");
        } else {
            el.lastElementChild.classList.add("hide-actions");
        }
    });
});

document.querySelector("tbody").addEventListener("mouseleave", function(e) {
    document.querySelectorAll("tbody tr").forEach(function (el) {
        el.lastElementChild.classList.add("hide-actions");
    });
});

/*
document.querySelectorAll("tbody tr").forEach(function(el) {
    el.addEventListener("mouseenter", function(e) {
        console.log("enter");
        this.lastElementChild.classList.remove("hide-actions");
    });

    el.addEventListener("mouseleave", function (e) {
        console.log("leave");
        this.lastElementChild.classList.add("hide-actions");
    });
})
*/

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
                <div class="actions">
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

    document.querySelector("tbody").innerHTML = str;

    document.querySelectorAll(".edit-icon").forEach(function(el) {
        el.addEventListener("click", function (e) {
            editMode(this.closest("tr"));
        });
    });

    document.querySelectorAll(".delete-icon").forEach(function (el) {
        el.addEventListener("click", function (e) {
            deleteTask(Array.from(document.querySelectorAll(".delete-icon")).indexOf(this));
        });
    });

    document.querySelector("button").addEventListener("click", function(e) {
        addTask("", "");
        render();
        let trs = document.querySelectorAll("tr");
        editMode(trs[trs.length - 1]);
    });
}

function editMode(tr) {
    for (let i = 0; i < 3; i++) {
        tr.children[i].innerHTML = `
                <input type="text" value="${tr.children[i].innerText}" ${i == 0 ? "disabled" : ""}>
                `;
        if (i == 1) {
            let input = tr.children[i].firstElementChild;
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);
        }
    };

    tr.querySelector(".actions").style.display = "none";
    tr.querySelector(".edit-mode").style.display = "inline-block";

    tr.querySelector(".save-icon").onclick = function () {
        let inputs = tr.querySelectorAll("input");
        editTask(Array.from(document.querySelectorAll(".save-icon")).indexOf(this), inputs[1].value, inputs[2].value);
    }

    tr.querySelector(".cancel-icon").onclick = function () {
        render();
    }
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