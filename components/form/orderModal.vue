<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="false">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            

                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                      
                            <table class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
                                <tr class="text-left border-b border-gray-300">

                                    <th class="px-4 py-3">Name</th>
                                    <th class="px-4 py-3">Rate</th>
                                    <th class="px-4 py-3">Price</th>
                                    <th class="px-4 py-3">Quantity</th>
                                    

                                </tr>
                                <tr v-for="product in data" :key="product.id" class="bg-gray-700 border-b border-gray-600">

                                    <td class="px-4 py-3">{{product.product_name}}</td>
                                    <td class="px-4 py-3">{{product.rate}}</td>
                                    <td class="px-4 py-3">{{product.quantity}}</td>
                                    <td class="px-4 py-3">{{product.amount}}</td>

                                   
                                </tr>    

                                </table>

                        </div>
                    </div>
                    
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button @click="closeModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-primary hover:bg-primary hover:text-white  shadow-sm px-4 py-2 bg-white text-primary text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                    
                    </div>
                </div>
        </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false,
            data: []
        }
    },

    created() {
                this.$nuxt.$on('showingOrder', (items) => {
                    
                    this.data = items
        })

    },

    methods: {
        closeModal () {
            $nuxt.$emit("closeModal")
        }
    }
}
</script>

<style>

</style>