"use strict"

    function TodoController() {
        const vm = this; //always do this!
        vm.tasks = [
            {task: "Incomplete to-dos have a button!", completed: false},
            {task: "Completed to-dos have a strikethrough!", completed: true}
        ];
        vm.addTask = function(newTask) {
            vm.tasks.push(angular.copy(newTask));
            vm.newTodo = {};
    }
        vm.removeTask = function(index) {
            vm.tasks.splice(index, 1);
        }
        vm.completeTask = function(todo) {
            todo.completed = !todo.completed;
        }
}
angular.module("todoApp").controller("TodoController", TodoController);