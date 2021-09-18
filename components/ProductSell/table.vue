<template>
<div class="rounded-t-lg m-1 main-content w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 xl:w-1/3 p-2">
            <div class=" py-2 flex flex-row justify-center items-center">
                <select v-model="categoryName" @change="searchWithCategory" class=" ml-3 bg-blue-900 outline-none hover:bg-blue-800 rounded-md py-3" id="">
                    <option selected value="All">All Categoyrs</option>
                    <option v-for="category in categorys" :key="category.id" :value="category.name">{{category.name}}</option>
                </select>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 p-2">
            <div class=" flex flex-row justify-center items-center py-2">
                <input type="text" class="py-3 mr-3 px-2 rounded outline-none text-gray-700" v-model="searchInput" placeholder="name or code">
                <button class="py-3 px-3 flex rounded-2xl  bg-blue-800 hover:bg-blue-900" @click="onSearch" >Search Product</button>
            </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 p-2">
            <div class="flex flex-row justify-center items-center py-2">
                <label class="py-3 px-4" for="">Selected Product: </label>
                <input type="text" v-model="countProduct" disabled  class="text-center text-blue-800 bg-blue-100 rounded-2xl w-16 py-3">
            </div>
        </div>
    </div>

    <table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
        <tr class="text-left border-b border-gray-300">
            <th class="px-4 py-3">Image</th>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Category</th>
            <th class="px-4 py-3">Unit</th>

        </tr>
        <tr @click="selectedItem(product)" v-for="product in tableData" :key="product.id" :class="isSelectedId.find((hello) => hello.id === product.id)? 'bg-gray-900': 'bg-gray-700'" class=" cursor-pointer border-b border-gray-600 hover:bg-gray-900">
            <td class="px-4 py-3 ">
                <img
                    :src="`${$axios.defaults.baseURL}${product.image}`"
                    class="w-24 h-12 object-contain"
                />        
            </td>
            <td class="px-4 py-3">{{product.name}}</td>
            <td class="px-4 py-3">{{product.category}}</td>
            <td class="px-4 py-3">{{product.unit}}</td>

        </tr>    

</table>
</div>
</template>

<script>
export default {
    data () {
        return {
            data: [],
            tableData:[],
            categorys: [],
            categoryName:'',
            isSelected: false,
            countProduct:0,
            searchInput:'',
            isSelectedId:new Array(),
            

        }
    },
   async created () {
            await this.$axios.get("/api/product").then((response) => {
            this.data = response.data.products
            this.tableData = this.data
               
            })

            await this.$axios.get("/api/category").then((response) => {
            this.categorys = response.data.categorys
            })

                    this.$nuxt.$on('cliningUp', () => {
                    this.countProduct = 0
                    // console.log(this.isSelectedId.length)
                        this.isSelectedId = new Array()
                        // for (let i=0; i<this.isSelectedId.length+1; i++) {
                        //     this.isSelectedId.pop()
                        //     }
                    
        })
    },

    methods: {
        selectedItem (category) {
            let findId = null
            
            this.isSelectedId.forEach((hello) => {
                if(hello.id === category.id){
                    findId = 1
                     
                }
            })
            if (findId === null) {
                
                this.countProduct++
                this.isSelectedId.push(category)
                $nuxt.$emit("isCounted", this.countProduct, this.isSelectedId)
            }else{
                this.countProduct--
                this.isSelectedId.splice(this.isSelectedId.indexOf(category), 1)
                $nuxt.$emit("isCounted", this.countProduct,this.isSelectedId)
            }
            
        },

        searchWithCategory () {
            if (this.categoryName === "All") {
                this.tableData = this.data
            }else{
                this.tableData = this.data.filter((products) => products.category === this.categoryName)
            }
             
        },


        onSearch () {
            this.tableData = this.data.filter((products) => products.name === this.searchInput || products.code === this.searchInput)
        },


    }
}
</script>

<style>

</style>