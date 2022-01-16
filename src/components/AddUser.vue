<template>
  <div>
      <input type="text" v-model.lazy="student.name" placeholder="نام" class="mt-2"><br/>
      <input type="text" v-model.lazy="student.family" placeholder="نام خانوادگی" class="mt-2"><br/>
      <input type="text" v-model.lazy="student.age" placeholder="سن" class="mt-2"><br/>
      <input type="text" v-model.lazy="student.address" placeholder="آدرس" class="mt-2"><br>
      <button @click="adduser" class="mt-2" >افزودن به لیست</button>

  </div>
</template>

<script>
export default {
    data(){
        return{
            
            student:{
                name:'',
                family:'',
                age:null,
                address:''
            }
        }
    },
    methods:{
        adduser(){
            const s={
                name:this.student.name,
                family:this.student.family,
                age:this.student.age,
                address:this.student.address
            }
            this.$emit('ghazanfar',s)


            
        },

        

    }
}
</script>


<style>

</style>