<template>
<div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
          
          <Navber/>

        <div class="flex flex-col md:flex-row">

                <Sidebar />
                
                <Nuxt />

            </div>
    
</div>

<!-- <div v-else>
  <Login/>
</div> -->
</template>

<script>
import Login from "~/pages/auth/login.vue"
import Navber from "~/components/Header/Navber.vue"
import Sidebar from "~/components/Sidebar/sidebar.vue"

export default {
  middleware: 'authenticated',
    components: {
        Navber,
        Sidebar,
        Login
    }
}
</script>

<style>

</style>