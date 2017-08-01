import {observable, autorun} from 'mobx';


let todoStore = observable({
    /* 一些观察的状态 */
    todos: [],

    /* 推导值 */
    get completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
});


autorun(function() {

    console.log("Completed %d of %d items",
        todoStore.completedCount,
        todoStore.todos.length
    );
});


todoStore.todos[0] = {
    title: "Take a walk",
    completed: false
};