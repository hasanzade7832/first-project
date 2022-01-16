<template>
<div>
  <Headers/>
  <Showlist @toparent="getData"/>
  
    {{appName}}
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from './components/Headers.vue';
import Showlist from './components/Showlist.vue'


export default {
  name: "app",
  components:{
    Headers,
    Showlist
  },
  data() {
    return {
      appName: ''
    }
  },
  methods: {
    getData(name){
      this.appName = name
    }
  }
}
</script>

<style>

</style>
