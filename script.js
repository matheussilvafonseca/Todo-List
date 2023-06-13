let input_tarefa = document.getElementById("tarefa");
let input_data = document.getElementById("data");
let table_tasks = document.getElementById("table_tasks");
let insert = document.getElementById("Inserir");
let order = document.getElementById("Ordenar");
let consult = document.getElementById("consultar");
let remove = document.getElementById("remover");
let task_array = [];

insert.addEventListener("click", inserir);
order.addEventListener("click", ordenarData);

function inserir() {

  let task = document.getElementById("tarefa").value;
  let date = document.getElementById("data").value;
  let tarefa = { Nome: task, Data: date, Check: 0, Style: "text-decoration: none;" };

  cabecalhoTasks();

  task_array.push(tarefa);

  conteudoTasks();
  
  input_tarefa.value = "";
  input_data.value = "";
}

function tarefaFeita(num) {
  let checkbox = document.getElementById("checkbox" + num);
  if (task_array[num].Check == 0) {
    task_array[num].Check = "checked";
    task_array[num].Style = "text-decoration: line-through";
    checkbox.checked = true;
    let linha = document.getElementById("tr" + num);
    linha.style = "text-decoration: line-through";
  } else {
    task_array[num].Check = 0;
    task_array[num].Style = "text-decoration: none";
    checkbox.checked = false;
    const linha = document.getElementById("tr" + num);
    linha.style = "text-decoration: none";
  }
}


function consultarTarefa(num) {
  input_tarefa.value = task_array[num].Nome;
  input_data.value = task_array[num].Data;
}

function ordenarData() {
  
    cabecalhoTasks();

    function comparar(a, b) {
      if (a.Data < b.Data) {
        return -1;
      } else if (a.Data > b.Data) {
        return 1;
      }
      return 0;
    }
    task_array.sort(comparar);
    console.log(task_array);

    conteudoTasks();
}

function cabecalhoTasks() {
  table_tasks.innerHTML = 
    `
        <tr>
            <th>Tarefa</th>
            <th>Data</th>
            <th>Feito</th>
        </tr>
    `;
}

function conteudoTasks() {
  for (let i = 0; i < task_array.length; i++) {
    table_tasks.innerHTML += 
        `
            <div id="div_tr${i}">
                <tr id="tr${i}" style="${task_array[i].Style}">
                    <td>${task_array[i].Nome}</td>
                    <td>${task_array[i].Data}</td>
                    <td><input type="checkbox" id="checkbox${i}" onclick="tarefaFeita(${i}) " ${task_array[i].Check}></td>
                    <td><button id="consultar" onclick="consultarTarefa(${i})">Consultar</button></td>
                    <td><button id="remover" onclick="removerTarefa(${i})">Remover</button></td>
                </tr>
            </div>
        `;
  }
}