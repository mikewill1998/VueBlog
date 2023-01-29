<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPart from './components/HeaderPart.vue'
export default {
  components: {
    'app-header':HeaderPart
  },
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
