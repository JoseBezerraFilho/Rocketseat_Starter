var itensLista = document.querySelector('#app ul')
var entrada = document.querySelector('#app input')
var botao = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('armazem')) || []
//renderizando os itens em tela
function renderTodos() {
    itensLista.innerHTML = ''

    for (todo of todos) {
        // console.log(todo)
        var todoElement = document.createElement('li')
        var textElement = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        todoElement.appendChild(textElement)
        todoElement.appendChild(linkElement)
        itensLista.appendChild(todoElement)
    }
}
renderTodos()

function addTodo() {
    var textElement = entrada.value
    todos.push(textElement)
    entrada.value = '' // limpa a entrada
    renderTodos()
    saveToStorage()
}

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

botao.onclick = addTodo

function saveToStorage() {
    
    localStorage.setItem('armazem', JSON.stringify(todos)) // localstorage - var global, todos - em json
}
