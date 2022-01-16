<template>
  <div v-if="!nclick">
      <h1>اینجا صفحه لاگین است</h1>
      <input type="text" v-model="username" placeholder="نام" class="mt-2"><br/>
      <input type="text" v-model="pass"  placeholder="پسوورد" class="mt-2"><br/>
     
      <button @click="loginuser" class="mt-2" >ورود</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
        
         username:'',
         pass:null,
        }
    },
    methods: {
        loginuser () {
            
            if(this.username=='hasanzade'&& this.pass==1234){
             this.nclick = true
             this.$router.push('/users')
            }
        }
    }

}
</script>

<style>

</style>