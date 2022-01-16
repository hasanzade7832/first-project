<template>
  <div>
    <AddUser @ghazanfar="getList"/>
     

  </div>
</template>

<script>
import AddUser from '../components/AddUser.vue';



export default {

components:{
    AddUser,
  
},
data(){
    return{

        userList:['salam'],
        p: 'Hello',
        selectedComponent: 'Home'
    }
},
methods:{
   getList(sos){
       this.userList.push(sos)
       console.log(this.userList)
   },
   goadduser(){
    //    Router.push('/users');
    this.selectedComponent = 'AddUser'
   },
   goshowlist(){
       this.selectedComponent='Showlist'
       
   }
},

}
</script>

<style>

</style>