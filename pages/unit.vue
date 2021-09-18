<template>
      <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
              <div class="flex flex-row justify-between">
                <h3 class="font-bold pl-2">Unit</h3>
                <button @click="showAddUnit" class="hover:text-blue-400">{{this.isTable ? "Add Unit" : "Show"}}</button>
              </div>
            </div>
        </div>

        <Table v-show="isTable"/>
        <Add v-show="!isTable" />
    </div>
</template>

<script>
import Table from "~/components/Unit/table.vue"
import Add from "~/components/Unit/addUnit.vue"
export default {
    data () {
        return {
            isTable: true,
            data: [],
        }
    },
    components: {
        Table,
        Add
    },

    created() {
        
        this.$nuxt.$on('onMyEvent', (category) => {
                    
                    this.isTable = !this.isTable;
                    
        })
        this.$nuxt.$on('AddUnitCustomeEvent', () => {
                    
                    this.isTable = !this.isTable;
                    
        })
    },

    methods: {
        showAddUnit () {
            this.isTable = !this.isTable;
            $nuxt.$emit('cliningUpForm')
        }
    }
}
</script>

<style>

</style>