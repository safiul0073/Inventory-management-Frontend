<template>
      <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-white">
              <div class="flex flex-row justify-between items-center">
                <h3 class="font-bold pl-2">Sell The Product</h3>
                <button v-show="productCount > 0" @click="showAddProduct" class="bg-gray-600 text-gray-100 hover:bg-gray-900 px-2 py-2 rounded-full ml-2">{{this.isTable ? "Go" : "Back"}}</button>
              </div>
            </div>
        </div>

            <Table v-show="isTable"/>
            <ShowProduct v-show="!isTable"/>


    </div>
    
</template>

<script>
import Table from "~/components/ProductSell/table.vue"
import ShowProduct from "~/components/ProductSell/ShowProduct.vue"

export default {
    data () {
        return {
            isTable: true,
            data: [],
            productCount: 0,
        }
    },
    components: {
    ShowProduct,
    Table
    },

    created() {
        
        this.$nuxt.$on('cliningUp', () => {
                    this.productCount = 0
                    this.isTable = !this.isTable;
                    
        })
        this.$nuxt.$on('isCounted', (productCount, selectedProduct) => {
                    
                    this.productCount = productCount;
                    this.data = selectedProduct
                    
        })
    },

    methods: {
        showAddProduct () {
            this.isTable = !this.isTable;
            $nuxt.$emit("gettingselectedProduct", this.data)
        }
    }
}
</script>

<style>

</style>