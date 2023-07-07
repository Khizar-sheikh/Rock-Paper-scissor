function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() !== '') {
      var task = document.createElement('li');
      var taskText = document.createTextNode(taskInput.value);
      task.appendChild(taskText);
  
      var removeButton = document.createElement('button');
      removeButton.className = 'remove-button';
      removeButton.innerText = 'Remove';
  
      removeButton.addEventListener('click', function() {
        this.parentNode.remove();
      });
  
      task.appendChild(removeButton);
      taskList.appendChild(task);
      taskInput.value = '';
    }
  }
  