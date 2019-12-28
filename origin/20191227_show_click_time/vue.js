const vm = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello, World!'
    }
  },
  methods: {
    change() {
      this.message = new Date().toLocaleString()
    }
  }
})


