<template>
<div>
<table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
  <tr class="text-left border-b border-gray-300">

    <th class="px-4 py-3">Invoice No</th>
    <th class="px-4 py-3">Name</th>
    <th class="px-4 py-3">Phone</th>
    <th class="px-4 py-3">total Amount</th>
    <th class="px-4 py-3">Items</th>

  </tr>
  <tr v-for="(product, index) in data" :key="index" class="bg-gray-700 border-b border-gray-600">

    <td class="px-4 py-3">{{product.invoice_no}}</td>
    <td class="px-4 py-3">{{product.name}}</td>
    <td class="px-4 py-3">{{product.phone}}</td>
    <td class="px-4 py-3">{{product.amount}}</td>

    <td class="px-4 py-3 flex justify-center items-center">
        <button @click="showitems(product.items)" class="mr-3 text-blue-400 hover:text-blue-600 text-xl"> <i class="far fa-list-alt"></i></button>
        
    </td>
  </tr>    

</table>
 <orderModal v-if="isShowingModal" :items="items"/>
</div>
</template>

<script>
import orderModal from "~/components/Modal/orderModal.vue"
export default {
    components: {
        orderModal
    },
    data () {
        return {
            data: [],
            items: [],
            
            isShowingModal: false
        }
    },
   async created () {
            await this.$axios.get("/api/product-sell").then((response) => {
            this.data = response.data.data
            
            
        })
            await this.$axios.get("/api/sell-items").then((response) => {
                                this.items = response.data.sell_items
                                
                            })

                this.$nuxt.$on('closeModal', () => {
                    
                    this.isShowingModal = !this.isShowingModal;
                    
        })
        
    },

    methods: {
        showitems (items) {
            this.isShowingModal = !this.isShowingModa
            $nuxt.$emit("showingOrder",items)
            this.items = items
        }
    }
}
</script>

<style>

</style>