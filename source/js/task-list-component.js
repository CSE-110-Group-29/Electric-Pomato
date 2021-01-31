class TaskList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="paper container">
                <table class="margin-bottom">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Estimated Pomos</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <button class="btn-block btn-primary">Add a task</button>
            </div>
        `;

        this.querySelector("button").addEventListener("click", (e) => {
            this.addTask("hello", 3);
        });

        this.list = JSON.parse(localStorage.getItem("task_list"));

        if (this.list == null) {
            this.list = []
            this.saveList();
        }

        this.render();
    }

    render() {
        let str = "";
        for (let i = 0; i < this.list.length; i++) {
            str += `
            <tr>
                <td>${i + 1}</td>
                <td>${this.list[i].name}</td>
                <td>${this.list[i].expected}</td>
            </tr>`;
        }

        this.querySelector("tbody").innerHTML = str;
    }

    addTask(name, expected) {
        let task = {
            name: name,
            expected: expected,
            actual: 0
        }

        this.list.push(task);
        this.saveList();
        this.render();
    }

    deleteTask(i) {
        this.list.splice(i, 1);
        this.saveList();
        this.render();
    }

    saveList() {
        localStorage.setItem("task_list", JSON.stringify(this.list));
    }
}

customElements.define("task-list", TaskList);