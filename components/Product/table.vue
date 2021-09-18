<template>
<div>
<table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
  <tr class="text-left border-b border-gray-300">
    <th class="px-4 py-3">Image</th>
    <th class="px-4 py-3">Name</th>
    <th class="px-4 py-3">Category</th>
    <th class="px-4 py-3">Unit</th>
    <th class="px-4 py-3">Description</th>
    <th class="px-4 py-3">Price</th>
    <th class="px-4 py-3">Quantity</th>
    <th class="px-4 py-3">Status</th>
    <th class="px-4 py-3">Action</th>
  </tr>
  <tr v-for="product in data" :key="product.id" class="bg-gray-700 border-b border-gray-600">
    <td class="px-4 py-3">
        <img
            :src="`${$axios.defaults.baseURL}${product.image}`"
            class="w-24 h-12 object-contain"
        />        
    </td>
    <td class="px-4 py-3">{{product.name}}</td>
    <td class="px-4 py-3">{{product.category}}</td>
    <td class="px-4 py-3">{{product.unit}}</td>
    <td class="px-4 py-3">{{product.description}}</td>
    <td class="px-4 py-3">{{product.price}}</td>
    <td class="px-4 py-3">{{product.quantity}}</td>
    <td class="px-4 py-3">{{product.status === 1 ? "active" : "UnActive"}}</td>
    <td class="px-4 py-3 flex justify-center items-center">
        <button @click="edit(product)" class="mr-3 text-blue-400 hover:text-blue-600 text-xl"> <i class="fas fa-edit"></i></button>
        <button @click="deleteProduct(product)" class="text-red-400 hover:text-red-600 text-xl" ><i class="fas fa-trash-alt"></i></button>
    </td>
  </tr>    

</table>
</div>
</template>

<script>
export default {
    data () {
        return {
            data: [],
            basePath: process.env.API_URL+'/api/'
        }
    },
   async created () {
            await this.$axios.get("/api/product").then((response) => {
            this.data = response.data.products
            
        })
        
    },

    methods: {
        async deleteProduct (product) {
            await this.$axios.delete("/api/product/"+product.id).then((response) => { })
            const index = this.data.indexOf(product)
            this.data.splice(index, 1)
            
        },

        edit (product) {
            $nuxt.$emit('onMyEvent', product)
        }
    }
}
</script>

<style>

</style>