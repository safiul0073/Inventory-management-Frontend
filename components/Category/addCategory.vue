<template>
  <div class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div class="w-1/2 mx-auto pt-8">
      
        <div class=" py-2">
            <label for="" class=" font-bold text-lg mb-2 ">Name:</label>
            <input type="text" v-model="form.name" placeholder="Enter Category Name" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
        </div>
        <div class=" py-2 flex flex-col">
            <label for="" class=" font-bold text-lg mb-2 ">Description:</label>
            <textarea v-model="form.description" class="resize border rounded-md outline-none px-2 py-1 text-gray-700"></textarea>
        </div>
        <div class=" py-2 w-full ">
            <button @click="updateCategory" v-show="isUpdate" class="py-1 px-8 text-white bg-blue-900 rounded-full hover:bg-blue-600">Update</button>
            <button @click="storeCategory" v-show="!isUpdate" class="py-1 px-8 text-white bg-blue-900 rounded-full hover:bg-blue-600">Save</button>
        </div>

        
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isUpdate: false,
      form :{
        name: '',
        description: '',
        id: ''
      }
    }
  },

  methods: {
    fromReset () {
          this.form.name = '',
          this.form.description = '',
          this.form.id = ''
    },
    async storeCategory () {
        this.$axios.post('/api/category/', this.form).then((response) => {
          this.fromReset()
        }).then((response) => {
          this.fromReset()
          $nuxt.$emit('AddCategoryCustomeEvent')
        })
    },
    async updateCategory () {
        this.$axios.put(`/api/category/${this.form.id}`, {
          "method": "POST",
          "name": this.form.name,
          "description": this.form.description
        }).then((response) => {
          this.fromReset()
          this.isUpdate = !this.isUpdate;
          $nuxt.$emit('AddCategoryCustomeEvent')
        })
        
    },

  },
    created() {
        this.$nuxt.$on('onMyEvent', (category) => {
                    this.isUpdate = !this.isUpdate;
                    this.form.name = category.name;
                    this.form.description = category.description
                    this.form.id = category.id;
                    
        })
        this.$nuxt.$on('cliningUpForm', () => {
                    this.fromReset()          
        })
    },
}
</script>

<style>

</style>