"use strict"

    function TodoController() {
        const vm = this; //always do this!
        vm.tasks = [
            {task: "Study Angular", completed: false},
            {task: "Print study guide", completed: false},
            {task: "Hang out with Kristen", completed: true},
            {task: "Pet the cats", completed: true}
        ];
    }

angular.module("todoApp").controller("TodoController", TodoController);