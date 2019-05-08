<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { NavBar } from 'vant';
import Header from '@/components/Header.vue';
@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.flex{
  display: flex;
}
</style>