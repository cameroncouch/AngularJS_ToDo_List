"use strict"

    function TodoController() {
        const vm = this; //always do this!
        vm.tasks = [
            {task: "Study Angular", completed: false},
            {task: "Print study guide", completed: false},
            {task: "Hang out with Kristen", completed: true},
            {task: "Pet the cats", completed: true}
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