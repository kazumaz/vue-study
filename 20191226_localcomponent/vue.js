const ListTitle = {
  template: `
    <h2>ユーザーリスト</h2>
  `
}
const UserList = {
   component: {
   'list-title': ListTitle
},
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
  <div>
   <list-title></list-title>
    <ul>
     <li v-for="user in users" :key="user.id">
       {{ user.name }}
     </li>
  </div>
  `
}

const vm = new Vue({
  el: '#app',
  components: {
    'user-list': UserList
  }
})

