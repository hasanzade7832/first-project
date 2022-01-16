<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <router-link class="nav-link" exact-active-class="active" to="/" >home</router-link>
      </li>
      <li>
        <router-link class="nav-link" exact-active-class="active" to="/users">users</router-link>
      </li>
      <li>
      <router-link class="nav-link" exact-active-class="active" to="/posts" >posts</router-link>
      </li>
      <li>
      <router-link class="nav-link" exact-active-class="active"  to="/login" >ورود</router-link>
      </li>
       
      
    </ul>
   </nav>
  </div>
</template>

<script>
export default {
name:"header",
};

</script>

<style>
.exact-active-class{background-color:  red;}

    

</style>