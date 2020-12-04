<template>
  <div id="app">
    <app-header/>
    <div id="main" class="container">
      <router-view></router-view>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#main {
  min-height: 400px;
}

.container {
  max-width: 1300px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
