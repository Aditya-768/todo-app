const inputBox = document.getElementById("input-box")
const addBtn = document.getElementById("add-btn")
const area = document.querySelector("#area")
let count = document.getElementById("count")
const container = document.querySelector(".container")
let hasTasksRecord = false
let heading
taskCount = 0

addBtn.addEventListener('click', addTodo)
function addTodo() {
        if(inputBox.value != '' && area.value !=''){
            taskCount += 1
            count.textContent = taskCount
            const titleValue = inputBox.value
            const detailsValue = area.value
            const title = document.createElement("h4")
            const removeBtn = document.createElement("button")
            const details = document.createElement('div')
            const todo = document.createElement("div")
    
            title.innerHTML =  titleValue
            title.classList.add("title")

            details.innerHTML = detailsValue
            details.classList.add("detail")
            removeBtn.textContent = "Remove"
            removeBtn.classList.add("remove-btn")
            
            todo.classList.add("todo")

            if (hasTasksRecord === false){
                let h1 = document.createElement("h1");
                h1.textContent = "TODO TASKS RECORD";
                h1.classList.add("record");
                container.appendChild(h1);
                hasTasksRecord = true;
                heading = h1
            }
            
            todo.appendChild(title)
            inputBox.value = ''
            todo.appendChild(details)
            area.value = ''
          
            todo.appendChild(removeBtn)
            container.appendChild(todo)
           
            removeBtn.addEventListener('click', () => {
                taskCount -=1
                if(taskCount === 0){
                    heading.textContent = ''
                    heading.classList.remove('record')
                }
                count.textContent = taskCount
                todo.remove()
         
            });
       }
            else{
            alert("Please fill both inputs boxes!")
            }
    }