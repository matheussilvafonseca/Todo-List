let table_tasks = document.getElementById("table_tasks");
let trs = document.getElementsByTagName('tr');
let insert = document.getElementById("Inserir");
let task_array = [];

insert.addEventListener('click', inserir);

function inserir() {
    table_tasks.innerHTML = 
    `
        <tr>
            <th>Tarefa</th>
            <th>Data</th>
        </tr>
    `;
    let task = document.getElementById("tarefa").value;
    let date = document.getElementById("data").value;
    let tarefa = { Nome: task, Data: date };
    task_array.push(tarefa);
    for (let i = 0; i < task_array.length; i++) {
        table_tasks.innerHTML +=
        `
            <tr>
                <td>${task_array[i].Nome}</td>
                <td>${task_array[i].Data}</td>
                <td><button id="consultar">Consultar</button></td>
                <td><button id="remover">Remover</button></td>
                <br>
            </tr>
        `
    }
}

function ordenarData() {

}