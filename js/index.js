
const input = document.querySelector('#text')
const addBtn = document.querySelector('#add')
const listTask = document.querySelector('.taskContainer')

//function qui ajoute une task dans la liste
function addtask(event) {
    event.preventDefault()
    if (input !== '') {
        const inputTask = input.value

        const newTask = document.createElement('li')
        newTask.innerHTML =
            `<input type="checkbox" name="" id="" >
        <p>${inputTask}</p>
        <button class="delete">X</button>`
        newTask.className = 'task'
        listTask.append(newTask)

        input.value = ''
    }
}
// ajout de la nouvelle task au click de 'Ajout'
addBtn.addEventListener('click', addtask)

// changement de style au click du filtre

// initialisation des variables qui vont me servir au style
const toutes = document.querySelector('#toutes')
const faire = document.querySelector('#faire')
const faites = document.querySelector('#faites')
const filtersButton = document.querySelectorAll('.filter:nth-of-type(1)')

filtersButton.forEach((filterButton) => {
    filterButton.style.background = 'rgb(92, 137, 221)';
    filterButton.style.color = 'white';
});


function style(element) {
    element.style.removeProperty('background')
    element.style.removeProperty('color')
}

function addStyle(element) {
    element.style.background = 'rgb(92, 137, 221)'
    element.style.color = 'white'
}

function resetStyle() {
    style(toutes)
    style(faire)
    style(faites)
}

toutes.addEventListener('click', () => {
    resetStyle()
    addStyle(toutes)
})

faire.addEventListener('click', () => {
    resetStyle()
    addStyle(faire)
})

faites.addEventListener('click', () => {
    resetStyle()
    addStyle(faites)
})

// filtrer les tasks en fonction de l'etat de la checkbox
const checkboxes = document.querySelectorAll("input[type='checkbox']")

function filterToutes() {
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('.task').style.display = 'flex'
        } else {
            checkbox.closest('.task').style.display = 'flex'
        }
    })
}

function filterFaire() {
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('.task').style.display = 'none'
        } else {
            checkbox.closest('.task').style.display = 'flex'
        }
    })
}

function filterFaites() {
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            checkbox.closest('.task').style.display = 'none'
        } else {
            checkbox.closest('.task').style.display = 'flex'
        }
    })
}

//filtre les tasks
toutes.addEventListener('click', filterToutes)
faire.addEventListener('click', filterFaire)
faites.addEventListener('click', filterFaites)



// Delete task
const deletes = document.querySelectorAll('.delete')
function deleteTask(event) {
    const task = event.target.closest('.task')
    task.remove()
}

deletes.forEach(delet => delet.addEventListener('click', deleteTask))












