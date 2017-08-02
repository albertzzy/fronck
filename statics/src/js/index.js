import {observable, computed,autorun} from 'mobx';


/*let todoStore = observable({
    todos: [],

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

todoStore.todos[0].completed = true;*/


/*const map = observable.map({ key: "value"});
map.set("key", "new value");


autorun(function(){
    console.log(map.get('key'));

})*/


class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}

const line = new OrderLine();
console.log("price" in line); // true
console.log(line.hasOwnProperty("price")); // true, 现在所有的属性都定义在实例上了










