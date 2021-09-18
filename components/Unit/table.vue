<template>
<div>
<table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
  <tr class="text-left border-b border-gray-300">
    <th class="px-4 py-3">#</th>
    <th class="px-4 py-3">Name</th>
    <th class="px-4 py-3">Code</th>
    <th class="px-4 py-3">Action</th>
  </tr>
  <tr v-for="unit in data" :key="unit.id" class="bg-gray-700 border-b border-gray-600">
    <td class="px-4 py-3">{{unit.id}}</td>
    <td class="px-4 py-3">{{unit.name}}</td>
    <td class="px-4 py-3">{{unit.code}}</td>
    <td class="px-4 py-3 flex flex-row ">
        <button @click="edit(unit)" class="mr-3 text-blue-400 hover:text-blue-600 text-xl"> <i class="fas fa-edit"></i></button>
        <button @click="deleteUnit(unit)" class="text-red-400 hover:text-red-600 text-xl" ><i class="fas fa-trash-alt"></i></button>
    </td>
  </tr>    

</table>
</div>
</template>

<script>
export default {
    data () {
        return {
            data: []
        }
    },
   async created () {
            await this.$axios.get("/api/unit").then((response) => {
            this.data = response.data.units
            
        })
    },

    methods: {
        async deleteUnit (unit) {
             await this.$axios.delete("/api/unit/"+unit.id).then((response) => {
                    
                })
            const index = this.data.indexOf(unit)
            this.data.splice(index, 1)
        },

        edit (unit) {
            $nuxt.$emit('onMyEvent', unit)
        }
    }
}
</script>

<style>

</style>