let newTaskField = document.getElementById('new-task-field');
let addButton = document.getElementById('add-button');

let pendingWindow = document.getElementById('pending-task');
let pendingTasks = [];
let completedWindow = document.getElementById('completed-task');
let completedTasks = [];

addButton.addEventListener('click', function () {
    if (newTaskField.value == '' || newTaskField.value == ' ')
    {
        console.log('NO TEXT')
    }
     else {
        console.log('test');
    let newItemWindow = document.createElement('div');
    newItemWindow.setAttribute('class', 'list-item');
    pendingTasks.push(newItemWindow);

    let newItemCheckBox = document.createElement('input');
    newItemCheckBox.type = 'checkbox';
    newItemCheckBox.id = 'checkbox';

    let newItemText = document.createElement('h1');
    newItemText.textContent = newTaskField.value;

    let newItemRemoveButton = document.createElement('button');
    newItemRemoveButton.textContent = 'Remove';
    newItemRemoveButton.setAttribute('class', 'remove-button');
    

    pendingWindow.appendChild(newItemWindow);
    newItemWindow.appendChild(newItemCheckBox);
    newItemWindow.appendChild(newItemText);
    newItemWindow.appendChild(newItemRemoveButton);

    newItemCheckBox.addEventListener('click', function() {
        if(newItemCheckBox.parentNode.parentNode == pendingWindow)
        {
            completedWindow.appendChild(newItemCheckBox.parentNode);
        }
        else
        {
            pendingWindow.appendChild(newItemCheckBox.parentNode);
        }
        console.log(newItemCheckBox.parentNode);
        console.log(pendingWindow);
    })

    newItemRemoveButton.addEventListener('click', function () {
        newItemRemoveButton.parentNode.parentNode.removeChild(newItemRemoveButton.parentNode);
    })
    console.log(pendingTasks);
    newTaskField.value = '';
    console.log(pendingTasks[pendingTasks.length - 1].childNodes);
     }
    
})