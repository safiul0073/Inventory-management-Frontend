<template>
    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                <h3 class="font-bold pl-2">Dashboard</h3>
            </div>
        </div>

        <Grid/>
    </div>
</template>

<script>
import Grid from "~/components/Dashboard/grid.vue"
export default {
    
  middleware: 'authenticated',
    components: {
        Grid
    }
}
</script>
