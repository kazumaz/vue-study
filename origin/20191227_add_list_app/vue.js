const vm = new Vue({
  el: '#app',
  data() {
    return {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    message: 'nothing'
    }
  },
  methods: {
    add() {
      this.todos.push({ text: this.message})
    }
  }
})


