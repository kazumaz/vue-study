Vue.component('user-list', {
  data() {
    return {
      users: [
        { id: 1, name: 'ユーザー１'},
        { id: 2, name: 'ユーザー2'},
        { id: 3, name: 'ユーザー3'}
      ]
    }
  },
  template: `
  <ul>
   <li v-for="user in users" :key="user.id">
      {{ user.name }}
   </li>
  `
})

const vm = new Vue({
  el: '#app'
})

