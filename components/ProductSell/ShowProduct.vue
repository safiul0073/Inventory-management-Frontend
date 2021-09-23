<template>
<div>
<div class="rounded-t-lg m-1 w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div class="flex justify-between items-center">
        <div class=" ml-3">
            <label for="">Total Amount:</label>
            <input v-model="totalAmount" type="text" disabled class="text-center text-white">
        </div>
        <button @click="submitProduct" class="px-4 py-2 float-right bg-blue-900 hover:bg-blue-700 rounded-full m-4">Save</button>
    </div>
    <div class="w-1/2 mx-auto pt-8">
      
        <div class=" py-2">
            <label :class="valError.customer_name? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Name:</label>
            <input :class="valError.customer_name ? 'border border-red-700 rounded-full ': ''" type="text" v-model="form.customer_name" placeholder="Enter Customer Name" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.customer_name" class="text-red-800 font-small py-1">{{valError.customer_name ? valError.customer_name[0] : ""}}</p>
        </div>
        <div class=" py-2">
            <label :class="valError.customer_phone? 'text-red-800': 'text-gray-100'" for="" class=" font-bold text-lg mb-2 ">Phone:</label>
            <input :class="valError.customer_phone ? 'border border-red-700 rounded-full ': ''" type="text" v-model="form.customer_phone" placeholder="Enter Customer Phone" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.customer_phone" class="text-red-800 font-small py-1">{{valError.customer_phone ? valError.customer_phone[0] : ""}}</p>
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
                <th class="px-4 py-3">Quantity</th>
                
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
                <td class="px-4 py-3">
                   
                   <div v-if="editedId === product.id && !isEdit" class="flex justify-center items-center">
                        <p >{{product.qty}}</p>
                        <button @click="chanEditOption(product.id)" class="p-2 rounded-full bg-blue-700 text-white ml-2">Edit</button>
                   </div>
                
                    <div v-else-if="editedId === product.id && isEdit" class="flex justify-center items-center">
                        <input  type="number" min="1" @change="changeQuantity(product.id)" class="text-gray-800 w-8" v-model="qty">
                        <button @click="chanEditOption(product.id)" class="p-2 rounded-full bg-blue-700 text-white ml-2">save</button>
                   </div>
                   <div v-else class="flex justify-center items-center">
                        <p >{{product.qty}}</p>
                        <button @click="chanEditOption(product.id)" class="p-2 rounded-full bg-blue-700 text-white ml-2">Edit</button>
                   </div>
                    
                </td>
                

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
            valError: {},
            selectedProduct: [],
            tableData: '',
            qtyId: '',
            isEdit:false,
            totalAmount: 0,
            editedId: '',
            qty: '',
            form: {
                customer_name: '',
                customer_phone: '',
                invoiceNo: '',
                pro:[],
                
            }
        }
    },

    created() {
                this.$nuxt.$on('gettingselectedProduct', (products) => {
                    this.totalAmount = 0
                    this.tableData = products;
                    
                    products.map((product, i) =>{
                        Object.assign(product, {qty:1});
                        this.totalAmount += product.price
                        
                    })
                })
    },

    methods: {
    clearErrors () {
      for (var variableKey in this.valError){
          if (this.valError.hasOwnProperty(variableKey)){
              delete this.valError[variableKey];
          }
      }
    },
      submitProduct () {
          this.form.invoiceNo = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
            this.pro = this.tableData
                this.tableData.map((product, i) =>{
                        
                        this.form.pro[i] = product
                        
                    })
                   
          this.$axios.post('/api/product-sell', this.form).then((response) => {
              this.form.customer_name = ''
              this.form.customer_phone = ''
              this.form.invoiceNo = ''
              this.form.products = null
              $nuxt.$emit("cliningUp")
          }).catch((error) => {
              this.valError = error.response.data.errors
            })

          
      },
        changeQuantity (id) {
            
            this.tableData.find((item, index) => {
                if (item.id === id){
                    if ( item.qty > this.qty) {
                         let qt = item.qty - this.qty
                         this.totalAmount -= item.price * qt
                     }else if ( item.qty < this.qty) {
                            let qt = this.qty - item.qty
                            this.totalAmount += item.price * qt
                     }
                    item.qty = this.qty
                }
            })
        },

        chanEditOption (id) {
            this.editedId = id;
            this.isEdit = !this.isEdit;
            this.tableData.find((item, index) => {
                if (item.id === id){
                    this.qty = item.qty 
                }
            })
        }
    },

 
}
</script>

<style>

</style>