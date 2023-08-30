<script>
import AppMain from './pages/ProjectList.vue';
import AppHeader from './components/AppHeader.vue'

export default {
  components:{
    AppMain,
    AppHeader
  }
}
</script>

<template>
  <div>
    <AppHeader/>
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>