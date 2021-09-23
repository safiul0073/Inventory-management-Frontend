<template>
<div>
<table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
  <tr class="text-left border-b border-gray-300">
    <th class="px-4 py-3">#</th>
    <th class="px-4 py-3">Name</th>
    <th class="px-4 py-3">Description</th>
    <th class="px-4 py-3">Action</th>
  </tr>
  <tr v-for="category in data" :key="category.id" class="bg-gray-700 border-b border-gray-600">
    <td class="px-4 py-3">{{category.id}}</td>
    <td class="px-4 py-3">{{category.name}}</td>
    <td class="px-4 py-3">{{category.description}}</td>
    <td class="px-4 py-3 flex flex-row ">
        <button @click="editCategory(category)" class="mr-3 text-blue-400 hover:text-blue-600 text-xl"> <i class="fas fa-edit"></i></button>
        <button @click="deleteCategory(category)" class="text-red-400 hover:text-red-600 text-xl" ><i class="fas fa-trash-alt"></i></button>
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
       this.getData()
               this.$nuxt.$on('AddCategoryCustomeEvent', () => {
                    
                    this.getData()
                    
        })
    },

    methods: {
        async getData () {
            await this.$axios.get("/api/category").then((response) => {
            this.data = response.data.categorys
                    
                })
        },
        async deleteCategory (category) {
             await this.$axios.delete("/api/category/"+category.id).then((response) => {
                    console.log(response)
                    
                })
            const index = this.data.indexOf(category)
            this.data.splice(index, 1)
        },

        editCategory (category) {
            $nuxt.$emit('onMyEvent', category)
        }
    }
}
</script>

<style>

</style>