<template>
  <div>HTML</div>
</template>

<script>
export default {
  data(){
    return{
      name:'ali'
    }
  },
  created(){
    this.$emit('toparent', this.name)
  }

}
</script>

<style>

</style>