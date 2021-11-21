<template>
  <div id="app">
    <v-app>
        <v-app-bar color="success" dark app>
          <div id=""><img alt="Vue logo" src="./assets/logo.svg">
          <v-toolbar-title>Vuetify</v-toolbar-title>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
          </div>
        </v-app-bar>

        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/page1">Page1</router-link> |
          <router-link to="/page2">Page2</router-link> 
        </div>

        <div class="container">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
        
        <v-footer color="secondary" dark app>
          <p>Vue.js </p>
          <p>｜@yhoshino sample</p>
        </v-footer>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 25px;
  padding-left: 20px;;
  background-color: #2c3e50;
  margin-top:60px;

  a {
    font-weight: bold;
    color: #e7e7e7;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
      font-size: 22px;   /* <--追加：active要素のみ効果 */
    }
  }
}

img{
  width: 50px;
  /* float:right; */
  position: absolute;
  right: 30px;
  top: 70px; 
  /* bottom: 0; */
  /* margin: auto; */
  /* height: 100px; */
}

/* 以下追加：トランジション(fade-in/out) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
