let div_tasks = document.getElementById("tasks");
let insert = document.getElementById("Inserir");
let task_array = [];

insert.addEventListener('click', inserir);

function inserir() {
    div_tasks.innerHTML = "";
    let task = document.getElementById("tarefa").value;
    let date = document.getElementById("data").value;
    let tarefa = { Nome: task, Data: date };
    task_array.push(tarefa);
    for (let i = 0; i < task_array.length; i++) {
        div_tasks.innerHTML +=
        `
            Tarefa: ${task_array[i].Nome}
            Data: ${task_array[i].Data}
            <button id="consultar">Consultar</button>
            <button id="remover">Remover</button>
            <br>
        `
    }
}

function ordenarData() {

}