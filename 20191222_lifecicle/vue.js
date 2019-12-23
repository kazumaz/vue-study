const vm = new Vue({
  el: "#app",
  data() {
   return {
     message: 'こんにちは'
   }
  },
  created() {
    console.log('vueインスタンス作成後')
    this.message = 'インスタンスが作成されました'
    
    let seconds = 1000
    setInterval(() => {
      console.log(`${seconds++}びょうけいか`)
    })
    
  },
  beforeMount() {
   console.log('マウント前')
  }
})
window.vm = vm

