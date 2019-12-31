<template>
  <div class="todo">
    <form v-on:submit.prevent="addNewTodo">
  <label for="new-todo">Add a todo</label>
  <input
    v-model="newTodoText"
    id="new-todo"
    placeholder="E.g. Feed the cat"
  >
  <button>Add</button>
</form>
    <h2>Todos:</h2>
    <ol>
  <li v-for="todo in todos" :key="todo.id">
    <label>
      <input type="checkbox"
        v-on:change="toggle(todo)"
        v-bind:checked="todo.done">

      <del v-if="todo.done">
        {{ todo.text }}
      </del>
      <span v-else>
        {{ todo.text }}
      </span>
    </label>
    <span @click="removeToDo(index)" class="command">[☓]</span>
  </li>
</ol>
  </div>
</template>


<script>

export default {
  name: 'ToDo',
  data () {
    return {
      todos: [
        { id: 1, text: "Learn JavaScript", done: false },
        { id: 2, text: "Learn Vue", done: false },
        { id: 3, text: "Play around in JSFiddle", done: true },
        { id: 4, text: "Build something awesome", done: true }
      ],
      nextTodoId: 5
    }
  },
  methods: {
    toggle: function(todo){
      todo.done = !todo.done
    },
    addNewTodo: function(){
      this.todos.push({
      id: this.nextTodoId++,
      text: this.newTodoText,
      done: false
      })
    },
    removeToDo: function(todo){
      if(confirm('Are you sure?')) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
