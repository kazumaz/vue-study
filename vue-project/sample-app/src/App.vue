<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ホーム</router-link> |
      <router-link to="/about">このサイトについて</router-link>
      <!-- <router-link to="{ name: 'home' }">Home</router-link> |
      <router-link to="{ name: 'about' }">About</router-link> -->
      <!-- 名前付きでリンク先を指定するメリットとして、各ルーターでパスを変えても、各ルーターリンクのパスを変える必要がないからこちらのほうが無難 -->
    </div>
    <router-view/>
    <!-- 全てのページに共通するようなグローバルメニューなどはrouter-viewの外側に記載する -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
