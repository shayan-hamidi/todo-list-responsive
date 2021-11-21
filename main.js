let todos = []
function render() {
    document.getElementById("renderLink").style.color="#6985f5";
    document.getElementById("completedLink").style.color="#777a92";
    document.getElementById("activeLink").style.color="#777a92";
    let allList ="";
    todos.forEach((todo,index) => {
        if (todo.done) {
            let rendermylist = `<div class="todo-row-box row-done" draggable="true">
            <div class="todo-row">
            <div class="checkButton checkButtonTrue" type="checkbox" onclick="selected(${index})"></div>
            <span class="todo-titr todo-titr-done">${todo.text}</span>
            </div>
            <button class="delete-icon" onclick="this.parentElement.style.display = 'none';"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path></svg></button>
            </div>`;   
            allList = allList + rendermylist;
        }else{
            let rendermylist = `<div class="todo-row-box">
            <div class="todo-row">
            <div class="checkButton checkButtonFalse" type="checkbox" aria-label="add-input" onclick="selected(${index})"></div>
            <span class="todo-titr todo-titr-false">${todo.text}</span>
            </div>
            <button class="delete-icon" onclick="this.parentElement.style.display = 'none';"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path></svg></button>
            </div>`;
            allList = allList + rendermylist;
        }
    });
    document.getElementById("todo-list").innerHTML = "";
    document.getElementById("todo-list").innerHTML = allList;
    let dark = document.getElementById("moonDark")
    if (dark.style.display == "none") {
        let rowBoxElements = document.getElementsByClassName('todo-row-box');
        for(let i = 0; i < rowBoxElements.length; i++){
            let str = rowBoxElements[i];
            str.style.backgroundColor = "#25273c";
                } 
    }
    renderItemCount()
    saved()
}
document.getElementById("list-input").addEventListener("keypress",function(event){
    if (event.key === 'Enter') {
        let listObj = {text : "",done: false};
        listObj.text = document.getElementById("list-input").value;
        todos.push(listObj)
        render(todos)
        document.getElementById("list-input").value =""
    }
});
  // *********************ADDINPUT()**************************
function addInput() {
    let listObj = {text : "",done : false};
    listObj.text = document.getElementById("list-input").value;
    todos.push(listObj)
    render(todos)
    }
 // *********************SELECTED()**************************
function selected(index) {    
    if (todos[index].done) {
        todos[index].done = false;
    }else{
        todos[index].done = true;
    }
  render(todos)  
}
  // *********************RENDERITEMCOUNT()**************************
function renderItemCount() {
    let count = 0;
    todos.forEach(todo => {
        if (!todo.done) {
           count = count +1;
        }
    })
    document.getElementById("count-items-todo").innerHTML = `${count}` + " items left";
}
renderItemCount()
  // *********************LOCAL STORAGE**************************
getSaved()
function saved() {
    let jsonObject = JSON.stringify(todos)
    window.localStorage.setItem("savedItems",jsonObject)
}
function getSaved() {
    if (window.localStorage.getItem("savedItems") != undefined) {
        let jsonObject = JSON.parse(window.localStorage.getItem("savedItems"))
        todos = jsonObject;
        render(todos)
    }
    }
            // *********************active()**************************
    function active(index) {
        document.getElementById("activeLink").style.color="#6985f5";
        document.getElementById("completedLink").style.color="#777a92";
        document.getElementById("renderLink").style.color="#777a92";
        let allList ="";
        todos.forEach((todo,index) => {
            if (!todo.done) {
                    let rendermylist = `<div class="todo-row-box">
                    <div class="todo-row">
                    <div class="checkButton checkButtonFalse" type="checkbox" aria-label="add-input" onclick="selected(${index})"></div>
                    <span class="todo-titr">${todo.text}</span>
                    </div>
                    <button class="delete-icon" onclick="this.parentElement.style.display = 'none';"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path></svg></button>
                    </div>`;
                    allList = allList + rendermylist;
                }
        });
        document.getElementById("todo-list").innerHTML = "";
        document.getElementById("todo-list").innerHTML = allList;
        let dark = document.getElementById("moonDark")
        if (dark.style.display == "none") {
            let rowBoxElements = document.getElementsByClassName('todo-row-box');
            for(let i = 0; i < rowBoxElements.length; i++){
                let str = rowBoxElements[i];
                str.style.backgroundColor = "#25273c";
                    } 
        }
    }
        // *********************completed()**************************
    function completed(index) {
        document.getElementById("completedLink").style.color="#6985f5";
        document.getElementById("renderLink").style.color="#777a92";
        document.getElementById("activeLink").style.color="#777a92";
        let allList ="";
        todos.forEach((todo,index) => {
            if (todo.done) {
                let rendermylist = `<div class="todo-row-box">
                <div class="todo-row">
                <div class="checkButton checkButtonTrue" type="checkbox" onclick="selected(${index})"></div>
                <span class="todo-titr-done">${todo.text}</span>
                </div>
                <button class="delete-icon" onclick="this.parentElement.style.display = 'none';"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path></svg></button>
                </div>`;   
                allList = allList + rendermylist;
            }
    });
    document.getElementById("todo-list").innerHTML = "";
    document.getElementById("todo-list").innerHTML = allList;
    let dark = document.getElementById("moonDark")
    if (dark.style.display == "none") {
        let rowBoxElements = document.getElementsByClassName('todo-row-box');
        for(let i = 0; i < rowBoxElements.length; i++){
            let str = rowBoxElements[i];
            str.style.backgroundColor = "#25273c";
                } 
    }
}
    // *********************clearCompleted()**************************
function clearCompleted() {
    let newList = [];
    newList = todos.filter(item => item.done === false)
    todos = newList;
    saved()
    render(todos)
}
    // *********************DARK/LIGHT MOOD**************************
    let turn = true;
    function switchTheme() {
        if (turn % 2 !== 0) {
            document.body.style.backgroundImage = "url('images/bg-desktop-dark.73e47dbb.jpg')";
            document.body.style.backgroundColor = "#161722";
            document.getElementById("moonDark").style.display = "none";
            document.getElementById("sunLight").style.display = "block";
            let footers = document.getElementsByTagName('footer');
            footers[0].style = 'background-color: rgb(37, 39, 60);';
            document.getElementById("list-input-box").style.backgroundColor = "#25273c";
            let rowBoxElements = document.getElementsByClassName('todo-row-box');
            for(let i = 0; i < rowBoxElements.length; i++){
                let str = rowBoxElements[i];
                str.style.backgroundColor = "#25273c";
                    }            
        } else {
            document.body.style.backgroundImage = "url('images/bg-desktop-light.3508d620.jpg')";
            document.body.style.backgroundColor = "#fff";
            document.getElementById("moonDark").style.display = "block";
            document.getElementById("sunLight").style.display = "none";
            let footers = document.getElementsByTagName('footer');
            footers[0].style = 'background-color: #fff;';
            document.getElementById("list-input-box").style.backgroundColor = "#fff";
            let elements = document.getElementsByClassName('todo-row-box');
            for(let i = 0; i < elements.length; i++){
                let str = elements[i];
                str.style.backgroundColor = "#fff";
                    }
        }
        turn = turn + true;
    }
    // *********************DRAG AND DROP**************************
    const dragArea = document.getElementById("todo-list");
    new Sortable(dragArea,{
        animation:350
    })