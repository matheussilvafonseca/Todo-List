let input_tarefa = document.getElementById("tarefa");
let input_data = document.getElementById("data");
let table_tasks = document.getElementById("table_tasks");
let done = document.getElementById("checkbox");
let insert = document.getElementById("Inserir");
let consult = document.getElementById("consultar");
let remove = document.getElementById("remover");
let task_array = [];

insert.addEventListener('click', inserir);
done.addEventListener('click', tarefaFeita);

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
                <td><button id="consultar" onclick="consultarTarefa(${i})">Consultar</button></td>
                <td><button id="remover" onclick="removerTarefa(${i})">Remover</button></td>
                <br>
            </tr>
        `
    }
    input_tarefa.value = "";
    input_data.value = "";
}

function tarefaFeita(num) {
    
}

function consultarTarefa(num) {
    input_tarefa.value = task_array[num].Nome;
    input_data.value = task_array[num].Data;
}

function deletarTarefa(num) {
    alert("DEU CERTO!!!");
}

function ordenarData() {

}