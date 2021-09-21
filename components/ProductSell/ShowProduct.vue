<template>
<div>
<div class="rounded-t-lg m-1 w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div>
        <button @click="submitProduct" class="px-4 py-2 float-right bg-blue-900 hover:bg-blue-700 rounded-full m-4">Save</button>
    </div>
    <div class="w-1/2 mx-auto pt-8">
      
        <div class=" py-2">
            <label for="" class=" font-bold text-lg mb-2 ">Name:</label>
            <input type="text" v-model="form.name" placeholder="Enter Customer Name" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
        </div>
        <div class=" py-2">
            <label for="" class=" font-bold text-lg mb-2 ">Phone:</label>
            <input type="text" v-model="form.phone" placeholder="Enter Customer Phone" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
        </div>


        
    </div>

    <div class="w-full">
        <table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
            <tr class="text-left border-b border-gray-300">
                <th class="px-4 py-3">Image</th>
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Category</th>
                <th class="px-4 py-3">Unit</th>
                <th class="px-4 py-3">price</th>
                <!-- <th class="px-4 py-3">Quantity</th> -->
                
            </tr>
            <tr  v-for="product in tableData" :key="product.id"  class=" cursor-pointer border-b border-gray-600 ">
                <td class="px-4 py-3 ">
                    <img
                        :src="`${$axios.defaults.baseURL}${product.image}`"
                        class="w-24 h-12 object-contain"
                    />        
                </td>
                <td class="px-4 py-3">{{product.name}}</td>
                <td class="px-4 py-3">{{product.category}}</td>
                <td class="px-4 py-3">{{product.unit}}</td>
                <td class="px-4 py-3">{{product.price}}</td>
                <!-- <td class="px-4 py-3">
                    <div>
                        <button @click="increesQty">+</button>
                        <input type="text" v-model="qty">
                        <button @click="decreesQty">-</button>
                    </div>
                </td> -->
                

            </tr>    

        </table>
    </div>
</div>
</div>
</template>

<script>
export default {
    data () {
        return {
            selectedProduct: [],
            tableData: '',
            qtyId: '',
            qty:0,
            form: {
                name: '',
                phone: '',
                invoiceNo: '',
                products:[]
            }
        }
    },

    created() {
                this.$nuxt.$on('gettingselectedProduct', (products) => {
                    
                    this.tableData = products;
                    products.map((product, i) =>{
                        this.form.products[i] = product.id;
                    })
                     
                })
    },

    methods: {
      submitProduct () {
          this.form.invoiceNo = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
          
          this.$axios.post('/api/product-sell', this.form).then((response) => {
              this.form.name = ''
              this.form.phon = ''
              this.form.invoiceNo = ''
              this.form.products = null
          })

          $nuxt.$emit("cliningUp")
      }
    },

    increesQty () {
        this.qty ++
    },

    decreesQty () {
        this.qty --
    }
}
</script>

<style>

</style>